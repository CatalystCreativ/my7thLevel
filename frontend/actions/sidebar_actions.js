import * as SeventhLevelAPIUtil from '../util/seventh_level_api_util';

export const RECEIVE_SEVENTH_LEVELS = 'RECEIVE_SEVENTH_LEVELS';

const receiveSeventhLevels = seventhLevels => {
  return {
    type: RECEIVE_SEVENTH_LEVELS,
    seventhLevels
  };
};

export const fetchSeventhLevels = () => dispatch => {
  return SeventhLevelAPIUtil.fetchSeventhLevels()
    .then((seventhLevels) => dispatch(receiveSeventhLevels(seventhLevels)));
};
