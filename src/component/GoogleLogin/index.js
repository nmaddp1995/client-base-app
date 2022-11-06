// import React, { cloneElement } from 'react';

// let auth2;

// const GoogleLogin = ({
//     children,
//     clientId,
//     scope
// }) => {

//     const onGoogleLogin = () => {
//         window.gapi.load('auth2', () => {
//             // Retrieve the singleton for the GoogleAuth library and set up the client.
//             auth2 = window.gapi.auth2.init({
//                 client_id: '118917814463-gsqn8lqqf8nesh5virc8hpummn7ln2uj.apps.googleusercontent.com',
//                 cookiepolicy: 'single_host_origin'
//                 // Request scopes in addition to 'profile' and 'email'
//                 // scope: 'additional_scope'
//             });
//             attachSignin(document.getElementById('customBtn'));
//           });
//     }

//     return (
//         <>
//             {cloneElement(children, {
//                 onClick: onLoginGoogle
//                 // disabled: !loadedInitFB && !loadedSDK
//             })}
//         </>
//     )
// }