import Actors from "./pages/Actors"
import Directors from "./pages/Directors"
import Home from "./pages/Home"
import Movie from "./pages/Movie"
import Error from "./pages/Error"

const routes = [
  {
   path: '/',
   element: <Home />,
   errorElement: <Error />
  },
  {
   path: '/movie/:id',
   element: <Movie />,
   errorElement: <Error />
  },
  {
   path: '/directors',
   element: <Directors />,
   errorElement: <Error />
  },
  {
   path: '/actors',
   element: <Actors />,
   errorElement: <Error />
  },
  {
   path: '*',
   element: <Error />
 }
];

export default routes;