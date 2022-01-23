import React,{useState, useEffect} from 'react'
import { Container, Card, Form, Button, ToggleButton, Modal, Row, Col  } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CrudHandler from '../Handler/CrudHandler'
import Head from './Component/Head'
const AddData = () => {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    const [formData, setFormData] = useState({
        latitude: '',
        longitude: ''
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        CrudHandler.createDataLocation(formData)
      
        
    }
    return (
        <>
        <Head/>
        <Container className='mt-5 justify-content-center align-items-center d-flex'>
        <Card className="p-3 h-50 w-50">
         <Form onSubmit={handleSubmit}>
             <h1>Data Lokasi Baru</h1>
             <Form.Group>
                 <Form.Label className='text-black font-monospace size-2'>Latitude</Form.Label>
                 <Form.Control type="text" onChange={(e)=> setFormData({...formData, latitude: e.target.value})} value={formData.latitude} />
             </Form.Group>
             <Form.Group>
                 <Form.Label className='text-black font-monospace size-2'>Longitude</Form.Label>
                 <Form.Control type="text" onChange={(e)=> setFormData({...formData, longitude: e.target.value})} value={formData.longitude}/>
             </Form.Group>

             <Button type='submit' value="submit">Submit</Button>
         </Form>
         </Card>
         </Container>
         </>
    )
}

export default AddData
