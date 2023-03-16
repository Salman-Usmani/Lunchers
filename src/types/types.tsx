export type Tlunchers = {
  name: string;
  lunchMoney: number;
  withKhana: boolean;
};
export type TitemProps = {
  item: Tlunchers;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

export type ILunchers = {
  lunchers: Tlunchers[];
  setLunchers: React.Dispatch<React.SetStateAction<Tlunchers[]>>;
  todayLunchers: Tlunchers[];
  setTodayLunchers: React.Dispatch<React.SetStateAction<Tlunchers[]>>;
};
