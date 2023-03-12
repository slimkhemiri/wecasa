import { fireEvent, render, screen } from '@testing-library/react';
import PrestationList from './PrestationList';
import '@testing-library/jest-dom/extend-expect';

describe('PrestationList', () => {
  const categories = [
    {
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
    },
    {
      reference: 'category2',
      title: 'Category 2',
      prestations: [
        {
          reference: 'prestation3',
          title: 'Prestation 3',
          duration: 45,
          price: 750,
        },
      ],
    },
  ];

  it('renders categories and prestations', () => {
    const onAddPrestation = jest.fn();
    render(<PrestationList prestations={categories} onAddPrestation={onAddPrestation} />);
    const category1Title = screen.getByText(categories[0].title);
    expect(category1Title).toBeInTheDocument();
    const category2Title = screen.getByText(categories[1].title);
    expect(category2Title).toBeInTheDocument();

    const prestation1Title = screen.getByText(categories[0].prestations[0].title);
    expect(prestation1Title).toBeInTheDocument();
    const prestation2Title = screen.getByText(categories[0].prestations[1].title);
    expect(prestation2Title).toBeInTheDocument();
    const prestation3Title = screen.getByText(categories[1].prestations[0].title);
    expect(prestation3Title).toBeInTheDocument();

    const addButton1 = screen.queryAllByTestId('add-button-1')[0];
    expect(addButton1).toBeInTheDocument();
    expect(onAddPrestation).not.toHaveBeenCalled();
    fireEvent.click(addButton1);
  });

  it('renders empty component', () => {
    const onAddPrestation = jest.fn();
    render(<PrestationList prestations={undefined} onAddPrestation={onAddPrestation} />);
    expect(screen.queryByText(/Category/)).not.toBeInTheDocument();
  });
});
