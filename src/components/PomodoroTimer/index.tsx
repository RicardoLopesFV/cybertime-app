import { useTimer } from "react-timer-hook";
import { Container, Timer, Buttons, Message } from "./styles";
import * as S from "./styles";

export function PomodoroTimer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 25 * 60); // 25 minutes

  const {
    seconds,
    minutes,
    isRunning,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn("Pomodoro finished!"),
    autoStart: false,
  });

    // Função resetar o timer
  const handleReset = () => {
    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + 25 * 60);
    restart(newTime, false); // false = não inicia automaticamente
  };

  // Função start/pause
  const handleStartPause = () => {
    if (isRunning) {
      pause();
    } else {
      resume();
    }
  };

  return (
    <Container>
      <Timer>
        <span>{minutes}</span>
        <span>:</span>
        <span>
          {seconds.toString().padStart(2, "0")}
        </span>
      </Timer>
      <Buttons>
        <S.Button $variant="start" onClick={handleStartPause}>
          {isRunning ? 'Pause' : 'Start'}
        </S.Button>
        <S.Button $variant="reset" onClick={handleReset}>
          Reset
        </S.Button>
      </Buttons>
      <Message>{isRunning ? 'Stay focused!' : 'Are you ready to focus?'}</Message>
    </Container>
  )
}
