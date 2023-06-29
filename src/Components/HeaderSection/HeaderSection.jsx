import React from 'react'
import './HeaderSection.css'

function HeaderSection(props) {
  console.log(props.backgroundImage)
  return (
    <section className={`headerSection ${props.backgroundClass}`}>
      <div className="wrapper">
        <h1>How it works?</h1>
        <h2>How CarinaBot makes profits</h2>
      </div>
    </section>
  )
}

export default HeaderSection