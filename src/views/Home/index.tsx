import { Role, useMeQuery } from "@Generated/hooks";
import { MenuAdmin, MenuSecretary, MenuUser } from "@Views";
import React from "react";

const Home = () => {
  const data = useMeQuery();
  if (data.data?.me.roles.includes(Role.Admin)) return <MenuAdmin />;
  else if (data.data?.me.roles.includes(Role.Secretary)) {
    return <MenuSecretary />;
  }
  return <MenuUser />;
};

export default Home;
