import { render, screen } from '@testing-library/react';
import DepartmentCard from '../../components/DepartmentCard';

describe('DepartmentCard', () => {
  const mockData = {
    male: 2,
    female: 3,
    ageRange: '25-35',
    hair: { Brown: 2, Black: 1 },
    addressUser: { 'JohnDoe': '12345' }
  };

  it('renders department information correctly', () => {
    render(<DepartmentCard department="IT" data={mockData} />);
    
    expect(screen.getByText('IT')).toBeInTheDocument();
    expect(screen.getByText('Male: 2')).toBeInTheDocument();
    expect(screen.getByText('Female: 3')).toBeInTheDocument();
    expect(screen.getByText('25-35')).toBeInTheDocument();
  });
});