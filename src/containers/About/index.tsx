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
      <img
        src="https://github-readme-stats.vercel.app/api?username=arturvas&custom_title=Artur%20Vasconcelos%20GitHub%20Stats&show_icons=true&card_width=440&hide=contribs&theme=github_dark_dimmed&"
        alt="GitHub Stats"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=arturvas&theme=github_dark_dimmed&layout=compact&card_width=350"
        alt="Top Programming Languages"
      />
    </GithubSection>
  </section>
)

export default About
