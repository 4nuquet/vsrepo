export const initialState: UsersState = {
  firstUser: undefined,
  secondUser: undefined,
};

export interface UsersState {
  firstUser?: User;
  secondUser?: User;
}

export interface User {
  login: string;
  name: string;
  bio?: string;
  followers: string;
  public_repos: string;
  blog?: string;
  twitter_username?: string;
}
