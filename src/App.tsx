import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { PomodoroTimer } from "./components/PomodoroTimer"

function App() {
  return (
    <>
      <Header />
      <main>
        <PomodoroTimer />
      </main>
      <Footer/>
    </>
  )
}

export default App
