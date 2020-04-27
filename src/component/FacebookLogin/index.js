import React, { cloneElement, useCallback, useEffect, useState } from 'react';
import { string, bool, func } from 'prop-types';

const FacebookLogin = ({
    children,
    appId,
    version,
    scope,
    returnScopes,
    scopeData,
    callback,
    handleError,
    xfbml,
    cookie
}) => {
    const [loadedInitFB, setLoadedInitFB] = useState(false);
    const [loadedSDK, setLoadedSDK] = useState(false);

    const getFBUserData = useCallback(
        ({ authRes }) => {
            window.FB.api(`/me?fields=${scopeData}`, (response) => {
                callback({
                    authRes,
                    userData: response
                });
            });
        }, [scopeData, callback]
    );

    const statusChangeCallback = useCallback(
        (response) => {
            try {
                if (response.status === 'connected') {
                    getFBUserData({ authRes: response });
                } else {
                    window.FB.login((loginRes) => {
                        if (loginRes.status === 'connected') {
                            getFBUserData({ authRes: loginRes });
                        }
                    }, { scope, return_scopes: returnScopes });
                }
            } catch (err) {
                handleError(err);
            }
        }, [scope, returnScopes, getFBUserData, handleError]
    );

    const checkLoginState = useCallback(
        () => {
            window.FB.getLoginStatus((res) => {
                statusChangeCallback(res);
            });
        }, [statusChangeCallback]
    );

    const initFB = useCallback(
        () => {
            window.fbAsyncInit = () => {
                window.FB.init({
                    appId,
                    cookie,
                    xfbml,
                    version
                });
                setLoadedInitFB(true);
            };
        }, [appId, version, cookie, xfbml]
    );

    useEffect(() => {
        const loadSDK = () => {
            ((d, s, id) => {
                const fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                const js = d.createElement(s);
                js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk.js';
                fjs.parentNode.insertBefore(js, fjs);
                setLoadedSDK(true);
            })(document, 'script', 'facebook-jssdk');
        };

        const initFbAndLoadSdk = () => {
            initFB();
            loadSDK();
        };
        if (document.getElementById('facebook-jssdk')) {
            setLoadedInitFB(true);
            setLoadedSDK(true);
        }
        initFbAndLoadSdk();
    }, [initFB]);

    return (
        <>
            {cloneElement(children, {
                onClick: checkLoginState,
                disabled: !loadedInitFB && !loadedSDK
            })}
        </>
    );
};

FacebookLogin.propTypes = {
    version: string,
    scope: string,
    returnScopes: bool,
    scopeData: string,
    appId: string,
    callback: func,
    handleError: func,
    cookie: bool,
    xfbml: bool
};

FacebookLogin.defaultProps = {
    version: 'v6.0',
    scope: 'public_profile,email',
    returnScopes: true,
    scopeData: 'id,email,name', // res for FB.api('/me')
    cookie: true,
    xfbml: true
};

export default FacebookLogin;
