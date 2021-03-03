import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { RESPONSE_STATUS } from 'constants/index';
import { mockBadRequestBookList } from 'mocks';
import { ROUTES } from 'constants/paths';

import Home from './index';

const server = setupServer();
rest.post(`${process.env.REACT_APP_BASE_URL}/books`, (_, res, ctx) =>
  res(ctx.status(RESPONSE_STATUS.unauthorized), ctx.json(mockBadRequestBookList))
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => {
  server.close();
  cleanup();
});

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
  test('should display error message when API response is error', async () => {
    server.use(
      rest.get(`${process.env.REACT_APP_BASE_URL}/books`, (_, res, ctx) =>
        res(ctx.status(RESPONSE_STATUS.unauthorized), ctx.json(mockBadRequestBookList))
      )
    );
    await waitFor(() => expect(screen.getByText(/Home:booksList/i)).toBeInTheDocument());
  });

  test('should redirect to  login component after logout', () => {
    userEvent.click(screen.getByRole('button', { name: /logout/i }));
    waitFor(() => expect(history.entries[history.index].pathname).toBe(ROUTES.login));
  });
});
