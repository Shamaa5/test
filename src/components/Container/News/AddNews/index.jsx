import React, { useState } from "react";
import { useSelector } from "react-redux";
import { loadNews } from "../../../../redux/actions";
import { useDispatch } from "react-redux";
import styles from './addNews.module.css'

function AddNews() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const admin = useSelector((state) => state.admin);
  const user = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const confirmed = false;
  const date = new Date().toLocaleTimeString();
  const id = useSelector((state) => state.news.id + 1);
  const addName = (e) => {
    setName(e.target.value);
  };
  const addText = (e) => {
    setText(e.target.value);
  };
  function handleAddNews() {
    if (text.length > 0 && name.length > 0) {
      dispatch(loadNews(id, text, name, confirmed, date));
    } else {
      alert("Поля ввода пустые");
    }
  }

  if (admin || user) {
    return (
      <div className={styles['news-create-field']}>
          <div>
        <div className={styles["add-news"]}>
          <input
            type="text"
            placeholder="Название новости"
            value={name}
            onChange={addName}
          />
        </div>
        <div className={styles["add-news"]}>
          <textarea
            placeholder="Описание новости"
            value={text}
            onChange={addText}
          />
        </div>
        <div className={!admin ? styles.none : ''}>
          <div> подтвердить новость</div>
          <div>
            <input type="checkbox"/>
          </div>
        </div>
        <button onClick={handleAddNews}>Отправить</button>
          </div>
      </div>
    );
  }

  if (!auth) {
    return (
      <div>
        <h1>Вы должны быть авторизированны для добавления комментария</h1>
      </div>
    );
  }
}

export default AddNews;
