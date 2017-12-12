import actionTypes from '../actions/actionTypes';

const initialState = {
  profile: {
    about: {
      name: null,
      age: null,
      phone: null,
      skype: null,
      email: null,
      skills: [],
      services: []
    },
    resume: {

    },
    contact: {

    }
  }
};

const init = (state, action) => ({
  ...state,
  profile: { ...action.profileData },
});


const app = (state = initialState, action = {}) => {
  console.log('action.type', action.type);
  switch (action.type) {
    case actionTypes.INIT: return init(state, action);
    default: return state;
  }
};

export default app;
