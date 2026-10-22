
import "./cardArea.css";

export default function CardsArea() {
  return (
    <section className="cards-area">

      <div className="card-area">
        <div className="card-area-icone">
          <img src="/src/assets/icone5.png" alt="" />
        </div>

        <h2>Para você</h2>

        <p className="card-area-descricao">
          Cursos profissionalizantes, graduações e especializações
          para acelerar sua carreira na indústria.
        </p>

        <div className="card-area-subcard">
          <h3>Educação Profissional</h3>
          <p>
            Formação para quem deseja construir sua carreira
            na indústria.
          </p>
        </div>

        <div className="card-area-subcard">
          <h3>Ensino Superior</h3>
          <p>
            Qualificação profissional de nível superior.
          </p>
        </div>
      </div>

      <div className="card-area">
        <div className="card-area-icone">
          <img src="/src/assets/icone6.png" alt="" />
        </div>

        <h2>Para empresas</h2>

        <p className="card-area-descricao">
          Capacitações personalizadas e soluções inovadoras
          para impulsionar a competitividade do seu negócio.
        </p>

        <div className="card-area-subcard">
          <h3>Educação Corporativa</h3>
          <p>
            Capacitações para melhorar a produtividade da sua empresa.
          </p>
        </div>

        <div className="card-area-subcard">
          <h3>Inovação e Tecnologia</h3>
          <p>
            Consultoria e tecnologia para uma indústria mais competitiva.
          </p>
        </div>
      </div>

    </section>
  );
}
