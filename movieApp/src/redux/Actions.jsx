export const getMovies=()=>{
    return{
        type:"GET_MOVIES"
    }
}

export const getMovieDetails=(id)=>{
    return{
        type:"GET_MOVIE_DETAILS",
        payload:id
    }
}