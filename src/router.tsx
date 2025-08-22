import Calculator from './Pages/Calculator';
import Home from './Pages/Home';
import TempCalc from './Pages/TempCalc';

const router = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/temp',
    element: <TempCalc />,
  },
  {
    path: '/calc',
    element: <Calculator />,
  },
];

export default router;
