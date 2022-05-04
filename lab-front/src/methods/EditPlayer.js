
import React,{useState,setState,useEffect} from 'react';
import {Form,Label,Input,Button} from 'reactstrap';


export const EditPlayer = (props) => {
  
  const [playerById, setPlayerById] = useState([]);
  const playerId = (props.match.params.id);
  const playerFirstName = (props.match.params.firstName);
  const playerLastName = (props.match.params.lastName);
  const playerAge = (props.match.params.age);
  const playerPosition = (props.match.params.position);
  const playerTeam = (props.match.params.team);
  

  function getPlayerById(){
    const url = `http://localhost:5164/api/Players/${playerId}`;
    fetch(url,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(playersFromServer =>{
      console.log(playersFromServer);
      setPlayerById(playersFromServer);
    })
    .catch(error =>{
      console.log(error);
    });
  }

  useEffect(getPlayerById,[]);


  const initialFormData = {
    id: playerId,
    firstName:playerFirstName,
    lastName:playerLastName,
    age:playerAge,
    position:playerPosition,
    team:playerTeam
  };

  const [formData, setFormData] = useState(initialFormData);


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
    firstName:formData.firstName,
    lastName:formData.lastName,
    age:formData.age,
    position:formData.position,
    team:formData.team
    };


    const url = 'http://localhost:5164/api/Players';

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
    {window.location.href="/playersHome"}


  });
        


     


  return (
    <Form  className='d-flex flex-column' style={{marginLeft:500,width:"30%"}}>
    

    <Input name='id' value={formData.id} readOnly style={{width: "100%"}} type="text" placeholder={playerById.id}></Input> 
    <Label></Label>

    <Input name='firstName' value={formData.firstName} style={{width: "100%"}} type="text"   onChange={handleChange}></Input>
    <Label></Label>
    <Input name='lastName' value={formData.lastName} style={{width: "100%"}} type="text"  onChange={handleChange}></Input>
    <Label></Label>
    <Input name='age' value={formData.age} style={{width: "100%"}} type="number"  onChange={handleChange} ></Input>  
    <Label></Label>
    <Input name='position' value={formData.position} style={{width: "100%"}} type="text" onChange={handleChange}></Input>
    <Label></Label>
    <Input name='team'  value={formData.team} style={{width: "100%"}} type="text"  onChange={handleChange}></Input>
    <Label></Label>
 
   <Button onClick={handleSubmit}  className='btn btn-success  align-self-center' type="submit">
     Save 
   </Button> 
 </Form>
  )
}


