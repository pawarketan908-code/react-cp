import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className="parent">

      <Card user='Ketan' age={19} img='https://plus.unsplash.com/premium_photo-1712685912274-2483dade540f?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

      <Card user='Chirag' age={23} img='https://images.unsplash.com/photo-1774166487979-8a920ccd12ee?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

      <Card user='Ritikesh' age={18} img='https://plus.unsplash.com/premium_photo-1661962824371-cf2606b5f84e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />     
   
    </div>
  )
}

export default App


