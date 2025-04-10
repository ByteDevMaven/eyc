"use client"

import { MapPin, Phone, Mail, Clock, ExternalLink, Instagram, Facebook, Twitter } from "lucide-react"
import { motion } from "framer-motion"

const ContactPage = () => {
    return (
        <div className="min-h-screen py-16 bg-gray-50">
            <div className="container px-4 mx-auto">
                <motion.h1
                    className="mb-6 text-3xl font-bold text-center md:text-4xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Contacto
                </motion.h1>

                <motion.p
                    className="max-w-2xl mx-auto mb-12 text-center text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Estamos encantados de atender cualquier consulta sobre nuestros servicios de catering. Contáctanos y te
                    responderemos a la mayor brevedad posible.
                </motion.p>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {/* Información de contacto */}
                        <motion.div
                            className="p-8 bg-white rounded-lg shadow-sm"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h2 className="mb-6 text-2xl font-bold text-blue-700">Información de Contacto</h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="p-3 mr-4 rounded-full bg-blue-50">
                                        <MapPin className="w-6 h-6 text-blue-700" />
                                    </div>
                                    <div>
                                        <h3 className="mb-1 text-lg font-medium">Dirección</h3>
                                        <p className="text-gray-600">Calle los Alcaldes</p>
                                        <p className="text-gray-600">Col Ciudad Nueva, Bloque BB 25</p>
                                        <a
                                            href="https://www.google.com/maps/place/Elegancia+y+Comfort/@14.0630441,-87.2400713,15z/data=!4m6!3m5!1s0x8f6f97ea81fa4835:0x732c77b1e5ebf77a!8m2!3d14.0612544!4d-87.239728!16s%2Fg%2F11xr12hz5?hl=en&entry=ttu&g_ep=EgoyMDI1MDQwNy4wIKXMDSoASAFQAw%3D%3D"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center mt-2 text-sm text-blue-600 hover:text-blue-800"
                                        >
                                            Ver en Google Maps
                                            <ExternalLink className="w-3 h-3 ml-1" />
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="p-3 mr-4 rounded-full bg-blue-50">
                                        <Phone className="w-6 h-6 text-blue-700" />
                                    </div>
                                    <div>
                                        <h3 className="mb-1 text-lg font-medium">Teléfono</h3>
                                        <p className="text-gray-600">+504 3240-1214</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="p-3 mr-4 rounded-full bg-blue-50">
                                        <Mail className="w-6 h-6 text-blue-700" />
                                    </div>
                                    <div>
                                        <h3 className="mb-1 text-lg font-medium">Email</h3>
                                        <a href="mailto:eleganciaycomfort@gmail.com" className="text-gray-600 hover:text-blue-700">
                                            eleganciaycomfort@gmail.com
                                        </a>
                                        <p className="mt-1 text-sm text-gray-500">Para consultas generales</p>

                                        <a
                                            href="mailto:eventos@eleganciacomfort.com"
                                            className="hidden mt-2 text-gray-600 hover:text-blue-700"
                                        >
                                            eventos@eleganciacomfort.com
                                        </a>
                                        <p className="hidden mt-1 text-sm text-gray-500">Para presupuestos de eventos</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="p-3 mr-4 rounded-full bg-blue-50">
                                        <Clock className="w-6 h-6 text-blue-700" />
                                    </div>
                                    <div>
                                        <h3 className="mb-1 text-lg font-medium">Horario de Atención</h3>
                                        <p className="text-gray-600">Lunes a Viernes: 8:00am - 4:00pm</p>
                                        <p className="text-gray-600">Sábados: 8:00am - 12:00pm</p>
                                        <p className="text-gray-600">Domingos: Cerrado</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mapa y redes sociales */}
                        <div className="flex flex-col gap-8">
                            <motion.div
                                className="h-64 overflow-hidden bg-white rounded-lg shadow-sm"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <iframe className="w-full h-full border-none"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.269539985913!2d-87.239728!3d14.061254400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6f97ea81fa4835%3A0x732c77b1e5ebf77a!2sElegancia%20y%20Comfort!5e0!3m2!1sen!2shn!4v1744233121687!5m2!1sen!2shn"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ubicación de Elegancia y Comfort"
                                ></iframe>
                            </motion.div>

                            <motion.div
                                className="hidden p-8 bg-white rounded-lg shadow-sm"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <h2 className="mb-6 text-2xl font-bold text-blue-700">Síguenos</h2>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 text-white transition-opacity rounded-md bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"
                                    >
                                        <Instagram className="w-5 h-5" />
                                        <span>Instagram</span>
                                    </a>
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
                                    >
                                        <Facebook className="w-5 h-5" />
                                        <span>Facebook</span>
                                    </a>
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-blue-400 rounded-md hover:bg-blue-500"
                                    >
                                        <Twitter className="w-5 h-5" />
                                        <span>Twitter</span>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Mensaje de contacto */}
                    <motion.div
                        className="p-8 mt-12 text-center text-white rounded-lg bg-gradient-to-r from-blue-700 to-blue-900"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <h2 className="mb-4 text-2xl font-bold">¿Necesitas un presupuesto personalizado?</h2>
                        <p className="mb-6 text-blue-100">
                            Llámanos directamente al +504 3240-1214 o envíanos un email a eleganciaycomfort@gmail.com y te
                            responderemos en menos de 24 horas con un presupuesto adaptado a tus necesidades.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="tel:+50432401214"
                                className="inline-flex items-center px-6 py-3 font-medium text-blue-700 transition-colors bg-white rounded-md hover:bg-blue-50"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Llamar ahora
                            </a>
                            <a
                                href="mailto:eleganciaycomfort@gmail.com"
                                className="inline-flex items-center px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
                            >
                                <Mail className="w-5 h-5 mr-2" />
                                Enviar email
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage