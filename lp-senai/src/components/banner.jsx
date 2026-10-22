
import "./banner.css";

export default function Banner() {
  return (
    <section className="course-banner">
      <div className="course-banner__content">
        <h2>
          Seu próximo curso a
          <br />
          um clique
        </h2>

        <p>
          Conheça o portal com as ofertas de cursos da
          <br />
          Educação Profissional e Ensino Superior do
          <br />
          SENAI.
        </p>

        <a href="#" className="course-banner__button">
          Garanta sua vaga
        </a>
      </div>
    </section>
  );
}
