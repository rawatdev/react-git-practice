import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import BlogsPage from "./pages/BlogsPage"
import BlogPage from "./pages/BlogPage"
import NotFoundPage from "./pages/NotFoundPage"
import ProductPage from "./pages/ProductPage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />

      {/* Blogs Page */}
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blogs/:id" element={<BlogPage />} />

      {/* Product Page */}
      <Route path="/product" element={<ProductPage />} />

      {/* Not Found Page */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
