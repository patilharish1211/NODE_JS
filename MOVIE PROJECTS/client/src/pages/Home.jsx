import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'

const Home= () => {
  return (
    <>
      <div class="main-container">
        <div class="blur-circle1">

        </div>
        <div class="blur-circle2">

        </div>
          
      <div class="landing-page">
        <div class="content">
          <div class="container">
            <div class="info">
              <h1>Looking For Inspiration</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil</p>
              
              <Link to="/about"><button>About</button>
              </Link>
            </div>
            <div class="image">
              <img class="main-image" src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-using-vr-tech-3840669-3202986.png?f=webp" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Home