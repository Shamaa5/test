export const loadNews = (id, text, confirmed, date) => {
  return {
    type: "newComment/add",
    payload: { id, text, confirmed, date, }
  };
};

export const confirmComment = (id) => {
  return {
    type: "admin/confirm/news",
    payload: id
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
