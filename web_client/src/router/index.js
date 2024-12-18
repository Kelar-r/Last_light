import Index from "../pages/Index";
import NewsPage from "../pages/NewsPage";
import Contacts from "../pages/Contacts";
import PageNotFound from "../pages/PageNotFound";


const routes = [
    { path: "/", element: <Index />, exact: true },
    { path: "/news", element: <NewsPage />, exact: true },
    { path: "/gallery", element: <Index />, exact: true },
    { path: "/contacts", element: <Contacts />, exact: true },

    { path: "*", element: <PageNotFound />, exact: false }
];


export default routes