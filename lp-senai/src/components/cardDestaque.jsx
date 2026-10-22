import './cardDestaque.css';


export default function CardsDestaque() {
  return (
    <section className="cards-destaque">
      <div className="card-destaque">
        <img src="/src/assets/icone1.png" alt="" />
        <p>Mais de <span style={{ color: '#007bff' }}>200.000</span> alunos formados</p>
      </div>

      <div className="card-destaque">
        <img src="/src/assets/icone2.png" alt="" />
        <p><span style={{ color: '#007bff' }}>Maior complexo de educação</span> profissional da América Latina</p>
      </div>

      <div className="card-destaque">
        <img src="/src/assets/icone3.png" alt="" />
        <p>Referência mundial em <span style={{ color: '#007bff' }}>qualidade de ensino</span></p>
      </div>

      <div className="card-destaque">
        <img src="/src/assets/icone4.png" alt="" />
        <p>Alunos SENAI são <span style={{ color: '#007bff' }}>preferência no mercado de trabalho</span></p>
      </div>
    </section>
  );
}
