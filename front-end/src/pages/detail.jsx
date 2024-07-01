import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { data } from "../component/cards/card";

const Detail = () => {
  const {id} = useParams()
  const [getDatam,getSetDatam] =useState(null)
  useEffect(() => {
  
const foundData =data.find(item=>item.id === parseInt(id,10))  
    getSetDatam(foundData)
  }, [id])


  if(!getDatam){
    return <div>Loading...</div>
  }
  return (
    <div>

      <h1>{getDatam.name}</h1>
      <h1>{getDatam.age}</h1>

    </div>
  )
}

export default Detail