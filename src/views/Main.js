import React from 'react'
import Post from '../components/Post'
import '../App.css'

function Main({ profile, desc }) {
  const personal = profile
  console.log(personal)

  return (
    <div>
      <div>
        <Post profile={personal} />
      </div>
    </div>
  )
}

export default Main
