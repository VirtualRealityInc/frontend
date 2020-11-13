import logo from './logo.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
// import About from './routes/About'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <img src="https://assets.weforum.org/global_future_council/image/vCuWaMxdmlbJw5CLpu_f-Svmj1aDEDjD-m-nLgwg8Q8.jpeg" role="img" aria-label="virtual reality" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
