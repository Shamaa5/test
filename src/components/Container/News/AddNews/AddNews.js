import React from 'react';

function AddNews(props) {
    function handleAddNews () {

    }
    return (
        <div>
            <div className="add-news">
                <input type="text" placeholder="Название новости"/>
            </div>
            <div className="add-news">
                <textarea placeholder="Описание новости" className="add-news-text"/>
            </div>
            <button onClick={handleAddNews}>
                Отправить
            </button>
        </div>
    );
}

export default AddNews;