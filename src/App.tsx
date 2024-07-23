import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import useTheme from "./custom-hooks/useTheme";

function App() {
  const { selectedTheme } = useTheme();

  return (
    <div className={`app theme ${selectedTheme} xl:!px-40 2xl:!px-40`}>
      <h1 className="mb-6">React App With Context API</h1>
      <Banner />
      <ProductList />
    </div>
  );
}

export default App;
