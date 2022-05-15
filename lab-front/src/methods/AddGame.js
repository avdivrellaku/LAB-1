import React , {useState} from 'react';
import {Form,Label,Input,Button} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
export const AddGames = () => {
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
    const gamesToAdd = {
      id:FormData.id,
      team1:FormData.team1,
      team2:FormData.team2,
      score:FormData.score,
      date:FormData.date
    };

    const url = 'http://localhost:5164/api/Game';
    
    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(gamesToAdd)
    })
      .then(response => response.json())
      .then(responseFromServer =>{
        console.log(responseFromServer);
      })
      .catch((error)=>{
          console.log(error);
      })

      alert("Games added successfully. Click OK to continue");
      {window.location.href="/gamesHome"}

  }
  );


 

  


  return (
    <Form  className='d-flex flex-column' style={{marginLeft:500,width:"30%"}}>
    

       <Input name='id' style={{width: "100%"}} type="text" placeholder='Id' onChange={handleChange}></Input> 
       <Label></Label>
   
       <Input name='team1' style={{width: "100%"}}type="text" placeholder='Team 1' onChange={handleChange}></Input>
       <Label></Label>
       <Input name='team2' style={{width: "100%"}} type="text" placeholder='Team 2' onChange={handleChange}></Input>
       <Label></Label>
       <Input name='score' style={{width: "100%"}} type="text" placeholder='Score' onChange={handleChange}></Input>  
       <Label></Label>
       <Input name='date' style={{width: "100%"}} type="date" placeholder='Date' onChange={handleChange}></Input>
       <Label></Label>
       
    
      <Button onClick={handleSubmit} className='btn btn-primary  align-self-center' type="submit">
        Add 
      </Button> 
    </Form>
     
  )
}
