import Comunidade1 from "../../img/comunidade1.jpg"
import Comunidade2 from "../../img/comunidade2.jpg"
import Comunidade3 from "../../img/comunidade3.jpg"



function Comunidade() {
  return (
    <div className="comunidade">
      <h2>Comunidade</h2>
      <div className="text">
        <p>
        Este espaço é destinado para que a comunidade envio seus projetos, como
        por exemplo arquivos em PDF contendo Poemas, Poesias, Conto, Histórias,
        Desenhos ou arquivos como vídeos e áudios, e etc.
      </p>

      <p className="paragrafo2">
       Compartilha com a gente o que tem achado dos livros, das cantigas, entre
        outros! 
      </p>
      </div>
      

      <form  className="formulario-comunidade"  action="">
          <legend>
           <strong>Formulário de envio de projetos próprios da Comunidade</strong> 
</legend>

          <div className="nome">
            <label for="nome"><strong>Nome Completo:</strong></label>
            <br />
            <input type="text" id="nome" />
          </div>

          <div className="email">
            <label for="email"><strong>E-mail:</strong></label>
            <br />
            <input type="email" id="email" placeholder="meuemail@email.com" />
          </div>

          <div className="opcoes">
            <legend><strong>Opções de Projetos:</strong></legend>
            <input
              type="checkbox"
              id="conto"
              name="conto"
              value="Conto"
            />
            <label for="vehicle1"> Conto</label>
            <br />
            <input
              type="checkbox"
              id="Poesia/Poema"
              name="Poesia/Poema"
              value="Poesia/Poema"
            />
            <label for="vehicle2"> Poesia/Poema</label>
            <br />
            <input
              type="checkbox"
              id="vehicle3"
              name="vehicle3"
              value="musica"
            />
            <label for="vehicle3"> Música: Letra, Áudio ou Vídeo</label>
            <br />
            <input
              type="checkbox"
              id="outro"
              name="outro"
              value="outro"
            />
            <label for="vehicle1"> Outro</label>
            <br />
          
          </div>

          <div className="arquivo">
            <label for="myfile">Selecione o arquivo</label>
            <input type="file" id="myfile" name="myfile" />
          </div>

          <div className="button">
            <button type="submit">Enviar</button>
          </div>
        
      </form>


      <div className="projetos">
      <h2>Projetos da Comunidade</h2>

      <div className="container-comunidade">
      <div className="comunidade1">
        <img src={Comunidade1} />
        <p>Ana Laura - 7 anos/ MG</p>

        <div className="comunidade2">
          <img src={Comunidade2} />
          <p>Dandara 8 anos / MG</p>
        </div>

        <div className="comunidade3">
          <img src={Comunidade3}/>
          <p>Vitória 12 anos / MG</p>
        </div>
      </div>

      </div>
    </div>
    </div>
  );
}

export default Comunidade;
