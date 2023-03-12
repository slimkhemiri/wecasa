import { Category, Prestation } from '../../redux/types/prestation';
import PrestationItem from '../PrestationItem/PrestationItem';
import '../../styles/PrestationList.css';
import { useMemo } from 'react';

interface PrestationListProps {
  prestations: Category[] | undefined;
  onAddPrestation: (prestation: Prestation) => void;
}

const PrestationList: React.FC<PrestationListProps> = ({ prestations, onAddPrestation }) => {
  const handleAddPrestation = (prestation: Prestation) => {
    onAddPrestation(prestation);
  };

  const categories = useMemo(() => {
    return prestations?.map((category) => (
      <PrestationItem category={category} onAddPrestation={handleAddPrestation} /> 
    ));
  }, [prestations, handleAddPrestation]);
  
  return (
    <>
      {categories}
    </>
  );
};

export default PrestationList;
