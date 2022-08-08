import React from 'react';
import styled from 'styled-components';

const Label=styled.label`
    margin-top:${props=>props.marginT ? props.marginT:'15px'};
    margin-left:${props=>props.marginL ? props.marginL:'15px'};
    /* padding-top:10px; */
    font-size:${props=>props.fontS ? props.fontS:'20px'};
    color:${props =>props.color ? props.color:'gray'};

`
export default Label