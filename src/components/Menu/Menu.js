import React from "react" ;
import {Menu, List, Popup, Image, Button } from 'semantic-ui-react'




const CardComponent = ({model, image, id, removeToCard}) =>{
    return(
        <List  selection divided verticalAlign='middle'>
            <List.Item>
                <List.Content floated='right'>
                    <Button onClick={removeToCard.bind(this, id)} color="red">Удалить</Button>
                </List.Content>
                <Image avatar src={image} />
                <List.Content>{model}</List.Content>
            </List.Item>
        </List>
    )
}
const MenuComponent = ({totalPrice, count, items}) => {
    return (
        <Menu>
            <Menu.Item>
                Магазин мобильных телефонов
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item>
                    Итого : &nbsp; <b>{totalPrice}</b> &nbsp;ua.
                </Menu.Item>

            <Popup trigger={
                <Menu.Item>
                Корзина : <b>{count}</b>
            </Menu.Item>
            }
                   content = {items.map(phone => <CardComponent {...phone}/>)}
                   on="click"
                   hideOnScroll
                />

            </Menu.Menu>
        </Menu>
    )
};

export default MenuComponent
