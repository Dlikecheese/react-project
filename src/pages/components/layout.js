import { Outlet, useLocation } from 'react-router-dom';
import Header from './header';
import LeftMenu from './left-menu';

function Layout() {
  let location = useLocation();
  console.log(location);

  let isProjectPage = location.pathname === '/project';
  return (
    <div className="layout-wrap">
      <header className="header-wrap">
        <Header />
      </header>
      <div className="layout-wrap-project">
        {isProjectPage ? null : (
          <div className="project-side-menu-wrap">
            <LeftMenu />
          </div>
        )}
        <div className="project-wrap">
          {/* 子组件 */}
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Layout;
