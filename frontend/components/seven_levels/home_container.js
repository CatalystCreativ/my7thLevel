import { connect } from 'react-redux';
import SevenLevels from './seven_levels';
import { fetchNewestSeventhLevel } from '../../actions/seventh_level_actions';

const msp = ({ entities, errors }, ownProps) => {
  const seventhLevelId = ownProps.match.params.seventhLevelId;
  const curSeventhLevel = entities.seventhLevels[seventhLevelId] || {};

  const core = {
    phrase: curSeventhLevel.phrase,
    core1:  curSeventhLevel.core1,
    core2:  curSeventhLevel.core2,
    core3:  curSeventhLevel.core3,
    core4:  curSeventhLevel.core4,
    core5:  curSeventhLevel.core5
  };

  const level1 = {
    action: curSeventhLevel.action1,
    question: curSeventhLevel.question1,
    goal: curSeventhLevel.goal1
  };

  const level2 = {
    action: curSeventhLevel.action2,
    question: curSeventhLevel.question2,
    goal: curSeventhLevel.goal2
  };

  const level3 = {
    action: curSeventhLevel.action3,
    question: curSeventhLevel.question3,
    goal: curSeventhLevel.goal3
  };

  const level4 = {
    action: curSeventhLevel.action4,
    question: curSeventhLevel.question4,
    goal: curSeventhLevel.goal4
  };

  const level5 = {
    action: curSeventhLevel.action5,
    question: curSeventhLevel.question5,
    goal: curSeventhLevel.goal5
  };

  const level6 = {
    action: curSeventhLevel.action6,
    question: curSeventhLevel.question6,
    goal: curSeventhLevel.goal6
  };

  const level7 = {
    action: curSeventhLevel.action7,
    question: curSeventhLevel.question7,
    goal: curSeventhLevel.goal7
  };

  const seventhLevel = [
    core,
    level1,
    level2,
    level3,
    level4,
    level5,
    level6,
    level7
  ];

  return {
    errors: errors.session,
    seventhLevelId,
    title: curSeventhLevel.title,
    seventhLevel,
    notes: curSeventhLevel.notes,
  };
};

const mdp = (dispatch) => {
  return {
    fetchSeventhLevel: () => dispatch(fetchNewestSeventhLevel()),
  };
};

export default connect(msp, mdp)(SevenLevels);
