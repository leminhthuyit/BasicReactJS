export interface InitState {
  job: string;
  content: string;
  jobs: Jod[];
}

interface Jod {
  job: string;
  content: string;
}

export interface PayloadAction {
  [key: string]: any;
}

export interface Actions {
  type: string;
  payload: PayloadAction;
}
