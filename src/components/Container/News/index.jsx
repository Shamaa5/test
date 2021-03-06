import React from "react";
import AddNews from "./AddNews";
import { useDispatch, useSelector } from "react-redux";
import styles from "./news.module.css";
import { confirmComment, setFilterText } from "../../../redux/actions";

function News() {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  const admin = useSelector((state) => state.admin);
  const users = useSelector((state) => state.users);
  const auth = useSelector(state => state.auth)

  const filteredNews = news
      .filter((value) => value.text.indexOf(filter) > -1)
      .filter(value => {
      if (!auth) {
          return value.confirmed === false
      } else {
          return true
      }
    })


  const handleChangeConfirmation = (id) => {
    dispatch(confirmComment(id));
  };
  const handleFindNew = (e) => {
    dispatch(setFilterText(e.target.value));
  };
  return (
    <div className={styles.news}>
      <div className={styles["news-search"]}>
        <input
          type="search"
          className={styles["news-search-input"]}
          placeholder="Поиск новостей"
          value={filter}
          onChange={handleFindNew}
        />
      </div>
      <div className={styles["news-comments-container"]}>
        <div>
          {filteredNews.map((value) => {
            return (
              <div
                className={
                  value.confirmed
                    ? styles["news-created-comment-confirmed"]
                    : styles["news-created-comment-no-confirmed"]
                }
                key={Math.random() * 1.5}
              >
                <div>
                  <h3>{value.name}</h3>
                </div>
                <div>
                  <i>{value.text}</i>
                </div>
                <div>
                  <i>{value.date}</i>
                </div>
                <div className={!admin ? styles.none : ""}>
                  Подтверждение новости
                  <input
                    type="checkbox"
                    checked={!!value.confirmed}
                    onChange={() => handleChangeConfirmation(value.newsId)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <AddNews />
    </div>
  );
}

export default News;
