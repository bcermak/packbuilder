import React from 'react';
import './ListDiv.css';



function ListDiv() {

    const clearDiv = () => {
       console.log('success');
       let list = document.getElementById('itemList');
       list.innerHTML = '';
    }
    
  return (
      <div className='main'>
        <div id='listDiv'>
            <h4>Here's Your List:</h4>
            <ul id='itemList'>
            </ul>
        </div>
        <button id='clearList' onClick={clearDiv}> Clear List </button>
      </div>

  )
}

export default ListDiv