
import React,{useState,setState,useEffect} from 'react';
import {Form,Label,Input,Button} from 'reactstrap';


export const EditArena = (props) => {
  
  const [formData, setFormData] = useState([]);
  const arenaId = (props.match.params.id);
  
  function getArenaById(){
    const url = `http://localhost:5164/api/Arenas/${arenaId}`;
    fetch(url,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(arenasFromServer =>{
      console.log(arenasFromServer);
      setFormData(arenasFromServer);
    })
    .catch(error =>{
      console.log(error);
    });
  }

  useEffect(getArenaById,[]);

  const handleChange = (e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  });

  const handleSubmit = (e =>{
    e.preventDefault();

    const arenaToEdit = {
    id: formData.id,
    name:formData.name,
    location:formData.location,
    team:formData.team,
    capacity:formData.capacity,
    imageName:formData.imageName
    };


    const url = 'http://localhost:5164/api/Arenas';

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(arenaToEdit)
    })
    .then(response => response.json())
    .then(responseFromServer => {
      console.log(responseFromServer);
    })
    .catch(error =>{
      console.log(error);
    });

    alert('Arena updated successfully!');
    {window.location.href="/Arenas"}


  });
        


     


  return (
    <Form  className='d-flex flex-column' style={{marginLeft:500,width:"30%"}}>
    

    <Input name='id' value={formData.id} readOnly style={{width: "100%"}} placeholder='Id' type="text"></Input> 
    <Label></Label>

    <Input name='name' value={formData.name} style={{width: "100%"}} type="int" placeholder='Name'  onChange={handleChange}></Input>
    <Label></Label>
    <Input name='location' value={formData.location} style={{width: "100%"}} type="text" placeholder='Location' onChange={handleChange}></Input>
    <Label></Label>
    <Input name='team' value={formData.team} style={{width: "100%"}} type="text" placeholder='Team' onChange={handleChange} ></Input>  
    <Label></Label>
    <Input name='capacity' value={formData.capacity} style={{width: "100%"}} type="text" placeholder='Capacity' onChange={handleChange}></Input>
    <Label></Label>
    <Input name='imageName'  value={formData.imageName} style={{width: "100%"}} type="text" placeholder='Image Name' onChange={handleChange}></Input>
    <Label></Label>

 
   <Button onClick={handleSubmit}  className='btn btn-success  align-self-center' type="submit">
     Save 
   </Button> 
 </Form>
  )
}


