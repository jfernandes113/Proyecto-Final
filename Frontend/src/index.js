import React from 'react';
import ReactDOM from 'react-dom/client';
import { Redirect, Switch } from "wouter";
import './index.css';
import Styled from "./styles";
import Route from "./components/Route";
import Provider from "./context/Provider";
import Salaries from "./pages/Salaries";

//<Route path="/login" component={Login} />
//<Route path="/register" component={Register} />
//<Route path="/" guarded={true} component={Panel} />
//<Redirect to="/login" />

const Main = () => {
  return (
    <Provider>
      <Styled.Wrapper>
        <Switch>
          <Route path="/salaries" guarded={true} component={Salaries} />
          <Redirect to="/salaries" />
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

