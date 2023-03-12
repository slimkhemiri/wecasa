import { render, screen, fireEvent } from '@testing-library/react';
import PrestationItem from './PrestationItem';
import '@testing-library/jest-dom/extend-expect';

describe('PrestationItem', () => {
  const category = {
    reference: 'category1',
    title: 'Category 1',
    prestations: [
      {
        reference: 'prestation1',
        title: 'Prestation 1',
        duration: 30,
        price: 500,
      },
      {
        reference: 'prestation2',
        title: 'Prestation 2',
        duration: 60,
        price: 1000,
      },
    ],
  };

  it('renders category title', () => {
    render(
        <PrestationItem category={category} onAddPrestation={() => {}} />
        );
    const categoryTitle = screen.getByText(category.title);
    expect(categoryTitle).toBeInTheDocument();
  });

  it('renders prestations titles and prices', () => {
    render(<PrestationItem category={category} onAddPrestation={() => {}} />);
    const prestation1Title = screen.getByText(category.prestations[0].title);
    expect(prestation1Title).toBeInTheDocument();
    const prestation2Title = screen.getByText(category.prestations[1].title);
    expect(prestation2Title).toBeInTheDocument();

    const prestation1Price = screen.getByText('5.00 €');
    expect(prestation1Price).toBeInTheDocument();
    const prestation2Price = screen.getByText('10.00 €');
    expect(prestation2Price).toBeInTheDocument();
  });

  it('calls onAddPrestation when add button is clicked', () => {
    const onAddPrestation = jest.fn();
    render(<PrestationItem category={category} onAddPrestation={onAddPrestation} />);
    const addButton1 = screen.queryAllByTestId('add-button-1')[0];
    fireEvent.click(addButton1);
    expect(onAddPrestation).toHaveBeenCalledWith(category.prestations[0]);
  });
});
