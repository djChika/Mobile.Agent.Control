import initialState from '../initialState';

export default function (state = initialState.news, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
