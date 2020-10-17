import React, {Component} from 'react';
import '../../App.css';
import * as axios from "axios/index";
import {Container, Card} from "semantic-ui-react";
import MenuContainer from "../Menu/MenuContainer";
import FilterContainer from "../Filter/FilterContainer";
import PhoneCardContainer from "../PhoneCard/PhoneCardContainer";






class App extends Component {
    componentDidMount() {
        const {setPhone} = this.props;
        axios.get('http://localhost:3000/phones').then(response => {
            setPhone(response.data)
        });
    }


    render() {
        const {phones, isReady} = this.props;
console.log(this.props);
        return (
            <Container>
                    <MenuContainer/>
                    <FilterContainer/>
                <Card.Group itemsPerRow={4}>
                    {!isReady
                        ? 'Загрузка...'
                        :
                        phones && phones.map((phone, i) => (
                        <PhoneCardContainer key={i} {...phone}/>
                    ))}
                </Card.Group>
            </Container>
        );
    }
}


export default App