import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../login/login.css'
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';
import axios from 'axios';
import {isitEmpty} from '../../valid.js/signupValid'

function Login() {

  const [emailOrmobile, seTEmailPassword] = useState('')
  const [password, seTPassword] = useState('')
  const [errors, setError] = useState('')

async function handleClick(e){
  try{
    e.preventDefault()
    const userData = {emailOrmobile, password}
    if( isitEmpty({...userData, setError})){
      await axios.post('http://localhost:5000/user/login', userData);
      seTEmailPassword('')
      seTPassword('')
      errors('')
    }

  } catch(error){
    console.log('error during login handleclick: ', error);
  }
  
}



  return (
    <div className='formLogin' >
    <Form>
      <Container className='containerLogin'>

      <Form.Group className="mb-3" controlId="formBasicEmailOrMobile">
        <Form.Label>Email or Mobile Number</Form.Label>
        <Form.Control type="text" name='emailOrmobile' value={emailOrmobile} onChange={(e) =>{seTEmailPassword(e.target.value)}} placeholder="Enter your email or mobile number" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label> 
        <Form.Control type="password" name='Password' value={password}
        onChange={(e) =>{seTPassword(e.target.value)}} placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleClick} >
        Submit
      </Button>

        {errors? (
          <p className='errors'>{`! ${errors} `}</p>
        ) : null}

      </Container>
    </Form>
    </div>
  );
}

export default Login;