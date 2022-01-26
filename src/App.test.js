import {render, screen} from '@testing-library/react';
import Logo from './components/Logo';

describe('Logo', () => {
  test('Logo must have src = "/logo.png" and alt = "Sneaky Sasquatch"', () => {
    render(<Logo />);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', '/logo.png');
    expect(logo).toHaveAttribute('alt', 'Sneaky Sasquatch');
  });
});
