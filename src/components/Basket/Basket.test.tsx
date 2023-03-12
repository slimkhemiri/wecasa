import { render, screen, fireEvent } from '@testing-library/react';
import Basket from './Basket';
import '@testing-library/jest-dom/extend-expect';

const mockPrestations = [
    {
        reference: 'prestation-1',
        title: 'Prestation 1',
        duration: 30,
        price: 2000,
    },
    {
        reference: 'prestation-2',
        title: 'Prestation 2',
        duration: 60,
        price: 3500,
    },
];

test('renders empty basket', () => {
    render(
        <Basket
            basket={[]}
            totalPrice={0}
            totalDuration={0}
            onRemovePrestation={() => { }}
            onClearBasket={() => { }}
        />
    );
    expect(screen.getByText('Votre panier est vide')).toBeInTheDocument();
});

test('renders basket with items', () => {
    render(
        <Basket
            basket={mockPrestations}
            totalPrice={5500}
            totalDuration={90}
            onRemovePrestation={() => { }}
            onClearBasket={() => { }}
        />
    );
    expect(screen.getByText('Prestation 1')).toBeInTheDocument();
    expect(screen.getByText('Prestation 2')).toBeInTheDocument();
    expect(screen.getByText('20€')).toBeInTheDocument();
    expect(screen.getByText('35€')).toBeInTheDocument();
    expect(screen.getByText('30min')).toBeInTheDocument();
    expect(screen.getByText('60min')).toBeInTheDocument();
});

test('calls onRemovePrestation when remove button is clicked', () => {
    const handleRemovePrestation = jest.fn();
    render(
        <Basket
            basket={mockPrestations}
            totalPrice={5500}
            totalDuration={90}
            onRemovePrestation={handleRemovePrestation}
            onClearBasket={() => { }}
        />
    );
    const removeButton = screen.getAllByRole('button', { name: 'X' })[0];
    fireEvent.click(removeButton);
    expect(handleRemovePrestation).toHaveBeenCalledWith(mockPrestations[0]);
});

test('calls onClearBasket when clear button is clicked', () => {
    const handleClearBasket = jest.fn();
    render(
        <Basket
            basket={mockPrestations}
            totalPrice={5500}
            totalDuration={90}
            onRemovePrestation={() => { }}
            onClearBasket={handleClearBasket}
        />
    );
    const clearButton = screen.getByText('Vider le panier');
    fireEvent.click(clearButton);
    expect(handleClearBasket).toHaveBeenCalled();
});
