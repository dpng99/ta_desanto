import React,{useState, useEffect} from 'react'
import { Container, Card, Form, Button, ToggleButton, Modal, Row, Col  } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CrudHandler from '../Handler/CrudHandler'
import Head from './Component/Head'
const AddData = () => {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [form, setForm] = useState({
        latitude: '',
        longitude: ''
    })
    useEffect(() => {
        const Data = CrudHandler.getData()
        Data.on('value', snapshot => {
            
        })
       
    }, [])
    const handleSubmit = (e) =>{
        e.preventDefault()
        CrudHandler.create(getAlat,setChild,formData)
      
        
    }
    return (
        <>
        <Head/>
        <Container className='mt-5 justify-content-center align-items-center d-flex'>
        <Card className="p-3 h-50 w-50">
         <Form onSubmit={handleSubmit}>
             <Form.Group>
                 <Form.Label className='text-black font-monospace size-2'>Latitude</Form.Label>
                 <Form.Control type="text"   />
             </Form.Group>
             <Form.Group>
                 <Form.Label className='text-black font-monospace size-2'>Longitude</Form.Label>
                 <Form.Control type="text"/>
             </Form.Group>

             <Button type='submit' value="submit">Submit</Button>
         </Form>
         </Card>
         </Container>
         </>
    )
}

export default AddData
