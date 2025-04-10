"use client"

import type React from "react"
import { createContext, useState, useContext, type ReactNode } from "react"
import { X } from "lucide-react"

type LightboxImage = {
    image: string
    title: string
    description: string
} | null

type LightboxContextType = {
    lightboxImage: LightboxImage
    openLightbox: (image: LightboxImage) => void
    closeLightbox: () => void
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined)

export const useLightbox = () => {
    const context = useContext(LightboxContext)
    if (!context) {
        throw new Error("useLightbox must be used within a LightboxProvider")
    }
    return context
}

type LightboxProviderProps = {
    children: ReactNode
}

export const LightboxProvider: React.FC<LightboxProviderProps> = ({ children }) => {
    const [lightboxImage, setLightboxImage] = useState<LightboxImage>(null)

    const openLightbox = (image: LightboxImage) => {
        setLightboxImage(image)
        document.body.style.overflow = "hidden"
    }

    const closeLightbox = () => {
        setLightboxImage(null)
        document.body.style.overflow = "auto"
    }

    return (
        <LightboxContext.Provider value={{ lightboxImage, openLightbox, closeLightbox }}>
            {children}
            {lightboxImage && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
                    <button
                        type="button"
                        title="Close"
                        className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70"
                        onClick={(e) => {
                            e.stopPropagation()
                            closeLightbox()
                        }}
                    >
                        <X className="h-6 w-6" />
                    </button>
                    <div className="max-w-4xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={lightboxImage.image || "/placeholder.svg"}
                            alt={lightboxImage.title}
                            className="max-w-full max-h-[80vh] object-contain"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                            <h3 className="text-lg font-medium">{lightboxImage.title}</h3>
                            <p className="text-sm text-gray-300">{lightboxImage.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </LightboxContext.Provider>
    )
}