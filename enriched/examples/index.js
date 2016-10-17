
import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router } from 'react-router';

const rootRoute = {
  path: '/',
  component: require('./pages/App'),
  childRoutes: [
    {
      path: 'step-tracker',
      getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./pages/StepTrackerPage'));
        }, 'StepTrackerPage');
      }
    }
  ]
};

ReactDOM.render(
  <Router routes={rootRoute} history={hashHistory} />,
  document.getElementById('app')
);
