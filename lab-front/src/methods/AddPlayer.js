import React from 'react';

import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
export const AddPlayer = () => {
  return (
    <Form  className='d-flex flex-column' style={{marginLeft:500,width:"30%"}}>
      <FormGroup className='d-flex flex-column justify-content-evenly h-200'>

       <Input  style={{width: "100%"}} type="text" placeholder='Id'></Input> 
       <Label></Label>
   
       <Input style={{width: "100%"}}type="text" placeholder='First Name'></Input>
       <Label></Label>
       <Input style={{width: "100%"}} type="text" placeholder='Last Name'></Input>
       <Label></Label>
       <Input style={{width: "100%"}} type="text" placeholder='Age'></Input>  
       <Label></Label>
       <Input style={{width: "100%"}} type="text" placeholder='Position'></Input>
       <Label></Label>
       <Input style={{width: "100%"}} type="text" placeholder='Team'></Input>
       <Label></Label>
      </FormGroup>
      <Button  className='btn btn-success  align-self-center' type="submit">
        Add 
      </Button>
    </Form>
     
  )
}



