import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Container, GithubLink, GithubIcon } from "./styles"
import * as S from "./styles"

export function Footer() {
  return (
    <S.Footer>
      <Container>
          <p>
            <GithubIcon>
              <FontAwesomeIcon icon={faGithub} />
            </GithubIcon>
            Made by
            <GithubLink href="https://github.com/RicardoLopesFV" target="_blank">
              <span>Ricardo Lopes</span>
            </GithubLink>
          </p>
          <p>
            &copy; Cybertime 2025. All Rights Reserved
          </p>
      </Container>
    </S.Footer>
  )
}
