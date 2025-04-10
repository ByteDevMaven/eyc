"use client"

import { motion } from "framer-motion"
import { useData } from "../context/DataContext"
import LoadingSpinner from "../components/LoadingSpinner"
import ErrorMessage from "../components/ErrorMessage"
import { getImageUrl } from "../services/api"

const ServicesPage = () => {
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

    const { services } = data

    // Variantes para animaciones
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const serviceVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7 },
        },
    }

    const featureVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 },
        },
    }

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
                    Nuestros Servicios
                </motion.h1>

                <motion.div
                    className="grid max-w-5xl grid-cols-1 gap-16 mx-auto md:grid-cols-2"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {services.map((service, index) => (
                        <motion.div key={index} className="flex flex-col" variants={serviceVariants}>
                            <motion.div
                                className="mb-6 overflow-hidden rounded-lg aspect-[3/2]"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src={getImageUrl(service.Image) || "/placeholder.svg"}
                                    alt={service.Title}
                                    className="object-cover w-full h-full"
                                />
                            </motion.div>
                            <motion.h2
                                className="mb-3 text-2xl font-bold"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                {service.Title}
                            </motion.h2>
                            <motion.p
                                className="mb-4 text-gray-600"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                {service.Description}
                            </motion.p>
                            <motion.ul
                                className="space-y-2 text-gray-600"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {[
                                    service["Feature 1"],
                                    service["Feature 2"],
                                    service["Feature 3"],
                                    service["Feature 4"],
                                    service["Feature 5"],
                                ]
                                    .filter(Boolean)
                                    .map((feature, idx) => (
                                        <motion.li
                                            key={idx}
                                            className="flex items-start"
                                            variants={featureVariants}
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span className="mr-2 text-blue-700">•</span>
                                            {feature}
                                        </motion.li>
                                    ))}
                            </motion.ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ServicesPage