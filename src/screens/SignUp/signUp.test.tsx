import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { RESPONSE_STATUS } from 'constants/index';

import SignUp from './index';

describe('Testing SignUp Component', () => {
  const server = setupServer();
  rest.post(`${process.env.REACT_APP_BASE_URL}/users`, (req, res, ctx) =>
    res(ctx.status(RESPONSE_STATUS.ok), ctx.json({ ok: true }))
  );
  beforeEach(() => {
    render(<SignUp />);
  });
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test('Should validate empty fields onSubmit', async () => {
    const allFieldsEmpty = 5;
    userEvent.click(screen.getByRole('textbox', { name: /SignUp:email/ }));
    expect(await screen.findAllByRole('alert')).toHaveLength(allFieldsEmpty);
  });

  test('Should display error when email value is invalid', async () => {
    userEvent.type(screen.getByLabelText(/SignUp:email/i), 'invalid-email');
    userEvent.click(screen.getByRole('textbox', { name: /SignUp:email/ }));
    await waitFor(() => {
      expect((screen.getByLabelText(/SignUp:email/i) as HTMLInputElement).value).toBe('invalid-email');
    });
  });

  test('should can`t submit form having at least one error', async () => {
    const onSubmit = jest.fn();
    userEvent.type(screen.getByLabelText(/SignUp:email/i), 'invalid-email');
    userEvent.click(screen.getByRole('textbox', { name: /SignUp:email/ }));
    userEvent.click(screen.getByRole('button', { name: /signup/i }));
    await waitFor(() => {
      expect(onSubmit).not.toBeCalled();
    });
  });

  test('should call onSubmit function after click submit button with all fields full', async () => {
    server.use(
      rest.post(`${process.env.REACT_APP_BASE_URL}/users`, (req, res, ctx) =>
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
