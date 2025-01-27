interface Props {
    onSearch: (term: string) => void;
  }
  
  export const SearchBar = ({ onSearch }: Props) => {
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder="Search departments..."
          onChange={(e) => onSearch(e.target.value)}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>
    );
  };