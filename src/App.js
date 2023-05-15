// libraries
import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

// style
import './App.css';

// pages
import CompLifecycle from './Practice/CompLifecycle';

function App() {
  return (
    <Router>
      <div className="navigation">
        <Link to='/'>Component Lifecycle-useEffect</Link>
      </div>

      <Routes>
        <Route path='/' element={<CompLifecycle/>}/>
      </Routes>
    </Router>
  );
}

export default App;
