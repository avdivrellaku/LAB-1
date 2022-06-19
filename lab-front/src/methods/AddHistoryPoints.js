import React , {useState} from 'react';
import {Form,Label,Input,Button} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
export const AddHistoryPoints = () => {
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
      nr:FormData.nr,
      fullName:FormData.fullName,
      points:FormData.points,
      gamesPlayed:FormData.gamesPlayed,
      imageName:FormData.imageName
    };

    const url = 'http://localhost:5164/api/HistoryPoints';
    
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
      {window.location.href="/History"}

  }
  );


 

  


  return (
    <Form  className='d-flex flex-column' style={{marginLeft:500,width:"30%"}}>
    

       <Input name='id' style={{width: "100%"}} type="text" placeholder='Id' onChange={handleChange}></Input> 
       <Label></Label>
   
       <Input name='nr' style={{width: "100%"}}type="text" placeholder='Number' onChange={handleChange}></Input>
       <Label></Label>
       <Input name='fullName' style={{width: "100%"}} type="text" placeholder='Full Name' onChange={handleChange}></Input>
       <Label></Label>
       <Input name='points' style={{width: "100%"}} type="number" placeholder='Points' onChange={handleChange}></Input>  
       <Label></Label>
       <Input name='gamesPlayed' style={{width: "100%"}} type="number" placeholder='Games Played' onChange={handleChange}></Input>
       <Label></Label>
       <Input name='imageName' style={{width: "100%"}} type="text" placeholder='Image Name' onChange={handleChange}></Input>
       <Label></Label>
    
      <Button onClick={handleSubmit} className='btn btn-primary  align-self-center' type="submit">
        Add 
      </Button> 
    </Form>
     
  )
}



