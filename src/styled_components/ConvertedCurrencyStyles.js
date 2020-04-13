import styled from '@emotion/styled';

export const ConvertedCurrencyContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&family=Quantico&display=swap');

    margin: 2.5rem 1rem;
    ul{
        list-style:none;
        padding: 0;
        li{
            font-family: 'Quantico', sans-serif;
            font-size: 0.75em;
            padding: 3px 0px 3px 10px;
            margin-left:60px;
            margin-right:63px;
            background-color: lightgray;
            text-transform:uppercase;
            :first-of-type{
                margin:10px;
                padding: 5px 0px 5px 15px;
                border: 3px solid green;
                font-family: 'Teko', sans-serif;
                font-size:1.5rem;
                background-color: lightblue;
                color:blue;
                span{
                    padding-right:15px;
                    color: green;
                    font-weight:bold;
                    position: absolute;
                    right:53%;
                }
            }
        span{
                padding-right: 10px;
                position: absolute;
                right:57%;
            }
        }
    }
`;
