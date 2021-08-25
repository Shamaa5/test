import React from 'react';
// import {useDispatch} from "react-redux";

function AddNews() {
    // const dispatch = useDispatch();

    function handleAddNews (e) {
        // dispatch('news/send/')
    }
    return (
        <div className='news-create-field'>
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