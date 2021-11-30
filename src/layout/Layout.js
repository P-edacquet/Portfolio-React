import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
      <Header/>
      {/* affiche tous ce qui est à l'intérieur des balises <Layout></Layout> */}
      <main>{children}</main> 
      <Footer/>
    </Container>
  )
}
