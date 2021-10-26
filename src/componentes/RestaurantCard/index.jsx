import React from "react";

import { Address, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from "./styles";
import ReactStars from 'react-rating-stars-component';

import pizza from './../../assets/pizza_640px.jpg'

const RestaurantCard = ({restaurant, onClick}) =>( 
    <Restaurant onClick={onClick}>
        <RestaurantInfo>
            <Title>{restaurant.name}</Title>
            <ReactStars count={5} isHalf value={4} edit={false} activeColor='#e7711c'/>
            <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={restaurant.photo ? restaurant.photo[0].getUrl(): pizza} alt="Foto do Restaurante" />
    </Restaurant>
);

export default RestaurantCard;