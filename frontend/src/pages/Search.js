import "../css/pages/Search.css";

const Search = (props) => {
  console.log("soymama ", props.location.state.data.stores[0])

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
          <h1>Resultados de tachancka en:</h1>
       
          {Object.keys(props.location.state.data.stores).map((item) => <li>{props.location.state.data.stores[item].name}</li> )}
          fua lo hice xDASp, lo del coto es porque buscate coto xasd
          <div className="Stores-carrousel">
            <div className="Carrousel-item">
              <img
                _ngcontent-ng-rappi-c20=""
                src="https://images.rappi.com.ar/marketplace/coto-1599858972.png?d=70x70"
                alt="Coto"
                title="Coto"
                class="  ng-lazyloaded"
              />
              Coto
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
            COTO
          </div>
          <div className="StoresProducts-products">
            <img
              _ngcontent-ng-rappi-c20=""
              src="https://images.rappi.com.ar/products/816537-1574447618628.png?d=136x136"
              alt="Coto Prepizza de Tomate Mediana "
              title="Coto Prepizza de Tomate Mediana "
              class="  ng-lazyloaded"
            />
            $30000
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
