import React from 'react';
import {ErrorStyles} from '../styled_components/ErrorStyles';

const Error = ({message}) => {
    return (  
    <ErrorStyles>{message}</ErrorStyles>
    );
}
 
export default Error;