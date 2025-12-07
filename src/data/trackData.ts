import { Track } from './mockData'

export interface NextTrack {
    id: string
    title: string
    artist: string
    artwork: string
    duration: string
}

export const mockPlaylistTracks: NextTrack[] = [
    {
        id: '1',
        title: 'Easy',
        artist: 'Troye Sivan',
        artwork: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop',
        duration: '3:45',
    },
    {
        id: '2',
        title: 'chance with you',
        artist: 'mehro',
        artwork: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&h=200&fit=crop',
        duration: '4:12',
    },
    {
        id: '3',
        title: 'Nirvana',
        artist: 'Sam Smith',
        artwork: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=200&h=200&fit=crop',
        duration: '3:28',
    },
    {
        id: '4',
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        artwork: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop',
        duration: '3:20',
    },
    {
        id: '5',
        title: 'Levitating',
        artist: 'Dua Lipa',
        artwork: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=200&h=200&fit=crop',
        duration: '3:23',
    },
]

export const mockCurrentPlaylist = {
    id: 'indie-pop',
    title: 'Indie Pop',
    description: 'Indie pop novo e aprovado. Capa: No Rome',
    artwork: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=600&fit=crop',
    likes: 1629592,
    duration: '6h 48min',
    tracks: mockPlaylistTracks,
}
