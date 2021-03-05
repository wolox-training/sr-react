import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { RESPONSE_STATUS } from 'constants/index';
import { mockBadRequestBookList, mockBookList } from 'mocks';
import { ROUTES } from 'constants/paths';

import BookList from './index';

const server = setupServer();
rest.get(`${process.env.REACT_APP_BASE_URL}/books`, (_, res, ctx) =>
  res(ctx.status(RESPONSE_STATUS.unauthorized), ctx.json(mockBadRequestBookList))
);
rest.get(`${process.env.REACT_APP_BASE_URL}/books`, (_, res, ctx) =>
  res(ctx.status(RESPONSE_STATUS.ok), ctx.json(mockBookList))
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => {
  server.close();
  cleanup();
});

describe('Testing book list component', () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    render(
      <Router history={history}>
        <Route>
          <BookList />
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
  test('should get an array of books from the API', () => {
    const totalBooks = 2;
    server.use(
      rest.get(`${process.env.REACT_APP_BASE_URL}/books`, (_, res, ctx) =>
        res(ctx.status(RESPONSE_STATUS.ok), ctx.json(mockBookList))
      )
    );
    waitFor(async () => expect(await screen.findAllByRole('link')).toHaveLength(totalBooks));
  });
  test('should redirect to book info after click a card', () => {
    server.use(
      rest.get(`${process.env.REACT_APP_BASE_URL}/books`, (_, res, ctx) =>
        res(ctx.status(RESPONSE_STATUS.ok), ctx.json(mockBookList))
      )
    );
    waitFor(() => {
      const selectedBookId = 1;
      const firstCard = screen.getAllByRole('link')[0];
      userEvent.click(firstCard);
      expect(history.entries[history.index].pathname).toBe(`${ROUTES.books}/${selectedBookId}`);
    });
  });
});
