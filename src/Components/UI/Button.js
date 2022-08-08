import React from 'react';
import styled from 'styled-components';

const Button=styled.button`
    color:${props=>props.color ? props.color: 'white'};
    background-color:${props=>props.backColor ? props.backColor: 'blue'};
    border:${props=>props.borderColor ? props.borderColor: 'blue'};
    border-radius:${props=>props.borderRad ? props.borderRad: '10px'};
    padding:${props=>props.padding ? props.padding: '5px 10px'};
    margin-top:${props=>props.marginT ? props.marginT:'15px'};
    margin-left:${props=>props.marginL ? props.marginL:'15px'};
    margin-right:${props=>props.marginR ? props.marginR:'15px'};
    margin-bottom:${props=>props.marginB ? props.marginB:'15px'};
    width:${props=>props.width ? props.width:'120px'};
    font-size:${props=>props.fontS ? props.fontS:'20px'};
`


export default Button