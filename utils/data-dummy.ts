import PlaylistCoverExample from '@/assets/images/playlist-cover-example.jpeg'

const menuItems = [
  { name: 'Home', icons: 'ic:baseline-home', link: '/' },
  { name: 'Cari', icons: 'ic:baseline-search', link: '/search' },
  {
    name: 'Koleksi Kamu',
    icons: 'ic:baseline-local-library',
    link: '/library',
  },
]

const menuItemsTwo = [
  { name: 'Buat Playlist', icons: 'material-symbols:add-box', link: '/' },
  { name: 'Lagu Yang  Disukai', icons: 'mdi:heart', link: '/liked-songs' },
]

const playlists = [
  { name: 'Classroom', link: 'https://google.com' },
  { name: 'For Him', link: 'https://google.com' },
  { name: 'Bumi', link: 'https://google.com' },
  { name: 'Lagu Teratasmu 2022', link: 'https://google.com' },
  { name: 'Nangis aja kamu kan lemah', link: 'https://google.com' },
  { name: 'Ga pernah jadian.', link: 'https://google.com' },
  { name: 'Lampu', link: 'https://google.com' },
  { name: 'Missing her', link: 'https://google.com' },
  { name: 'Sip', link: 'https://google.com' },
  { name: 'Koala', link: 'https://google.com' },
  { name: 'Im Fine', link: 'https://google.com' },
]

const recentPlaylists = [
  { name: 'Lagu Teratasmu di 2023', cover: PlaylistCoverExample },
  { name: 'Hot Hits Indonesia', cover: PlaylistCoverExample },
  { name: 'Lagu yang Disukai', cover: PlaylistCoverExample },
  { name: 'Lagu Teratasmu di 2023', cover: PlaylistCoverExample },
  { name: 'Hot Hits Indonesia', cover: PlaylistCoverExample },
  { name: 'Lagu yang Disukai', cover: PlaylistCoverExample },
]

export { menuItems, menuItemsTwo, playlists, recentPlaylists }
