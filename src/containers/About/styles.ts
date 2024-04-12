import styled from 'styled-components'

export const GithubSection = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  display: flex;
  justify-content: space-between;

  img {
    height: 100%;
    width: auto;
  }

  @media (max-width: 768px) {
    display: block;
    height: auto;
    width: 100%;

    img {
      height: auto;
      width: 100%;
    }
  }
`
