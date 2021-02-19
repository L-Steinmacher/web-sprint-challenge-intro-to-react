// Write your Character component here
import React, { useState } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap'
import styled from 'styled-components'


const Character = props => {

    const {data} = props
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    const StyledText = styled.p`
    color: #0c0c0b;
    backgroundv: #e5e4e2;
    `


    return(
    <div>
        <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>More Info</Button>
        <Collapse isOpen={isOpen}>
        <Card>
            <CardBody >
                <StyledText>
                    {data.name}
                </StyledText>
            </CardBody>
        </Card>
        </Collapse>
    </div>
    ) 
}

export default Character