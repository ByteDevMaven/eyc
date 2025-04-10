"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { fetchData, type ApiResponse } from "../services/api"

interface DataContextType {
    data: ApiResponse | null
    loading: boolean
    error: Error | null
    refetch: () => Promise<void>
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export const useData = () => {
    const context = useContext(DataContext)
    if (!context) {
        throw new Error("useData must be used within a DataProvider")
    }
    return context
}

interface DataProviderProps {
    children: ReactNode
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [data, setData] = useState<ApiResponse | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)

    const fetchDataFromApi = async () => {
        try {
            setLoading(true)
            setError(null)
            const result = await fetchData()
            setData(result)
        } catch (err) {
            setError(err instanceof Error ? err : new Error("An unknown error occurred"))
            // Cargar datos de respaldo en caso de error
            setData({
                categories: [
                    { ID: "bodas", Name: "Bodas" },
                    { ID: "corporativos", Name: "Corporativos" },
                    { ID: "privados", Name: "Eventos Privados" },
                    { ID: "buffets", Name: "Buffets" },
                ],
                featured_events: [
                    { Title: "Bodas Elegantes", Image: "./gallery/wedding-1.jpg" },
                    { Title: "Eventos Corporativos", Image: "./gallery/corporate-1.jpg" },
                    { Title: "Buffets Gourmet", Image: "./gallery/buffet-1.jpg" },
                ],
                services: [
                    {
                        Title: "Catering para Bodas",
                        Description:
                            "Hacemos que tu día especial sea inolvidable con un servicio de catering personalizado y elegante.",
                        Image: "./services/wedding-catering.jpg",
                        "Feature 1": "Menús personalizados según tus preferencias",
                        "Feature 2": "Opciones para diferentes presupuestos",
                        "Feature 3": "Degustación previa del menú",
                        "Feature 4": "Personal de servicio profesional",
                        "Feature 5": "Montaje y decoración de mesas",
                    },
                    {
                        Title: "Eventos Corporativos",
                        Description:
                            "Soluciones gastronómicas para todo tipo de eventos empresariales, desde desayunos hasta galas.",
                        Image: "./services/corporate-catering.jpg",
                        "Feature 1": "Coffee breaks y desayunos ejecutivos",
                        "Feature 2": "Almuerzos de trabajo y cócteles",
                        "Feature 3": "Cenas de gala y eventos formales",
                        "Feature 4": "Adaptación a espacios corporativos",
                        "Feature 5": "Opciones para dietas especiales",
                    },
                ],
                gallery_items: [
                    {
                        Image: "./gallery/wedding-1.jpg",
                        Title: "Boda Elegante",
                        Description: "Servicio de catering para una boda de 150 invitados con menú de 5 tiempos.",
                        "Category ID": "bodas",
                    },
                    {
                        Image: "./gallery/wedding-2.jpg",
                        Title: "Recepción de Boda",
                        Description: "Buffet y estaciones de comida para una recepción de boda al aire libre.",
                        "Category ID": "bodas",
                    },
                ],
            })
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchDataFromApi()
    }, [])

    return (
        <DataContext.Provider value= {{ data, loading, error, refetch: fetchDataFromApi }
}> { children } </DataContext.Provider>
  )
}