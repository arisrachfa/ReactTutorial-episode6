import React, {useState} from 'react';
import '../App.css';
import Text from './Text';

const CompLifecycle = () => {
    // state
    const [showText, setShowText] = useState(false);

  return (
    <div className='App'>
        <button onClick={() => {setShowText(!showText);}}>
            Show Text
        </button>

        {showText && <Text />}
    </div>
  )
}

export default CompLifecycle