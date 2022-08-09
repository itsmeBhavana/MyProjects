import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


function Header() {
    const [HamState,setHamState] = useState(false);



    return (
        <Container>
            <a href="/"> 
                <img src="/images/logo.svg" alt=""/>
            </a>
            <Menu>
                <a href="/">Model S</a>
                <a href="/">Model 3</a>
                <a href="/">Model X</a>
                <a href="/">Model Y</a>
            </Menu>
            <RightMenu>
                <a href="/">Shop</a>
                <a href="/">Tesla Account</a> 
                <CustomMenu onClick={()=>setHamState(true)}/>
            </RightMenu>
            <HamNav show={HamState}>
                <CloseWrapper>
                    <CustomClose onClick={()=>setHamState(false)}/>
                </CloseWrapper>
                <li><a href="/">Existing Inventory</a></li>
                <li><a href="/">Used Inventory</a></li>
                <li><a href="/">Trade-in</a></li>
                <li><a href="/">Cybertruck</a></li>
                <li><a href="/">Roadaster</a></li>
                <li><a href="/">Semi</a></li>
                <li><a href="/">Charging</a></li>
                <li><a href="/">Existing Inventory</a></li>
            </HamNav>
        </Container>
    )
}

export default Header

const Container=styled.div`
    position: fixed;
    padding: 0 20px;
    align-items: center;
    display: flex;
    min-height: 60px;
    left: 0;
    right:0;
    top:0;
    justify-content: space-between;
    z-index: 1;
`

const Menu=styled.div`
    text-transform: uppercase;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    
    a{
        padding: 0 10px;
        flex-wrap: nowrap;
        font-weight: 600;

    }   

    @media(max-width: 768px){
          display: none;
    }
`

const RightMenu=styled.div`
    display: flex;
    align-items: center;
    a{
        margin-right: 10px;
        font-weight: 600;
        text-transform: uppercase;
        flex-wrap: nowrap;
    }
`

const CustomMenu=styled(MenuIcon)`
    cursor: pointer;
    
  
`

const HamNav=styled.div`
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding:20px;
    text-align: start;
    flex-direction: column;
    transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,2);

        a{
            font-weight: 600;
        }
    }
    transition: transform 0.2s;
`

const CustomClose=styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper=styled.div`
    display: flex;
    justify-content: flex-end;

`