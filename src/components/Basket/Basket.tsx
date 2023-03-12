import React, { useMemo } from 'react';
import { Prestation } from '../../redux/types/prestation';
import '../../styles/Busket.css';
interface BasketProps {
  basket: Prestation[];
  totalPrice: number;
  totalDuration: number;
  onRemovePrestation: (prestation: Prestation) => void;
  onClearBasket: () => void;
}

const Basket: React.FC<BasketProps> = ({ basket, totalPrice, totalDuration, onRemovePrestation, onClearBasket }) => {

  return (
    <div className="basket-container">
      <h2 className="basket-title">Panier</h2>
      <div className="basket-items">
        {basket.length === 0 && <p className="basket-empty">Votre panier est vide</p>}
        {basket.map((prestation, index) => (
          <div key={index} className="basket-item">
            <div className="basket-item-info">
              <p className="basket-item-title">{prestation.title}</p>
              <p className="basket-item-price">{prestation.price / 100}€</p>
              <p className="basket-item-duration">{prestation.duration}min</p>
            </div>
            <button className="basket-item-remove" onClick={() => onRemovePrestation(prestation)}>
              X
            </button>
          </div>
        ))}
      </div>
      {basket.length > 0 && (
        <div className="basket-summary">
          <div className="basket-summary-item">
            <span className="basket-summary-label">Durée totale:</span>
            <span className="basket-summary-value">{Math.floor(totalDuration / 60)}h{totalDuration % 60}min</span>
          </div>
          <div className="basket-summary-item">
            <span className="basket-summary-label">Prix total:</span>
            <span className="basket-summary-value">{totalPrice.toFixed(2)}€</span>
          </div>
          <button className="basket-clear-button" onClick={onClearBasket}>
            Vider le panier
          </button>
        </div>
      )}
    </div>
  );
};

export default Basket;
