import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
