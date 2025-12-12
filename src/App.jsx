import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Footer } from './components/Footer/Footer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { CarProvider } from './context/CarContext/CarProvider';
import { Car } from './components/Car/Car';
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer';
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";
import { Login } from "./components/Login/Login";
import { MainLayout } from "./layouts/MainLayout";
import { AdminLayout } from "./layouts/AdminLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <CarProvider>
          <div>
            <Routes>
              <Route element={<MainLayout/>}>
                <Route path="/" element={<ItemListContainer titulo={"Bienvenidos"}/>}/>
                <Route path="/category/:category" element={<ItemListContainer titulo={"Bienvenidos"}/>}/>
                <Route path="/detail/:id" element={<ItemDetailContainer />}/>
                <Route path='/carrito' element={<Car />}/>
              </Route>

              <Route path="/admin" element={<AdminLayout/>}>
                <Route index element={<Login/>}/>
                <Route path="alta-productos" 
                  element={
                    <RutaProtegida>
                      <ProductFormContainer/>
                    </RutaProtegida>
                  }
                />
              </Route>
            
            </Routes>
          </div>
          <Footer/>
        </CarProvider>
      </BrowserRouter>
    </>
  )
}

export default App
