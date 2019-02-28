import { CORE, CORE_TOP_TEXT } from '../variables';
import React from 'react';

class Core extends React.Component {
  

  render() {

    const { update, handleSubmit } = this.props;
    const { core1, core2, core3, core4, core5, phrase } = this.props;
    // make array to complement the mapping procedure
    const core = [core1, core2, core3, core4, core5, phrase]; 

    const coreTexts = CORE.map((question, idx) => {
      return (
        <div key={idx} id={`question${idx}`}>
          <div className="card col-5">
            <div className="card-header">
              {question}
            </div>
            <div className="card-body">
              <textarea onChange={update(`core${idx+1}`)} className="w-100" name="" id="" cols="30" rows="2" value={core[idx]}></textarea>
            </div>
          </div>
        </div>
      );
    });

    return (
      <>
        <div className="carousel-item active" data-interval="9999999999999">
            <h2>Start with Seven</h2>
            <p>{CORE_TOP_TEXT}</p>
        </div>
        <div className="carousel-item" data-interval="9999999999999">
          {coreTexts}
        </div>
      </>
    );
  }
}

export default Core;
