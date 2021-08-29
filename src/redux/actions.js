export const loadNews = (newsId, userId, text, name, date, confirmed) => {
  return {
    type: "newComment/add",
    payload: { newsId, userId, text, name, date, confirmed },
  };
};

export const confirmComment = (id) => {
  return {
    type: "admin/confirm/news",
    payload: id,
  };
};

export const adminSign = () => {
  return {
    type: "admin/singIn",
  };
};

export const userSing = () => {
  return {
    type: "user/singIn",
  };
};
export const signOut = () => {
  return {
    type: "user/singOut",
  };
};

export const setFilterText = (find) => {
  return {
    type: "filter/text",
    payload: find,
  };
};
