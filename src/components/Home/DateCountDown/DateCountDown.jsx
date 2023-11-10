import React, { useEffect, useState } from "react";
import { Container, TimeContainer } from "./DateCountDown.styles";

const DateCountDown = ({ date, isExpired }) => {
  const [countdown, setCountdown] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const endTime = new Date(date).getTime();

    const countdownInterval = setInterval(() => {
      const currentTime = new Date().getTime();

      let timeRemaining = endTime - currentTime;

      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        setCountdown("00d 00h 00m 00s");
        setDays("00");
        setHours("00");
        setMinutes("00");
        setSeconds("00");
      } else {
        const calculatedDays = Math.floor(
          timeRemaining / (1000 * 60 * 60 * 24)
        );
        const calculatedHours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const calculatedMinutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const calculatedSeconds = Math.floor(
          (timeRemaining % (1000 * 60)) / 1000
        );

        setCountdown(
          `${calculatedDays}d ${calculatedHours}h ${calculatedMinutes}m ${calculatedSeconds}s`
        );
        setDays(calculatedDays);
        setHours(calculatedHours);
        setMinutes(calculatedMinutes);
        setSeconds(calculatedSeconds);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <Container>
      <TimeContainer isExpired={isExpired}>{days}</TimeContainer>:
      <TimeContainer isExpired={isExpired}>{hours}</TimeContainer>:
      <TimeContainer isExpired={isExpired}>{minutes} </TimeContainer>:
      <TimeContainer isExpired={isExpired}>{seconds} </TimeContainer>
    </Container>
  );
};

export default DateCountDown;
