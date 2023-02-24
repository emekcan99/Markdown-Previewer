import React from 'react'
import "./styles.css"
import {QuestionOutlined} from "@ant-design/icons" 
import { useDispatch, useSelector } from 'react-redux'
import { setHelp } from '../../redux/markdownSlice'

function Heading() {
    
    const dispatch = useDispatch()

    const data = useSelector((state) => state.markdownSlice.isHelp)


  return (
    <div>
        
        <h1 className='heading'>Markdown Previewer</h1>
        <QuestionOutlined  className='help' onClick={()=> dispatch(setHelp(!data))} />
        
    </div>
  )
}

export default Heading