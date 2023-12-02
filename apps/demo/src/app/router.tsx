import { createBrowserRouter } from 'react-router-dom';

import Root from '~/routes/layout';
import Home from '~/routes/page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
