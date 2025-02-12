const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  },
];

const Tshirt = ({tshirt, updateStock}) => {
  const [quantity, setQuantity] = React.useState(1);

  //create handle buy btn
  const handleBuy = () => {
    if (quantity > 0 && quantity <= tshirt.stock) {
      updateStock(tshirt.title, quantity);
      setQuantity(1);
    }
  };

  return (
    <div className="tshirt">
      <img src={`./images/${tshirt.image}`} alt={tshirt.title}/>
      <h2>{tshirt.title}</h2>
      <p>Price: ${tshirt.price.toFixed(2)}</p>
      <p style = {{color: tshirt.stock > 0 ? 'black' : 'red'}}>{tshirt.stock > 0 ? `Stock: ${tshirt.stock}` : 'Out of Stock'}</p>

      {tshirt.stock > 0 && (
        <div className="quantity">
          <label htmlFor="quantity">Quantity: </label>
          <select id="quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {[...Array(tshirt.stock).keys()].map((i) => (
            <option key={i} value={i + 1}>{i + 1}</option>
          ))}
          </select>
          <button onClick={handleBuy}>Buy</button>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [tshirtList, setTshirtList] = React.useState(tshirts);

  const updateStock = (title,quantity) => {
    setTshirtList((prevList) =>
      prevList.map((tshirt) =>
        tshirt.title === title ? { ...tshirt, stock: tshirt.stock - quantity } : tshirt
      )
    );
  };

  return (
    <div className="storefront">
      {tshirtList.map((tshirt, index) => (
        <Tshirt key={index} tshirt={tshirt} updateStock={updateStock}/>
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

