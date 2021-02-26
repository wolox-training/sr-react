import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';

import { ROUTES } from 'constants/index';

import Home from '.';

describe('Testin Home component', () => {
  const setIsAuth = jest.fn();
  const history = createMemoryHistory();
  history.push(ROUTES.login);
  beforeEach(() => {
    render(
      <Router history={history}>
        <Route path={ROUTES.login}>
          <Home setIsAuth={setIsAuth} />
        </Route>
      </Router>
    );
  });
  test('should redirect to  login component after logout', () => {
    userEvent.click(screen.getByRole('button', { name: /logout/i }));
    waitFor(() => expect(history.entries[history.index].pathname).toBe(ROUTES.login));
  });
});
