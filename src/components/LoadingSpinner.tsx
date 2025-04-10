import type React from "react"

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-700"></div>
            <span className="sr-only">Cargando...</span>
        </div>
    )
}

export default LoadingSpinner