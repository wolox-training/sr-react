import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { createMemoryHistory } from 'history';

import { baseURL } from 'config/api';
import { RESPONSE_STATUS, ROUTES } from 'constants/index';
import { mockSignUpResponse } from 'mocks';

import SignUp from '.';

const server = setupServer();
rest.post(`${baseURL}/users`, (_, res, ctx) =>
  res(ctx.status(RESPONSE_STATUS.ok), ctx.json(mockSignUpResponse))
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => {
  server.close();
  cleanup();
});
describe('Testing SignUp Component', () => {
  const setIsAuth = jest.fn();
  const history = createMemoryHistory();
  history.push('/sign_up');
  beforeEach(() => {
    render(
      <Router history={history}>
        <Route path="/sign_up">
          <SignUp setIsAuth={setIsAuth} />
        </Route>
      </Router>
    );
  });
  test('Should validate empty fields onSubmit', async () => {
    const allEmptyFields = 5;
    userEvent.click(screen.getByRole('button', { name: /signup/i }));
    expect(await screen.findAllByRole('alert')).toHaveLength(allEmptyFields);
  });

  test('Should display error in onBlur and email format is not valid', async () => {
    userEvent.type(screen.getByLabelText(/SignUp:email/i), 'invalid-email');
    userEvent.click(screen.getByRole('textbox', { name: /SignUp:email/ }));
    await waitFor(() => expect(screen.getByLabelText(/SignUp:email/i)).toBeInTheDocument());
  });

  test('should can`t submit form having at least one error', async () => {
    userEvent.type(screen.getByLabelText(/SignUp:email/i), 'invalid-email');
    userEvent.click(screen.getByRole('textbox', { name: /SignUp:email/ }));
    userEvent.click(screen.getByRole('button', { name: /signup/i }));
    await waitFor(() => expect(screen.getByLabelText(/SignUp:email/i)).toBeInTheDocument());
  });

  test('should call onSubmit function after click submit button with all fields full', async () => {
    server.use(
      rest.post(`${baseURL}/users`, (_, res, ctx) =>
        res(ctx.status(RESPONSE_STATUS.created), ctx.json(mockSignUpResponse))
      )
    );
    userEvent.type(screen.getByLabelText(/SignUp:firstName/i), 'nameTest');
    userEvent.type(screen.getByLabelText(/SignUp:lastName/i), 'lastNameTest');
    userEvent.type(screen.getByLabelText(/SignUp:email/i), 'emailTest@hotmail.com');
    userEvent.type(screen.getByLabelText(/SignUp:password/i), 'passTest123');
    userEvent.type(screen.getByLabelText(/SignUp:confirmPassword/i), 'passTest123');
    userEvent.click(screen.getByRole('button', { name: /signup/i }));
    await waitFor(() => expect(history.entries[history.index].pathname).toBe(ROUTES.login));
  });
});
