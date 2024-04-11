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
        src="https://github-readme-stats.vercel.app/api?username=arturvas&custom_title=Artur%20Vasconcelos%20GitHub%20Stats&show_icons=true&hide=stars&theme=transparent&bg_color=2ea0431a&ring_color=39d353&border_color=2ea04366&text_color=2f81f7&icon_color=39d353&title_color=2f81f7"
        alt="GitHub Stats"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=arturvas&show_icons=true&theme=transparent&layout=compact&bg_color=2ea0431a&border_color=2ea04366&text_color=2f81f7&icon_color=238636&title_color=2f81f7"
        alt="Top Programming Languages"
      />
    </GithubSection>
  </section>
)

export default About
