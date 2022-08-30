import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Create() {
    const [name, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const postData = () => {
        // console.log(firstName);
        // console.log(lastName);
        // console.log(city);
        // console.log(state);
        axios.post(`http://Localhost:8080/users`, {
            name,
            email,
            city,
            state
        }).then((res)=>{
            console.log(res.data)
        },(err)=>{

        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input placeholder='City' onChange={(e) => setCity(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>State</label>
                    <input placeholder='State' onChange={(e) => setState(e.target.value)}/>
                </Form.Field>
                {/* <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field> */}
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}