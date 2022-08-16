import { ActionType } from "../action-types";

interface SerachRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SerachRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SerachRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

interface ClearSearchRepositories {
  type: ActionType.CLEAR_SERACH_REPOSITORIES;
}
// action types
export type Action =
  | SerachRepositoriesAction
  | SerachRepositoriesSuccessAction
  | SerachRepositoriesErrorAction
  | ClearSearchRepositories;
