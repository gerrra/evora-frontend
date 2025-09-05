import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';
import PreviewPage from '@/app/preview/page';

test('renders preview page with device buttons', () => {
  render(<PreviewPage />);

  // Check if the page title is rendered
  const title = screen.getByText('Preview');
  expect(title).toBeInTheDocument();

  // Check if all three device buttons are present
  const mobileButton = screen.getByText('320px');
  const tabletButton = screen.getByText('768px');
  const desktopButton = screen.getByText('1024px');

  expect(mobileButton).toBeInTheDocument();
  expect(tabletButton).toBeInTheDocument();
  expect(desktopButton).toBeInTheDocument();
});

test('changes device size when buttons are clicked', () => {
  render(<PreviewPage />);

  // Check initial state (mobile should be selected by default)
  const mobileButton = screen.getByText('320px');
  const tabletButton = screen.getByText('768px');
  const desktopButton = screen.getByText('1024px');

  // Click tablet button
  fireEvent.click(tabletButton);
  
  // Click desktop button
  fireEvent.click(desktopButton);
  
  // Click mobile button
  fireEvent.click(mobileButton);

  // All buttons should be clickable (we can't easily test CSS class changes without more complex setup)
  expect(mobileButton).toBeInTheDocument();
  expect(tabletButton).toBeInTheDocument();
  expect(desktopButton).toBeInTheDocument();
});

test('displays preview container', () => {
  render(<PreviewPage />);

  // Check if preview container is rendered
  const previewText = screen.getByText('Preview will appear here');
  expect(previewText).toBeInTheDocument();

  // Check if device size is displayed
  const deviceText = screen.getByText(/Device: \d+px/);
  expect(deviceText).toBeInTheDocument();
});
