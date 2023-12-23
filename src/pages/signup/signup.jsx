import Button from 'react-bootstrap/Button';
// import '../../bootstrap/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import '../signup/signup.css'
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';
import { isValidate } from '../../valid.js/signupValid';
import axios from 'axios'

function Signup() {

const [Fullname, setFullName] = useState('')
const [Username, setUsername] = useState('')
const [EmailOrMobile, setEmailOrMobile] = useState('')
const [error, setError] = useState('')
const [Password, setPassword] = useState('')
const [passErrors, setPassError] = useState('')


function passwordValid(value) {
const passwordRegex = /^(?!\s*$).+/;
  if (!passwordRegex.test(value)) {
    setPassError('Password is required.')
  } else {
    if (!/[A-Z]/.test(value)) {
      setPassError('Password must contain at least one uppercase letter.')
      return;
    }
    if (!/[a-z]/.test(value)) {
      setPassError('Password must contain at least one lowercase letter.')
      return;
    }
    if (!/\d/.test(value)) {
      setPassError('Password must contain at least one digit.')
      return;
    }
    if (!/[@$#!%*?&]/.test(value)) {
      setPassError('Password must contain at least one special character (@$!%*?&).')
      return;
    }
    if (value.length<6) {
      setPassError('Password must contain at least 6 characters')
      return
    }
  } 
  setPassError('')
  return ;
}


const handlePassword = async (value) =>{
  setPassword(value)
  passwordValid(value)
};

const handleClick = async (e) =>{
  try{
  e.preventDefault()
  const userData = {Fullname, Username, EmailOrMobile, Password}
  // const isValidate = await signupValid(userData)
  if (await isValidate({...userData, seter : setError})) {
    await axios.post('http://localhost:5000/user/signup', userData);
    setFullName('')
    setUsername('')
    setEmailOrMobile('')
    setPassword('')
    setError('')
    setPassError('')
  } else {
    console.log("didn't go through Axios");
  }
  } catch(error){
    console.log('error during handleClick: ',error);
  }
}



  return (
    <div className='form'>
      <Container className='containerSignup'>
        <p>Sign up to see photos and videos from your friends.</p>
        <Form className='formm'>

          <Form.Group className="mb-1" controlId="formBasicFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name='Fullname' value={Fullname} onChange={(e) =>{setFullName(e.target.value)}} placeholder="Enter your full name" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name='Username' value={Username} onChange={(e) =>{setUsername(e.target.value)}} placeholder="Enter a username" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicEmailOrMobile">
            <Form.Label>Email or Mobile Number</Form.Label>
            <Form.Control type="text" name='EmailOrMobile' value={EmailOrMobile} onChange={(e) =>{setEmailOrMobile(e.target.value)}} placeholder="Enter your email or mobile number" />
            <Form.Text className="text-muted">
              We'll never share your email or mobile number with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={Password} onChange={(e) =>{handlePassword(e.target.value)}} name='Password' placeholder="Password" />
          </Form.Group>
         
    {passErrors? (
      <p className='error'>{passErrors}</p>
    ):null}
      
          <Button className='buttonSubmit' variant="primary" type='submit' onClick={handleClick} >
            Sign Up
          </Button>

          {error? (
              <p className='error'>{`! ${error}`}</p>
          ) : null}

        </Form>
      </Container>
    </div>
  );
}

export default Signup;






// const handleClick = async (e) =>{
//   e.preventDefault()
//   await axios.post('http://localhost:5000/user/signup', {Fullname, Username, EmailOrMobile, Password});  
//   setFullName('')
//   setUsername('')
//   setEmailOrMobile('')
//   setPassword('')
// }