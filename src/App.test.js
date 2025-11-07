import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero heading with name', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { level: 1, name: /euri tanaka/i });
  expect(heading).toBeInTheDocument();
});

test('shows works section with device compatibility details', () => {
  render(<App />);
  const worksHeading = screen.getByRole('heading', { level: 2, name: /works/i });
  expect(worksHeading).toBeInTheDocument();
  const compatibilityHeading = screen.getAllByText(/device compatibility/i)[0];
  expect(compatibilityHeading).toBeInTheDocument();
});
