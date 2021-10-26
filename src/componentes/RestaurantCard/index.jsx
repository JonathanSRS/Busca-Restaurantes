import React from "react";

import { Address, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from "./styles";
import ReactStars from 'react-rating-stars-component';

import pizza from './../../assets/pizza_640px.jpg'

const RestaurantCard = () => 
<Restaurant>
    <RestaurantInfo>
        <Title>Nome do Restaurante</Title>
        <ReactStars count={5} isHalf value={4} edit={false} activeColor='#e7711c'/>
        <Address>endereço</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={pizza} />
</Restaurant>;

export default RestaurantCard;