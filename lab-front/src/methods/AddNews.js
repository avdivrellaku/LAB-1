import React , {useState} from 'react';
import {Form,Label,Input,Button} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
export const AddNews = () => {
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
    const newsToAdd = {
      title:FormData.title,
      smallDesc:FormData.smallDesc,
      fullArticle:FormData.fullArticle,
      datePublished:FormData.datePublished,
      imageName:FormData.imageName
    };

    const url = 'http://localhost:5164/api/News';
    
    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newsToAdd)
    })
      .then(response => response.json())
      .then(responseFromServer =>{
        console.log(responseFromServer);
      })
      .catch((error)=>{
          console.log(error);
      })

      alert("Article added successfully. Click OK to continue");
      {window.location.href="/"}

  }
  );


 

  


  return (


       
    <Form  className='d-flex flex-column align-items-center' style={{marginLeft:200,width:"70%",border:"2px  "}}>
    <h4>Add a new article</h4>

       <Input name='title' style={{width: "70%"}} type="text" placeholder='Title' onChange={handleChange}></Input> 
       <Label></Label>
   
       <textarea name='smallDesc' style={{width: "70%",resize:"none",height:"100px"}}type="text" placeholder='Small description' onChange={handleChange}></textarea>
       <Label></Label>
       <textarea name='fullArticle' style={{width: "70%",resize:"none",height:"300px"}} type="text" placeholder='Full Article' onChange={handleChange}></textarea>
       <Label></Label>
       <Input  name='datePublished'  style={{width: "70%"}} type="date" placeholder='Date' onChange={handleChange}></Input>  
       <Label></Label>
       <Input name='imageName' maxLength={10} style={{width: "70%"}} type="text" placeholder='Image Name' onChange={handleChange}></Input>
       <Label></Label>
       
    
    <div className='d-flex justify-content-evenly' style={{width:"30%"}} >
      <Button onClick={() => {window.location.href="/"}} className='btn btn-warning' >
        Go Back 
      </Button> 
      <Button onClick={handleSubmit} className='btn btn-primary' type="submit">
        Add
      </Button> 
      </div>
    </Form>
    
  )
}
