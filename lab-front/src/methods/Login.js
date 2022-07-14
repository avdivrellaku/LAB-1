import React, {useState, useEffect} from 'react'
import jwt from 'jwt-decode';
import {Form,Label,Input,Button} from 'reactstrap';

export const Login = () => {
  const [formData, setFormData] = useState(null);


  const handleChange = (e =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  });
  
  const handleSubmit = (e =>{
    e.preventDefault();

    const userInput = {
      username: formData.username,
      password: formData.password
    };

    const url = 'http://localhost:5164/api/User/Login';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInput)
    })
    .then(response => response.text())
    .then(responseFromServer => {
      if(responseFromServer != "User is null"){
        console.log(jwt(responseFromServer));
        localStorage.setItem("usertoken",jwt(responseFromServer));
        localStorage.setItem("firstName",jwt(responseFromServer).firstName);
        localStorage.setItem("lastName",jwt(responseFromServer).lastName);
        localStorage.setItem("username",jwt(responseFromServer).username);
        localStorage.setItem("Role",jwt(responseFromServer).role);
        {window.location.href="/Profile"}

      }
      else {
        alert('Incorrect username or password');
      }
    })
    .catch(error => {
      console.log(error);
    });
  });
 

  

  return (
    <div className='d-flex flex-column align-items-center w-100'>
        <h3>Login</h3>
    <Form className='d-flex flex-column' style={{width:"30%"}}>
    <Input name='username' style={{width: "100%"}} type="text" placeholder='Username' onChange={handleChange}></Input>  
    <Label></Label>
    <Input name='password' style={{width: "100%"}} type="password" placeholder='Password' onChange={handleChange}></Input>
    <Label></Label>
    
 
   <Button onClick={handleSubmit} className='btn btn-primary  align-self-center' type="submit">
     Log in 
   </Button> 
 </Form>
  
</div>
  )
  }