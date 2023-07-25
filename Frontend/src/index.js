import React from 'react';
import ReactDOM from 'react-dom/client';
import { Redirect, Switch } from "wouter";
import './index.css';
import Styled from "./styles";
import Route from "./components/Route";
import Provider from "./context/Provider";
import Jobs from "./pages/Jobs";
import Locations from "./pages/Locations";
import Home from './pages/Home';

//<Route path="/login" component={Login} />
//<Route path="/register" component={Register} />
//<Route path="/" guarded={true} component={Panel} />
//<Redirect to="/login" />

const Main = () => {
  return (
    <Provider>
      <Styled.Wrapper>
        <Switch>
          <Route path="/home" guarded={true} component={Home} />
          <Route path="/jobs" guarded={true} component={Jobs} />
          <Route path="/locations" guarded={true} component={Locations} />
          <Redirect to="/home" />
        </Switch>
      </Styled.Wrapper>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

