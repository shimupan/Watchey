import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, ProductPage, ProductView, SearchFeed } from "./sites/index";

import { Header, Footer } from "./components"

export default function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductView />} />
          <Route path="/search" element={<SearchFeed />} />
        </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}