import React, { useState } from "react";

import { Address, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from "./styles";
import ReactStars from 'react-rating-stars-component';

import pizza from './../../assets/pizza_640px.jpg'
import Skeleton from "../Skeleton";

const RestaurantCard = ({restaurant, onClick}) =>{ 
    const [ImageLoaded, setImageLoaded] = useState(false);
    return(

        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <Title>{restaurant.name}</Title>
                <ReactStars count={5} isHalf value={4} edit={false} activeColor='#e7711c'/>
                <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
            </RestaurantInfo>
            <RestaurantPhoto 
            ImageLoaded={ImageLoaded}
            src={restaurant.photo ? restaurant.photo[0].getUrl(): pizza} 
            onLoad={() => setImageLoaded(true)}
            alt="Foto do Restaurante" />
            {!setImageLoaded && <Skeleton width="100px" height="100px" />}
        </Restaurant>
    );
};

export default RestaurantCard;