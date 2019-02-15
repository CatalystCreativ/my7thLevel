import { LEVELS } from './variables';
import LevelComponent from './seven_levels_content/level';
import Core from './seven_levels_content/core';
import React from 'react';

class SevenLevels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      phrase: "",
      core1: "",
      core2: "",
      core3: "",
      core4: "",
      core5: "",
      action1: "",
      question1: "",
      goal1: "",
      action2: "",
      question2: "",
      goal2: "",
      action3: "",
      question3: "",
      goal3: "",
      action4: "",
      question4: "",
      goal4: "",
      action5: "",
      question5: "",
      goal5: "",
      action6: "",
      question6: "",
      goal6: "",
      action7: "",
      question7: "",
      goal7: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.fetchSeventhLevel(this.props.seventhLevelId).then( (response) => {
      this.setState(response.seventhLevel);
    })
  }

  handleSubmit() {
    return (e) => {
      e.preventDefault();
      this.props.updateSeventhLevel(this.state);
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
          action={this.state[`action${i + 1}`]}
          question={this.state[`question${i + 1}`]}
          goal={this.state[`goal${i + 1}`]}
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
          action={this.state[`action${i + 1}`]}
          question={this.state[`question${i + 1}`]}
          goal={this.state[`goal${i + 1}`]}
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
          action={this.state[`action${i + 1}`]}
          question={this.state[`question${i + 1}`]}
          goal={this.state[`goal${i + 1}`]}
          update={this.update}
          handleSubmit={this.handleSubmit}
          levelConsts={LEVELS[i]}
          levelInfo={LEVELS[i + 1]}
          />
      );
    }

    return(
        <form className="" onSubmit={this.handleSubmit()}>
          <input type="text" onChange={this.update("title")} value={this.state.title}></input>

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
        <button className="btn btn-primary" type="submit">Save</button>
      </form>
    );
  }
}

export default SevenLevels;
