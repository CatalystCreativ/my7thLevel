import { LEVELS } from './variables';
import LevelComponent from './seven_levels_content/level';
import SidebarContainer from '../nav/sidebar/sidebar_container';
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
      <div className="row">
        <SidebarContainer />

        <div className="col-9 pt-4">
          <form className="" onSubmit={this.handleSubmit()}>
            <input type="text" onChange={this.update("title")} value={this.state.title}></input>
            <button className="btn btn-primary" type="submit">Save</button>


          <div style={{backgroundColor: 'gray'}} id="carousel-levels" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" style={{height: '1300px'}}>
              {core}

              <div className="carousel-item h-100" data-interval="9999999999999">
                <div className="h-100">
                  <h2>Stage 1</h2>
                </div>
              </div>
              {stage1}

              <div className="carousel-item h-100"  data-interval="9999999999999">
                <div className="h-100">
                  <h2>Stage 2</h2>
                </div>
              </div>
              {stage2}

              <div className="carousel-item h-100" data-interval="9999999999999">
                <div className="h-100">
                  <h2>Stage 3</h2>
                </div>
              </div>
              {stage3}

            </div>
              <a className="carousel-control-prev" href="#carousel-levels" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carousel-levels" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default SevenLevels;
