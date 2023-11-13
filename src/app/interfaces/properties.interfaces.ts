export interface Property {
  amenities: string[];
  categories: string[];
  type: string;
  createdAt: Date;
  description: string;
  id: string;
  price: string;
  rating: number;
  title: string;
  userID: string;
  images: Image[];
  features: Features;
  location: Location;
  user: User;
}

export interface Features {
  bathroomCount: number;
  id: string;
  listingID: string;
  propertyArea: number;
  roomCount: number;
}

export interface Image {
  id: string;
  listingID: string;
  publicID: string;
  url: string;
}

export interface Location {
  address: string;
  coordinates: number[];
  country: string;
  id: string;
  listingID: string;
  place: string;
  placeName: string;
  postCode: number;
  region: string;
}

export interface User {
  createdAt: Date;
  email: string;
  emailVerified: null;
  favoriteIDS: any[];
  hashedPassword: string;
  id: string;
  image: string;
  name: string;
  phone: string;
  role: string;
  updatedAt: Date;
}
