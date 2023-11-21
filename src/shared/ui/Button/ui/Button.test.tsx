import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
  test('Test render', () => {
    // Рендерим компонент
    render(<Button>TEST</Button>);

    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Test  with theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
