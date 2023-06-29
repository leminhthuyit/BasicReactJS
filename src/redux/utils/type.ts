export interface InitialState {
  job: string;
  content: string;
  jobs: Jod[];
  todos: any[];
  status: string;
  error: string;
}

export interface Jod {
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
