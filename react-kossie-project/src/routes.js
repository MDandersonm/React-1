import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import ListPage from "./pages/ListPage";
import ShowPage from "./pages/ShowPage";


const routes = [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/blogs",
      component: ListPage,
    },
    {
      path: "/blogs/create",
      component: CreatePage,
    },
    {
      path: "/blogs/:id/edit",
      component: EditPage,
    },

    {
      path: "/blogs/:id",//순서가 중요하다 create가 위에있어야 create일때 id를 안보여주고 create페이지를 보여줌
      component: ShowPage,
    },
    
  ];

  export default routes;