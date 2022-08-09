import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
                <Section
                    title= "Model S" 
                    description="Order Online for Touchless Delivery"
                    
                    leftButtonText="Custom Order"
                    rightButtonText="Existing Inventory"
                    backgroundImage="model-s.jpg"
                />
                <Section
                    title= "Model Y" 
                    description="Order Online for Touchless Delivery"
                    
                    leftButtonText="Custom Order"
                    rightButtonText="Existing Inventory"
                    backgroundImage="model-y.jpg"
                />
                <Section
                    title= "Model 3" 
                    description="Order Online for Touchless Delivery"
                    
                    leftButtonText="Custom Order"
                    rightButtonText="Existing Inventory"
                    backgroundImage="model-3.jpg"
                />
                <Section
                    title= "Model X" 
                    description="Order Online for Touchless Delivery"
                    
                    leftButtonText="Custom Order"
                    rightButtonText="Existing Inventory"
                    backgroundImage="model-x.jpg"
                />
                <Section
                    title= "Solar Panels" 
                    description="Lowest Cost Solar Panels in America"
                    
                    leftButtonText="Order Now"
                    rightButtonText="LEarn More"
                    backgroundImage="solar-panel.jpg"
                />
                <Section
                    title= "Solar Roof" 
                    description="Produce Clean Energy From Your Roof"
               
                    leftButtonText="Order Now"
                    rightButtonText="Learn More"
                    backgroundImage="solar-roof.jpg"
                />
                <Section
                    title= "Accessories" 
                    //description="Order Online for Touchless Delivery"
                    
                    leftButtonText="Custom Order"
                    //rightButtonText="Existing Inventory"
                    backgroundImage="accessories.jpg"
                />
        </Container>
    ) 
}

export default Home

const Container=styled.div`
    height: 100vh;
`
