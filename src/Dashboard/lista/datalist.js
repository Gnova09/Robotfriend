import React from "react";
import DataTable from "react-data-table-component";


const data =[
    {
        id:1,
        name:'juan felipe',
        email:'fj@ljk.com',
        genero:'Masculino'
    },
    {
        id:2,
        name:'karen isabel',
        email:'fkarenj@ljk.com',
        genero:'Femenino'
    },
    {
        id:3,
        name:'Georges bueno',
        email:'bueno@klasj.com',
        genero:'Masculino'
    },
    {
        id:4,
        name:'arancha Nuñez',
        email:'an@ljk.com',
        genero:'Femenino'
    },
]

const columnas=[
   
    {
        name:'ID',
        selector: row => row.id
    },
    {
        name:'Nombre',
        selector: row => row.name
    },
    {
        name:'Email',
        selector: row => row.email
    },
    {
        name:'Genero',
        selector: row => row.genero
    },
    
]

  const Datalist =()=>{
      return(
        <div className="list">
            <DataTable
            columns={columnas}
            data={data}
            />
        </div>
    )

  }
  export default Datalist