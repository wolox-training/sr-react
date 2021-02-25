import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { createMemoryHistory } from 'history';

import { RESPONSE_STATUS } from 'constants/index';
import { mockSignUpResponse } from 'mocks';

import SignUp from './index';

const server = setupServer();
rest.post('/users', (_, res, ctx) => res(ctx.status(RESPONSE_STATUS.ok), ctx.json(mockSignUpResponse)));
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => {
  server.close();
  cleanup();
});
describe('Testing SignUp Component', () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    render(
      <Router history={history}>
        <Route path="/">
          <SignUp />
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
      rest.post(`${process.env.REACT_APP_BASE_URL}/users`, (_, res, ctx) =>
        res(ctx.status(RESPONSE_STATUS.created), ctx.json({ ok: true }))
      )
    );
    userEvent.type(screen.getByLabelText(/SignUp:firstName/i), 'nameTest');
    userEvent.type(screen.getByLabelText(/SignUp:lastName/i), 'lastNameTest');
    userEvent.type(screen.getByLabelText(/SignUp:email/i), 'emailTest@hotmail.com');
    userEvent.type(screen.getByLabelText(/SignUp:password/i), 'passTest123');
    userEvent.type(screen.getByLabelText(/SignUp:confirmPassword/i), 'passTest123');
    userEvent.click(screen.getByRole('button', { name: /signup/i }));
    await waitFor(() => expect(screen.getByRole('success')).toBeInTheDocument());
  });
});
