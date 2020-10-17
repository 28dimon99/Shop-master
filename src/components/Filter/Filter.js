import React from "react";
import {Input, Menu} from "semantic-ui-react";



const Filter = ({setFilter, filterBy, searchQuery, setSearchQuery}) => {
    return(
            <Menu secondary>
                <Menu.Item active={filterBy === 'all'} onClick={setFilter.bind(this,'all')}>Все</Menu.Item>
                <Menu.Item active={filterBy === 'priceHigh'} onClick={setFilter.bind(this,'priceHigh')}>Цена Дорогие</Menu.Item>
                <Menu.Item active={filterBy === 'priceLow'} onClick={setFilter.bind(this,'priceLow')}>Цена Дешевые</Menu.Item>
                <Menu.Item active={filterBy === 'model'} onClick={setFilter.bind(this,'model')}>По моделям</Menu.Item>
                <Input icon="search" onChange={e => setSearchQuery(e.target.value)} value={searchQuery} placeholder="Введите запрос..."/>
            </Menu>
        )

};
export default Filter