import { levels } from './variables';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.seventhLevel;
    // this.state = {
    //   question1: this.props.seventhLevel.question1,
    //   action1: this.props.seventhLevel.action1,
    //   goal1: this.props.seventhLevel.goal1,
    //   question2: this.props.seventhLevel.question2,
    //   action2: this.props.seventhLevel.action2,
    //   goal2: this.props.seventhLevel.goal2,
    //   question3: this.props.seventhLevel.question3,
    //   action3: this.props.seventhLevel.action3,
    //   goal3: this.props.seventhLevel.goal3,
    //   question4: this.props.seventhLevel.question4,
    //   action4: this.props.seventhLevel.action4,
    //   goal4: this.props.seventhLevel.goal4,
    //   question5: this.props.seventhLevel.question5,
    //   action5: this.props.seventhLevel.action5,
    //   goal5: this.props.seventhLevel.goal5,
    //   question6: this.props.seventhLevel.question6,
    //   action6: this.props.seventhLevel.action6,
    //   goal6: this.props.seventhLevel.goal6,
    //   question7: this.props.seventhLevel.question7,
    //   action7: this.props.seventhLevel.action7,
    //   goal7: this.props.seventhLevel.goal7,
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount(){
    this.props.fetchSeventhLevel();
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

    return(
      <LevelComponent
          update={this.update}
          handleSubmit={this.handleSubmit}
          levels={levelConsts}/>
    );
  }
}

export default Home;

// const stage1 = [];
// for(let i = 1; i < 4; i++) {
//   stage1.push(
//     <LevelComponent
//     update={this.update}
//     handleSubmit={this.handleSubmit}
//     level={levels[i]}/>
//   );
// }
// const stage2 = [];
// for(let i = 4; i < 6; i++) {
//   const level = `level${i}`;
//   stage2.push(
//     <LevelComponent
//     update={this.update}
//     handleSubmit={this.handleSubmit}
//     level={levels[i]}/>
//   );
// }
// const stage3 = [];
// for(let i = 6; i < 8; i++) {
//   const level = `level${i}`;
//   stage3.push(
//     <LevelComponent
//     update={this.update}
//     handleSubmit={this.handleSubmit}
//     level={levels[i]}/>
//   );
// }
//
// <div>
//   <div>
//     <h2>Stage1</h2>
//     {stage1}
//   </div>
//
//   <div>
//     <h2>Stage2</h2>
//     {stage2}
//   </div>
//
//   <div>
//     <h2>Stage3</h2>
//     {stage3}
//   </div>
// </div>
