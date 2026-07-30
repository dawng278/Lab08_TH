import { render, screen } from '@testing-library/react';
import App from './App';

describe('App routing', () => {
  test('renders home page by default', () => {
    window.history.pushState({}, '', '/');
    render(<App />);

    expect(screen.getByRole('heading', { name: /home page/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
  });

  test('renders about page on /about', () => {
    window.history.pushState({}, '', '/about');
    render(<App />);

    expect(screen.getByRole('heading', { name: /about page/i })).toBeInTheDocument();
  });
});
