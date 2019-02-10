import * as SeventhLevelAPIUtil from '../util/seventh_level_api_util';

export const RECEIVE_SEVENTH_LEVEL = 'RECEIVE_SEVENTH_LEVEL';
export const RECEIVE_SEVENTH_LEVELS = 'RECEIVE_SEVENTH_LEVELS';

const receiveSeventhLevels = seventhLevels => {
  return {
    type: RECEIVE_SEVENTH_LEVELS,
    seventhLevels
  };
};

const receiveSeventhLevel = seventhLevel => {
  return {
    type: RECEIVE_SEVENTH_LEVEL,
    seventhLevel
  };
};

const removeSeventhLevel = seventhLevelId => {
  return {
    type: DELETE_SEVENTH_LEVEL,
    seventhLevelId
  };
};

export const createSeventhLevel = (seventhLevelData) => dispatch => {
  return SeventhLevelAPIUtil.createSeventhLevel(seventhLevelData)
    .then((seventhLevel) => dispatch(receiveSeventhLevel(seventhLevel)));
};

export const fetchSeventhLevel = (id) => dispatch => {
  return SeventhLevelAPIUtil.fetchSeventhLevel(id)
    .then((seventhLevel) => dispatch(receiveSeventhLevel(seventhLevel)));
};

export const fetchNewestSeventhLevel = () => dispatch => {
  return SeventhLevelAPIUtil.fetchNewestSeventhLevel()
    .then((seventhLevel) => dispatch(receiveSeventhLevel(seventhLevel)));
};

export const fetchSeventhLevels = () => dispatch => {
  return SeventhLevelAPIUtil.fetchSeventhLevels()
    .then((seventhLevels) => dispatch(receiveSeventhLevels(seventhLevels)));
};

export const updateSeventhLevel = (seventhLevelData) => dispatch => {
  return SeventhLevelAPIUtil.updateSeventhLevel(seventhLevelData)
    .then((seventhLevel) => dispatch(receiveSeventhLevel(seventhLevel)));
};

export const deleteSeventhLevel = (id) => dispatch => {
  return SeventhLevelAPIUtil.deleteSeventhLevel(id)
    .then((id) => dispatch(removeSeventhLevel(id)));
};
