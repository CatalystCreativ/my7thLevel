import React from 'react';

class Level extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // EX RETURN OBJ = {action${levelInfo.levelNum}: action.value}

    const { levelNum, levelTitle, levelDescription, actionDescription, actionExamples, questionDescription, questionExamples, goalDescription, goalExamples } = this.props.levelConsts;

    const { update, handleSubmit, action, question, goal } = this.props;

    return (
      <div className="card">
        <div className='card-header text-center' id={`headingLevel${levelNum}`}>
          <h2 className='mb-0'>
            <a className='btn' role='button' data-toggle='collapse' href={`#level${levelNum}`}>{`LEVEL ${levelNum}: ${levelTitle}`}</a>
          </h2>
        </div>

        <div id={`level${levelNum}`} className='collapse' aria-labelledby={`headingLevel${levelNum}`} data-parent='#accordionSevenLevels'>
          
            <div className="row d-flex justify-content-around mb-5">
              <div className="card-deck">
                <div className="card text-white bg-dark">
                  <div className="card-body card-body-width">
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
                    <textarea onChange={update(`action${levelNum}`)} className="w-100" value={action} cols="30" rows="10"></textarea>
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
                  <textarea onChange={update(`question${levelNum}`)} className="w-100" value={question} cols="30" rows="10"></textarea>
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
                  <textarea onChange={update(`goal${levelNum}`)} className="w-100" value={goal} cols="30" rows="10"></textarea>
                </div>
              </div>
            </div>
            <div className='container mb-4'>
              <div className='row justify-content-center flex-row'>
                <button className='btn btn-back ml-3 px-4' type='submit'>Save</button>
              </div>
            </div>
        </div>

      
     </div> 
    );
  }
}

export default Level;
