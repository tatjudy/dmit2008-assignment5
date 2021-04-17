import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import Logo from './../components/icons/Logo'

const HomePageStyles = styled.header`  
text-align:center;
margin:6rem auto 0;
   svg{
       width:120px;
   }
   h1{
       font-size: 2.25rem;
   }
   p{
       color:#696975;
   }
   a{
    display:block;
    margin: 1rem auto 0;
 
    max-width: 320px;
    text-decoration: none;
    width: 90%;
    border: inherit;
    font-size: 1.25rem;
    font-weight: 500;
    background-color: inherit;
    color: #8e979c;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
    padding: 0.5rem 1rem;
   }
`
 
const HomePage = (props) => {
    return ( 
           <HomePageStyles>
               <Logo/>
               <h1>Employee Manager</h1>
               <p>focus on people and we'll focus on the paperwork</p>
            </HomePageStyles>
    );
}
 
export default HomePage;