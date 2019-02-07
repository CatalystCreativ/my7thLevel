import * as SeventhLevelAPIUtil from '../util/session_api_util';

export const RECEIVE_SEVENTH_LEVEL = 'RECEIVE_SEVENTH_LEVEL';

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

export const updateSeventhLevel = (seventhLevelData) => dispatch => {
  return SeventhLevelAPIUtil.updateSeventhLevel(seventhLevelData)
    .then((seventhLevel) => dispatch(receiveSeventhLevel(seventhLevel)));
};

export const deleteSeventhLevel = (id) => dispatch => {
  return SeventhLevelAPIUtil.deleteSeventhLevel(id)
    .then((id) => dispatch(removeSeventhLevel(id)));
};
