import { createBrowserRouter } from 'react-router-dom';

import Root from '~/routes/layout';
import Home from '~/routes/page';
import Resources from '~/routes/resources/page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'resources',
        element: <Resources />,
      },
    ],
  },
]);
