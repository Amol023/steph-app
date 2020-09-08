import React from 'react';
import { ContentContainer, MenuItems, TopShelf, Headline, Container, TitleContainer, MenuContainer } from './styles';

const Homepage = () => {
    return (
        <Container>
            <TopShelf />
            <TitleContainer>
                <Headline>
                    Stephanie Kitson
                </Headline>
            </TitleContainer>
            <MenuContainer>
                <MenuItems>About</MenuItems>
                <MenuItems>Concerts</MenuItems>
                <MenuItems>Pictures</MenuItems>
                <MenuItems>Gallery</MenuItems>
                <MenuItems>Contact</MenuItems>
            </MenuContainer>
            <ContentContainer />
        </Container>
    )
};


export default Homepage;