import React,{useState, useEffect} from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import Head from './Component/Head'
import { Card, Container } from 'react-bootstrap';
import CrudHandler from '../Handler/CrudHandler'
const DataTable = () => {
  const [table, setTable] = useState([])
  useEffect(() => {
    const data = CrudHandler.getHistory()
    data.on('value', snapshot => {
      const dataTable = snapshot.val()
      const table = []
      for(let id in dataTable) {
        table.push(dataTable[id])
      }
      setTable(table)
      console.log(table)
    })
  }, []);
  
  const columns = [{
    dataField: 'id.no' ,
    text: 'Nomor', 
    formatter: (cell, row, rowIndex, formatExtraData) => {
      return rowIndex + 1;
    },
    sort: true
  },{
    dataField: 'Tanggal',
    text: 'Tanggal',
    sort: true
  }, {
    dataField: 'Jam',
    text: 'Waktu',
    sort: true
  },  {
    dataField: 'toFloat(Couter)',
    text: 'Counter',
    sort: true
  }, {
    dataField: 'NilaiGetaran ',
    text: 'Getaran(SR)',
    sort: true
  }, {
    dataField: 'NilaiKemiringan',
    text: 'Kemiringan(Derajat)',
    sort: true
  }
];

    return (
        <>
        <Head/>
        <Container>
            <h1 className='text-center'>Data History</h1>
        <Card fluid className="border-2 p-5">
        <BootstrapTable bootstrap4 keyField='id.no'data={ table } columns={ columns }  />
        </Card>
        </Container>
        </>
    )
}

export default DataTable
