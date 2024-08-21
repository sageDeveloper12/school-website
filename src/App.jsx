import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import MainLayout from './layout.jsx/MainLayout';
import Home from '../src/pages/Home';
import ErrorPage from '../src/pages/ErrorPage';
import About from './pages/About';
import Classes from './pages/Classes';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Contact from './pages/Management';
import {MyProvider} from './contexts/MyContext';
import './App.css';
import Kindargaten from './pages/Kindargaten';
import Primary from './pages/Primary';
import Admission from './pages/Admission';


function App() {
 const router = createBrowserRouter([
  {
    path :"/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {index: true, element: <Home/>},
      {path: 'about', element: <About/>},
      {path: 'classes', element: <Classes/>},
      {path: 'blog', element: <Blog/>},
      {path: 'kindagarten', element: <Kindargaten/>},
      {path: 'primary', element: <Primary/>},
      {path: 'admission', element: <Admission/>}

    ]
  }
 ])

  return (
    <MyProvider>
      <RouterProvider router ={router}/>
    </MyProvider>
  )
}
export default App;
