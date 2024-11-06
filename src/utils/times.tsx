type Time = {
  strTime: string;
  actualTime: Date;
};

export const mainTimes: Time[] = [
  { strTime: "05:00", actualTime: new Date(Date.now() + 5 * 60 * 1000) },
  { strTime: "10:00", actualTime: new Date(Date.now() + 10 * 60 * 1000) },
  { strTime: "15:00", actualTime: new Date(Date.now() + 15 * 60 * 1000) },
  { strTime: "20:00", actualTime: new Date(Date.now() + 20 * 60 * 1000) },
  { strTime: "30:00", actualTime: new Date(Date.now() + 30 * 60 * 1000) },
];

export const reminderTimes = ["00:05", "00:30", "01:00", "01:30", "02:00"];

export const newTimeStamp = (timeStamp: string, forReset: boolean = false) => {
  const [minutes, seconds] = timeStamp.split(":").map(Number);
  const now = new Date();
  now.setSeconds(
    now.getSeconds() + minutes * 60 + seconds + (forReset ? 1 : 0)
  );
  return now;
};
