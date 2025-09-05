import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import HomePage from '@/app/page';

test('renders Welcome to Evora Portal heading', () => {
  render(<HomePage />);

  const heading = screen.getByText('Welcome to Evora Portal');
  expect(heading).toBeInTheDocument();
});

test('renders version text', () => {
  render(<HomePage />);

  const versionText = screen.getByText(/Version 1.0.0/);
  expect(versionText).toBeInTheDocument();
});
