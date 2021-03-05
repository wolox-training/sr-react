import React from 'react';
import { render, cleanup, waitFor, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Book from 'screens/Home/screens/book';
import { RESPONSE_STATUS } from 'constants/index';
import { ROUTES } from 'constants/paths';
import { mockBadRequestBookList, mockBookDetail } from 'mocks';

const server = setupServer();
const selectedBookId = 1;
rest.get(`${process.env.REACT_APP_BASE_URL}${ROUTES.books}/${selectedBookId}`, (_, res, ctx) =>
  res(ctx.status(RESPONSE_STATUS.ok), ctx.json(mockBookDetail))
);
rest.get(`${process.env.REACT_APP_BASE_URL}${ROUTES.books}/${selectedBookId}`, (_, res, ctx) =>
  res(ctx.status(RESPONSE_STATUS.unauthorized), ctx.json(mockBadRequestBookList))
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
  test('should render book info', () => {
    server.use(
      rest.get(`${process.env.REACT_APP_BASE_URL}${ROUTES.books}/${selectedBookId}`, (_, res, ctx) =>
        res(ctx.status(RESPONSE_STATUS.ok), ctx.json(mockBookDetail))
      )
    );
    waitFor(() => expect(screen.getByText('Book:author')).toBeInTheDocument());
  });
});
