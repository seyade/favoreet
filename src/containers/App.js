import React, { useContext } from 'react';
import { Link } from '@reach/router';
import { Store } from '../contexts/Store';

function App(props) {
  const { state } = useContext(Store);

  return (
    <React.Fragment>
      {console.log(state)}

      <div className="app-ui favoreet">
        <header className="app-ui__header">
          <h1>FAVOREET.</h1>
          <p>Pick your favourite episodes.</p>
          <div className="favoreet__favourites-num">
            Favourite(s){' '}
            <span className=" app-ui__badge">{state.favourites.length}</span>
          </div>

          <div className="app-ui__nav">
            <Link to="/">Home</Link>
            <Link to="/faves">Faves</Link>
          </div>
        </header>
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default App;
