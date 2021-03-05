import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';

import { ROUTES } from 'constants/paths';

import Home from './index';

describe('Testing Home component', () => {
  const history = createMemoryHistory();
  history.push(ROUTES.login);
  beforeEach(() => {
    render(
      <Router history={history}>
        <Route path={ROUTES.login}>
          <Home />
        </Route>
      </Router>
    );
  });
  test('should redirect to  login component after logout', () => {
    userEvent.click(screen.getByRole('button', { name: /logout/i }));
    waitFor(() => expect(history.entries[history.index].pathname).toBe(ROUTES.login));
  });
});
