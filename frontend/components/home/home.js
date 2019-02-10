import { LEVELS } from './variables';
import LevelComponent from './home_content/levels';
import Core from './core';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.seventhLevel;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.fetchSeventhLevel(this.props.seventhLevelId);
  }

  handleSubmit(levelNum) {
    const attributes = {
      `action${levelNum}`: this.state[`action${levelNum}`],
      `question${levelNum}`: this.state[`question${levelNum}`],
      `goal${levelNum}`: this.state[`question${levelNum}`]
    }

    return (e) => {
      e.preventDefault();
      this.props.processForm(attributes)
    }
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    const core = (
      <Core
        update={this.update}
        handleSubmit={this.handleSubmit}/>
    );

    const stage1 = [];
    for(let i = 0; i < 3; i++) {
      stage1.push(
        <LevelComponent
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
          update={this.update}
          handleSubmit={this.handleSubmit}
          levelConsts={LEVELS[i]}
          levelInfo={LEVELS[i + 1]}
          />
      );
    }

    return(
      <div>
        <form class="" onClick={this.handleSubmit}>
          <input type="text" value={this.state.title}></input>
          <button></button>
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

export default Home;
