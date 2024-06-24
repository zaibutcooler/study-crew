import React from 'react'
import '@/styles/landing.css'

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps): JSX.Element {
  return <React.Fragment>{children}</React.Fragment>
}
