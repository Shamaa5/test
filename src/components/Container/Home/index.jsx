import React from 'react';
import {useSelector} from "react-redux";
import styles from "./home.module.css"

function Home() {
    const admin = useSelector(state => state.admin)
    const auth = useSelector(state => state.auth)


    return (
        <div className={styles.greetings}>
             <h1>Привет, {!auth ? 'Guest': admin && auth ? 'Admin' : 'Vania' }  </h1>
        </div>
    );
}

export default Home;