import React , {useState} from 'react';
import {Form,Label,Input,Button} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
export const AddTeam = () => {
  const [FormData, setFormData] = useState(null);

  const handleChange = (e => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  }
  );

  const handleSubmit = (e =>{
    e.preventDefault();
    const teamToAdd = {
      id:FormData.id,
      name:FormData.name,
      owner:FormData.owner,
      coach:FormData.coach,
      division:FormData.division,
      conference:FormData.conference,
      imageName:FormData.imageName,
    };

    const url = 'http://localhost:5164/api/Team';
    
    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(teamToAdd)
    })
      .then(response => response.json())
      .then(responseFromServer =>{
        console.log(responseFromServer);
      })
      .catch((error)=>{
          console.log(error);
      })

      alert("Team added successfully. Click OK to continue");
      {window.location.href="/teamHome"}

  }
  );


 

  


  return (
    <Form  className='d-flex flex-column' style={{marginLeft:500,width:"30%"}}>
    

       <Input name='id' style={{width: "100%"}} type="text" placeholder='Id' onChange={handleChange}></Input> 
       <Label></Label>
   
       <Input name='name' style={{width: "100%"}}type="text" placeholder='Name' onChange={handleChange}></Input>
       <Label></Label>
       <Input name='owner' style={{width: "100%"}} type="text" placeholder='Owner' onChange={handleChange}></Input>
       <Label></Label>
       <Input name='coach' style={{width: "100%"}} type="text" placeholder='Coach' onChange={handleChange}></Input>  
       <Label></Label>
       <Input name='division' style={{width: "100%"}} type="text" placeholder='Division' onChange={handleChange}></Input>
       <Label></Label>
       <Input name='conference' style={{width: "100%"}} type="text" placeholder='Conference' onChange={handleChange}></Input>
       <Label></Label>
       <Input name='imageName' style={{width: "100%"}} type="text" placeholder='Image Name' onChange={handleChange}></Input>
       <Label></Label>
    
      <Button onClick={handleSubmit} className='btn btn-primary  align-self-center' type="submit">
        Add 
      </Button> 
    </Form>
     
  )
}



