import {connect} from "react-redux";
import {addToCard, removeToCard} from "../../redux/cardReducer";
import PhoneCardComponent from "./PhoneCard";





const mapStateToProps = (state)=>({
   addedCount:
       state.cardReducer.items.reduce((count, phone)=> count + (phone.id === state.id ? 1 : 0),0),
});

const mapDispatchToProps = (dispatch) => ({
    addToCard: obj => dispatch(addToCard(obj)),
    removeToCard: id => dispatch(removeToCard(id)),
});



export default connect(mapStateToProps, mapDispatchToProps)(PhoneCardComponent);
