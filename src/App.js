import './App.css';
import TextImage from './Components/TextImage/TextImage';
import SearchInput from './Components/SearchInput/SearchInput';
import Gallery from './Components/Gallery/Gallery';

function App() {
  return (
    <div>
      <TextImage text="UnSplash Gallery" type="h1"></TextImage>
      <div className="searchInput-container">
        <SearchInput></SearchInput>
      </div>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
