import { mockPlaylists, mockCurrentTrack, Playlist, Track } from './mockData'

export interface RecentlyPlayedItem {
    id: string
    title: string
    artist: string
    artwork: string
    type: 'album' | 'artist' | 'playlist'
}

export interface EditorsPick {
    id: string
    title: string
    subtitle: string
    artwork: string
    color: string
}

export const mockRecentlyPlayed: RecentlyPlayedItem[] = [
    {
        id: '1',
        title: '1 (Remastered)',
        artist: 'The Beatles',
        artwork: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
        type: 'album',
    },
    {
        id: '2',
        title: 'Lana Del Rey',
        artist: 'Artist',
        artwork: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop',
        type: 'artist',
    },
    {
        id: '3',
        title: 'Marvin Gaye',
        artist: 'Artist',
        artwork: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop',
        type: 'artist',
    },
    {
        id: '4',
        title: 'Indie Pop',
        artist: 'Playlist',
        artwork: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
        type: 'playlist',
    },
]

export const mockYearReview = {
    id: 'year-review',
    title: 'Your 2021 in review',
    artwork: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=300&fit=crop',
    color: '#E1FFBA',
}

export const mockTopSongs = {
    id: 'top-songs',
    title: 'Your Top Songs 2021',
    artwork: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
    color: '#E1FFBA',
}

export const mockTopArtists = {
    id: 'top-artists',
    title: 'Your Artists Revealed',
    artwork: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    color: '#DEBDFF',
}

export const mockEditorsPicks: EditorsPick[] = [
    {
        id: '1',
        title: 'A',
        subtitle: 'Ed Sheeran, Big Sean, Juice WRLD, Post Malone',
        artwork: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=600&fit=crop',
        color: '#E1FFBA',
    },
    {
        id: '2',
        title: 'FRONT LEFT',
        subtitle: 'Mitski, Tame Impala, Glass Animals, Charli XCX',
        artwork: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop',
        color: '#DEBDFF',
    },
    {
        id: '3',
        title: 'INDIE',
        subtitle: 'Arctic Monkeys, The Strokes, Tame Impala',
        artwork: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=600&fit=crop',
        color: '#E1FFBA',
    },
]
