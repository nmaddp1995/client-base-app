import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "antd";

import { URL_LOGIN } from "../../App";
import { selectUser } from "../../module/selector/user";
import { logoutSaga } from "../../module/action/user";
import styles from "./styles.module.scss";

const Home = () => {
  const user = useSelector(selectUser);
  const isLogged = user.logged;
  const name = user.name;
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(logoutSaga());
  }, [dispatch]);

  const fakeApiCallForLazyLoad = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("");
        resolve({
          name: "Ringo Starr",
        });
      }, 5000);
    });
  };
  fakeApiCallForLazyLoad().then((res) => {
    console.log("res", res);
  });

  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        {!isLogged ? (
          <Link to={URL_LOGIN} className={styles["login-btn"]}>
            Welcome to Toinayangi.click
          </Link>
        ) : (
          <div>
            {`Hi ${name}, `}
            <Button
              type="link"
              onClick={onLogout}
              className={styles["logout-btn"]}
            >
              Logout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
