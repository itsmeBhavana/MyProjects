import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogo1 alt="" src="/images/cta-logo-one.svg"/>
                   
                    
              
                <SignUp>
                    Get All Here
                </SignUp>
                <Description>
                    I am maggii quickly made, nicely dressed in yellow and red. Tare the packet empty in pan. Water is boiling hot when I am healthy witha  round twist slipping down your little lip.
                </Description>
                <CTALogo2 alt="" src="/images/cta-logo-two.png"/>
                  
            </CTA>
           
        </Container>
    )
}

export default Login

const Container=styled.div`
    height: calc(100vh - 70px);
    position: relative;
    display: flex;
    align-items: top;
    justify-content: center;
    &:before{
        background: url("/images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        content: "";
        z-index: -1;
        opacity: 0.7;
  
    }
`

const CTA=styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 100px;
    align-items: center;
`
const CTALogo1=styled.img`

`

const SignUp=styled.a`
    width: 100%;
    background-color: #0063e5;
    padding: 17px 0;
    font-weight: bold;
    color: #f9f9f9;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 18px;
    transition: all 250ms;
    //justify-content:center;
    letter-spacing: 1.5px;
    cursor: pointer;
    &:hover{
        background: #0483ee;
    }
`

const Description=styled.div`
    font-size: 18px;
    letter-spacing: 1.5px;
    line-height: 1.5;
`

const CTALogo2=styled.img`
    width: 90%;
`