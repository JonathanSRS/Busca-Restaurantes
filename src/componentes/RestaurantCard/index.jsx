import React from "react";

import { Address, Restaurant, RestaurantInfo, Title } from "./styles";

const RestaurantCard = () => 
<Restaurant>
    <RestaurantInfo>
        <Title>Nome do Restaurante</Title>
        <p>avaliação</p>
        <Address>endereço</Address>
    </RestaurantInfo>
</Restaurant>;

export default RestaurantCard;