import { createContext, useContext, useState, ReactNode } from 'react'

interface Track {
    title: string
    artist: string
    artwork: string
}

interface PlayerContextType {
    currentTrack: Track | null
    setCurrentTrack: (track: Track | null) => void
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined)

export function PlayerProvider({ children }: { children: ReactNode }) {
    const [currentTrack, setCurrentTrack] = useState<Track | null>({
        title: 'Easy',
        artist: 'Troye Sivan',
        artwork: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop'
    })

    return (
        <PlayerContext.Provider value={{ currentTrack, setCurrentTrack }}>
            {children}
        </PlayerContext.Provider>
    )
}

export function usePlayer() {
    const context = useContext(PlayerContext)
    if (context === undefined) {
        throw new Error('usePlayer must be used within a PlayerProvider')
    }
    return context
}
