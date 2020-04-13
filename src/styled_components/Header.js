import styled from '@emotion/styled';

const Header = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Gugi&display=swap');

    font-family: 'Gugi', cursive;
    color: #FFFFFF;
    font-weight: 700;
    margin-bottom: 50px;
    margin-top: 80px;

    &::after{
        content: '';
        width: 100px;
        height: 6px;
        background-color: #66A2FE;
        display: block;
    }
`;

export default Header;