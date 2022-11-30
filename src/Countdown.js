import { useEffect, useState } from "react"

export function Countdown() {
    const [time, setTime] = useState([12, 0, 0])

    const [hour, minute, second] = time

    const now = new Date()

    const endOfTimer = new Date()
    endOfTimer.setHours(hour, minute, second)

    const timeRemaining = new Date(endOfTimer - now)

    timeRemaining.setHours(timeRemaining.getHours() - 1)

    return (
        <div>{timeRemaining.getHours()} : {timeRemaining.getMinutes()} : {timeRemaining.getSeconds()}</div>
    )
}

export default function CountdownV2() {
    const [now, setNow] = useState(new Date)

    const target = new Date()
    target.setHours(12, 0, 0)

    if (target < now) {
        target.setDate(target.getDate() + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
          setNow(new Date());
        }, 100);
      
        return () => clearInterval(interval);
      }, []);

      const timeRemaining = new Date(Math.abs(target - now))
      timeRemaining.setHours(timeRemaining.getHours() - 1)

    return (
        <div> {timeRemaining.getHours()} : {timeRemaining.getMinutes()} : {timeRemaining.getSeconds()}</div>
    )
}