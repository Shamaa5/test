const initialState = {
    news: [
        {id: 1,
         text: "пожалуйста хватит",
            name: 'очень прошу',
            date: new Date(),
            confirmed: true,
        }
    ],
    guest: true,
    admin: false,
    user: false,
    loading: false,

}
export const reduser = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
 }

