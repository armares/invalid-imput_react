import React,{useState} from 'react';
import styles from './Input.module.css';
import styled from 'styled-components';

const Input=styled.input`
    /* border:1px solid black; */
    display:${props=>props.display ? props.display:'block'};
    border-radius:${props=>props.borderRad ? props.borderRad:'7px'};
    margin-top:${props=>props.marginT ? props.marginT:'10px'};
    margin-left:${props=>props.marginL ? props.marginL:'15px'};
    /* padding-top:10px; */
    font-size:${props=>props.fontS ? props.fontS:'20px'};
    padding-left:7px;
    padding-top:7px;
    padding-bottom:7px;
    background-color:${props=>props.backColor ? props.backColor:'white'};
    ${props=>{
        if (props.isValid) {
            return `
            color:${props.color ? props.color:'black'};
            background-color:${props.backColor ? props.backColor:'transparent'};
            `
        } else if (!props.isValid) {
            return `
            color:red;
            background-color:pink;
            border: 1px solid red;
            `
        }
    }}

`
// const Imput = () => {
//   return (
//     <div>Imput</div>
//   )
// }

export default Input