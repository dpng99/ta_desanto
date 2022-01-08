import React,{useState, useRef} from 'react'
import { Container, Button, Form, Card, Image, Alert} from 'react-bootstrap'
import { useAuth } from '../Handler/LoginHandler'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router-dom';
import BG from '../Img/gambar3.jpg'
import Brand from '../Img/brandMbl.png'
const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState(null)
    const {login} = useAuth();
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    async function handleSubmit(e){
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await login (emailRef.current.value, passwordRef.current.value)
            history.push('/')
            
        } catch {
            setError('Failed to login')
        }
        setLoading(false)
    } 
    return (
        <Container fluid className='m-0 align-items-center p-5 h-100' style={{ backgroundImage: `url(${BG})` }}>
        <Container className='m-5 d-flex justify-content-center align-items-center p-5'>
            
            <Card fluid className=" p-5 h-75 w-50 bg-opacity-50 bg-black rounded-3" > 
            <Image className='img-fluid w-25 h-25 align-self-center' src={Brand}/>
                <h1 className='text-center fs-2 text-white'>LOGIN</h1>
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
                    <Container className='d-flex justify-content-center align-items-center'>
                    <Button type='submit' className='rounded-3 mt-3 m-3'>Login</Button>
                    <Button className='rounded-3 mt-3 m-3' href={'/signup'}>SignUp</Button>
                    </Container>
                </Form>
            </Card>
        </Container>
        </Container>
    )
}

export default Login
