import { SearchTermActionDebounced, SEARCH_TERM } from './SearchTerm.Action';
import { ofType } from 'redux-observable';
import { map, debounceTime } from "rxjs/operators";

export const DebounceSearch  = action$ => action$.pipe(
  ofType(SEARCH_TERM),
  debounceTime(500),
  map(action => SearchTermActionDebounced(action.payload))
);