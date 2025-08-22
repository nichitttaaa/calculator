import router from './router.tsx';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import useAuthGuard from './hooks/useAuthGuard.tsx';
import useSocketConnect from './hooks/useSocketConnect.tsx';

function App() {
  useAuthGuard();
  useSocketConnect();

  return (
    <>
      <ToastContainer position="bottom-right" draggable />
      <Routes>
        {router.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
