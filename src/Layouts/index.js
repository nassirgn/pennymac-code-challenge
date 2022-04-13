import React from 'react'
import TopBar from './TopBar'

const Layouts = ({children}) => {
  return (
    <div>
        <TopBar />
        <div>{children}</div>
    </div>
  )
}

export default Layouts