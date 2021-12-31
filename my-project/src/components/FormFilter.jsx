import React,{useState} from 'react'
import Short from './Short'

export default function FormFilter(props) {
    const [sortName1, setShortName1] = useState('')
    const [sortName2, setShortName2] = useState('')
    let filterName1 = Short(props.date,sortName1,'color')
    let filterName2 = Short(filterName1,sortName2,'id')

    
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
            <div>
                {filterName2.map((p)=> <h4>{p.color}</h4>)}
            </div>
        </>
    )
}
