const matchRoute = (index: number, route: string) => {
  const routeList = route.split("/");
  return routeList[index];
};

export default matchRoute;
