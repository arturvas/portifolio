import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>About</Title>
    <Paragraph type="main">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi
      perferendis nulla dolores, impedit, exercitationem quisquam mollitia
      soluta dolor vitae optio maxime itaque debitis! Itaque iusto quia non
      saepe dolor!
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=arturvas&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=arturvas&layout=compact&langs_count=6&theme=dracula" />
    </GithubSection>
  </section>
)

export default About
