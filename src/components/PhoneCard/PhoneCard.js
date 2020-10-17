import React from "react";
import {Image, Card, Icon, Button} from "semantic-ui-react";



const PhoneCardComponent = (phone) =>{
    const {brand, model, image, price, addToCard, addedCount} = phone;
    return(
        <Card>
            <Image src={image} />
            <Card.Content>
                <Card.Header>Phone</Card.Header>
                <Card.Meta>
                    <span className='date'>{brand}</span>
                </Card.Meta>
                <Card.Description>
                    {model}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='rub' />
                    {price}
                </a>
            </Card.Content>
            <Button onClick={addToCard.bind(this, phone)}>
                Добавить в корзину{addedCount > 0 && `(${addedCount})`}</Button>
        </Card>
    )
};



export default PhoneCardComponent