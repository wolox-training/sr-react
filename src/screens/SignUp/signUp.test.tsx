import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { I18N_CONFIG, SIGNUP_FIELDS } from 'constants/index';

import SignUp from './index';

describe('Testing SignUp Component', () => {
  const server = setupServer();
  // rest.post('', (req, res, ctx) => res(ctx.status(RESPONSE_STATUS.ok), ctx.json({ ok: true })))
  beforeEach(() => {
    render(<SignUp />);
  });
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test('Should validate empty fields onSubmit', async () => {
    const allFieldsEmpty = 5;
    const signUpBtn = screen.getByRole('button', { name: /signup/i });
    fireEvent.submit(signUpBtn);
    expect(await screen.findAllByRole('alert')).toHaveLength(allFieldsEmpty);
  });

  test('Should display error when email value is invalid', async () => {
    const email = screen.getByRole('textbox', { name: /email/i }) as HTMLInputElement;
    fireEvent.input(email, {
      target: {
        value: 'invalidEmail'
      }
    });
    fireEvent.focusOut(screen.getByRole('textbox', { name: /email/i }));
    await waitFor(() => {
      expect(email.value).toBe('invalidEmail');
    });
  });

  test('should can`t submit form having at least one error', async () => {
    const onSubmit = jest.fn();
    const email = screen.getByRole('textbox', { name: /email/i }) as HTMLInputElement;
    fireEvent.input(email, {
      target: {
        value: 'invalidEmail'
      }
    });
    fireEvent.focusOut(screen.getByRole('textbox', { name: /email/i }));
    const signUpBtn = screen.getByRole('button', { name: /signup/i });
    fireEvent.submit(signUpBtn);
    await waitFor(() => {
      expect(onSubmit).not.toBeCalled();
    });
  });

  test('should call onSubmit function after click submit button with all fields full', async () => {
    const onSubmit = jest.fn();
    const firstName = screen.getByRole('textbox', { name: /firstName/i });
    fireEvent.input(firstName, {
      target: {
        value: 'santiago'
      }
    });
    const lastName = screen.getByRole('textbox', { name: /lastName/i });
    fireEvent.input(lastName, {
      target: {
        value: 'rios'
      }
    });
    const email = screen.getByRole('textbox', { name: /email/i });
    fireEvent.input(email, {
      target: {
        value: 'santiagord@gmail.com'
      }
    });
    const password = screen.getByLabelText(`${I18N_CONFIG.key}:${SIGNUP_FIELDS.password.name}`);
    fireEvent.input(password, {
      target: {
        value: 'prueba123@'
      }
    });
    const confirmPassword = screen.getByLabelText(`${I18N_CONFIG.key}:${SIGNUP_FIELDS.confirmPassword.name}`);
    fireEvent.input(confirmPassword, {
      target: {
        value: 'prueba123@'
      }
    });
    const signUpBtn = screen.getByRole('button', { name: /signup/i });
    fireEvent.submit(signUpBtn);
    await waitFor(() => {
      expect(onSubmit).toBeCalled();
    });
  });
});
