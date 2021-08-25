import React from 'react';
import {useSelector} from "react-redux";

function Home() {
    const user = useSelector(state => state.guest)
    return (
        <div className="greetings">
             <h1>Привет, {user} </h1>
        </div>
    );
}

export default Home;