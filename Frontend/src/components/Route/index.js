import { Redirect, Route as WouterRoute } from "wouter";
//import { useUser } from "../../hooks";
//ahora mismo no tenemos login

const Route = ({ guarded = false, component: Component, ...rest }) => {
  //const { data, isLoading } = useUser();

  //if (isLoading) return <h3>Loading...</h3>;

  if (!guarded) return <Component />;

  /*return guarded && data?.success ? (
    <WouterRoute {...{ component: Component, ...rest }} />
  ) : (
    <Redirect to="/login" />
  );*/

  return <WouterRoute {...{ component: Component, ...rest }} />;
};

export default Route;