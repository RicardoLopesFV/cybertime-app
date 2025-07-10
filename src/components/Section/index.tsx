import { Article, Title, Text } from "./styles"
import * as S from "./styles"

export function Section() {
  return (
    <S.Section>
      <Article>
        <Title>O que é a Técnica Pomodoro?</Title>
        <Text>
          Na era da distração, manter o foco se tornou um superpoder.
          A Técnica Pomodoro é uma estratégia de produtividade criada por Francesco Cirillo nos anos 1980 que tem ajudado milhões de pessoas a trabalharem com mais concentração, menos estresse — e com resultados reais.

          Ela funciona de forma simples e eficiente: você divide seu tempo em ciclos de trabalho de 25 minutos de foco absoluto, seguidos por uma pausa curta de 5 minutos. A cada quatro ciclos, você faz uma pausa mais longa, de 15 a 30 minutos. Esse ritmo alternado entre esforço e recuperação ajuda o cérebro a manter a energia e evitar a fadiga.
        </Text>
      </Article>
      <Article>
        <Title>Como o Cybertime te ajuda?</Title>
        <Text>
          O Cybertime transforma essa técnica em uma experiência digital imersiva e estilosa, com um visual inspirado no universo neon/cyberpunk e foco total na simplicidade. Com ele, você:
        </Text>
        <Text>
          <ul>
            <li>
              Elimina distrações durante o foco;
            </li>
            <li>
              Ganha clareza mental com pausas planejadas;
            </li>
            <li>
              Acompanha seu desempenho com estatísticas;
            </li>
            <li>
              Mantém o ritmo com estilo.
            </li>
          </ul>
        </Text>
      </Article>
      <Article>
        <Title>Por que usar o Pomodoro?</Title>
        <Text>
          <ul>
            <li>
              Aumenta a concentração e o desempenho;
            </li>
            <li>
              Cria disciplina de forma natural;
            </li>
            <li>
              Combate a procrastinação;
            </li>
            <li>
              Respeita o tempo do seu cérebro.
            </li>
          </ul>
        </Text>
      </Article>
    </S.Section>
  )
}
