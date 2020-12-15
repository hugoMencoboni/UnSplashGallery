
export const SEARCH_TERM = 'Search_term';
export const SEARCH_TERM_DEBOUNCED = 'Search_term_debounced';

export const SearchTermAction = term  => ({ type: SEARCH_TERM, payload: term });
export const SearchTermActionDebounced = term => ({ type: SEARCH_TERM_DEBOUNCED, payload: term });