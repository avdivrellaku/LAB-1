import React , {useState} from 'react';
import {Form,Label,Input,Button} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
export const Register = () => {
    const [formData, setFormData] = useState(null);

    const handleChange = (e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    });

    const handleSubmit = (e => {
        e.preventDefault();
        const userToAdd = {
            firstName:formData.firstName,
            lastName:formData.lastName,
            username:formData.username,
            email:formData.email,
            password:formData.password,
            role:"user"

        };


        const url = 'http://localhost:5164/api/User';

        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userToAdd)
        })
        .then(response => response.json())
        .then(responseFromServer => {
            console.log(responseFromServer);
        })
        .catch(error =>{
            console.log(error);
        });

        alert("User registered successfully. Click OK to continue");
      {window.location.href="/UsersHome"}

    });









 

  


  return (
    <Form  className='d-flex flex-column' style={{marginLeft:500,width:"30%"}}>
    


   
       <Input name='firstName' style={{width: "100%"}}type="text" placeholder='First Name' onChange={handleChange}></Input>
       <Label></Label>
       <Input name='lastName' style={{width: "100%"}} type="text" placeholder='Last Name' onChange={handleChange}></Input>
       <Label></Label>
       <Input name='username' style={{width: "100%"}} type="text" placeholder='Username' onChange={handleChange}></Input>  
       <Label></Label>
       <Input name='email' style={{width: "100%"}} type="text" placeholder='Email' onChange={handleChange}></Input>
       <Label></Label>
       <Input name='password' style={{width: "100%"}} type="password" placeholder='Password' onChange={handleChange}></Input>
       <Label></Label>
       
    
      <Button onClick={handleSubmit} className='btn btn-primary  align-self-center' type="submit">
        Add 
      </Button> 
    </Form>
     
  )
}



