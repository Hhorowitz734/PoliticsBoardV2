import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import './index.css';


import Articles from './pages/articles'
import Drafting from "./pages/drafting";
import AccountEntryPage from "./pages/login";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Articles />,
    },
    {
      path: '/write',
      element: <Drafting />,
    },
    {
      path: '/login',
      element: <AccountEntryPage />
    }
  ]);

  return (
    <RouterProvider router = {router} />
  )
}

export default App
