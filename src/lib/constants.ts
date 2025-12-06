import type { MovieCardProps } from "@/components/MovieCard";
import type { Movie, Theater, User } from "./type";

export const movies: MovieCardProps[] = [
  {
    id: 1,
    imageUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    title: "The Dark Knight",
    imdRating: 9.0,
    description: "Batman faces the Joker, a criminal mastermind sowing chaos.",
  },
  {
    id: 2,
    imageUrl: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    title: "Inception",
    imdRating: 8.8,
    description: "A thief steals secrets by entering people's dreams.",
  },

  {
    id: 3,
    imageUrl: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    title: "Avatar",
    imdRating: 7.8,
    description: "A marine joins an alien tribe on Pandora.",
  },
  {
    id: 4,
    imageUrl: "https://image.tmdb.org/t/p/w500/fzKWwcaam9QSTaMSJlORuSojxio.jpg",
    title: "Titanic",
    imdRating: 7.9,
    description: "A tragic love story aboard the Titanic.",
  },

  {
    id: 5,
    imageUrl: "https://image.tmdb.org/t/p/w500/dRZpdpKLgN9nk57zggJCs1TjJb4.jpg",
    title: "Forrest Gump",
    imdRating: 8.8,
    description: "A simple man experiences extraordinary moments.",
  },

  {
    id: 6,
    imageUrl: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    title: "Avengers: Endgame",
    imdRating: 8.4,
    description: "The Avengers unite for one final battle.",
  },
  {
    id: 7,
    imageUrl: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    title: "Joker",
    imdRating: 8.4,
    description: "A troubled man becomes a criminal icon.",
  },
  {
    id: 8,
    imageUrl: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    title: "Dune",
    imdRating: 8.0,
    description: "A young man becomes involved in a galactic conflict.",
  },
];

export const dummyMovies: Movie[] = [
  {
    imageUrl: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
    name: "Shadow of Eternity",
    duration: "2h 14m",
    releaseDate: "2023-08-12",
    imdRating: "7.8",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
    name: "Shadow of Eternity",
    duration: "2h 14m",
    releaseDate: "2023-08-12",
    imdRating: "7.8",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
    name: "Crimson Horizon",
    duration: "1h 52m",
    releaseDate: "2022-11-03",
    imdRating: "6.9",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
    name: "Echoes in the Dark",
    duration: "2h 05m",
    releaseDate: "2021-04-19",
    imdRating: "8.1",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    name: "The Last Frontier",
    duration: "2h 28m",
    releaseDate: "2020-09-30",
    imdRating: "7.3",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    name: "Neon Skies",
    duration: "1h 47m",
    releaseDate: "2024-01-15",
    imdRating: "7.5",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
    name: "Legacy of Fire",
    duration: "2h 17m",
    releaseDate: "2019-06-21",
    imdRating: "8.0",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
    name: "Frozen Silence",
    duration: "1h 59m",
    releaseDate: "2018-02-10",
    imdRating: "6.7",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    name: "Rise of the Titan",
    duration: "2h 33m",
    releaseDate: "2023-12-04",
    imdRating: "8.4",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    name: "Voyage to Andromeda",
    duration: "2h 11m",
    releaseDate: "2021-07-22",
    imdRating: "7.9",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1495563381401-ecfbcaaa67e5",
    name: "Whispers of Time",
    duration: "1h 44m",
    releaseDate: "2020-03-18",
    imdRating: "7.1",
  },
];

export const dummyTheaters: Theater[] = [
  {
    name: "Grand Palace Theater",
    location: "New York, USA",
    createdAt: "2022-03-14",
  },
  {
    name: "Silver Screen Arena",
    location: "Los Angeles, USA",
    createdAt: "2021-11-05",
  },
  {
    name: "Royal Stage Cinema",
    location: "London, UK",
    createdAt: "2020-07-22",
  },
  {
    name: "Sunset Boulevard Theater",
    location: "Miami, USA",
    createdAt: "2023-01-18",
  },
  {
    name: "Aurora Film Hall",
    location: "Toronto, Canada",
    createdAt: "2019-09-30",
  },
  {
    name: "Galaxy View Theater",
    location: "Sydney, Australia",
    createdAt: "2021-04-09",
  },
  {
    name: "Imperial Cinema House",
    location: "Tokyo, Japan",
    createdAt: "2018-12-11",
  },
  {
    name: "Crescent Moon Theater",
    location: "Paris, France",
    createdAt: "2020-02-27",
  },
  {
    name: "Harborfront Film Center",
    location: "Vancouver, Canada",
    createdAt: "2022-06-15",
  },
  {
    name: "Golden Lantern Theater",
    location: "Bangkok, Thailand",
    createdAt: "2019-03-03",
  },
  {
    name: "Starlight Cinema",
    location: "Berlin, Germany",
    createdAt: "2023-08-10",
  },
  {
    name: "Mountain View Theater",
    location: "Denver, USA",
    createdAt: "2021-10-01",
  },
];

export const dummyUsers: User[] = [
  {
    fullName: "Alice Johnson",
    email: "alice.johnson@example.com",
    mobileNumber: "123-456-7890",
  },
  {
    fullName: "Bob Smith",
    email: "bob.smith@example.com",
    mobileNumber: "234-567-8901",
  },
  {
    fullName: "Charlie Brown",
    email: "charlie.brown@example.com",
    mobileNumber: "345-678-9012",
  },
  {
    fullName: "Diana Prince",
    email: "diana.prince@example.com",
    mobileNumber: "456-789-0123",
  },
  {
    fullName: "Ethan Hunt",
    email: "ethan.hunt@example.com",
    mobileNumber: "567-890-1234",
  },
  {
    fullName: "Fiona Gallagher",
    email: "fiona.gallagher@example.com",
    mobileNumber: "678-901-2345",
  },
  {
    fullName: "George Martin",
    email: "george.martin@example.com",
    mobileNumber: "789-012-3456",
  },
  {
    fullName: "Hannah Baker",
    email: "hannah.baker@example.com",
    mobileNumber: "890-123-4567",
  },
  {
    fullName: "Ian Somerhalder",
    email: "ian.somerhalder@example.com",
    mobileNumber: "901-234-5678",
  },
  {
    fullName: "Julia Roberts",
    email: "julia.roberts@example.com",
    mobileNumber: "012-345-6789",
  },
  {
    fullName: "Kevin Hart",
    email: "kevin.hart@example.com",
    mobileNumber: "123-456-7891",
  },
  {
    fullName: "Laura Palmer",
    email: "laura.palmer@example.com",
    mobileNumber: "234-567-8902",
  },
  {
    fullName: "Michael Scott",
    email: "michael.scott@example.com",
    mobileNumber: "345-678-9013",
  },
  {
    fullName: "Natalie Portman",
    email: "natalie.portman@example.com",
    mobileNumber: "456-789-0124",
  },
];
