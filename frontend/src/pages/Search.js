import "../css/pages/Search.css";

const Search = (props) => {
  const stores = props.location.state.data.stores
  const search = props.location.state.form.search
  console.log("soymama ", stores)
  return (
    <div className="Search-container">
      <div className="Search-filters">
        <div className="Filters-options">
          <h2>Filtrar por</h2>
          <div className="Options-supermarkets">Supermercados</div>
          <div className="Options-restaurants">Restaurantes</div>
        </div>
        <div className="Filters-sort">
          <h2>Ordenar por</h2>
          <div className="Sort-promotions">
            <button>Promociones</button>
          </div>
          <div className="Sort-lowestPrice">
            <button>Menor precio</button>
          </div>
          <div className="Sort-higherPrice">
            <button>Mayor precio</button>
          </div>
          <div className="Sort-alphabeticalOrder">
            <button>Orden alfabético</button>
          </div>
        </div>
      </div>
      <div className="Search-results">
        <div className="Results-stores">
          <h1>Resultados de <b>"{search}"</b> en:</h1>
          {/*Object.keys(props.location.state.data.stores).map((item) => <li>{props.location.state.data.stores[item].name}</li>)*/}
          <div className="Stores-carrousel">
            <div className="Carrousel-item">
              {Object.keys(stores).map((item) => <img src= {stores[item].logo} alt="Coto" title="Coto" />)} 
              {Object.keys(stores).map((item) => <p>{stores[item].name}</p> )}
            </div>
            <div className="Carrousel-item" style={{ marginLeft: "1em" }}>
              <img
                _ngcontent-ng-rappi-c20=""
                src="https://images.rappi.com.ar/marketplace/jumbo_1609259168326.jpg?d=70x70"
                alt="Jumbo"
                title="Jumbo"
                class="  ng-lazyloaded"
              />{" "}
              Coto
            </div>
          </div>
        </div>
        <div className="Results-storesProducts">
          <div className="StoresProducts-store">
            <img
              _ngcontent-ng-rappi-c20=""
              src="https://images.rappi.com.ar/marketplace/coto-1599858972.png?d=70x70"
              alt="Coto"
              title="Coto"
              class="  ng-lazyloaded"
            />
            <p>coto</p>
          </div>
          <div className="StoresProducts-products">
            {Object.keys(stores[0].products).map((product) => 
                
                <div className="Products-item">
                  {<img src= {stores[0].products[product].logo} alt="Coto" title="Coto" />}
                  {<p className="Item-price"> {stores[0].products[product].price}  </p>}
                  {<p className="Item-name"> {stores[0].products[product].name}  </p>}
                  <button>Agregar</button>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
