import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Login from '.';

describe('Testing Login component', () => {
  beforeEach(() => {
    render(<Login />);
  });
  test('should validate empty fields onSubmit', async () => {
    userEvent.click(screen.getByRole('button', { name: /login/i }));
    await waitFor(() => expect(screen.getByRole('error')).toBeInTheDocument());
  });
});
