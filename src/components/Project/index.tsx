import Paragraph from '../Paragraph'
import Title from '../Title'

import { Card, BtnLink } from './styles'

const Project = () => {
  return (
    <Card>
      <Title>Task List Project</Title>
      <Paragraph type="secondary">Task List made with VueJS</Paragraph>
      <BtnLink>View</BtnLink>
    </Card>
  )
}

export default Project
