import "./App.css";

import Header from './components/header.jsx';
import Hero from './components/hero.jsx';
import CardD from './components/cardDestaque.jsx';
import CardA from './components/cardArea.jsx';
import Banner from './components/banner.jsx';
import Footer from './components/footer.jsx';

function App() {

  return (
    <div className="App">
      <Header />

      <main>
        <Hero />

        <section className="instituicao">
          <h2>
            A instituição que tem o{' '}
            <span>DNA da indústria</span>
          </h2>

          <p>
            Referência no país inteiro, o SENAI trabalha todos os dias
            para estimular a inovação e a competitividade da indústria,
            por meio de serviços de educação, consultorias, pesquisas
            aplicadas e serviços tecnológicos.
          </p>
        </section>

        <CardD />

        <CardA />

        <Banner />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
