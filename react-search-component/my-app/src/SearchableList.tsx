import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

type SearchableListProps = { list: string[] };
export default function SearchableList({ list }: SearchableListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  function handleChange(searchTerm: string) {
    setSearchTerm(searchTerm);
  }

  const filteredList = list.filter((value) =>
    value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ outline: '2px solid black', borderRadius: '8px' }}>
      <SearchBar value={searchTerm} onChange={handleChange} />
      {filteredList.length === 0 ? <div>No items match the filter.</div> : null}
      <Items items={filteredList} />
    </div>
  );
}

type SearchBarProps = {
  value: string;
  onChange: (searchTerm: string) => void;
};
function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div style={{ padding: '20px', width: '400px' }}>
      <div
        style={{
          outline: '2px solid black',
          borderRadius: '8px',
          display: 'flex',
          width: '100%',
        }}>
        <CiSearch style={{ fontSize: '20px' }} />
        <input
          style={{
            outline: '0',
            border: 'none',
            display: 'block',
            width: '90%%',
          }}
          value={value}
          placeholder="search"
          onChange={(e) => onChange(e.target.value)}></input>
      </div>
    </div>
  );
}

type ItemsProps = { items: string[] };

function Items({ items }: ItemsProps) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
