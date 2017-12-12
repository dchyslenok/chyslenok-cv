import actionTypes from './actionTypes';
import profileData from '../profile';

const init = () => ({
  type: actionTypes.INIT,
  profileData,
});

export {
  init,
};
