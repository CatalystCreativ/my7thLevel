import { CORE, CORE_TOP_TEXT } from '../variables';
import React from 'react';

class Core extends React.Component {
  

  render() {

    const { update } = this.props;
    const { core1, core2, core3, core4, core5, phrase } = this.props;
    // make array to complement the mapping procedure
    const core = [core1, core2, core3, core4, core5, phrase]; 

    const coreTexts = CORE.map((question, idx) => {
      return (
        <>
          <li key={idx} className='list-group-item-dark py-2 px-3' id={`question${idx}`}>
            {question}
          </li>
          <li key={idx+1} className='list-group-item-light py-2 px-5'>
            <input className='w-100' onChange={update(`core${idx + 1}`)}type="text" placeholder={CORE[idx]} value={core[idx]}></input>
          </li>
        </>
      );
    });

    return (
      <div className="container-fluid">
        <ul className='list-group'>
          
          {coreTexts}
        </ul>
        <div className='container mb-4'>
          <div className='row justify-content-center flex-row'>
            <button className='btn btn-back ml-3 px-4' type='submit'>Save</button>
          </div>
        </div>
      </div>
    );
  }
}
// {coreTexts}

export default Core;
