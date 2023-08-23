import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { ComparePage, MapPage, SearchPage } from "./pages";
import Root from "./Root";

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<SearchPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/map" element={<MapPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
