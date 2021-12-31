import React,{useMemo,useState} from 'react'



export default function Short(date, sort, nameFilter) {
    const shortList = useMemo(()=>{
        if(sort === false)
            return date
        return date.filter((f) => {
            let s = String(f[nameFilter])
            return s.includes(sort);
        });
      }, [sort, date])


    return (shortList)
}
