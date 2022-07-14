
import React,{useState,setState,useEffect} from 'react';
import {Form,Label,Input,Button} from 'reactstrap';


export const EditHistoryPoints = (props) => {
  
  const [formData, setFormData] = useState([]);
  const playerId = (props.match.params.id);


  function getPlayerById(){
    const url = `http://localhost:5164/api/HistoryPoints/${playerId}`;
    fetch(url,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(playersFromServer =>{
      console.log(playersFromServer);
      setFormData(playersFromServer);
    })
    .catch(error =>{
      console.log(error);
    });
  }

  useEffect(getPlayerById,[]);




  const handleChange = (e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  });

  const handleSubmit = (e =>{
    e.preventDefault();

    const playerToEdit = {
    id: formData.id,
    fullName:formData.fullName,
    points:formData.points,
    gamesPlayed:formData.gamesPlayed,
    imageName:formData.imageName
    };


    const url = 'http://localhost:5164/api/HistoryPoints';

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(playerToEdit)
    })
    .then(response => response.json())
    .then(responseFromServer => {
      console.log(responseFromServer);
    })
    .catch(error =>{
      console.log(error);
    });

    alert('Player updated successfully!');
    {window.location.href="/History"}


  });
        


     


  return (
    <Form  className='d-flex flex-column' style={{marginLeft:500,width:"30%"}}>
    

    <Input name='id' value={formData.id} readOnly style={{width: "100%"}} placeholder='Id' type="text"></Input> 
    <Label></Label>
    <Input name='fullName' value={formData.fullName} style={{width: "100%"}} type="text" placeholder='Full Name'  onChange={handleChange}></Input>
    <Label></Label>
    <Input name='points' value={formData.points} style={{width: "100%"}} type="number" placeholder='Points'  onChange={handleChange} ></Input>  
    <Label></Label>
    <Input name='gamesPlayed' value={formData.gamesPlayed} style={{width: "100%"}} type="number" placeholder='Games Played' onChange={handleChange}></Input>
    <Label></Label>
    <Input name='imageName'  value={formData.imageName} style={{width: "100%"}} type="imageName"  placeholder='Image Name' onChange={handleChange}></Input>
    <Label></Label>
 
   <Button onClick={handleSubmit}  className='btn btn-success  align-self-center' type="submit">
     Save 
   </Button> 
 </Form>
  )
}


