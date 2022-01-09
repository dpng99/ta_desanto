import React from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import Head from './Component/Head'
import { Card, Container } from 'react-bootstrap';
const columns = [{
    dataField: 'id.no' ,
    text: 'Nomor', 
    formatter: (cell, row, rowIndex, formatExtraData) => {
      return rowIndex + 1;
    },
    sort: true
  }, {
    dataField: 'lokasi',
    text: 'Lokasi',
    sort: true
  }, {
    dataField: 'date',
    text: 'Tanggal',
    sort: true
  }, {
    dataField: 'time',
    text: 'Waktu',
    sort: true
  }, {
    dataField: 'getaran',
    text: 'Getaran',
    sort: true
  }, {
    dataField: 'kemiringan',
    text: 'Kemiringan',
    sort: true
  }, {
    dataField: 'status',
    text: 'Status',
    sort: true
  }
];
const datafield = [{
    lokasi: 'jakarta',
    date: 'besok',
    time: '2bulan',
    getaran: 'getar',
    kemiringan: 'miring',
    status: 'status'

}]
const DataTable = () => {
    return (
        <>
        <Head/>
        <Container>
            <h1>Data</h1>
        <Card fluid className="border-2 p-5">
        <BootstrapTable bootstrap4 keyField='id.no'data={ datafield } columns={ columns }  />
        </Card>
        </Container>
        </>
    )
}

export default DataTable
