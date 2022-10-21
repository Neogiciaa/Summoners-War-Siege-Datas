import React, { useState } from 'react'
import Datas from '../datas/Datas'
import './siege-data.css'

export default function SiegeData() {

  const [data, setData] = useState(null)

  const onChange = (e) => {
    console.log(e.target.files)
    console.log(e.target.files[0])
    const reader = new FileReader()
    reader.onload = async (e) => {
      console.log(e.target.result)
      setData(JSON.parse(e.target.result))
    }
    reader.readAsText(e.target.files[0])
  }

  return (
    <div className='SiegeDataBody'>
      <Datas data={data}/>
      <form>
        <input id="fileItem" type="file" accept=".json" onChange={onChange}></input>
      </form>
    </div>
  )
}
