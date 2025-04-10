"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLightbox } from "../components/LightboxContext"
import { useData } from "../context/DataContext"
import LoadingSpinner from "../components/LoadingSpinner"
import ErrorMessage from "../components/ErrorMessage"

const GalleryPage = () => {
    const [filterCategory, setFilterCategory] = useState("all")
    const { openLightbox } = useLightbox()
    const { data, loading, error, refetch } = useData()

    if (loading) {
        return <LoadingSpinner />
    }

    if (error) {
        return <ErrorMessage message={error.message} onRetry={refetch} />
    }

    if (!data) {
        return <ErrorMessage message="No se pudieron cargar los datos" onRetry={refetch} />
    }

    const { categories, gallery_items } = data

    // Variantes para animaciones
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    const filteredItems = gallery_items.filter(
        (item) => filterCategory === "all" || item["Category ID"] === filterCategory,
    )

    return (
        <motion.div
            className="min-h-screen py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container px-4 mx-auto">
                <motion.h1
                    className="mb-12 text-3xl font-bold text-center md:text-4xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Galería de Eventos
                </motion.h1>

                {/* Category Filter */}
                <motion.div
                    className="flex justify-center pb-4 mb-12 overflow-x-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setFilterCategory("all")}
                        className={`px-4 py-2 mx-1 rounded-full ${filterCategory === "all" ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        Todos
                    </motion.button>
                    {categories.map((category, index) => (
                        <motion.button
                            key={category.ID}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setFilterCategory(category.ID)}
                            className={`px-4 py-2 mx-1 rounded-full whitespace-nowrap ${filterCategory === category.ID
                                    ? "bg-blue-700 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        >
                            {category.Name}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Gallery Grid */}
                <motion.div
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="cursor-pointer group"
                            onClick={() =>
                                openLightbox({
                                    image: item.Image,
                                    title: item.Title,
                                    description: item.Description,
                                })
                            }
                            role="button"
                            tabIndex={0}
                            aria-label={`Ver imagen: ${item.Title}`}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="relative overflow-hidden rounded-lg aspect-square">
                                <img
                                    src={item.Image || "/placeholder.svg"}
                                    alt={item.Title}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 flex items-end transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:opacity-100">
                                    <div className="p-6">
                                        <h3 className="text-xl font-medium text-white">{item.Title}</h3>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mensaje cuando no hay elementos */}
                {filteredItems.length === 0 && (
                    <motion.div
                        className="p-8 text-center text-gray-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        No se encontraron elementos en esta categoría.
                    </motion.div>
                )}
            </div>
        </motion.div>
    )
}

export default GalleryPage