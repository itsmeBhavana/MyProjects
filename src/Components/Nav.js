import React from 'react'
import styled from 'styled-components';
function Nav() {
    return (
        <Navbar>
            <Logo src="/images/logo.svg"/>
            <Navmenu>
                <a href="/">
                    <img alt="" src="/images/home-icon.svg"></img>
                    <span>
                        HOME
                    </span>  
                </a>
                <a href="/">
                    <img alt="" src="/images/search-icon.svg"></img>
                    <span>
                        SEARCH
                    </span>  
                </a>
                <a href="/">
                    <img alt="" src="/images/watchlist-icon.svg"></img>
                    <span>
                        WATCHLIST
                    </span>  
                </a>
                <a href="/">
                    <img alt="" src="/images/original-icon.svg"></img>
                    <span>
                        ORIGINALS
                    </span>  
                </a>
                <a href="/">
                    <img alt="" src="/images/movie-icon.svg"></img>
                    <span>
                        MOVIES
                    </span>  
                </a>
                <a href="/">
                    <img alt="" src="/images/series-icon.svg"></img>
                    <span>
                        SERIES
                    </span>  
                </a>
            </Navmenu>
            <UserImg src="/images/Photo_upload.jpg"/>  
        </Navbar>
    )
}

export default Nav

const Navbar=styled.div`
    height: 70px;
    background: black;
    display: flex;
    align-items: center;
    padding: 0 36px;
`
const Logo=styled.img`
    width: 80px;
    
`
const Navmenu=styled.div`
    display: flex;
    flex 1;
    margin-left: 25px;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        img{
            height: 20px;
        }
        span{
            font-size: 13px;
            color: white;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                
                left:0;
                right:0;
                bottom: -6px;
                content:"";
                position: absolute;
                background: white;
                height: 2px;
                transform-origin: left center;
                opacity:0;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after{
                opacity:1;
                transform: scaleX(1);
            }
        }
        
        text-decoration: none;
    }

`

const UserImg=styled.img`
    width: 48px;
    height: 48px;
    cursor: pointer;
    border-radius: 50%;
`
