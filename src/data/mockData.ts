export interface User {
    id: string
    name: string
    username: string
    avatar: string
    bio: string
    stats: {
        playlists: number
        followers: number
        following: number
    }
}

export interface Playlist {
    id: string
    title: string
    artwork: string
    songCount: number
    duration: string
    isLiked: boolean
}

export interface Track {
    id: string
    title: string
    artist: string
    album: string
    artwork: string
    duration: string
    audioUrl: string
}

export const mockUser: User = {
    id: '1',
    name: 'Kelly Owens',
    username: '@kellyowens',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    bio: 'Music lover | Playlist curator | Always discovering new sounds',
    stats: {
        playlists: 12,
        followers: 1234,
        following: 340,
    },
}

export const mockPlaylists: Playlist[] = [
    {
        id: '1',
        title: 'PopWorld',
        artwork: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
        songCount: 120,
        duration: '03h 34min',
        isLiked: true,
    },
    {
        id: '2',
        title: 'Dusk Till Dawn',
        artwork: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
        songCount: 28,
        duration: '01h 42min',
        isLiked: true,
    },
    {
        id: '3',
        title: 'Last Hurrah',
        artwork: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
        songCount: 45,
        duration: '02h 18min',
        isLiked: false,
    },
    {
        id: '4',
        title: 'Wolves',
        artwork: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
        songCount: 67,
        duration: '03h 12min',
        isLiked: false,
    },
    {
        id: '5',
        title: 'Into You',
        artwork: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
        songCount: 89,
        duration: '04h 05min',
        isLiked: true,
    },
    {
        id: '6',
        title: 'Sacrifice',
        artwork: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop',
        songCount: 34,
        duration: '01h 56min',
        isLiked: true,
    },
]

export const mockCurrentTrack: Track = {
    id: '1',
    title: 'Reminder',
    artist: 'The Weeknd',
    album: 'Starboy',
    artwork: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop',
    duration: '3:38',
    audioUrl: '',
}
