import React, { useEffect, useRef } from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import CharCancvas from './ChartCanvas'
import UserList from './UserList'

interface CanvasProps {
  width: number;
  height: number;
}

function App({ width, height }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">chart</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>


      <Switch>
        <Route 
          exact path="/"
          // render={()=> (
          //   <CharCancvas 
          //     ref={canvasRef} height={height} width={width} 
          //     className="canvas"
          //   />
          // )}
        />
        <Route 
          path="/users"
          component={UserList}
        />
      </Switch>
    </>
  );
}

App.defaultProps = {
  width: 800,
  height: 600
};

export default App;