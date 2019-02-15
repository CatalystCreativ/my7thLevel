import { connect } from 'react-redux';
import SevenLevels from './seven_levels';
import { fetchSeventhLevel } from '../../actions/seventh_level_actions';

const msp = ({ entities, errors }, ownProps) => {
  const seventhLevelId = ownProps.match.params.seventhLevelId;
  const curSeventhLevel = entities.seventhLevels[seventhLevelId] || {};
  const seventhLevel = curSeventhLevel;
  return {
    errors: errors.session,
    seventhLevelId,
    seventhLevel,
  };
};

const mdp = (dispatch) => {
  return {
    fetchSeventhLevel: (id) => dispatch(fetchSeventhLevel(id)),
  };
};

export default connect(msp, mdp)(SevenLevels);
