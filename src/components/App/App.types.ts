export interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  description: string;
  alt_description: string;
}

export interface AppProps {
  onSearch: (inputValue: string) => Promise<void>;
  onReset: () => void;
}

export interface AppState {
  images: Image[];
  query: string;
  page: number;
  loading: boolean;
  error: boolean;
  selectedImage: Image | null;
  hasMore: number;
}
