import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { PomodoroTimer } from "./components/PomodoroTimer"
import { Section } from "./components/Section"
import { Task } from "./components/Task"
import { Title } from "./components/Title"

function App() {
  return (
    <>
      <Header />
      <main>
        <Title />
        <PomodoroTimer />
        <Task />
      </main>
      <Section />
      <Footer/>
    </>
  )
}

export default App
