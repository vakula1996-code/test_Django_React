import React from 'react'
import { Link } from 'react-router-dom';

export default function FormOutput(props) {
    return (
        <>
        <table className='table table-striped'>
            <thead>
            <tr>
                <th>
                #
                </th>
                <th>
                Серійний номер
                </th>
                <th>
                Тип техніки
                </th>
                <th>
                Назва техніки
                </th>
                <th>
                Одиниці виміру
                </th>
                <th>
                Ціна
                </th>
            </tr>
            </thead>
            <tbody>
            {props.date.map((p,index)=>(
            <tr>
                <th>
                {index+1}
                </th>
                <td>
                <Link to={p.serial_number}>{p.serial_number}</Link>
                </td>
                <td>
                {p.type_techn.name}
                </td>
                <td>
                {p.name_technicians.name}
                </td>
                <td>
                {p.unit.name}
                </td>
                <td>
                {p.price}
                </td>
            </tr>
            ))}
            </tbody>
      </table>  
        </>
    )
}
