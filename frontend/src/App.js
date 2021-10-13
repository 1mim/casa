import './App.css';
import NavBar from './components/NavBar';
import ProductCatalogue from './components/product_list/ProductCatalogue';

function App() {
  return (
    <div className="App">
      <header><NavBar /></header>
      <ProductCatalogue />
    </div>
  );
}

export default App;
