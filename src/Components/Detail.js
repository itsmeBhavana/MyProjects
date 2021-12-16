import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"></img>
            </Background>
            <Imgtitle>
                <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"></img>
            </Imgtitle>
            <Controls>
                <PlayButton>
                    <img alt="" src="/images/play-icon-black.png"></img>
                    <span>play</span>
                </PlayButton>
                <TrailerButton>
                    <img alt="" src="/images/play-icon-white.png"></img>
                    <span>trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>
                        +
                    </span>
                </AddButton>
                <GroupwatchButton>
                    <img alt="" src="/images/group-icon.png"/>
                    
                </GroupwatchButton>
            </Controls>
            <SubTitle>
                This is the Sub title.
            </SubTitle>
            <Description>
                I am Maggii quickly made nicely dressed in yellow and red. Tare the packet empty in pan.
                Water is boiling hot when I am healthy with a round twist slipping down your little lip.
            </Description>
        </Container>
    )
}

export default Detail

const Container=styled.div`
    position: relative;
    min-height: calc(100vh-70px);
    padding: 0, calc(3.5vw+5px);
`

const Background=styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Imgtitle=styled.div`
    height: 30vh;
    width: 35vw;
    img{
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`

const Controls=styled.div`
    display: flex;
    align-items: center;
`

const PlayButton=styled.button`
    display: flex;
    border-radius: 4px;
    font-size: 15px;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    padding:0 24px;
    letter-spacing: 1.8px;
    cursor: pointer;
    margin-right: 22px;
    text-transform: uppercase;

    &:hover{
        background: rgb(198, 198, 198);
    }

`

const TrailerButton=styled(PlayButton)`
    background: rgb(0,0,0, 0.3);
    color: rgb(249, 249, 249);
    border: 1px solid rgb(249, 249, 249);
    
`

const AddButton=styled.button`
    color: rgb(249, 249, 249);
    width: 44px;
    height: 44px;
    border: 2px solid white;
    border-radius: 50%;
    span{
        font-size: 30px;
    }
    background: rgb(0,0,0,0.6);
    margin-right: 16px;
    cursor: pointer;

`

const GroupwatchButton=styled(AddButton)`
    //align-items: center;
    justify-content: center;
    display: flex;
    background: rgb(0,0,0);

`

const SubTitle=styled.div`
    margin-top: 26px;
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;

`
const Description=styled.div`
    font-size: 20px;
    line-height: 1.4;
    display: flex;
    flex-wrap:wrap;
    margin-top: 16px;
    width: 70vw;
`