import React from 'react'
import LeftFooter from '../components/footer/LeftFooter'
import Header from '../components/header/Header'
import LeftMenu from '../components/menu/Menu'
import ConfigRoutes from '../routes/ConfigRoutes'

const Index = () => {
  return (
    <div className="container" style={{ display: "flex"}}>
      <div style={{position: "relative"}}>
        <LeftMenu />
        <LeftFooter/>
      </div>
      <div>
        <Header />
        <ConfigRoutes />
      </div>

    </div>
  )
}

export default Index