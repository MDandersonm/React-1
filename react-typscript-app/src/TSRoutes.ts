import CodingNuNa from "./pages/01_CodingNuNa";
import CodingAngMa from "./pages/02_CodingAngMa";
import AngMa_ECMA6 from "./pages/03_AngMa_ECMA6";
import AngMa_Promise from "./pages/04_AngMa_Promise";
import CodingMoon from "./pages/05_CodingMoon";


const TSRoutes = [
  {
    path: "/ts1",
    component: CodingNuNa,
  },
  {
    path: "/ts2",
    component: CodingAngMa,
  },
  {
    path: "/ts3",
    component: AngMa_ECMA6,
  },
  {
    path: "/ts4",
    component: AngMa_Promise,
  },
  {
    path: "/ts5",
    component: CodingMoon,
  },

];

export default TSRoutes;
