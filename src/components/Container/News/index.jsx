import React from "react";
import AddNews from "./AddNews";
import { useDispatch, useSelector } from "react-redux";
import styles from "./news.module.css";
import { confirmComment } from "../../../redux/actions";

function News() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  const admin = useSelector((state) => state.admin);
  const handleChangeConfirmation = (id) => {
    dispatch(confirmComment(id));
  };
  return (
    <div className={styles.news}>
      <div className={styles["news-search"]}>
        <input
          type="search"
          className={styles["news-search-input"]}
          placeholder="Поиск новостей"
        />
      </div>
      <div className={styles["news-comments-container"]}>
        <div>
          {news.map((value) => {
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
                  <h2>{value.name}</h2>
                </div>
                <div>{value.text}</div>
                <div>{value.date}</div>
                <div className={!admin ? styles.none : ''}>
                  <input
                    type="checkbox"
                    checked={!!value.confirmed}
                    onClick={() => handleChangeConfirmation(value.newsId)}
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
