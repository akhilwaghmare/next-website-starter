import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    primary: '#111111',
    secondary: '#222222',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <style jsx global>
          {`
            // Global styles here
            * {
              margin: 0;
              padding: 0;
            }
            body {
              font-family: 'Open Sans', sans-serif;
            }
            h1 {
              font-size: 3.815rem;
            }
            h2 {
              font-size: 3.052rem;
            }
            h3 {
              font-size: 2.441rem;
            }
            h4 {
              font-size: 1.953rem;
            }
            h5 {
              font-size: 1.563rem;
            }
            h6 {
              font-size: 1.25 rem;
            }
          `}
        </style>
      </ThemeProvider>
    )
  }
}