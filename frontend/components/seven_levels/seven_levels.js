import { LEVELS } from './variables';
import LevelComponent from './seven_levels_content/level';
import Core from './seven_levels_content/core';
import React from 'react';

class SevenLevels extends React.Component {
  constructor(props) {
    super(props);

    let { title, seventhLevel, seventhLevelId } = this.props;
    let [core, level1, level2, level3, level4, level5, level6, level7] = seventhLevel;
    let { phrase, core1, core2, core3, core4, core5 } = core;

    this.state = {
      title,
      phrase,
      core1,
      core2,
      core3,
      core4,
      core5,
      a1: level1.action,
      a2: level2.action,
      a3: level3.action,
      a4: level4.action,
      a5: level5.action,
      a6: level6.action,
      a7: level7.action,
      q1: level1.question,
      q2: level2.question,
      q3: level3.question,
      q4: level4.question,
      q5: level5.question,
      q6: level6.question,
      q7: level7.question,
      g1: level1.goal,
      g2: level2.goal,
      g3: level3.goal,
      g4: level4.goal,
      g5: level5.goal,
      g6: level6.goal,
      g7: level7.goal,
    };

    // this.state = { seventhLevel: this.props.seventhLevel };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.fetchSeventhLevel(this.props.seventhLevelId);
  }

  handleSubmit() {
    return (e) => {
      e.preventDefault();
      this.props.processForm(this.state);
    };
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    const core = (
      <Core
        phrase={this.state.phrase}
        core1={this.state.core1}
        core2={this.state.core2}
        core3={this.state.core3}
        core4={this.state.core4}
        core5={this.state.core5}
        update={this.update}
        handleSubmit={this.handleSubmit}
      />
    );

    const stage1 = [];
    for(let i = 0; i < 3; i++) {
      stage1.push(
        <LevelComponent
          key={i}
          action={this.state[`a${i + 1}`]}
          question={this.state[`q${i + 1}`]}
          goal={this.state[`g${i + 1}`]}
          update={this.update}
          handleSubmit={this.handleSubmit}
          levelConsts={LEVELS[i]}
          levelInfo={LEVELS[i + 1]}
          />
      );
    }

    const stage2 = [];
    for(let i = 3; i < 5; i++) {
      stage2.push(
        <LevelComponent
          key={i}
          action={this.state[`a${i + 1}`]}
          question={this.state[`q${i + 1}`]}
          goal={this.state[`g${i + 1}`]}
          update={this.update}
          handleSubmit={this.handleSubmit}
          levelConsts={LEVELS[i]}
          levelInfo={LEVELS[i + 1]}
          />
      );
    }

    const stage3 = [];
    for(let i = 5; i < 7; i++) {
      stage3.push(
        <LevelComponent
          key={i}
          action={this.state[`a${i + 1}`]}
          question={this.state[`q${i + 1}`]}
          goal={this.state[`g${i + 1}`]}
          update={this.update}
          handleSubmit={this.handleSubmit}
          levelConsts={LEVELS[i]}
          levelInfo={LEVELS[i + 1]}
          />
      );
    }

    return(
      <div>
        <form className="" onClick={this.handleSubmit()}>
          <input type="text" onChange={this.update("title")} value={this.state.title}></input>
        </form>

        <div>
          <h2>Start with Seven</h2>
          {core}
        </div>
        <div>
          <h2>Stage 1</h2>
          {stage1}
        </div>

        <div>
          <h2>Stage 2</h2>
          {stage2}
        </div>

        <div>
          <h2>Stage 3</h2>
          {stage3}
        </div>
      </div>
    );
  }
}

export default SevenLevels;
