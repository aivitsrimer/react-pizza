
// Action Creator
export const setSortBy = (name) => ({
  type: 'SET_SORT_BY',
  payload: name,
});

// Action
// const setSortBy = ({
//     type: 'SET_SORT_BY',
// });

export const setCategory = (categoryIndex) => ({
  type: 'SET_CATEGORY',
  payload: categoryIndex,
});