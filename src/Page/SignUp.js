import React,{useState, useRef} from 'react'
import { useAuth } from '../Handler/LoginHandler'
import { useHistory } from 'react-router-dom';
import {Alert, Container, Form, Image, Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import BG from '../Img/bgBaru.jpg'
import Brand from '../Img/brandMbl.png'
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
      <Container fluid className='p-0'>
        <Image src={BG} className='img-fluid position-absolute'/>
      <Container fluid className='m-0 align-items-center p-5 h-100' style={{ backgroundImage: `url(${BG})` }}>
        <Container className='m-5 d-flex justify-content-center align-items-center p-5'>
        <Card  fluid className=" p-5 h-75 w-50 bg-opacity-50 bg-black rounded-3">
        <Image className='img-fluid w-25 h-25 align-self-center' src={Brand}/> 
            <h1 className='text-center fs-2 text-white'>Sign Up</h1>
            <Form onSubmit={handleSubmit} className="form-horizontal">
            {error && <Alert variant="danger">{error}</Alert>}
                <Form.Group>
                    <Form.Label className='fs-6 text-white'>Username</Form.Label>
                    <Form.Control type='text' ref={emailRef}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='fs-6 text-white'>Password</Form.Label>
                    <Form.Control type='password' ref={passwordRef}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='fs-6 text-white'>Password Confirmation</Form.Label>
                    <Form.Control type='password' ref={passwordConfirmRef}/>
                </Form.Group>
                <Container className='d-flex justify-content-center align-items-center'>
                    <Button type='submit' className='rounded-3 mt-3 m-3'>SignUp</Button>
                    
                    </Container>
            </Form>
            <span className=' text-white justify-content-center align-items-center d-flex fs-6'>
                         Sudah punya akun? Login <a href='/login'> disini</a>
                         </span>
        </Card>
    </Container>
    </Container>
    </Container>
        
    )
}

export default SignUp
