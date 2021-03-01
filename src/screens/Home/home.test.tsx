import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { RESPONSE_STATUS, ROUTES } from 'constants/index';
import { baseURL } from 'config/api';
import { mockBadRequestBookList } from 'mocks';

import Home from '.';

const server = setupServer();
rest.post(`${baseURL}/books`, (_, res, ctx) =>
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
      rest.get(`${baseURL}/books`, (_, res, ctx) =>
        res(ctx.status(RESPONSE_STATUS.unauthorized), ctx.json(mockBadRequestBookList))
      )
    );
    await waitFor(() => expect(screen.getByText(/Home:bookList/i)).toBeInTheDocument());
  });

  test('should redirect to  login component after logout', () => {
    userEvent.click(screen.getByRole('button', { name: /logout/i }));
    waitFor(() => expect(history.entries[history.index].pathname).toBe(ROUTES.login));
  });
});
