import React from 'react'
import './Header.css'

export default function header(props) {
  return (
    <div>
      <div className="header">
        <div className="header-title">{props.text}
        </div>
      </div>
    </div>
  )
}
