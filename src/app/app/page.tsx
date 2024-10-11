"use client";

import React, { useMemo, useState } from "react";

interface Time {
  hour: number;
  minutes: number;
}

interface Routine {
  start: Time;
  end: Time;
  color: string;
}

const sleep = {
  start: {
    hour: 2,
    minutes: 0,
  },
  end: {
    hour: 6,
    minutes: 30,
  },
  color: "#ca8a04",
}

export default function App() {
  const [routines, setRoutines] = useState<(Routine | null)[]>([sleep]);

  return (
    <>
      <div className="flex-1 flex justify-center items-center">
        <PlannerGraphic routines={routines} />
      </div>
      <div className="flex-1">
      </div>
    </>
  );
}

function PlannerGraphic({ routines }: { routines: (Routine | null)[] }) {
  return (
    <div className="w-5/6 aspect-square rounded-full border border-foreground relative flex justify-center items-center">
      {routines.filter(x => !!x).map((routine, index) => {
        const startPoint = routine.start.hour + (routine.start.minutes / 60);
        const endPoint = routine.end.hour + (routine.end.minutes / 60);

        const angle = (startPoint * 360) / 24;

        return (
          <div
            key={`r-${index}`}
            className="absolute top-0"
            style={{
              width: "calc(100% / 12)",
              height: "100%",
              backgroundColor: routine.color,
              left: `calc(50%)`,
              transform: `rotate(${angle}deg)`
            }}
          />
        );
      })}
      {HOURS.map((hr, i) => (
        <div
          key={hr}
          className="absolute w-[1px] h-full bg-foreground top-0 left-1/2"
          style={{ transform: `rotate(${(i * 360) / 24}deg)` }}
        >
          <span className="absolute -top-6 -left-5">{hr}</span>
        </div>
      ))}
      <div className="w-1/2 aspect-square rounded-full border border-foreground bg-foreground" />
    </div>
  );
}

const HOURS = [
  "12AM",
  "1AM",
  "2AM",
  "3AM",
  "4AM",
  "5AM",
  "6AM",
  "7AM",
  "8AM",
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
  "6PM",
  "7PM",
  "8PM",
  "9PM",
  "10PM",
  "11PM",
];

