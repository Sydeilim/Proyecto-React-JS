import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { CarProvider } from './context/CarContext/CarProvider';

function App() {
  return (
    <>
      <BrowserRouter>
        <CarProvider>
          <div>
            <Header/>
            <Routes>

              <Route path="/" element={<ItemListContainer titulo={"Bienvenidos la Tienda"}/>}/>
              <Route path="/detail/:id" element={<ItemDetailContainer />}/>
            
            </Routes>
            <Footer/>
          </div>
        </CarProvider>
      </BrowserRouter>
    </>
  )
}

export default App
