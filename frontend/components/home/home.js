import { levels } from './variables';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.seventhLevel;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    const stage1 = [];
    for(let i = 0; i < 3; i++) {
      stage1.push(
        <LevelComponent
        update={this.update}
        handleSubmit={this.handleSubmit}
        level={levels[i]}/>
      );
    }
    const stage2 = [];
    for(let i = 3; i < 5; i++) {
      const level = `level${i}`;
      stage2.push(
        <LevelComponent
        update={this.update}
        handleSubmit={this.handleSubmit}
        level={levels[i]}/>
      );
    }
    const stage3 = [];
    for(let i = 5; i < 7; i++) {
      const level = `level${i}`;
      stage3.push(
        <LevelComponent
        update={this.update}
        handleSubmit={this.handleSubmit}
        level={levels[i]}/>
      );
    }
    return(
      <div>
        <div>
          <h2>Stage1</h2>
          {stage1}
        </div>

        <div>
          <h2>Stage2</h2>
          {stage2}
        </div>

        <div>
          <h2>Stage3</h2>
          {stage3}
        </div>
      </div>
    );
  }
}

export default Home;
