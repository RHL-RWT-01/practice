const initialState = {movies:[{
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    duration: "2h 22min",
    genre: ["Drama"]
}]};

const movieReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_MOVIES":
            return {...state};
        default:
            return state;
    }
}
export default movieReducer;