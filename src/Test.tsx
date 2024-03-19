import styled from 'styled-components'

type ButtonProps = {
  main: boolean
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.main ? 'green' : 'blue')};
`

function Test() {
  return <Button main>Clique aqui</Button>
}

export default Test
