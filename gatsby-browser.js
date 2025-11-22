import React from 'react'
import { ThemeProvider } from './src/context/ThemeContext'
import './src/styles/global.css'
import 'katex/dist/katex.min.css'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
