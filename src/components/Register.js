import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import * as yup from 'yup';
import { useHistory } from 'react-router-dom'

const initialFormData = {
    name: '',
    email: '',
    password: '',
    role: '',
}

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required').min(6, 'password must be at least 6 characters'),
    role: yup.string().required('Role is required')
})

function Register() {
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState(initialFormData);
    const [disabled, setDisabled] = useState(true);
    const { push } = useHistory()




    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => setErrors({
                ...errors,
                [name]:''
            }))
            .catch((err) => setErrors({
                ...errors,
                [name]: err.errors[0]
            }))
    }

    const change = (evt) => {
        const {value, name} = evt.target
        setFormErrors(name, value)
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const submit = (evt) => {
        evt.preventDefault();
        console.log(formData)
        const newForm = {
            display_name: formData.name,
            email: formData.email,
            password: formData.password,
            role: formData.role
        }
        console.log(newForm)
        axios.post('https://somethingg.herokuapp.com/api/auth/register', newForm)
            .then(res => {
                console.log(res)
                push("/login")
            }).catch(err => {
                console.log(err.message)
            })

        setFormData(initialFormData);
    }

    useEffect(() => {
        schema.isValid(formData).then(valid => setDisabled(!valid))
    }, [formData])


    return (
        <StyledRegister>
        <>
            <form onSubmit={submit}>
            
                <div className='inputs'>
                    <div className='validation'>{errors.name}</div>
                    <label>Name
                        <input type='name' name='name' value={formData.name} onChange={change} placeholder="Enter your name"/>
                    </label>

                    <div className='validation'>{errors.email}</div>
                    <label>Email
                        <input type='email' name='email' value={formData.email} onChange={change} placeholder='Enter your email'/>
                    </label>

                    <div className='validation'>{errors.password}</div>
                    <label>Password
                        <input type='password' name='password' value={formData.password} onChange={change} placeholder='Enter your password'/>
                    </label>

                    <div className='validation'>{errors.role}</div>
                    <label>Role
                        <select name='role' value={formData.role} onChange={change}>
                            <option value=''>--Select a Role--</option>
                            <option value='funder'>Funder</option>
                            <option value='fundraiser'>Fund-Raiser</option>
                        </select>
                    </label>
                    <button disabled={disabled}>Submit</button>
                </div>
        

            </form>
        </>
        </StyledRegister>
    )
}

const StyledRegister = styled.div`

    .inputs {
        font-size:1.5rem;
        color:white;
        display:flex;
        flex-direction:column;
        align-items:center;
        margin:2rem;
    }
    input {
        color:white;
        margin:1rem;
    }

    select {
        color:white;
        margin:1rem;
    }

    button {
        color:white;
        margin:1rem;
    }

    .validation{
        color:crimson;
    }



`

export default Register;