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

    expect(
      screen.getByRole('heading', {
        name: /kết nối mọi người bằng tình yêu điện ảnh/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/bốn cá tính, một mục tiêu chung/i)).toBeInTheDocument();
  });
});
