import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { createMemoryHistory } from 'history';

import { baseURL } from 'config/api';
import { RESPONSE_STATUS, ROUTES } from 'constants/index';
import { mockBadRequest } from 'mocks';

import Login from '.';

const server = setupServer();
rest.post(`${baseURL}/users/sign_in`, (_, res, ctx) =>
  res(ctx.status(RESPONSE_STATUS.unauthorized), ctx.json(mockBadRequest))
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => {
  server.close();
  cleanup();
});

describe('Testing Login component', () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    render(
      <Router history={history}>
        <Route path={ROUTES.login}>
          <Login />
        </Route>
      </Router>
    );
  });
  test('should validate error message below empty fields in onSubmit', async () => {
    const emptyFields = 2;
    userEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(await screen.findAllByRole('alert')).toHaveLength(emptyFields);
  });
  test('should display error message after validate email format', async () => {
    userEvent.type(screen.getByLabelText(/Login:email/i), 'invalid-email');
    userEvent.click(screen.getByRole('textbox', { name: /Login:email/ }));
    await waitFor(() => {
      expect(screen.getByText(/Login:emailMatch/i)).toBeInTheDocument();
    });
  });
  test('should show success message after successful api call', async () => {
    server.use(
      rest.post(`${baseURL}/users/sign_in`, (_, res, ctx) =>
        res(ctx.status(RESPONSE_STATUS.unauthorized), ctx.json(mockBadRequest))
      )
    );
    userEvent.type(screen.getByLabelText(/Login:email/i), 'emailTest@hotmail.com');
    userEvent.type(screen.getByLabelText(/Login:password/i), 'passTest123');
    userEvent.click(screen.getByRole('button', { name: /login/i }));
    await waitFor(() => expect(screen.getByRole('error')).toBeInTheDocument());
  });
});
