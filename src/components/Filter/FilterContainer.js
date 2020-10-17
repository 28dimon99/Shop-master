
import {setFilter, setSearchQuery} from "../../redux/filterReducer";
import {connect} from "react-redux";
import Filter from "./Filter";



const mapStateToProps = (state)=>({
filterBy: state.filterReducer.filterBy
});

const mapDispatchToProps = (dispatch) => ({
    setFilter: filter => dispatch(setFilter(filter)),
    setSearchQuery: value => dispatch(setSearchQuery(value))
});



export default connect(mapStateToProps, mapDispatchToProps)(Filter);