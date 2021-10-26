import React, {useState} from "react";
import { useSelector } from "react-redux";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

import logo from './../../assets/logo.svg'
import pizza from './../../assets/pizza_640px.jpg'
import frango from "./../../assets/food-frango_640px.jpg"
import bife from "./../../assets/food-bife_640px.jpg"
import bread from "./../../assets/breads_640px.jpg"

import { Container, Logo, Search, Wrapper, CarouselTitle, Carousel, ModalTitle, ModalContent } from "./styled";
import { Card, Modal, RestaurantCard, Map, Loader } from "../../componentes";


const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [placeId, setPlaceId] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
    const {restaurants, restaurantSelected} = useSelector((state) => state.restaurants);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    function handleKeyPress(e){
        if(e.key === 'Enter'){
            setQuery(inputValue);
        };
    };

    function handleOpenModal(placeId){
        setPlaceId(placeId);
        setModalOpened(true);
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
                    onKeyPress={handleKeyPress}
                    onChange={(e) =>  setInputValue(e.target.value)}/>
                </TextField>
                {restaurants.lenght > 0?(
                    <>
                <CarouselTitle>Na sua Área</CarouselTitle>
                <Carousel {...settings}>
                    {restaurants.map((restaurant)=>(
                        <Card
                            key={restaurant.place_id}
                            photo={restaurant.photo ? restaurant.photo[0].getUrl(): restaurants}
                            title={restaurant.name}
                        />
                    ))}
                    <Card photo={bread} title="Padaria"/>
                    <Card photo={bife} title="Churracaria"/>
                    <Card photo={frango} title=""/>
                    <Card photo={frango} title=""/>
                    <Card photo={pizza} title="Pizzaria"/>
                </Carousel>
                </>
                ):(
                    <Loader/>
                )}
                </Search>
                {restaurants.map((restaurant) => (
                <RestaurantCard onClick={()=> 
                    handleOpenModal(restaurant.place_Id)}
                    restaurant={restaurant} />
                ))};
            </Container>
            <Map query={query} placeId={placeId} />
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                <ModalContent>{restaurantSelected?.opening_hours?.open_now? 'Aberto agora':'Fechado neste momento'}</ModalContent>
            </Modal>
        </Wrapper>
    );
};

export default Home;