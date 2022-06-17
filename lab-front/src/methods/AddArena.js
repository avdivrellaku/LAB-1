import React, { useState } from 'react';
import { Form, Label, Input, Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
export const AddArena = () => {
    const [formData, setFormData] = useState(null);

    const handleChange = (e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    });

    const handleSubmit = (e => {
        e.preventDefault();
        const arenaToAdd = {
            name:formData.name,
            location:formData.location,
            team:formData.team,
            capacity:formData.capacity,
            imageName:formData.imageName
        };


        const url = 'http://localhost:5164/api/Arenas';

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(arenaToAdd)
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);
            })
            .catch(error => {
                console.log(error);
            });

        alert("Arena added successfully. Click OK to continue");
        { window.location.href = "/Arenas" }

    });














    return (
        <Form className='d-flex flex-column' style={{ marginLeft: 500, width: "30%" }}>




            <Input name='name' style={{ width: "100%" }} type="text" placeholder='Name' onChange={handleChange}></Input>
            <Label></Label>
            <Input name='location' style={{ width: "100%" }} type="text" placeholder='Location' onChange={handleChange}></Input>
            <Label></Label>
            <Input name='team' style={{ width: "100%" }} type="text" placeholder='Team' onChange={handleChange}></Input>
            <Label></Label>
            <Input name='capacity' style={{ width: "100%" }} type="number" placeholder='Capacity' onChange={handleChange}></Input>
            <Label></Label>
            <Input name='imageName' style={{ width: "100%" }} type="text" placeholder='Image Name' onChange={handleChange}></Input>
            <Label></Label>


            <Button onClick={handleSubmit} className='btn btn-primary  align-self-center' type="submit">
                Add
            </Button>
        </Form>

    )
}



