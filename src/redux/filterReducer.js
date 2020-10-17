const SET_FILTER = "SET_FILTER";
const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";

let initialState ={
    searchQuery: '',
    filterBy : 'all'
};

export default (state= initialState, action) =>{
    switch(action.type) {
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload,
            };
        case SET_FILTER:
            return {
                ...state,
                filterBy: action.payload,
            };
        default:
            return state;
    }
}

//action SET_SEARCH_QUERY
export const setSearchQuery = (value) => ({
    type: SET_SEARCH_QUERY,
    payload: value
});
//action SET_FILTER
export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter
});