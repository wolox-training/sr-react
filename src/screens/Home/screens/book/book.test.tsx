import React from 'react';
import { render, cleanup, waitFor, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Book from 'screens/Home/screens/book';
import { RESPONSE_STATUS } from 'constants/index';

const server = setupServer();
rest.get(`${process.env.REACT_APP_BASE_URL}/books/1`, (_, res, ctx) =>
  res(ctx.status(RESPONSE_STATUS.ok), ctx.json('ok'))
);
rest.get(`${process.env.REACT_APP_BASE_URL}/books/1`, (_, res, ctx) =>
  res(ctx.status(RESPONSE_STATUS.unauthorized), ctx.json('cant get access'))
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => {
  server.close();
  cleanup();
});

describe('testing book detail component', () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    render(
      <Router history={history}>
        <Route>
          <Book />
        </Route>
      </Router>
    );
  });
  test('should render book info', async () => {
    server.use(
      rest.get(`${process.env.REACT_APP_BASE_URL}/books/1`, (_, res, ctx) =>
        res(ctx.status(RESPONSE_STATUS.ok), ctx.json('ok'))
      )
    );
    await waitFor(() => expect(screen.getByText('Book:author')).toBeInTheDocument());
  });
});
