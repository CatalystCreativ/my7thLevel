import React from 'react';

class Level extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // EX RETURN OBJ = {action${levelInfo.levelNum}: action.value}

    const { levelNum, levelTitle, levelDescription, actionDescription, actionExamples, questionDescription, questionExamples, goalDescription, goalExamples } = this.props.levelConsts;

    return (
      <>
        <div className="row d-flex justify-content-around mb-5">
          <div className="card-deck">
            <div className="card text-white bg-dark">
              <div className="card-body">
                {levelNum}: {levelTitle}
              </div>
            </div>

            <div className="card text-white bg-dark">
              <div className="card-body">
                {levelDescription}
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-around mb-5">
          <div className="card col-5">
            <div className="card-header">
              Action
              <div className="card-title">
                {actionDescription}
              </div>
            </div>
            <div className="card-body">
              <ol>
                {actionExamples.map((example, idx) => {
                  return (
                    <li key={idx}>
                      {example}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <div className="card col-5">
            <div className="card-header">
              Action:
            </div>
            <div className="card-body">
                <textarea className="w-100" name="" id="" cols="30" rows="10"></textarea>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-around mb-5">
          <div className="card col-5">
            <div className="card-header">
              Questions
              <div className="card-title">
                {questionDescription}
              </div>
            </div>
            <div className="card-body">
              <ol>
                {questionExamples.map((example, idx) => {
                  return (
                    <li key={idx}>
                      {example}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <div className="card col-5">
            <div className="card-header">
              Questions:
            </div>
            <div className="card-body">
              <textarea className="w-100" name="" id="" cols="30" rows="10"></textarea>
            </div>
          </div>
        </div>

        <div className="row justify-content-around mb-5">
          <div className="card col-5">
            <div className="card-header">
              Goals
              <div className="card-title">
                {goalDescription}
              </div>
            </div>
            <div className="card-body">
              <ol>
                {goalExamples.map((example, idx) => {
                  return (
                    <li key={idx}>
                      {example}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <div className="card col-5">
            <div className="card-header">
              Goals:
            </div>
            <div className="card-body">
              <textarea className="w-100" name="" id="" cols="30" rows="10"></textarea>
            </div>
          </div>
        </div>

     </> 
    );
  }
}

export default Level;
