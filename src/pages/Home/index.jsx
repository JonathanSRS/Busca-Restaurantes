import React, {useState} from "react";
import Slider from 'react-slick';
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

import logo from './../../assets/logo.svg'
import pizza from './../../assets/pizza_640px.jpg'
import frango from "./../../assets/food-frango_640px.jpg"
import bife from "./../../assets/food-bife_640px.jpg"
import bread from "./../../assets/breads_640px.jpg"

import { Container, Logo, Search, Wrapper, CarouselTitle, Carousel } from "./styled";
import { Card, Modal, RestaurantCard, Map } from "../../componentes";


const Home = () => {
    const [inputValue, setInputValue] = useState('')
    const [modalOpened, setModalOpened] = useState(false)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    return(
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo Restaurante"/>
                    <TextField
                    label='Pequisar'
    
                    outlined
                    trailingIcon={<MaterialIcon role="button" icon="search"/>}
                >
                    <Input
                    value={inputValue}
                    onChange={(e) =>  setInputValue(e.target.value)}/>
                </TextField>
                <CarouselTitle>Na sua Área</CarouselTitle>
                <Carousel {...settings}>
                    <Card photo={bread} title="Padaria"/>
                    <Card photo={bife} title="Churracaria"/>
                    <Card photo={frango} title=""/>
                    <Card photo={frango} title=""/>
                    <Card photo={pizza} title="Pizzaria"/>
                </Carousel>
                </Search>
                <RestaurantCard />
            </Container>
            <Map />
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/>
        </Wrapper>
    );
};

export default Home;