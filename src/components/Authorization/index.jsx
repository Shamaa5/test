import React from "react";
import styles from "./avtorization.module.css";


function Authorization(props) {
  return (
    <div className={styles["auth-container"]}>
      <div>
        <div className={styles.input}>
          <input type="email" placeholder="example@memail.com" />
        </div>
        <div className={styles.input}>
          <input type="password" placeholder="ваш пароль" />
        </div>
        <div className={styles['button-add']}>
          <button>Войти</button>
        </div>
        <div className={styles['button-quit']}>
          <button>Выйти</button>
        </div>
      </div>
    </div>
  );
}

export default Authorization;
