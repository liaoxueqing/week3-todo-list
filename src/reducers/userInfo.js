const SET_USER = 'SET_USER';
// const EDIT_TODO = "EDIT_TODO";
// const COMPLETE_TODO = "COMPLETE_TODO";

const initialState = {
  id: 0,
  name: 'shery'
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        id: action.id,
        name: action.name
      };
    default:
      return state;
  }
}
