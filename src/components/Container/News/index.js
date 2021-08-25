import React from 'react';
import AddNews from "./AddNews/AddNews";

function News() {
    return (
        <div className="news">
            <div className="news-area">
                <input type="search" className="news-search" placeholder="Поиск новостей"/>
            </div>
            <div className="news-area">
                список новостей
            </div>
            <AddNews/>
        </div>
    );
}

export default News;