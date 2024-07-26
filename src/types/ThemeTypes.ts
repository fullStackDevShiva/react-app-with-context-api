// Define the shape of the context data
export interface ThemeContextType {
  selectedTheme: string;
  toggleTheme: () => void;
}

// Interface for Package type
export interface TripPackage {
    id: string;
    name: string;
    price: string;
    img: string;
}