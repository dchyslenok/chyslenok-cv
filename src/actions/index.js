import actionTypes from './actionTypes';
import profileData from '../defaultProfile';

const init = () => ({
  type: actionTypes.INIT,
  profileData,
});

export {
  init,
};
