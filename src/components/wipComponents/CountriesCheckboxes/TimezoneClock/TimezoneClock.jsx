import React, { useState, useEffect } from "react";
import moment from "moment";
import "./TimezoneClock.css";

const convertTimezoneToOffset = (timezone) => {
  const match = timezone.match(/UTC([+-]\d{1,2}):?(\d{2})?/);
  if (!match) return 0;

  const hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2] || "0", 10);

  return hours * 60 + (hours < 0 ? -minutes : minutes);
};

const TimezoneClock = ({ timezone }) => {
  const offset = convertTimezoneToOffset(timezone);
  const [currentTime, setCurrentTime] = useState(
    moment().utcOffset(offset).format("hh:mm:ss A")
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().utcOffset(offset).format("hh:mm:ss A"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [offset]);

  return <p className="time-display">{currentTime}</p>;
};

export default TimezoneClock;