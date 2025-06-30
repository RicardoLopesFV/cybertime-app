import { useState } from "react";
import { useTimer } from "react-timer-hook";
import { Container, Options, Timer, Buttons, Message } from "./styles";
import * as S from "./styles";

type TimerMode = "pomodoro" | "shortBreak" | "longBreak";

const TIMER_CONFIGS = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
} as const;

const TIMER_LABELS = {
  pomodoro: "Pomodoro",
  shortBreak: "Short Break",
  longBreak: "Long Break",
} as const;

export function PomodoroTimer() {
  const [currentMode, setCurrentMode] = useState<TimerMode>("pomodoro");

  const createTimeStamp = (mode: TimerMode) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + TIMER_CONFIGS[mode] * 60);
    return time;
  }

  const {
    seconds,
    minutes,
    isRunning,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: createTimeStamp(currentMode),
    onExpire: () => console.warn(`${TIMER_LABELS[currentMode]} finished!`),
    autoStart: false,
  });

  // Função resetar o timer
  const handleReset = () => {
    const newTime = createTimeStamp(currentMode);
    restart(newTime, false);
  };

  // Função start/pause
  const handleStartPause = () => {
    if (isRunning) {
      pause();
    } else {
      resume();
    }
  };

  // Função para mudar a opção selecionada
  const handleOptionClick = (mode: TimerMode) => {
    if (!isRunning) {
      setCurrentMode(mode);
      const newTime = createTimeStamp(mode);
      restart(newTime, false);
    }
  }

  const getMessage = () => {
    if (isRunning) {
      switch (currentMode) {
        case "pomodoro":
          return "Stay focused!";
        case "shortBreak":
          return "Take a short break!";
        case "longBreak":
          return "Enjoy your long break!";
        default:
          return "Stay focused!";
      }
    } else {
      return "Are you ready to focus?";
    }
  }

  return (
    <Container>
        <Options>
          <li
            onClick={() => handleOptionClick("pomodoro")}
            style={
              { 
                cursor: isRunning ? "not-allowed" : "pointer",
                color: isRunning ? "#555" : "#00F0AA",
              } 
            }
            className={
              `${currentMode === "pomodoro" ? "active" : ""} ${isRunning ? "disabled" : ""}`
            }
          >
            Pomodoro
          </li>
          <li
            onClick={() => handleOptionClick("shortBreak")}
            style={ 
              { 
                cursor: isRunning ? "not-allowed" : "pointer",
                color: isRunning ? "#555" : "#00F0AA"
              } 
            }
            className={
              `${currentMode === "pomodoro" ? "active" : ""} ${isRunning ? "disabled" : ""}`
            }
          >
            Short Break
          </li>
          <li
            onClick={() => handleOptionClick("longBreak")}
            style={
              {
                cursor: isRunning ? "not-allowed" : "pointer",
                color: isRunning ? "#555" : "#00F0AA"
              }
            }
            className={
              `${currentMode === "pomodoro" ? "active" : ""} ${isRunning ? "disabled" : ""}`
            }
          >
            Long Break
          </li>
        </Options>
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
      <Message>{getMessage()}</Message>
    </Container>
  )
}
