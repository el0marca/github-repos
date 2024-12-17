import { ReposPage } from "@/pages/ReposPage";
import { SearchPage } from "@/pages/SearchPage";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/repos/:org" element={<ReposPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
