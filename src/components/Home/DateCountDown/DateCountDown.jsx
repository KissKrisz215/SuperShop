import React, { useEffect, useState } from "react";
import { Container, TimeContainer } from "./DateCountDown.styles";

const DateCountDown = ({ date, isExpired }) => {
  const [countdown, setCountdown] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set the end time
    const endTime = new Date(date).getTime();

    // Update the countdown every second
    const countdownInterval = setInterval(() => {
      // Get the current time
      const currentTime = new Date().getTime();

      // Calculate the remaining time
      let timeRemaining = endTime - currentTime;

      // If the countdown has reached zero, display "0 days 0 hours 0 minutes 0 seconds"
      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        setCountdown("00d 00h 00m 00s");
        setDays("00");
        setHours("00");
        setMinutes("00");
        setSeconds("00");
      } else {
        // Calculate days, hours, minutes, and seconds
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

        // Display the countdown
        setCountdown(
          `${calculatedDays}d ${calculatedHours}h ${calculatedMinutes}m ${calculatedSeconds}s`
        );
        setDays(calculatedDays);
        setHours(calculatedHours);
        setMinutes(calculatedMinutes);
        setSeconds(calculatedSeconds);
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(countdownInterval);
  }, []); // empty dependency array ensures the effect runs only once on mount

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
