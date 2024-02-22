import React from 'react'
import Nav from './Compenents/NavBar/Nav'
import Banner from './Compenents/Banner/Banner'
import {Documentories, Romance, Trending, actions,comody,horror,originals} from './urls'
import './app.css'
import Rowpost from './Compenents/Rowpost/Rowpost'
const App = () => {
  return (
    <div>
      <Nav/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url={Trending} title='Trending' isSmall/>
      <Rowpost url={actions} title='Action' isSmall/>
      <Rowpost url={comody} title='Comody' isSmall/>
      <Rowpost url={horror} title='Horror' isSmall/>
      <Rowpost url={Romance} title='Romance' isSmall/>
      <Rowpost url={Documentories} title='Documentory' isSmall/>


    </div>
  )
}
export default App
