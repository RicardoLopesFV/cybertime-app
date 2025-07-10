import { useState } from "react"
import { Container, Input } from "./styles"

export const Task: React.FC = () => {
  const [taskName, setTaskName] = useState('')

  return (
    <Container>
      <Input
        type="text"
        value={taskName}
        placeholder="Digite aqui o seu foco de hoje ..."
        onChange={(e) => setTaskName(e.target.value)}
        spellCheck={false}
        autoComplete="off"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            (e.target as HTMLInputElement).blur()
          }
        }}
      />
    </Container>
  )
}
