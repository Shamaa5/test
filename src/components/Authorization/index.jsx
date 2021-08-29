import React, {useEffect, useState} from "react";
import styles from "./avtorization.module.css";
import { useDispatch} from "react-redux";
import {adminSign, signOut, userSing} from "../../redux/actions";
import { Link } from "react-router-dom";

function Authorization() {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [loginDirty, setLoginDirty] = useState(false);
  const [passDirty, setPassDirty] = useState(false);
  const [loginError, setLoginError] = useState("Неверный логин");
  const [passError, setPassError] = useState("Неверный пароль");
  const [formValid, setFormValid] = useState(false)
  const user = {login: 'Vania', pass: 1234}
  const admin = {login: 'Admin', pass: 12345}


  useEffect(() => {
    if (loginError || passError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [loginError, passError])

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "login":
        setLoginDirty(true);
        break;
      case "pass":
        setPassDirty(true);
        break;

    }
  };
  const loginHandler = (e) => {
  setLogin(e.target.value)
   setLoginError('')


  };
  const passHandler = (e) => {
 setPass(e.target.value)
    setPassError('')
  };
  const handleSignOut = () => {
    dispatch(signOut());
  };
  function handleSignIn(e) {
    e.preventDefault()
    if (login === user.login && parseInt(pass) === user.pass) {
      return dispatch(userSing())
    }
    if (login === admin.login && parseInt(pass) === admin.pass ) {
      return dispatch(adminSign())
    }
  }

  console.log(login === user.login && parseInt(pass) === user.pass)
  console.log(pass)

  return (
    <div className={styles["auth-container"]}>
      <form>
        <Link to="/">
          <div className={styles.return}>X</div>
        </Link>
        <h1>Войти</h1>
        {loginDirty && loginError && (
          <div style={{ color: "red" }}>{loginError}</div>
        )}
        <input
          type="login"
          name="login"
          placeholder="Ваш логин"
          value={login}
          onChange={loginHandler}
          onBlur={blurHandler}
        />

        {passDirty && passError && (
          <div style={{ color: "red" }}>{passError}</div>
        )}
        <input
          type="password"
          name="pass"
          placeholder="Ваш пароль"
          value={pass}
          onChange={passHandler}
          onBlur={blurHandler}
        />
        <button onClick={handleSignIn} className={styles.in} disabled={!formValid}>
          Войти
        </button>
        <button className={styles.quit} onClick={handleSignOut}>
          Выйти из системы
        </button>
      </form>
    </div>
  );
}

export default Authorization;
