import { SEARCH_TERM_DEBOUNCED } from './SearchTerm.Action';

const ChangeThemeReducer = (state = { theme: 'random' }, action) => {
  switch (action.type) {
    case SEARCH_TERM_DEBOUNCED:
      return { theme: action.payload };

    default:
      return state;
  }
};

export default ChangeThemeReducer;