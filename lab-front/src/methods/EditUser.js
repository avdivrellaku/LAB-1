
import React,{useState,setState,useEffect} from 'react';
import {Form,Label,Input,Button} from 'reactstrap';


export const EditUser = (props) => {
  
  const [formData, setFormData] = useState([]);
  const userId = (props.match.params.id);


  function getUserById(){
    const url = `http://localhost:5164/api/User/${userId}`;
    fetch(url,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(usersFromServer =>{
      console.log(usersFromServer);
      setFormData(usersFromServer);
    })
    .catch(error =>{
      console.log(error);
    });
  }

  useEffect(getUserById,[]);




  const handleChange = (e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  });

  const handleSubmit = (e =>{
    e.preventDefault();

    const userToEdit = {
    id: formData.id,
    firstName:formData.firstName,
    lastName:formData.lastName,
    username:formData.username,
    email:formData.email,
    password:formData.password,
    role:formData.role
    };


    const url = 'http://localhost:5164/api/User';

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userToEdit)
    })
    .then(response => response.json())
    .then(responseFromServer => {
      console.log(responseFromServer);
    })
    .catch(error =>{
      console.log(error);
    });

    alert('User updated successfully!');
    {window.location.href="/usersHome"}


  });
        


     


  return (
    <Form  className='d-flex flex-column' style={{marginLeft:500,width:"30%"}}>
    

    <Input name='id' value={formData.id} readOnly style={{width: "100%"}} type="text" ></Input> 
    <Label></Label>

    <Input name='firstName' value={formData.firstName} style={{width: "100%"}} type="int"   onChange={handleChange}></Input>
    <Label></Label>
    <Input name='lastName' value={formData.lastName} style={{width: "100%"}} type="text"  onChange={handleChange}></Input>
    <Label></Label>
    <Input name='username' value={formData.username} style={{width: "100%"}} type="text"  onChange={handleChange} ></Input>  
    <Label></Label>
    <Input name='email' value={formData.email} style={{width: "100%"}} type="text" onChange={handleChange}></Input>
    <Label></Label>
    <Input name='password'  value={formData.password} style={{width: "100%"}} type="text"  onChange={handleChange}></Input>
    <Label></Label>
    <Input name='role'  value={formData.role} style={{width: "100%"}} type="text"  onChange={handleChange}></Input>
    <Label></Label>
 
   <Button onClick={handleSubmit}  className='btn btn-success  align-self-center' type="submit">
     Save 
   </Button> 
 </Form>
  )
}


