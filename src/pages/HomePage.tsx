"use client"

import { NavLink } from "react-router-dom"
import { ArrowRight, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { useData } from "../context/DataContext"
import LoadingSpinner from "../components/LoadingSpinner"
import ErrorMessage from "../components/ErrorMessage"
import { getImageUrl } from "../services/api"

const HomePage = () => {
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

    const { featured_events } = data

    return (
        <motion.div
            className="flex flex-col min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero */}
            <div className="relative h-[90vh] overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-700/80 to-blue-900/80"></div>
                <motion.img
                    src="/background.webp"
                    alt="Servicio de Catering"
                    className="absolute inset-0 object-cover w-full h-full"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                />
                <div className="absolute inset-0 z-20 flex items-center">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-xl">
                            <motion.h1
                                className="mb-6 text-4xl font-bold text-white md:text-6xl"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                Elegancia en cada <span className="text-yellow-400">detalle</span>
                            </motion.h1>
                            <motion.p
                                className="mb-8 text-xl text-white/90"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                            >
                                Servicio de catering exclusivo para eventos inolvidables
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                            >
                                <NavLink
                                    to="/galeria"
                                    className="inline-flex items-center px-6 py-3 text-white rounded-md bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500"
                                >
                                    <motion.span whileHover={{ x: 5 }} className="flex items-center">
                                        Ver Galería
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </motion.span>
                                </NavLink>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Images */}
            <div className="py-20 bg-white">
                <div className="container px-4 mx-auto">
                    <motion.h2
                        className="mb-12 text-3xl font-bold text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Nuestros Eventos Destacados
                    </motion.h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {featured_events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <NavLink to="/galeria" className="block group">
                                    <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                                        <img
                                            src={getImageUrl(event.Image) || "/placeholder.svg"}
                                            alt={event.Title}
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 flex items-end transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:opacity-100">
                                            <div className="p-6">
                                                <h3 className="text-xl font-medium text-white">{event.Title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <NavLink to="/galeria" className="inline-flex items-center font-medium text-blue-700 hover:text-blue-900">
                            <motion.span whileHover={{ x: 5 }} className="flex items-center">
                                Ver todos los eventos
                                <ChevronRight className="w-5 h-5 ml-1" />
                            </motion.span>
                        </NavLink>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default HomePage