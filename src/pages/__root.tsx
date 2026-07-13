import { createRootRoute, HeadContent, Outlet } from '@tanstack/react-router'
import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const Route = createRootRoute({
  component: RootComponent,
  head: () => ({
    meta: [
      { title: 'Início - SyntaxWear ' }
    ]
  })
})

function RootComponent() {
  return (
    <>
      <React.Fragment>
        <HeadContent />
        <Header />
        <Outlet />
        <Footer />
      </React.Fragment>
    </>
  )
}
