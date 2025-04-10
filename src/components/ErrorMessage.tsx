"use client"

import type React from "react"

interface ErrorMessageProps {
    message: string
    onRetry?: () => void
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
    return (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative my-6" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{message}</span>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="mt-2 bg-red-100 hover:bg-red-200 text-red-800 font-semibold py-2 px-4 rounded"
                >
                    Reintentar
                </button>
            )}
        </div>
    )
}

export default ErrorMessage