import PlaylistCoverExample from '@/assets/images/playlist-cover-example.jpeg'
import ProfileExample from '@/assets/images/profile-example.jpg'

const menuItems = [
  { name: 'Home', icons: 'ic:baseline-home', link: '/' },
  { name: 'Cari', icons: 'ic:baseline-search', link: '/search' },
  {
    name: 'Koleksi Kamu',
    icons: 'ic:baseline-local-library',
    link: '/collection',
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

const recommendedPlaylists = {
  name: 'Dibuat Untuk Azril Ardian Ifansyah',
  link: 'https://google.com',
  playlists: [
    {
      name: 'Daily Mix 1',
      type: 'Mix',
      artistInclude: ['Fiersa Besari', 'Sheila On 7', 'Adhitiya Sofyan'],
      description: 'Lorem ipsum dolor sit amet dolor lorem ipsum dolor',
      cover: PlaylistCoverExample,
    },
    {
      name: 'Daily Mix 2',
      type: 'Mix',
      artistInclude: ['Fiersa Besari', 'Sheila On 7', 'Adhitiya Sofyan'],
      description: 'Lorem ipsum dolor sit amet dolor lorem ipsum dolor',
      cover: PlaylistCoverExample,
    },
    {
      name: 'Daily Mix 3',
      type: 'Mix',
      artistInclude: ['Fiersa Besari', 'Sheila On 7', 'Adhitiya Sofyan'],
      description: 'Lorem ipsum dolor sit amet dolor lorem ipsum dolor',
      cover: PlaylistCoverExample,
    },
    {
      name: 'Daily Mix 4',
      type: 'Mix',
      artistInclude: ['Fiersa Besari', 'Sheila On 7', 'Adhitiya Sofyan'],
      description: 'Lorem ipsum dolor sit amet dolor lorem ipsum dolor',
      cover: PlaylistCoverExample,
    },
    {
      name: 'Daily Mix 5',
      type: 'Mix',
      artistInclude: ['Fiersa Besari', 'Sheila On 7', 'Adhitiya Sofyan'],
      description: 'Lorem ipsum dolor sit amet dolor lorem ipsum dolor',
      cover: PlaylistCoverExample,
    },
    {
      name: 'Daily Mix 6',
      type: 'Mix',
      artistInclude: ['Fiersa Besari', 'Sheila On 7', 'Adhitiya Sofyan'],
      description: 'Lorem ipsum dolor sit amet dolor lorem ipsum dolor',
      cover: PlaylistCoverExample,
    },
    {
      name: 'Daily Mix 7',
      type: 'Mix',
      artistInclude: ['Fiersa Besari', 'Sheila On 7', 'Adhitiya Sofyan'],
      description: 'Lorem ipsum dolor sit amet dolor lorem ipsum dolor',
      cover: PlaylistCoverExample,
    },
  ],
}

const recentlyPlayPlaylists = {
  name: 'Baru Saja Diputar',
  link: 'https://google.com',
  playlists: [
    {
      name: 'Neck Deep',
      type: 'Artist',
      artistInclude: ['Fiersa Besari', 'Sheila On 7', 'Adhitiya Sofyan'],
      description: 'Lorem ipsum dolor sit amet dolor lorem ipsum dolor',
      cover: PlaylistCoverExample,
    },
    {
      name: 'Neck Deep',
      type: 'Artist',
      artistInclude: ['Fiersa Besari', 'Sheila On 7', 'Adhitiya Sofyan'],
      description: 'Lorem ipsum dolor sit amet dolor lorem ipsum dolor',
      cover: PlaylistCoverExample,
    },
    {
      name: 'Neck Deep',
      type: 'Artist',
      artistInclude: ['Fiersa Besari', 'Sheila On 7', 'Adhitiya Sofyan'],
      description: 'Lorem ipsum dolor sit amet dolor lorem ipsum dolor',
      cover: PlaylistCoverExample,
    },
    {
      name: 'Daily Mix 4',
      type: 'Mix',
      artistInclude: ['Fiersa Besari', 'Sheila On 7', 'Adhitiya Sofyan'],
      description: 'Lorem ipsum dolor sit amet dolor lorem ipsum dolor',
      cover: PlaylistCoverExample,
    },
    {
      name: 'Daily Mix 5',
      type: 'Mix',
      artistInclude: ['Fiersa Besari', 'Sheila On 7', 'Adhitiya Sofyan'],
      description: 'Lorem ipsum dolor sit amet dolor lorem ipsum dolor',
      cover: PlaylistCoverExample,
    },
  ],
}

const collectionPlaylists = {
  name: 'Koleksi Kamu',
  link: 'https://google.com',
  playlists: [
    {
      name: 'Daily Mix 1',
      type: 'Mix',
      artistInclude: ['Fiersa Besari', 'Sheila On 7', 'Adhitiya Sofyan'],
      description: 'Lorem ipsum dolor sit amet dolor lorem ipsum dolor',
      cover: PlaylistCoverExample,
    },
    {
      name: 'Daily Mix 2',
      type: 'Mix',
      artistInclude: ['Fiersa Besari', 'Sheila On 7', 'Adhitiya Sofyan'],
      description: 'Lorem ipsum dolor sit amet dolor lorem ipsum dolor',
      cover: PlaylistCoverExample,
    },
    {
      name: 'Daily Mix 3',
      type: 'Mix',
      artistInclude: ['Fiersa Besari', 'Sheila On 7', 'Adhitiya Sofyan'],
      description: 'Lorem ipsum dolor sit amet dolor lorem ipsum dolor',
      cover: PlaylistCoverExample,
    },
    {
      name: 'Daily Mix 4',
      type: 'Mix',
      artistInclude: ['Fiersa Besari', 'Sheila On 7', 'Adhitiya Sofyan'],
      description: 'Lorem ipsum dolor sit amet dolor lorem ipsum dolor',
      cover: PlaylistCoverExample,
    },
    {
      name: 'Daily Mix 5',
      type: 'Mix',
      artistInclude: ['Fiersa Besari', 'Sheila On 7', 'Adhitiya Sofyan'],
      description: 'Lorem ipsum dolor sit amet dolor lorem ipsum dolor',
      cover: PlaylistCoverExample,
    },
    {
      name: 'Daily Mix 6',
      type: 'Mix',
      artistInclude: ['Fiersa Besari', 'Sheila On 7', 'Adhitiya Sofyan'],
      description: 'Lorem ipsum dolor sit amet dolor lorem ipsum dolor',
      cover: PlaylistCoverExample,
    },
    {
      name: 'Daily Mix 7',
      type: 'Mix',
      artistInclude: ['Fiersa Besari', 'Sheila On 7', 'Adhitiya Sofyan'],
      description: 'Lorem ipsum dolor sit amet dolor lorem ipsum dolor',
      cover: PlaylistCoverExample,
    },
    {
      name: 'Daily Mix 8',
      type: 'Mix',
      artistInclude: ['Fiersa Besari', 'Sheila On 7', 'Adhitiya Sofyan'],
      description: 'Lorem ipsum dolor sit amet dolor lorem ipsum dolor',
      cover: PlaylistCoverExample,
    },
    {
      name: 'Daily Mix 9',
      type: 'Mix',
      artistInclude: ['Fiersa Besari', 'Sheila On 7', 'Adhitiya Sofyan'],
      description: 'Lorem ipsum dolor sit amet dolor lorem ipsum dolor',
      cover: PlaylistCoverExample,
    },
  ],
}

const profile = {
  avatarSource: ProfileExample,
  name: 'Azril Ardian Ifansyah',
  description: 'Lorem ipsum dolor sit amet',
}

export {
  menuItems,
  menuItemsTwo,
  playlists,
  recentPlaylists,
  recommendedPlaylists,
  recentlyPlayPlaylists,
  collectionPlaylists,
  profile,
}
