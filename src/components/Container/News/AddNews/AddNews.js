import React, { useState } from "react";
import { useSelector } from "react-redux";
import { loadNews } from "../../../../redux/actions";
import { useDispatch } from "react-redux";

function AddNews() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const admin = useSelector((state) => state.admin);
  const user = useSelector((state) => state.user);

  function handleAddNews(e) {
    dispatch(loadNews);
  }
  const [name, setName] = useState();
    const [text, setText] = useState();

  if (auth && admin) {
    return (
      <div className="news-create-field">
        <div className="add-news">
          <input
            type="text"
            placeholder="Название новости"
            value={name}
            onChange={setName}
          />
        </div>
        <div className="add-news">
          <textarea placeholder="Описание новости" className="add-news-text" value={text} onChange={}/>
        </div>
        <div>
          <div> подтвердить новость</div>
          <div>
            <input type="checkbox" />
          </div>
        </div>
        <button onClick={handleAddNews}>Отправить</button>
      </div>
    );
  } else if (user) {
    return (
      <div className="news-create-field">
        <div className="add-news">
          <input type="text" placeholder="Название новости" />
        </div>
        <div className="add-news">
          <textarea placeholder="Описание новости" className="add-news-text" />
        </div>
        <button onClick={handleAddNews}>Отправить</button>
      </div>
    );
  } else if (!auth) {
    return (
      <div>
        <h1>Вы должны быть авторизированны для добавления комментария</h1>
      </div>
    );
  }
}

export default AddNews;
