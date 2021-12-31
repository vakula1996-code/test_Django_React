import React, { useEffect,useMemo,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FormFilter from './Forms/FormFilter';



function ListEquipment() {
  const [searcheQuery , setSearcheQuery] = useState('')
  const [date, setDate] = useState([
    {
        "id": 1,
        "type_techn": {
            "id": 1,
            "name": "АРМ"
        },
        "name_technicians": {
            "id": 1,
            "name": "АРМ 01"
        },
        "unit": {
            "id": 1,
            "name": "шт"
        },
        "serial_number": "1010",
        "price": 1000.0
    },
    {
        "id": 2,
        "type_techn": {
            "id": 1,
            "name": "АРМ"
        },
        "name_technicians": {
            "id": 2,
            "name": "АРМ 02"
        },
        "unit": {
            "id": 1,
            "name": "шт"
        },
        "serial_number": "11",
        "price": 100000.0
    },
    {
        "id": 3,
        "type_techn": {
            "id": 1,
            "name": "АРМ"
        },
        "name_technicians": {
            "id": 2,
            "name": "АРМ 02"
        },
        "unit": {
            "id": 1,
            "name": "шт"
        },
        "serial_number": "123",
        "price": 123123.0
    }
])



  // useEffect(()=>{
  //   axios({
  //     method: "GET",
  //     url: "http://127.0.0.1:8000/api/tech"
  //   }).then(response=>{
  //     setPeople(response.data)
  //   })
  // },[])

  return (
    <div >
     <FormFilter date={date}/>
    </div>
  );
}

export default ListEquipment;
