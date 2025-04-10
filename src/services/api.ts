// URL de la API de Google Sheets
const API_URL =
    "https://script.google.com/macros/s/AKfycbw1YQ52xXsimJQV9gwVzWqMUrvTeC2mC2ALWBfjosEtfj8DGndrmFXzZVL2qp1glU3v0Q/exec"

// Tipos de datos
export interface Category {
    ID: string
    Name: string
}

export interface FeaturedEvent {
    Title: string
    Image: string
}

export interface Service {
    Title: string
    Description: string
    Image: string
    "Feature 1": string
    "Feature 2": string
    "Feature 3": string
    "Feature 4": string
    "Feature 5": string
}

export interface GalleryItem {
    Image: string
    Title: string
    Description: string
    "Category ID": string
}

export interface ApiResponse {
    categories: Category[]
    featured_events: FeaturedEvent[]
    services: Service[]
    gallery_items: GalleryItem[]
}

// Función para obtener los datos de la API
export async function fetchData(): Promise<ApiResponse> {
    try {
        const response = await fetch(API_URL)

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching data:", error)
        throw error
    }
}

// Función para convertir rutas relativas a absolutas
export function getImageUrl(path: string): string {
    // Si la ruta ya comienza con http o https, no la modificamos
    if (path.startsWith("http")) {
        return path
    }

    // Eliminamos la barra inicial si existe para evitar problemas con rutas relativas
    const cleanPath = path.startsWith("/") ? path.substring(1) : path

    // Construimos la URL completa
    return `./${cleanPath}`
}