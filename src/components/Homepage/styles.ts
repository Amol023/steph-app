import styled from '@emotion/styled';
import { Flex } from 'reflexbox';

export const Container = styled(Flex)`
    margin: 0;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

export const TopShelf = styled.div`
    height: 5%;
    width: 100%;
`;

export const TitleContainer = styled(Flex)`
    margin: 10px auto;
    height: 10%;
    justfiy-content: center;
    align-items: center;
`;

export const MenuContainer = styled(Flex)`
    height: auto;
    margin: 10px;
    justify-content: space-around;
`;

export const Headline = styled.div`
    color: #393b44;  
    font-size: 20px;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
`;

export const MenuItems = styled.p`
    font-family: 'Open Sans', sans-serif;
`

export const ContentContainer = styled(Flex)`
    border: 1px solid #393b44;
    border-radius: 3px;
    height: 100%;
    width: 100%;
    margin: 0 auto;
`