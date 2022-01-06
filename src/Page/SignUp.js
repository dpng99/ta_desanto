import React,{useState, useRef} from 'react'
import { useAuth } from '../Handler/LoginHandler'
import { useHistory } from 'react-router-dom';
import {Alert, Container, Form, Image, Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    async function handleSubmit(e){
        e.preventDefault(); 
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
          return setError('Passwword do not Match')
        }
        try {
          setError('')
          setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value)
        } 
        catch {
          setError('Failed to signUp')
        }
        setLoading(false)
      }
    return (
        <Container className='mt-3 d-flex justify-content-center align-items-center'>
        <Card  className="bg-success p-3 h-50 w-25"> 
            <h1 className='text-center'>Sign Up</h1>
            <Form onSubmit={handleSubmit} className="form-horizontal">
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' ref={emailRef}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' ref={passwordRef}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' ref={passwordConfirmRef}/>
                </Form.Group>
                <Container className='d-flex justify-content-center align-items-center'>
                    <Button type='submit' className='rounded-3 mt-3 m-3'>SignUp</Button>
                    <Button className='rounded-3 mt-3 m-3' href={'/login'}>Login</Button>
                    </Container>
            </Form>
        </Card>
    </Container>
        
    )
}

export default SignUp
