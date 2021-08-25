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
        name: 'Vania',
      id: 0,
      adminPass: 12345,
      adminEmail: "admin@email.com",
    },
    {
        name: 'Admin',
      id: 1,
      userPass: 12345,
      adminEmail: "vania@email.com",
    },
  ],
  guest: false,
  admin: false,
  user: true,
  loading: false,
  auth: true,
};
export const reduser = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
