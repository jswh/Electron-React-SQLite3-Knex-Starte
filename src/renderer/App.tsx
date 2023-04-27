import { NextUIProvider } from '@nextui-org/react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes';


export default function App() {
  return (
  <NextUIProvider>
    <RouterProvider router={router}></RouterProvider>
  </NextUIProvider>
  );
}
