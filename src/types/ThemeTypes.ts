// Define the shape of the context data
export interface ThemeContextType {
  selectedTheme: string;
  toggleTheme: () => void;
}

// Interface for Product type
export interface Product {
  product: {
    id: string;
    name: string;
    price: string;
    img: string;
  };
}