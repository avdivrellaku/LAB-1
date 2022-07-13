
import React,{useState,setState,useEffect} from 'react';
import { Link } from 'react-router-dom';


export const ReadMore = (props) => {
  
  const [formData, setFormData] = useState([]);
  const newsId = (props.match.params.id);
  const title = (props.match.params.imageName);

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





  return (
    <div  style={{width:"60%",fontFamily:"Calibri",marginLeft:"25%"}} className='d-flex flex-column flex-wrap' >

      <h3 style={{fontSize:"35px",fontWeight:"bolder"}} >{formData.title}</h3>



        <h4 style={{fontSize:"25px",fontWeight:"500"}}>{formData.smallDesc}</h4>

        <p style={{fontSize:"18px",fontWeight:"300"}}>{formData.fullArticle}</p>

        <Link to="/" onClick={() => {window.location.href="/"}}>Return to Main Page</Link>

        

       


        </div>
  )
}


