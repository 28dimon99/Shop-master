
import {connect} from "react-redux";
import orderBy from 'lodash/orderBy';
import {setPhone} from "../../redux/phoneReducer";
import {setFilter, setSearchQuery} from "../../redux/filterReducer";
import App from "./App";
import {addToCard, removeToCard} from "../../redux/cardReducer";

//фильтрация
const sortBy = (phoneReducer, filterBy) => {
    switch (filterBy) {
        case 'priceHigh':
            return orderBy(phoneReducer, 'price', 'desc');
        case 'priceLow':
            return orderBy(phoneReducer, 'price', 'asc');
        case 'model':
            return orderBy(phoneReducer, 'model', 'desc');
        default:
            return phoneReducer
    }
};
//Если сортировка прошла фильтруем товары
const filterPhones = (phones, searchQuery) =>
    phones.filter(
        o =>
            o.brand.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            o.model.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
    );
//Поиск товаров
const searchPhones = (phones, filterBy, searchQuery) => {
    return sortBy(filterPhones(phones, searchQuery), filterBy)
};

const mapStateToProps = (state)=>({
    phones: state.phoneReducer.items && searchPhones(
        state.phoneReducer.items, state.filterReducer.filterBy, state.filterReducer.searchQuery),
    isReady: state.phoneReducer.isReady
});

const mapDispatchToProps = (dispatch) => ({
    setPhone: phones => dispatch(setPhone(phones)),
    setFilter: filter => dispatch(setFilter(filter)),
    setSearchQuery: value => dispatch(setSearchQuery(value)),
    addToCard: obj => dispatch(addToCard(obj)),
    removeToCard: id => dispatch(removeToCard(id)),
});



export default connect(mapStateToProps, mapDispatchToProps)(App);