import camisa from './assets/imgs/t-shirt.jpg';
import vaso from './assets/imgs/cup.jpg';
import billetera from './assets/imgs/wallet.jpg';
import Cards from './components/Cards';

const info = [
  {
    image: camisa,
    title: 'T-shirt',
    description: 'A white T-shirt',
    price: '$30',
  },
  {
    image: vaso,
    title: 'Cup',
    description: 'A white tea Cup',
    price: '$20',
  },
  {
    image: billetera,
    title: 'Wallet',
    description: 'A black fancy Wallet',
    price: '$35',
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>E-commerce in React and SnipCart</h1>
      </header>
      <ul id="info">
      <Cards
      image={info[0].image}
      title={info[0].title}
      description={info[0].description}
      price={info[0].price}
      />
      <Cards
      image={info[1].image}
      title={info[1].title}
      description={info[1].description}
      price={info[1].price}
      />
      <Cards
      image={info[2].image}
      title={info[2].title}
      description={info[2].description}
      price={info[2].price}
      />
      </ul>
    </div>
  );
}

export default App;
