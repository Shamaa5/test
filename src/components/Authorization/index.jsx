import React, {useState} from "react";
import styles from "./avtorization.module.css";
import {useDispatch, useSelector} from "react-redux";
import {signOut} from "../../redux/actions";
import {Route} from "react-router-dom";


function Authorization(props) {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')

function handleSignIn() {

}
function handleSignOut() {
  dispatch(signOut)
}
function loginValid(e) {

 users.find(v => {
  if (setLogin(e.target.value) === v.login) {
    return true
  }
  return 'неверный логин'
})

}

  return (
    <div className={styles["auth-container"]}>
      <div className={styles['auth-box']}>
        <div className={styles.input}>
          <input type="login" placeholder="Ваш логин"
          value={login}
          onChange={loginValid}
          required={true}/>
        </div>
        <div className={styles.input}>
          <input type="password" placeholder="ваш пароль"
          required={true}/>
        </div>
        <div className={styles['button-add']}>
          <button onClick={handleSignIn} className={styles.in}>Войти</button>
        </div>
        <div className={styles['button-quit']}>
          <button className={styles.quit}
          onClick={handleSignOut}
          >
              Выйти из системы

          </button>
        </div>
      </div>
    </div>
  );
}

export default Authorization;
