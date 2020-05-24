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
            * {
              margin: 0;
              padding: 0;
            }
            body {
              font-family: 'Open Sans', sans-serif;
            }
          `}
        </style>
      </ThemeProvider>
    )
  }
}