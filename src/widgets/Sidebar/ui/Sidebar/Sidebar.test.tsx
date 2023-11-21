import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('Test render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Add class', () => {
    renderWithTranslation(<Sidebar />);
    const btn = screen.getByTestId('sidebar-btn');
    const sidebar = screen.getByTestId('sidebar');

    expect(sidebar).toBeInTheDocument();
    fireEvent.click(btn);
    expect(sidebar).toHaveClass('collapsed');
  });
});
