import { useMemo } from 'react';
import { useGetPrestationsQuery } from '../../hooks/useFetch';
import { useSelector, useDispatch } from 'react-redux';
import { selectBasket, selectTotalPrice, selectTotalDuration, clearBasket } from '../../redux/features/prestationsSlice';
import { addPrestation, removePrestation } from '../../redux/features/prestationsSlice';
import PrestationList from '../../components/PrestationList/PrestationList';
import Basket from '../../components/Basket/Basket';

const Prestations = () => {
  const dispatch = useDispatch();
  const { data: prestations, isLoading, isError } = useGetPrestationsQuery();
  const basket = useSelector(selectBasket);
  const totalPrice = useSelector(selectTotalPrice);
  const totalDuration = useSelector(selectTotalDuration);

  const handleAddPrestation = (prestation: any) => {
    dispatch(addPrestation(prestation));
  };

  const handleRemovePrestation = (prestation: any) => {
    dispatch(removePrestation(prestation));
  };

  const handleClearBasket = () => {
    dispatch(clearBasket());
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h2>Error fetching prestations data</h2>;
  }

  const categories = useMemo(() => prestations?.categories, [prestations]);

  return (
    <>
      <h1>Wecasa Prestations</h1>
      <div>
        <PrestationList prestations={categories} onAddPrestation={handleAddPrestation} />
        <Basket
          basket={basket}
          totalPrice={totalPrice}
          totalDuration={totalDuration}
          onRemovePrestation={handleRemovePrestation}
          onClearBasket={handleClearBasket}
        />
      </div>
    </>
  );
};

export default Prestations;
