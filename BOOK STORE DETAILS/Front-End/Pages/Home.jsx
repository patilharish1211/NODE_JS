import React from 'react'
import Footer from '../components/Footer'
import './Home.css'

function Home() {
  return (
    <>
      <div className="book-container">
        <div className="book">
            <div className="page2">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime atque rem dolores iusto quos. Suscipit dolorum alias provident laudantium earum, assumenda beatae! Quos earum esse ex repellat accusamus, omnis id!</p>
            </div>
            <div className="page3">2 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime atque rem dolores iusto quos. Suscipit dolorum alias provident laudantium earum, assumenda beatae! Quos earum esse ex repellat accusamus, omnis id!</p></div>
            <div className="page4">3 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime atque rem dolores iusto quos. Suscipit dolorum alias provident laudantium earum, assumenda beatae! Quos earum esse ex repellat accusamus, omnis id!</p></div>
            <div className="page5">4 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime atque rem dolores iusto quos. Suscipit dolorum alias provident laudantium earum, assumenda beatae! Quos earum esse ex repellat accusamus, omnis id!</p></div>
            <div className="page6">5 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime atque rem dolores iusto quos. Suscipit dolorum alias provident laudantium earum, assumenda beatae! Quos earum esse ex repellat accusamus, omnis id! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum deserunt mollitia voluptatem ullam laborum optio hic iusto doloribus cumque aspernatur, ut, accusamus corporis incidunt, illo provident exercitationem. Esse, voluptates blanditiis.</p></div>
            <div className="page7">6 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime atque rem dolores iusto quos. Suscipit dolorum alias provident laudantium earum, assumenda beatae! Quos earum esse ex repellat accusamus, omnis id!</p></div>
            <div className="page8">
                <h1>NIKS NIMJE</h1>
                <h3><small>SINCE </small>2005</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias sed facilis qui? Exercitationem, velit. Voluptas consequatur maxime aliquid aliquam id nemo, alias deleniti nisi praesentium ullam natus a dolor eaque?
                Lorem,oluptas consm, nam sit voluptatibus maxime illum non eius eaque assumenda vitae tempora distinctio totam, atque minima rerum, nisi velit labore?</p>
                <h4></h4>
            </div>

        
        </div>
        
    </div>
    <div className="title-name">
      <h2 style={{color:"white"}}>Books are the hub of <br /> all information and knowledge.</h2>
      <a href='#'>See More </a>
    </div>
    <br />
    <br />
   
      <Footer/>
    </>


  )
}

export default Home