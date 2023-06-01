import {
  createBrowserRouter,
  Router,
  RouterProvider,
  useMatch
} from "react-router-dom";
import './index.css';


import Articles from './pages/articles'
import Drafting from "./pages/drafting";
import AccountEntryPage from "./pages/login";
import ViewArticle from "./pages/articleview";

const ViewArticleWrapper = () => { //Handles dynamic article page generation
  const match = useMatch('/article/:articleID');
  const articleId = match?.params?.articleID;

  return <ViewArticle articleId={articleId} />;
};


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
    },
    {
      path: '/article/:articleID',
      element: <ViewArticleWrapper />
    }
  ]);

  return (
    <RouterProvider router = {router} />
  )
}

export default App
