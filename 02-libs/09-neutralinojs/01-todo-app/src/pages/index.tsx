import { BrowserRouter, Routes, Route } from "react-router-dom";

import FolderPage from "./Folders";
import HomePage from "./Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/folders" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
