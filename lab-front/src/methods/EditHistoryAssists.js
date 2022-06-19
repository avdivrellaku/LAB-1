import React, { useState, useEffect } from 'react';
import { Form, Label, Input, Button } from 'reactstrap';


export const EditHistoryAssists = (props) => {

    const [formData, setFormData] = useState([]);
    const HistoryAssistsId = (props.match.params.id);



    function getHistoryAssistsById() {
        const url = `http://localhost:5164/api/HistoryAssists/${HistoryAssistsId}`;
        fetch(url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(HistoryAssistsFromServer => {
                console.log(HistoryAssistsFromServer);
                setFormData(HistoryAssistsFromServer);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(getHistoryAssistsById, []);


    const handleChange = (e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    });


    const handleSubmit = (e => {
        e.preventDefault();
        const HistoryAssistsToEdit = {
            id:formData.id,
            nr:formData.nr,
            fullName:formData.fullName,
            points:formData.points,
            gamesPlayed:formData.gamesPlayed,
            turnovers:formData.turnovers,
            imageName:formData.imageName
        };

        const url = 'http://localhost:5164/api/HistoryAssists';

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(HistoryAssistsToEdit)
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);
            })
            .catch((error) => {
                console.log(error);
            })

        alert("History Assists updated successfully. Click OK to continue");
        { window.location.href = "/HistoryAssists" }

    }
    );






    return (
        <Form className='d-flex flex-column' style={{ marginLeft: 500, width: "30%" }}>


            <Input name='id' value={formData.id} readOnly style={{ width: "100%" }} type="text"></Input>
            <Label></Label>

            <Input name='nr' value={formData.nr} style={{ width: "100%" }} type="number"  onChange={handleChange}></Input>
            <Label></Label>
            <Input name='fullName' value={formData.fullName} style={{ width: "100%" }} type="text"  onChange={handleChange}></Input>
            <Label></Label>
            <Input name='points' value={formData.points} style={{ width: "100%" }} type="number" onChange={handleChange} ></Input>
            <Label></Label>
            <Input name='gamesPlayed' value={formData.gamesPlayed} style={{ width: "100%" }} type="number"  onChange={handleChange}></Input>
            <Label></Label>
            <Input name='turnovers' value={formData.turnovers} style={{ width: "100%" }} type="number"  onChange={handleChange}></Input>
            <Label></Label>
            <Input name='imageName' value={formData.imageName} style={{ width: "100%" }} type="text"  onChange={handleChange}></Input>
            <Label></Label>

            <Button onClick={handleSubmit} className='btn btn-success  align-self-center' type="submit">
                Save
            </Button>
        </Form>
    )
}


