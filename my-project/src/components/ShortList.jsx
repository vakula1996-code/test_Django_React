import React,{useState,useMemo} from 'react'
import FormFilter from './FormFilter'
import Short from './Short'

export default function ShortList(props) {
    const [sort, setShort] = useState([])
    const [sort_2, setShort_2] = useState('')
    //   const shortList = useMemo(()=>{
    //     if(sort === false)
    //         return props.date
    //     return props.date.filter(f => {
    //         let d = String(f.color)
    //         return d.includes(sort);
    //     });
    //   }, [sort, props.date])

    //   const shortList_2 = useMemo(()=>{
    //     if(sort_2 === false)
    //         return shortList
    //     return shortList.filter(f => {
    //         let d = String(f.id)
    //         return d.includes(sort_2);
    //     });
    //   }, [sort_2, shortList])
    let nameFilter = ['color','id']
    const filterColor = Short(props.date,sort,nameFilter[0])
    const filterId = Short(filterColor,sort_2,nameFilter[1])
    console.log(filterId)

    const shortList = useMemo(()=>{

    },[])


    return (
        <div>
            <FormFilter date={props.date}/>
        </div>
    )
}
