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
import Profile from "./pages/profile";

const ViewArticlesWrapper = () => { //Handles dynamic articleS page generation
  const match = useMatch('/:tagID');
  const tagId = match?.params?.tagID;

  return <Articles tagID={tagId} />
}

const ViewArticleWrapper = () => { //Handles dynamic article page generation
  const match = useMatch('/article/:articleID');
  const articleId = match?.params?.articleID;

  return <ViewArticle articleId={articleId} />;
};

const ProfileWrapper = () => { //Handles dynamic user profile page generation
  const match = useMatch('/user/:userID');
  const userId = match?.params?.userID;

  return <Profile userId={userId} />;
};

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Articles />,
    },
    {
      path: '/:tagID',
      element: <ViewArticlesWrapper />
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
    },
    {
      path: '/user/:userID',
      element: <ProfileWrapper />
    }
  ]);

  return (
    <RouterProvider router = {router} />
  )
}

export default App
