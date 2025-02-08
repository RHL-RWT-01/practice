export const getMatches=()=>{
    return {type: "GET_MATCHES"};
}
export const getMatchSuccess=(data)=>{
    return {type: "GET_MATCHES_SUCCESS", payload: data};
}
export const getMatchFailure=()=>{
    return {type: "GET_MATCHES_FAILURE"};
}


