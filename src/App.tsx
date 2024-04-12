import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import GlobalStyle, { Container } from './styles'
import darkTheme from './themes/dark'
import lightTheme from './themes/light'

function App() {
  const [areUsingDarkTheme, setAreUsingDarkTheme] = useState(true)

  function changeTheme() {
    setAreUsingDarkTheme(!areUsingDarkTheme)
  }

  return (
    <ThemeProvider theme={areUsingDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
