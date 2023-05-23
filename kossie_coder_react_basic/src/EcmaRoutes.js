import Array from "./ECMA6/01_array";
import Variable from "./ECMA6/02_variable";
import Class from "./ECMA6/03_Class";
import Function from "./ECMA6/04_Function";
import ArrayFunction from "./ECMA6/05_ArrayFunction";

const EcmaRoutes = [
  {
    path: "/ecma1",
    component: Array,
  },
  {
    path: "/ecma2",
    component: Variable,
  },
  {
    path: "/ecma3",
    component: Class,
  },
  {
    path: "/ecma4",
    component: Function,
  },
  {
    path: "/ecma5",
    component: ArrayFunction,
  },
];

export default EcmaRoutes;
