import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Movies from './Movies'
import Viewers from './Viewers'


function Home() {
    return (
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Movies/>
        </Container>   
    )
}

export default Home

const Container=styled.div`
    overflow-x: hidden;
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    &:before{
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        position: absolute;
        content:"";
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:-1;
    }

`
