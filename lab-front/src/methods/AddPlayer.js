import React , {useState} from 'react';
import {Form,Label,Input,Button} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
export const AddPlayer = () => {
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
    const playerToAdd = {
      id:FormData.id,
      firstName:FormData.firstName,
      lastName:FormData.lastName,
      age:FormData.age,
      position:FormData.position,
      team:FormData.team
    };

    const url = 'http://localhost:5164/api/Players';
    
    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(playerToAdd)
    })
      .then(response => response.json())
      .then(responseFromServer =>{
        console.log(responseFromServer);
      })
      .catch((error)=>{
          console.log(error);
      })

      alert("Player added successfully. Click OK to continue");
      {window.location.href="/playersHome"}

  }
  );


 

  


  return (
    <Form  className='d-flex flex-column' style={{marginLeft:500,width:"30%"}}>
    

       <Input name='id' style={{width: "100%"}} type="text" placeholder='Id' onChange={handleChange}></Input> 
       <Label></Label>
   
       <Input name='firstName' style={{width: "100%"}}type="text" placeholder='First Name' onChange={handleChange}></Input>
       <Label></Label>
       <Input name='lastName' style={{width: "100%"}} type="text" placeholder='Last Name' onChange={handleChange}></Input>
       <Label></Label>
       <Input name='age' style={{width: "100%"}} type="number" placeholder='Age' onChange={handleChange}></Input>  
       <Label></Label>
       <Input name='position' style={{width: "100%"}} type="text" placeholder='Position' onChange={handleChange}></Input>
       <Label></Label>
       <Input name='team' style={{width: "100%"}} type="text" placeholder='Team' onChange={handleChange}></Input>
       <Label></Label>
    
      <Button onClick={handleSubmit} className='btn btn-primary  align-self-center' type="submit">
        Add 
      </Button> 
    </Form>
     
  )
}



