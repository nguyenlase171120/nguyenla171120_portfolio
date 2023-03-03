import { ComponentType, Suspense, lazy } from "react";
import Loading from "../components/Loading";

const Loadable = (Component: ComponentType) => (props: any) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

const Mainlayout = Loadable(lazy(() => import("../layout/HomeLayout")));

const Router = () => {
  return <Mainlayout />;
};

export default Router;
