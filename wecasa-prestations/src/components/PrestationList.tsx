import { Category, Prestation } from '../redux/types/prestation';
import '../styles/PrestationList.css';
interface PrestationListProps {
  prestations: Category[] | undefined;
  onAddPrestation: (prestation: Prestation) => void;
}

const PrestationList = ({ prestations, onAddPrestation }: PrestationListProps) => {
  const handleAddPrestation = (prestation: Prestation) => {
    onAddPrestation(prestation);
  };

  return (
    <>
      {prestations?.map((category) => (
        <div key={category.reference} className="category-container">
          <h2 className="category-title">{category.title}</h2>
          <div className="prestations-container">
            {category.prestations.map((prestation) => (
              <div key={prestation.reference} className="prestation-container">
                <div>
                  <h3 className="prestation-title">{prestation.title}</h3>
                  <div className="prestation-duration">{prestation.duration} min</div>
                </div>
                <div className="prestation-price-container">
                  <div className="prestation-price">{(prestation.price / 100).toFixed(2)} €</div>
                  <button data-testid="add-button-1" className="add-button" onClick={() => handleAddPrestation(prestation)}>
                    Ajouter
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default PrestationList;
