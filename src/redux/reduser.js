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
      login: "Admin",
      id: 0,
      Password: 12345,
    },
    {
      login: "Ванька",
      id: 1,
      Password: 12345,
    },
  ],
  admin: true,
  user: false,
  auth: true,
  filter: '',
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
        news: [...state.news, action.payload]
      };
    case "admin/confirm/news":
      return {
        ...state,
        news: state.news.map((v) => {
          if (v.newsId === action.payload) {
            return {
              ...v,
              confirmed: !v.confirmed,
            }
          }
          return v
        })
      }
    case 'user/singOut':
      return {
        ...state,
        auth: false,
        user: false,
        admin: false
      }
    case 'filter/text':
      return {
        ...state,
        filter: action.payload
      }
    default:
      return state;
  }
};
