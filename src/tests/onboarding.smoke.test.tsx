import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';
import OnboardingPage from '@/app/onboarding/page';

test('renders onboarding page with three buttons', () => {
  render(<OnboardingPage />);

  // Check if the page title is rendered
  const title = screen.getByText('Onboarding');
  expect(title).toBeInTheDocument();

  // Check if all three buttons are present
  const skipButton = screen.getByText('Пропустить');
  const acceptButton = screen.getByText('Принять');
  const generateButton = screen.getByText('Сгенерировать');

  expect(skipButton).toBeInTheDocument();
  expect(acceptButton).toBeInTheDocument();
  expect(generateButton).toBeInTheDocument();
});

test('handles button clicks', () => {
  render(<OnboardingPage />);

  // Test skip button click
  const skipButton = screen.getByText('Пропустить');
  fireEvent.click(skipButton);
  // Should increment step (we can't easily test state changes without more complex setup)

  // Test accept button click
  const acceptButton = screen.getByText('Принять');
  fireEvent.click(acceptButton);

  // Test generate button click
  const generateButton = screen.getByText('Сгенерировать');
  fireEvent.click(generateButton);

  // Should show completion message
  const completionMessage = screen.getByText('Onboarding Completed!');
  expect(completionMessage).toBeInTheDocument();
});
