import { lazy, Suspense } from 'react';
const Prestations = lazy(() => import('./pages/Prestations/Prestations'));
const App: React.FC = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Prestations />
    </Suspense>
  )
}

export default App;
