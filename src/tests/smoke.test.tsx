import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import HomePage from '@/app/page';

test('renders Evora Portal heading', () => {
  render(<HomePage />);

  const heading = screen.getByText('Evora Portal');
  expect(heading).toBeInTheDocument();
});

test('renders version text', () => {
  render(<HomePage />);

  const versionText = screen.getByText(/Version 1.0.0/);
  expect(versionText).toBeInTheDocument();
});
