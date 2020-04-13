import styled from '@emotion/styled';

const MainContainer = styled.div`
    background-color: rgba(1, 0, 6, 0.7);
    margin: 0 auto;
    max-width: 1200px;
    min-height: 100vh;

    @media (min-width: 1092px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 0px 20px;
        column-gap: 2rem;
    }
`;

export default MainContainer;