import { Outlet } from "react-router-dom";

import MainFooter from './MainFooter';
import MainHeader from './MainHeader';

export default function MainLayout() {
  return (
    <>
      <MainHeader />
        <Outlet />
      <MainFooter />
    </>
  );
}
