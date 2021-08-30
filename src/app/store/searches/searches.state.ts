export const initialState: SearchesState = {
  repositories: [],
};

export interface SearchesState {
  repositories?: Repository[];
}

export interface Repository {
  id: number;
  name: string;
  owner: { login: string };
  language: string;
  watchers: string;
  stargazers_count: number;
  created_at: string;
}
