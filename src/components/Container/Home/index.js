import React from 'react';
import {useSelector} from "react-redux";

function Home() {
    const admin = useSelector(state => state.admin)
    const auth = useSelector(state => state.auth)


    return (
        <div className="greetings">
             <h1>Привет, {!auth ? 'Guest': '' } {admin ? 'Admin' : 'Vania'} </h1>
        </div>
    );
}

export default Home;