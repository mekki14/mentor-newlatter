import { FaCheckCircle } from "react-icons/fa";
import styled from "styled-components";
import { InputProps } from "../data/types";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 20px;

background-color: hsl(0, 0%, 100%);
color: hsl(234, 29%, 20%);
@media screen and (max-width: 375px) {
    /* Example: Adjust styles for screens smaller than 768px */
    min-height: 100vh;
    height: fit-content;
    border-radius :0 ;
    width: 100vw;
    margin: 0;
    padding: 0;
justify-content: flex-start;
    }

`
export const SignInContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 58dvh;
    width: 720px;
    @media screen and (max-width: 375px) {
        /* Example: Adjust styles for screens smaller than 768px */
        justify-content: center;
    align-items: center;
        flex-direction: column-reverse;
        height: auto;
        width: 100vw;
        margin: 0;
    padding: 0;

    }
  `

export const SignInContent = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding:20px;
    
    gap: 27px;
    
@media screen and (max-width: 375px) {
    width: 80vw;
    padding-top: 25px;
    padding-bottom: 25px;
}

`

export const SignInImage = styled.img`
border-radius: 15;
width: 100%;
height: 100%;
@media screen and (max-width: 375px) {
        /* Example: Adjust styles for screens smaller than 768px */
        flex-direction: column-reverse;
        /* height: 250px; */
        width: 100dvw;
        border-radius: 0px;

        
    }

`
export const Button = styled.button`
    padding: 14px 25px;
    background-color:hsl(234, 29%, 20%) ;
    /* background-image:transparent; */
    color: hsl(0, 0%, 100%);
    border:none;
    position: relative;
    border-radius: 5px;
    &:before {
        border-radius:5px;
        
        box-shadow: 0 0 5px 1px rgb(254,156,64);
        transition: all 0.25s ease-in-out;
        background: rgb(254,156,64); 
        background: linear-gradient(80deg, rgba(254,156,64,1) 0%, rgba(255,98,87,1) 100%);
        content: '';
        position: absolute;
        width:100%;
        height: 100%;
        opacity: 0;
        top:0;
        right:0;
    }
    &:hover:before {
       opacity:1;
        }
        *{
            position: relative;
            top: 0;
            right: 0;
        }

`

export const H1 = styled.h1`
font-size: 48px;
font-family: 'roboto-bold';
`
export const Para = styled.p`
    font-size: 16px;
    font-weight: 500;
`

export const SingleFeature = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
    gap: 10px;

`
export const FeaturesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

`
export const CheckIcon = styled(FaCheckCircle)`
    color:hsl(4, 100%, 67%);
    font-size: ${(props) => props.size ? props.size : '18'}px;

`

export const InputWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;  

`
export const Label = styled.label`
display: flex;
justify-content: space-between;

`

export const Input = styled.input<InputProps>`
padding: 15px;
border-radius: 5px;
outline: none;
border: 1px solid rgba(0, 0, 0,0.3);
${({ error }) => error && `color:red;background-color: rgba(255, 0, 0, 0.1); border: 1px solid red; color:red;`
    }  
&:focus{
    border: 1px solid rgba(0, 0, 0, 0.895);
    ${({ error }) => error && `color:red;background-color: rgba(255, 0, 0, 0.1); border: 1px solid red; color:red;`
    }   
}
`
export const InputError = styled.p`
    color: red;
    font-size: 14px;
`

export const MessageContainer = styled.div`
padding: 50px;
max-width: 320px;
display: flex;
flex-direction: column;
justify-content: center;

gap: 25px;
@media screen and (max-width: 375px) {
    height: 70dvh;
    justify-content: space-around;
}
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
` 