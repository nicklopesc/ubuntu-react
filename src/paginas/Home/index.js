import React from "react";
import { Link } from "react-router-dom";
import Principal from "../../img/principal1.png";
import Espaco1 from "../../img/espaco1.png";
import Espaco2 from "../../img/espaco2.png";
import Espaco3 from "../../img/espaco3.png";

function Home() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <div className="menu">
            <h1>Ubuntu Cultural Blackzinho</h1>
          </div>
          <div className="item-menu">
            <div className="container-itens">
              <Link to="#">Home</Link>
              <Link to="/sobre-nos">Sobre Nós</Link>
              <Link to="/musical">Musical</Link>
              <Link to="/literatura">Literatura</Link>
              <Link to="/comunidade">Comunidade</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="principal-1">
        <h2>Quem Somos</h2>
        <div className="container">
          <img src={Principal} />
          <p>
            Somos um projeto cultural, criado para ampliar a representatividade
            preta a faixa etária infantil. Nosso principal objetivo é disseminar
            essa cultura através da música e da literatura, além de claro,
            construir um espaço em que a comunidade também possa expor seus
            projetos pessoais.
          </p>
        </div>
      </div>

      <div className="linha"></div>
      <p className="citacao">
        "
        <em>
          [A] representatividade negra na literatura infantil também não é
          “coisa” somente de papais e mamães de pele negra. Instigar leituras
          com protagonismo negro pode ser algo que auxilie pais e mães a moldar
          e estimular o respeito e a percepção da diversidade racial e social do
          nosso país em suas crianças
        </em>
        (VIEIRA, Lídia Carlos. A importância da representatividade negra na
        literatura infantil.
        <strong>Portal Geledés</strong>, 2020)."
      </p>

      <div className="espacos">
        <h2>Espaços</h2>

        <div className="container2">
          <div className="musica">
            <p>
              Neste espaço, constará um acervo de canções infantis africanas
              para ampliação do conhecimento desta cultura.
            </p>
            <img src={Espaco1} />
          </div>
          <div className="literatura">
            <p>
              Este espaço conta com a disponibilização de um pequeno acervo de
              livros infantis sobre a representaividade.
            </p>
            <img src={Espaco2} />
          </div>

          <div className="comunidade">
            <p>
              Este espaço foi criado para a performance ativa da comunidade,
              onde poderão ser vistos e postados projetos pessoais.
            </p>
            <img src={Espaco3} />
          </div>
        </div>
      </div>

      <footer className="desenvolvido">Desenvolvido por Nicole Lopes</footer>
    </div>
  );
}

export default Home;
