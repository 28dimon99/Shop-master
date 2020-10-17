
import {connect} from "react-redux";
import {setPhone} from "../../redux/phoneReducer";
import MenuComponent from "./Menu";
import uniqBy from 'lodash/uniqBy';




const mapStateToProps = (state)=>({
    phones: state.phoneReducer.items,
    isReady: state.phoneReducer.isReady,
    totalPrice: state.cardReducer.items.reduce((total, phone) => total + phone.price, 0 ),
    count: state.cardReducer.items.length,
    items: uniqBy(state.cardReducer.items, o => o.id)


});

const mapDispatchToProps = (dispatch) => ({
    setPhone: phones => dispatch(setPhone(phones))
});



export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);