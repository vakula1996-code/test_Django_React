import React,{useMemo, useState} from "react";
import ShortList from "./ShortList";

function  DateList() {
    const [date, setDate] = useState([
        {
          "id":1,"color":"red"
        },
        {
          "id":2,"color":"blue"
        }
      ])

    return(
        <div>
            <div>
                <ShortList date={date}/>
            </div>
            {/* <h1>{date.map(p => <h3>{p.color}</h3>)}</h1> */}
        </div>
    );
}

export default DateList;