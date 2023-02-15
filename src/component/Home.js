import React from 'react'
import styled from 'styled-components'
import Section from './Sections'

import img1 from '../images/model-s.jpg'
import img2 from '../images/model-y.jpg'
import img3 from '../images/model-3.jpg'
import img4 from '../images/model-x.jpg'
import img5 from '../images/solar-panel.jpg'
import img6 from '../images/solar-roof.jpg'
import img7 from '../images/accessories.jpg'


const Home = () => {
    return (

        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg={img1}
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg={img2}
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg={img3}
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg={img4}
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money back Gurantee"
                backgroundImg={img5}
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg={img6}
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg={img7}
                leftBtnText="Shop Now"
                rightBtnText=""
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
height:100vh;
// background-color:black


`