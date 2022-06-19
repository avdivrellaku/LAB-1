import React,{useState,useEffect} from 'react';
import {Form,Label,Input,Button} from 'reactstrap';


export const EditGame = (props) => {
  
  const [formData, setFormData] = useState([]);
  const gameId = (props.match.params.id);

  function getGameById(){
    const url = `http://localhost:5164/api/Game/${gameId}`;
    fetch(url,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(GamesFromServer =>{
      console.log(GamesFromServer);
      setFormData(GamesFromServer);
    })
    .catch(error =>{
      console.log(error);
    });
  }

  useEffect(getGameById,[]);

  const handleChange = (e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  });

  const handleSubmit = (e =>{
    e.preventDefault();

    const gameToEdit = {
    id: formData.id,
    team1:formData.team1,
    team2:formData.team2,
    score:formData.score,
    date:formData.date
    };


    const url = 'http://localhost:5164/api/Game';

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(gameToEdit)
    })
    .then(response => response.json())
    .then(responseFromServer => {
      console.log(responseFromServer);
    })
    .catch(error =>{
      console.log(error);
    });

    alert('Game updated successfully!');
    {window.location.href="/gamesHome"}


  });
        


     


  return (
    <Form  className='d-flex flex-column' style={{marginLeft:500,width:"30%"}}>
    

    <Input name='id' value={formData.id} readOnly style={{width: "100%"}}  placeholder='Id' type="number"></Input> 
    <Label></Label>

    <Input name='team1' value={formData.team1} style={{width: "100%"}} type="text" placeholder='Team 1'  onChange={handleChange}></Input>
    <Label></Label>
    <Input name='team2' value={formData.team2} style={{width: "100%"}} type="text" placeholder='Team 2' onChange={handleChange}></Input>
    <Label></Label>
    <Input name='score' value={formData.score} style={{width: "100%"}} type="text" placeholder='Score' onChange={handleChange} ></Input>  
    <Label></Label>
    <Input name='date' value={formData.date} style={{width: "100%"}} type="date" placeholder='Date' onChange={handleChange}></Input>
    <Label></Label>
 
   <Button onClick={handleSubmit}  className='btn btn-success  align-self-center' type="submit">
     Save 
   </Button> 
 </Form>
  )
}


