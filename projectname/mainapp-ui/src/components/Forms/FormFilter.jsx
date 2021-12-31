import React,{useState} from 'react'
import Sort from '../Sort'
import FormOutput from './FormOutput'

export default function FormFilter(props) {
    const [sortName1, setShortName1] = useState('')
    const [sortName2, setShortName2] = useState('')
    let filterName1 = Sort(props.date,sortName1,'serial_number')
    let filterName2 = Sort(filterName1,sortName2,'price')

    
    return (
        <>
            <input
                placeholder="Поиск"
                value={sortName1}
                onChange={e=>setShortName1(e.target.value)} 
            />    
            <input
                placeholder="Поиск"
                value={sortName2}
                onChange={e=>setShortName2(e.target.value)} 
            />  
            <FormOutput date={filterName2}/>
        </>
    )
}
