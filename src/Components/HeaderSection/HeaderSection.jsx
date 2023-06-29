import React from 'react'
import './HeaderSection.css'

function HeaderSection(props) {
  console.log(props.backgroundImage)
  return (
    <section className={`headerSection ${props.backgroundClass}`}>
      <div className="wrapper">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
    </section>
  )
}

export default HeaderSection