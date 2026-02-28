// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LangFluxar title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LangFluxar/i);
    expect(titleElement).toBeInTheDocument();
});
