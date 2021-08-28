const initialState = {
  news: [
    {
      newsId: 0,
      userId: 0,
      text: "пожалуйста хватит",
      name: "очень прошу",
      date: "13.12.12",
      confirmed: true,
    },
    {
      NewsId: 1,
      UserId: 1,
      text: "работай сволочь",
      name: "сверстай этот шлак",
      date: "14.12.12",
      confirmed: false,
    },
  ],
  users: [
    {
      name: "Admin",
      role: "admin",
      id: 0,
      Password: 12345,
      Email: "admin@taxi.com",
    },
    {
      role: "user",
      name: "Ванька",
      id: 1,
      Password: 12345,
      Email: "vania@email.com",
    },
  ],
  admin: true,
  user: false,
  auth: true,
};
export const reduser = (state = initialState, action) => {
  switch (action.type) {
    case "admin/singIn":
      return {
        ...state,
        auth: true,
        user: false,
        admin: true,
        loading: false,
      };
    case "userSing":
      return {
        ...state,
        admin: false,
        auth: true,
        user: true,
        loading: false,
      };
    case "newComment/add":
      return {
        ...state,
      };
    case "admin/confirm/news":
      return  {
        ...state,
      }
    default:
      return state;
  }
};
