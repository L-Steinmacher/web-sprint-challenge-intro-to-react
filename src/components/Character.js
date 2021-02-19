// Write your Character component here
import React, { useState } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap'


const Character = props => {

    const {data} = props
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    console.log(props)
  
    
    return(
        <div>
    <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>More Info</Button>
    <Collapse isOpen={isOpen}>
      <Card>
        <CardBody>
            
        </CardBody>
      </Card>
    </Collapse>
    </div>
    ) 
}




export default Character