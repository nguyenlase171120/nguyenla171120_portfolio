import { ComponentType, Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/Loading";

const Loadable = (Component: ComponentType) => (props: any) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

const Mainlayout = Loadable(lazy(() => import("../layout/HomeLayout")));
const IntroducePage = Loadable(lazy(() => import("../components/Introduce")));

export default createBrowserRouter([
  {
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <IntroducePage />, 
      },
    ],
  },
]);
