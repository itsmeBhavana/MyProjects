import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function ImgSlider() {
    let settings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true
    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <img alt="" src="/images/slider-badging.jpg"></img>
            </Wrap>
            <Wrap>
                <img alt="" src="/images/slider-badag.jpg"></img>
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel=styled(Slider)`
    margin-top: 20px;

    .slick-list{
        overflow: visible;
    }


    ul li button{
        &:before{
            font-size: 10px;
            color: rgb(150, 158, 71);
        }
    }
    li.slick-active button::before{
        color: white;
    }
    button{
        z-index:1;
    }
`

const Wrap=styled.div`
    cursor: pointer;
    img{
        border: 4px solid transparent;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

        &:hover{
            border: 4px solid white;
        }
    }
`