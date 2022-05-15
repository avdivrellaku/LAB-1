
import React, { useState, useEffect } from 'react';
import { Form, Label, Input, Button } from 'reactstrap';


export const EditTeam = (props) => {

    const [teamById, setTeamById] = useState([]);
    const teamId = (props.match.params.id);
    const teamName = (props.match.params.name);
    const teamOwner = (props.match.params.owner);
    const teamCoach = (props.match.params.coach);
    const teamDivision = (props.match.params.division);
    const teamConference = (props.match.params.conference);
    


    function getTeamById() {
        const url = `http://localhost:5164/api/Team/${teamId}`;
        fetch(url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(teamFromServer => {
                console.log(teamFromServer);
                setTeamById(teamFromServer);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(getTeamById, []);


    const initialFormData = {
        id: teamId,
        name: teamName,
        owner: teamOwner,
        coach: teamCoach,
        division: teamDivision,
        conference: teamConference

    };

    const [formData, setFormData] = useState(initialFormData);


    const handleChange = (e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    });





    const handleSubmit = (e => {
        e.preventDefault();
        const teamToEdit = {
            id:formData.id,
            name:formData.name,
            owner:formData.owner,
            coach:formData.coach,
            division:formData.division,
            conference:formData.conference
        };

        const url = 'http://localhost:5164/api/Team';

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(teamToEdit)
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);
            })
            .catch((error) => {
                console.log(error);
            })

        alert("Team updated successfully. Click OK to continue");
        { window.location.href = "/teamHome" }

    }
    );






    return (
        <Form className='d-flex flex-column' style={{ marginLeft: 500, width: "30%" }}>


            <Input name='id' value={formData.id} readOnly style={{ width: "100%" }} type="text" placeholder={teamById.id}></Input>
            <Label></Label>

            <Input name='name' value={formData.name} style={{ width: "100%" }} type="text"  onChange={handleChange}></Input>
            <Label></Label>
            <Input name='owner' value={formData.owner} style={{ width: "100%" }} type="text"  onChange={handleChange}></Input>
            <Label></Label>
            <Input name='coach' value={formData.coach} style={{ width: "100%" }} type="text" onChange={handleChange} ></Input>
            <Label></Label>
            <Input name='division' value={formData.division} style={{ width: "100%" }} type="text"  onChange={handleChange}></Input>
            <Label></Label>
            <Input name='conference' value={formData.conference} style={{ width: "100%" }} type="text"  onChange={handleChange}></Input>
            <Label></Label>

            <Button onClick={handleSubmit} className='btn btn-success  align-self-center' type="submit">
                Save
            </Button>
        </Form>
    )
}

