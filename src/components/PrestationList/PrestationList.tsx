import { Category, Prestation } from '../../redux/types/prestation';
import '../../styles/PrestationList.css';
import PrestationItem from '../PrestationItem/PrestationItem';
interface PrestationListProps {
  prestations: Category[] | undefined;
  onAddPrestation: (prestation: Prestation) => void;
}

const PrestationList: React.FC<PrestationListProps> = ({ prestations, onAddPrestation }) => {
  const handleAddPrestation = (prestation: Prestation) => {
    onAddPrestation(prestation);
  };

  return (
    <>
      {prestations?.map((category) => (
       <div key={category.reference}>
       <PrestationItem category={category} onAddPrestation={handleAddPrestation} /> 
       </div>
      ))}
    </>
  );
};

export default PrestationList;
