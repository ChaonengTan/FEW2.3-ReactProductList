import './App.css'
import {data, allCategories, categorieSet, categoriesUnique, categoriesWithCounts, catWCountObj,} from './data'
import {useState} from 'react'
import Header from './components/header'
import Categories from './components/categories'
import Products from './components/products'
function App() {
  const [category, setCategory] = useState('Toys')
  return (
    <div className="App">
      <Header prodCount={data.length} catCount={categoriesUnique.length}/>
      <Categories catWCount={catWCountObj} category={category} onClick={newCategory => setCategory(newCategory)}/>
      <Products data={data} category={category}/>
    </div>
  );
}

export default App;
