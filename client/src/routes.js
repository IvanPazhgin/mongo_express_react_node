import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import {LinksPage} from "./pages/linksPage";
import {CreatePage} from "./pages/createPage";
import {DetailPage} from "./pages/detailPage";
import {AuthPage} from "./pages/authPage";

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return(
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path='/links' element={<LinksPage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/detail/:id' element={<DetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}