
import React,{useState,setState,useEffect} from 'react';
import {Form,Label,Input,Button} from 'reactstrap';


export const ReadMore = (props) => {
  
  const [formData, setFormData] = useState([]);
  const newsId = (props.match.params.id);


  function getNewsById(){
    const url = `http://localhost:5164/api/News/${newsId}`;
    fetch(url,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(newsFromServer =>{
      console.log(newsFromServer);
      setFormData(newsFromServer);
    })
    .catch(error =>{
      console.log(error);
    });
  }

  useEffect(getNewsById,[]);




  const handleChange = (e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  });

  const handleSubmit = (e =>{
    e.preventDefault();

    const newsToEdit = {
    id:formData.id,
    title:formData.title,
    smallDesc:formData.smallDesc,
    fullArticle:formData.fullArticle,
    datePublished:formData.datePublished,
    imageName:formData.imageName
    };


    const url = 'http://localhost:5164/api/News';

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newsToEdit)
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
    <div>
        {formData.fullArticle}
        </div>
  )
}


