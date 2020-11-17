//////IMPORTS
import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import * as yup from "yup";
import { useState, useEffect } from 'react';

////INITITAL STATES
const initialFormErrors = {
    name: "",
    email: "",
    password: "",
    select: "",
  }
  
const initialFormValues = {
    name:"",
    email: "",
    password: "",
    select: "",
}

///////SCHEMA
const schema = yup.object().shape({
    name: yup
        .string()
        .required("Name is Required")
        .min(2, "Name must be 2 chars long"),
    email: yup
        .string()
        .required("Email is Required")
        .min(2, "Email must be 2 chars long"),
    password: yup
        .string()
        .required("Password is Required")
        .min(6, "Password must be 6 chars long"),
    // select: yup
    //     .string()
    //     .oneOf(["user", "fundraiser", "funder"], "Must Select User Type"),

});



const Example = (props) => {
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [disabled, setDisabled] = useState(true);

    const onChange = (evt) => {
        const { name, value } = evt.target;
        inputChange (name, value);
      };

    const inputChange = (name, value) => {
        yup
          .reach(schema, name)
          .validate(value)
          .then(() => {
            setFormErrors({
              ...formErrors,
              [name]: "",
            })
          })
          .catch((err) => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0],
            })
          })
          setFormValues({
            ...formValues,
            [name]: value, 
          });
      };
      useEffect(() => {
        schema.isValid(formValues).then((valid) => {
          setDisabled(!valid);
        });
      }, [formValues]);
      console.log(formErrors);
    

    return (
        <Form 
        style={{ color: 'white' }}
            values={formValues}
            change={onChange}
            disabled={disabled}
            errors={formErrors}
        >
            <div style={{ color: 'red' }}>
            <div>{formErrors?.name || ""}</div>
            <div>{formErrors?.email || ""}</div>
            <div>{formErrors?.password || ""}</div>
            <div>{formErrors?.select || ""}</div>
            </div>
            <FormGroup>
                <Label for="exampleName">Name</Label>
                <Input type="ext" onChange={onChange} name="name" id="exampleName" placeholder="Please enter your name here" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Email/Username</Label>
                <Input type="email" onChange={onChange} name="email" id="exampleEmail" placeholder="Please enter your email here" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" onChange={onChange} name="password" id="examplePassword" placeholder="Enter A Password" />
            </FormGroup>
            {/* <FormGroup>
                <Label for="exampleSelect">Account Type</Label>
                <Input type="select" onChange={onChange} name="select" id="exampleSelect">
                    <option value="">- Select an option -</option>
                    <option value="user">User</option>
                    <option value="fundraiser">Fundraiser</option>
                    <option value="funder">Funder</option>
                </Input>
            </FormGroup> */}
            <Button disabled={disabled}>Submit</Button>
        </Form>
    );
}

export default Example;