import '../css/pages/Homepage.css'
import { Link } from "react-router-dom";
import useFormHelper from '../hooks/useFormHelper';
const Main = () => {
    const [handleChange, handleSubmit] = useFormHelper()
    return(
        <div className="Main-container">
            <div className="Main-title">
                <h1>Pedí en restaurantes, súper, y mucho más!</h1>
            </div>
            <form className="Searcher-container" onSubmit={handleSubmit}>
                <div className="Searcher-input">
                    <i className="fas fa-search"></i>
                    <input placeholder="Buscá cualquier producto" type="text" name="search" onChange={handleChange}></input>
                </div>
                <div className="Searcher-button">
                    <button type="submit">Buscar</button>
                </div>
            </form>
            <div className="Stores-container">
                <div className="Stores-titles">
                    <h3 className="Stores-subtitle">Conseguí todo lo que necesites.</h3>
                    <h2 className="Stores-title">Nuestras tiendas disponibles.</h2>
                </div>
                <ul className="Stores-available">
                    <li className="Store-item">
                        <a href="#!" className="Item-container">
                            <div className="Item-image">
                                <img src="https://images.rappi.com.ar/new_store_type/restaurant-1604926368.png?d=200x200" alt="restaurants"></img>
                            </div>
                            <h4 className="Item-title">
                                Restaurantes
                            </h4>
                        </a>
                    </li>
                    <li className="Store-item">
                        <a href="#!" className="Item-container">
                            <div className="Item-image">
                                <img src="https://images.rappi.com.ar/new_store_type/restaurant-1604926368.png?d=200x200" alt="restaurants"></img>
                            </div>
                            <h4 className="Item-title">
                                Restaurantes
                            </h4>
                        </a>
                    </li>
                    <li className="Store-item">
                        <a href="#!" className="Item-container">
                            <div className="Item-image">
                                <img src="https://images.rappi.com.ar/new_store_type/restaurant-1604926368.png?d=200x200" alt="restaurants"></img>
                            </div>
                            <h4 className="Item-title">
                                Restaurantes
                            </h4>
                        </a>
                    </li>
                    <li className="Store-item">
                        <a href="#!" className="Item-container">
                            <div className="Item-image">
                                <img src="https://images.rappi.com.ar/new_store_type/restaurant-1604926368.png?d=200x200" alt="restaurants"></img>
                            </div>
                            <h4 className="Item-title">
                                Restaurantes
                            </h4>
                        </a>
                    </li>
                    <li className="Store-item">
                        <a href="#!" className="Item-container">
                            <div className="Item-image">
                                <img src="https://images.rappi.com.ar/new_store_type/restaurant-1604926368.png?d=200x200" alt="restaurants"></img>
                            </div>
                            <h4 className="Item-title">
                                Restaurantes
                            </h4>
                        </a>
                    </li>
                    <li className="Store-item">
                        <a href="#!" className="Item-container">
                            <div className="Item-image">
                                <img src="https://images.rappi.com.ar/new_store_type/restaurant-1604926368.png?d=200x200" alt="restaurants"></img>
                            </div>
                            <h4 className="Item-title">
                                Restaurantes
                            </h4>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="Beneficies-container">
                <div className="Beneficies-item">
                    <div className="Item-background">
                        <i className="far fa-clock"></i>
                    </div>
                    <div className="Item-text">
                        <h2>Ahorrá tiempo</h2>
                        <h3>Programalo en cualquier momento</h3>
                    </div>
                </div>
                <div className="Beneficies-item">
                    <div className="Item-background">
                        <i className="far fa-heart"></i>
                    </div>
                    <div className="Item-text">
                        <h2>En manos expertas</h2>
                        <h3>Un shopper selecciona tus productos con amor</h3>
                    </div>
                </div>
                <div className="Beneficies-item">
                    <div className="Item-background">
                        <i className="far fa-heart"></i>
                    </div>
                    <div className="Item-text">
                        <h2>Calidad 100%</h2>
                        <h3>Si no te gusta el estado de un producto, ¡no lo pagás!</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
