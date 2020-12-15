import { combineEpics } from 'redux-observable';
import { DebounceSearch } from './Searchs/DebounceSearch.Epic';
 
export default combineEpics(DebounceSearch);