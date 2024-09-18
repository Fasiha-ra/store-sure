import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    
    --white: #fff;
    --black: #141416;
    --fonts-color:#284445;
    --light-green: #A6D6A8;
    --light-gray:#F2F4F6;
    --primary: #033026;
    --light-primay:#DBEFDC;

   

    /*  Links */
  }
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
  * {
    box-sizing: border-box;
    font-size: 100%;
    scroll-behavior: smooth;
  }
  *:before,
  *:after,
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    
    font-weight: 300;
    position: relative;
   
    top: 0px !important;
   
  }
  .container{
    max-width: 1332px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.3s ease-in-out;
    visibility: hidden;
    opacity: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 98;
  }

  #wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;

    @media (min-width: 992px) {
    }
  }

 
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  figure{
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  textarea {
    resize: vertical;
    vertical-align: top;
  }

  button,
  input[type="button"],
  input[type="reset"],
  input[type="file"],
  input[type="submit"] {
    cursor: pointer;
    font-family: var( --base-font-sans-serif);
  }
  form,
  fieldset {
    margin: 0;
    padding: 0;
    border-style: none;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  

  button {
    padding: 0;
    border: none;
    background: none;
    outline: none;
   
  }

  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
    margin: 0 0 15px;
    color: var(--body-text);
    font-weight: 400;
  }
  h1,
  .h1{
    font-size: 26px;
    line-height: 30px;
    font-weight: 600;
    @media (min-width: 375px){
      font-size: 35px;
      line-height: 39px;
    }
    @media (min-width: 768px){
      font-size: 50px;
    line-height: 54px;
    }
    @media (min-width: 992px){
      font-size: 64px;
    line-height: 68px;
    }

  }
  .h2,h2{
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    @media (min-width: 992px){
      font-size: 30px;
      line-height: 34px;
    }
    @media (min-width: 992px){
      font-size: 40px;
    line-height: 44px;
    }
  }

  p {
    margin: 0 0 15px;

    &:last-child {
      margin: 0;
    }
  }
 /* Track */
 
  /* Handle on hover */
  /* Remove Arrows/Spinners from input type number */

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    appearance: textfield;
  }
  .heading{
    display: inline-block; 
    font-size: 22px;
    line-height: 26px;
    font-weight: 600;
    margin-bottom: 10px;
    position: relative;
    @media (min-width: 768px){
      font-size: 30px;
    line-height: 34px;
    }
    @media (min-width: 992px){
      font-size: 36px;
      line-height: 40px;
    }
    &::after{
      content: "";
      position: absolute;
      bottom: -15px;
    left: 0;
    width: 100%; 
    height: 4px;
    border-radius :10px ;
    background-color: var(--light-green); 
    @media (min-width: 992px){
      height: 7px;
    }
    }
  }
  .form{
    width: 100%;
   @media (min-width: 800px){
    width: auto;
    
   }
  }
  .colored{
  color: #51AB3B;

  }
`;
