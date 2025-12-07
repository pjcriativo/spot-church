export interface LibraryItem {
    id: string
    title: string
    subtitle: string
    artwork: string
    type: 'playlist' | 'album' | 'artist'
}

export const mockLibraryPlaylists: LibraryItem[] = [
    {
        id: '1',
        title: 'Indie Pop',
        subtitle: 'Playlist • 45 músicas',
        artwork: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop',
        type: 'playlist',
    },
    {
        id: '2',
        title: 'Chill Vibes',
        subtitle: 'Playlist • 32 músicas',
        artwork: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
        type: 'playlist',
    },
    {
        id: '3',
        title: 'Workout Mix',
        subtitle: 'Playlist • 28 músicas',
        artwork: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
        type: 'playlist',
    },
    {
        id: '4',
        title: 'Late Night',
        subtitle: 'Playlist • 56 músicas',
        artwork: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop',
        type: 'playlist',
    },
    {
        id: '5',
        title: 'Road Trip',
        subtitle: 'Playlist • 67 músicas',
        artwork: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop',
        type: 'playlist',
    },
    {
        id: '6',
        title: 'Focus Flow',
        subtitle: 'Playlist • 41 músicas',
        artwork: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop',
        type: 'playlist',
    },
]

export const mockLibraryAlbums: LibraryItem[] = [
    {
        id: '1',
        title: 'Starboy',
        subtitle: 'Álbum • The Weeknd',
        artwork: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
        type: 'album',
    },
    {
        id: '2',
        title: 'After Hours',
        subtitle: 'Álbum • The Weeknd',
        artwork: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop',
        type: 'album',
    },
    {
        id: '3',
        title: 'Future Nostalgia',
        subtitle: 'Álbum • Dua Lipa',
        artwork: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
        type: 'album',
    },
]

export const mockLibraryArtists: LibraryItem[] = [
    {
        id: '1',
        title: 'The Weeknd',
        subtitle: 'Artista',
        artwork: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
        type: 'artist',
    },
    {
        id: '2',
        title: 'Dua Lipa',
        subtitle: 'Artista',
        artwork: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop',
        type: 'artist',
    },
    {
        id: '3',
        title: 'Lana Del Rey',
        subtitle: 'Artista',
        artwork: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop',
        type: 'artist',
    },
]
