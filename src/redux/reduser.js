const initialState = {
  news: [
    {
      id: 1,
      text: "пожалуйста хватит",
      name: "очень прошу",
      date: new Date(),
      confirmed: true,
    },
  ],
  users: [
    {
      name: "Murad ji est",
      id: 0,
      adminPass: 12345,
      adminEmail: "admin@taxi.com",
    },
    {
      name: "Admin",
      id: 1,
      userPass: 12345,
      adminEmail: "vania@email.com",
    },
  ],
  guest: false,
  admin: true,
  user: false,
  loading: false,
  auth: true,
};
export const reduser = (state = initialState, action) => {
  switch (action.type) {
    case 'admin/singIn':
      return {
        ...state,
        auth: true,
        user: false,
        admin: true,
        guest: false,
        loading: false
      }
    case 'userSing':
      return {
        ...state,
        admin: false,
        auth: true,
        user: true,
        guest: false,
        loading: false
      }
    case 'newComment/add':
      return {
        ...state,
        news: action.payload

      }

    default:
      return state;
  }
};
