"use client"

import { HashRouter, Routes, Route, NavLink } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react"

// Pages
import HomePage from "./pages/HomePage"
import GalleryPage from "./pages/GalleryPage"
import ServicesPage from "./pages/ServicesPage"
import ContactPage from "./pages/ContactPage"
import { LightboxProvider } from "./components/LightboxContext"
import { DataProvider } from "./context/DataContext"

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <HashRouter>
      <DataProvider>
        <LightboxProvider>
          <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white border-b">
              <div className="container flex items-center justify-between px-4 py-4 mx-auto">
                <div className="flex items-center gap-2">
                  <img src="./logo.webp" alt="Elegancia y Comfort" className="w-auto h-8" />
                  <span className="font-serif text-lg">Elegancia y Comfort</span>
                </div>

                <nav className="items-center hidden gap-8 md:flex">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-blue-700 font-medium" : "text-gray-600 hover:text-blue-700 transition-colors"
                    }
                  >
                    Inicio
                  </NavLink>
                  <NavLink
                    to="/galeria"
                    className={({ isActive }) =>
                      isActive ? "text-blue-700 font-medium" : "text-gray-600 hover:text-blue-700 transition-colors"
                    }
                  >
                    Galería
                  </NavLink>
                  <NavLink
                    to="/servicios"
                    className={({ isActive }) =>
                      isActive ? "text-blue-700 font-medium" : "text-gray-600 hover:text-blue-700 transition-colors"
                    }
                  >
                    Servicios
                  </NavLink>
                  <NavLink
                    to="/contacto"
                    className={({ isActive }) =>
                      isActive ? "text-blue-700 font-medium" : "text-gray-600 hover:text-blue-700 transition-colors"
                    }
                  >
                    Contacto
                  </NavLink>
                </nav>

                <button className="p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </header>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="fixed inset-0 z-40 pt-16 bg-white">
                <div className="container px-4 py-8 mx-auto">
                  <nav className="flex flex-col gap-6 text-xl">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "text-blue-700 font-medium" : "text-gray-600 hover:text-blue-700 transition-colors"
                      }
                      onClick={closeMenu}
                    >
                      Inicio
                    </NavLink>
                    <NavLink
                      to="/galeria"
                      className={({ isActive }) =>
                        isActive ? "text-blue-700 font-medium" : "text-gray-600 hover:text-blue-700 transition-colors"
                      }
                      onClick={closeMenu}
                    >
                      Galería
                    </NavLink>
                    <NavLink
                      to="/servicios"
                      className={({ isActive }) =>
                        isActive ? "text-blue-700 font-medium" : "text-gray-600 hover:text-blue-700 transition-colors"
                      }
                      onClick={closeMenu}
                    >
                      Servicios
                    </NavLink>
                    <NavLink
                      to="/contacto"
                      className={({ isActive }) =>
                        isActive ? "text-blue-700 font-medium" : "text-gray-600 hover:text-blue-700 transition-colors"
                      }
                      onClick={closeMenu}
                    >
                      Contacto
                    </NavLink>
                  </nav>
                </div>
              </div>
            )}

            {/* Main Content */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/galeria" element={<GalleryPage />} />
                <Route path="/servicios" element={<ServicesPage />} />
                <Route path="/contacto" element={<ContactPage />} />
              </Routes>
            </main>

            {/* Footer */}
            <footer className="py-8 bg-gray-100">
              <div className="container px-4 mx-auto">
                <div className="flex flex-col items-center justify-between md:flex-row">
                  <div className="mb-4 md:mb-0">
                    <img src="./logo.webp" alt="Elegancia y Comfort" className="inline-block w-auto h-8 mr-2" />
                    <span className="text-gray-600">© {new Date().getFullYear()} Elegancia y Comfort</span>
                  </div>
                  <div className="flex gap-6">
                    <NavLink to="/" className="text-gray-600 hover:text-blue-700">
                      Inicio
                    </NavLink>
                    <NavLink to="/galeria" className="text-gray-600 hover:text-blue-700">
                      Galería
                    </NavLink>
                    <NavLink to="/servicios" className="text-gray-600 hover:text-blue-700">
                      Servicios
                    </NavLink>
                    <NavLink to="/contacto" className="text-gray-600 hover:text-blue-700">
                      Contacto
                    </NavLink>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </LightboxProvider>
      </DataProvider>
    </HashRouter>
  )
}

export default App