import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => (
  // eslint-disable-next-line i18next/no-literal-string
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {
        Object.values(RouteConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={(
              <div className="page-wrapper">
                {element}
              </div>
            )}
          />
        ))
      }
    </Routes>
  </Suspense>
);

export default AppRouter;
