import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { PomodoroTimer } from "./components/PomodoroTimer"
import { Task } from "./components/Task"

function App() {
  return (
    <>
      <Header />
      <main>
        <Task />
        <PomodoroTimer />
      </main>
      <Footer/>
    </>
  )
}

export default App
