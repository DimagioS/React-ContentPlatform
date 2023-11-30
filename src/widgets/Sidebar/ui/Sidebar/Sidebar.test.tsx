import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/config/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('Test render', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Add class', () => {
    componentRender(<Sidebar />);
    const btn = screen.getByTestId('sidebar-btn');
    const sidebar = screen.getByTestId('sidebar');

    expect(sidebar).toBeInTheDocument();
    fireEvent.click(btn);
    expect(sidebar).toHaveClass('collapsed');
  });
});
