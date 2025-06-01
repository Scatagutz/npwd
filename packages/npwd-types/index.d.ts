export interface MessageEvents {
  'bank:transfer': {
    account: string;
    amount: number;
  };
}

export interface AppEvents {
  'bank:opened': void;
}
