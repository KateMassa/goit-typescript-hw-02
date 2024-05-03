export interface SearchBarProps {
  query: string;
  onSearch: (inputValue: string) => Promise<void>;
  onReset: () => void;
}
