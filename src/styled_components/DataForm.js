import styled from '@emotion/styled';

export const LabelSelectCurrency = styled.label`
    @import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');

    color:#fff;
    font-family: 'Teko', sans-serif;
    font-size:2.4rem;
    margin-top:0.5em;
    display:block;
`;

export const SelectCurrency = styled.select`
    @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&family=Quantico&display=swap');

    margin: 0 auto;
    margin-top:10px;
    font-family: 'Quantico', sans-serif;
    font-size:1rem;
    text-align:center;
    width: 60%;
    display:block;
    padding:0.5rem;
    -webkit-appearance:none;
    border-radius:10px;
    border:none;
`; 

export const SubmitButton = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
    
    margin: 0 auto;
    margin-top:2em;
    display:block;
    padding: 7px;
    font-family: 'Teko', sans-serif;
    font-size: 30px;
    color: #fff;
    background-color: #320fe1;
    border:none;
    border-radius: 15px;
    width:70%;
    transition: all 500ms;

    &:hover{
        background-color:#beb8dd;
        color:#2002b6;
        cursor:pointer;
    }
`;