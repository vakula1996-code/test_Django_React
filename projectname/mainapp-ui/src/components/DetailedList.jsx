import React, { useEffect,useState } from 'react';
import axios from 'axios';

function DetailedList() {
  const [people, setPeople] = useState([
    {
        "id": 1,
        "id_doc": {
            "id": 1,
            "number_doc": "100",
            "name_doc": "Наряд",
            "date_doc": "2021-12-02"
        },
        "subdivision_which": {
            "id": 1,
            "subdivisions": "1799"
        },
        "сategory": {
            "id": 1,
            "categorys": "2"
        },
        "amount": 1,
        "expense": 0.0,
        "remainder": 1.0,
        "receipts": 1.0,
        "id_technique": 1
    },
    {
        "id": 2,
        "id_doc": {
            "id": 2,
            "number_doc": "100/10",
            "name_doc": "Наряд",
            "date_doc": "2021-12-13"
        },
        "subdivision_which": {
            "id": 1,
            "subdivisions": "1799"
        },
        "сategory": {
            "id": 1,
            "categorys": "2"
        },
        "amount": 1,
        "expense": 0.0,
        "remainder": 1.0,
        "receipts": 1.0,
        "id_technique": 2
    },
    {
        "id": 3,
        "id_doc": {
            "id": 3,
            "number_doc": "1111",
            "name_doc": "Наряд",
            "date_doc": "2021-12-13"
        },
        "subdivision_which": {
            "id": 1,
            "subdivisions": "1799"
        },
        "сategory": {
            "id": 2,
            "categorys": "3"
        },
        "amount": 1,
        "expense": 0.0,
        "remainder": 1.0,
        "receipts": 0.0,
        "id_technique": 1
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
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>
              #
            </th>
            <th>
              Підрозділ
            </th>
            <th>
              Категорія
            </th>
            <th>
              Кількість
            </th>
            <th>
              Документ
            </th>
          </tr>
        </thead>
        <tbody>
        {people.map((p,index)=>(
          <tr >
            <th>
              {index+1}
            </th>
            <td>
              {p.subdivision_which.subdivisions}
            </td>
            <td>
              {p.сategory.categorys}
            </td>
            <td>
              {p.remainder}
            </td>
            <td>
              {p.id_doc.name_doc}
            </td>

          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default DetailedList;
