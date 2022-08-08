import React from 'react';
import styled from 'styled-components';

const Card=styled.div`
    background-color:${props=>props.backColor ? props.backColor:'white'};
    height: ${props =>props.height || '30vh'};
    /* width:${props =>props.width || '500px'}; */
    margin-top:${props =>props.marginT || '60px'};
    margin-bottom:${props =>props.marginB || '60px'};
    border:1px solid;
    border-radius:14px;
    /* display:${props =>props.display || 'flex'} ;
    flex-direction:${props =>props.flexDir || 'column'} ;
    justify-content:${props =>props.jc || 'space-between'}; */
`


export default Card