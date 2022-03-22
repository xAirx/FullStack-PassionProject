export interface Context {
  token?: string;
  actor?: string;
}

export interface Greeting {
  id: string;
  message: string;
  greeter: string;
}
