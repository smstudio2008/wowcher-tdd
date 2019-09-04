import { IAction } from './../interface/action';

export function createActionApiFetchSuccess(search: Content[]): IAction {
  return {
    type: CONTENT_RESULT_SUCCESS,
    payload: search
  };
}

export function searchActionFetchByName(search: Content[], fileName: string): IAction {
  const keys = 'name';
  const filterSearch = search.filter((item) =>
    keys.split(',').some((key) => item.hasOwnProperty(key) && new RegExp(fileName, 'gi').test(item[key]))
  );

  return {
    type: CONTENT_RESULT_SEARCH,
    payload: filterSearch
  };
}

export function searchActionFetchByFilter(search: Content[]): IAction {
  const getSize = 'size';

  const filterSearchBySize = search.sort((a: any, b: any) => {
    if (a[getSize] < b[getSize]) {
      return -1;
    } else if (a[getSize] > b[getSize]) {
      return 1;
    } else {
      return 0;
    }
  });

  return {
    type: CONTENT_RESULT_SEARCH_FILTER,
    payload: filterSearchBySize
  };
}
