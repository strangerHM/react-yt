import React from 'react'
import Card from './components/card'
const App = () => {
  return (
    <div className='parent'>
    <Card user ='aman' age={25} />       {/* properties */}
    </div>
  )
}

export default App

/* props is data sent from parent to child
we can send data from parent to child but not the other way aroundv */