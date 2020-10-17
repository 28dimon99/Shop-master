
const ADD_TO_CARD = "ADD_TO_CARD";
const REMOVE_FROM_CARD = "REMOVE_FROM_CARD";

let initialState = {
    items: []
};

export default (state = initialState, action)=>{
    switch (action.type){
        case ADD_TO_CARD:
            return{
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            };

        case REMOVE_FROM_CARD:
            return{
                ...state,
                items: state.items.filter(o => o.id != action.payload)
            };
        default :
            return state;

    }
}
export const addToCard = (obj) => ({
    type: ADD_TO_CARD,
    payload: obj
})

export const removeToCard = (id) => ({
    type: REMOVE_FROM_CARD,
    payload: id
})
