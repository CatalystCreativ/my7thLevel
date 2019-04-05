import { LEVELS, CORE_TOP_TEXT } from './variables';
import LevelComponent from './seven_levels_content/level';
import SidebarContainer from '../nav/sidebar/sidebar_container';
import NavContainer from '../nav/nav_container'
import Core from './seven_levels_content/core';
import React from 'react';

class SevenLevels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
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

  componentDidUpdate() {
    const { seventhLevelId: urlId } = this.props.match.params;
    if(`${urlId}` !== `${this.state.id}`) {
      this.props.fetchSeventhLevel(urlId)
        .then(response => this.setState(response.seventhLevel));
    }
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
      <div>
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
       </div>
      );
    }

    return(
      <div className="wrapper">
        <SidebarContainer />


        <div className="" id="content">
          <header>
            <NavContainer />
          </header>

          <form className='pt-4' onSubmit={this.handleSubmit()}>
            <div className='container mb-4'>
              <div className='row justify-content-center flex-row'>
                <input type="text" className='form-control p-4 col-md-5 col-sm-10' onChange={this.update('title')} id='title1' value={this.state.title} placeholder='What is your Seventh Level Title?'/>
                <button className='btn btn-back ml-3 px-4' type='submit'>Save</button>
              </div>
            </div>

            <div className='jumbotron jumbotron-fluid'>
              <div className='container'>
                <h1 className='display-4'>START WITH SEVEN</h1>
                <hr className='my-4'/>
                <p className='lead'>{CORE_TOP_TEXT}</p>
              </div>
            </div>

            <div className='accordion' id='accordionSevenLevels'>

              <div className='card'>
                <div className='card-header card-full-border text-center' id='headingCore'>
                  <h2 className='mb-0'>
                    <a className='btn' role='button' data-toggle='collapse' href='#core'>
                      CORE
                    </a>
                  </h2>

                  <div id='core' className='collapse show' aria-labelledby='headingCore' data-parent='#accordionSevenLevels'>
                    <div className='card-body'>
                      {core}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 1 */}
              {stage1}
              {/* Stage 2 */}
              {stage2}
              {/* Stage 3 */}
              {stage3}

            </div>
          </form>
        </div>
      </div>
    );
  }
}


export default SevenLevels;
