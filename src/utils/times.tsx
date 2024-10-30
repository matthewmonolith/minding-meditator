type Time = {
  strTime: string;
  actualTime: Date;
};

export const times:Time[] = [
  { strTime: "05:00", actualTime: new Date(Date.now() + 5 * 60 * 1000) },
  { strTime: "10:00", actualTime: new Date(Date.now() + 10 * 60 * 1000) },
  { strTime: "15:00", actualTime: new Date(Date.now() + 15 * 60 * 1000) },
  { strTime: "20:00", actualTime: new Date(Date.now() + 20 * 60 * 1000) },
  { strTime: "30:00", actualTime: new Date(Date.now() + 30 * 60 * 1000) },
];
