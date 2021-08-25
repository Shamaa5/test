import React from 'react';
import AddNews from "./AddNews/AddNews";
import {useSelector} from "react-redux";

function News() {
    const news = useSelector(state => state.news)
    return (
        <div className="news">
            <div className="news-area">
                <input type="search" className="news-search" placeholder="Поиск новостей"/>
            </div>
            <div className="news-area">
                {news.map(value => {
                    return <div key={Math.random()}>
                        <div>{value.name}</div>
                        <div>{value.text}</div>
                        <div></div>

                    </div>
                })}
            </div>
            <AddNews/>
        </div>
    );
}

export default News;