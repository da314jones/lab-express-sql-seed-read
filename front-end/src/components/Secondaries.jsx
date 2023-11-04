import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Secondary from "./Secondary"
const API = process.env.REACT_APP_API;


export default function Secondaries() {
    const [state, setState] = useState([]);
    let { id }= useParams();

    useEffect(() => {
        fetch(`$[API]comp/&{id}/subComp`)
        .then(response => response.json())
        .then(responseJSON => setState(responseJSON.secondaries))
        .catch(error => console.log(error))
    }, [])

  return (
    <section className="secondaries" >
        {Secondaries.map((secondary) => {
            <Secondary key={secondary.id} secondary={secondary} />
  })}
      
    </section>
  )
}
