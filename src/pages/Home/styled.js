import Slider from "react-slick";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
`;
export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    padding: 1em;
`;

export const Logo = styled.img`
    margin-bottom: 15px;
`;

export const Map = styled.div`
    background: red;
    width:500px;
`;

export const Carousel = styled(Slider)`
    .slick-slide{
        margin-right: 1em;
    }
`;

export const CarouselTitle = styled.h1`
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    font-family: ${(props) => props.theme.fonts.regular};
    margin: 1em 0;
`;