import Title from '../../components/Title'
import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import { Description, ThemeButton, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Artur Vasconcelos</Title>
      <Paragraph type="secondary" fontSize={16}>
        arturvas
      </Paragraph>
      <Description type="main" fontSize={12}>
        Front-end Engineer
      </Description>
      <ThemeButton>Change theme</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
