import Livro1 from "../../img/livro-1.png"
import Livro2 from "../../img/livro-2.png"
import Livro3 from "../../img/livro-3.png"
import Livro4 from "../../img/livro-4.png"
import Livro5 from "../../img/livro-5.png"
import Livro6 from "../../img/livro-6.png"


function Literatura() {
  return (
    <div className="literatura">
      <h2>Acervo Literário</h2>

       

      <div className="livro1">
      <img src={Livro1} />
       <br />
      <p><h4>A Descoberta do Adriel</h4>
      
        <strong>Resumo:</strong>Este livro é baseado na história real do
          Adriel, o garoto que descobriu nos livros um superpoder para superar
          qualquer obstáculo: a educação.
        <br />
        Escrito por <strong>Mel Duarte</strong>
        <br />
        Ilustrado por <strong>Lhaiza Morena</strong>
        <br />
        <strong>Fonte:</strong>Itau Cultural - Leia para uma criança.
        </p>
       <br />

        <form method="get" action="./books/livro-1.pdf">
          <button type="submit">Baixe o PDF</button>
        </form>
      </div>

      <div className="livro2">
      <img src={Livro2} />
      <br />
      <p><h4>Apanhador de acalantos</h4>
      
        <strong>Resumo:</strong>Este livro é baseado em uma das histórias
        vencedoras da Olimpíada da Língua Portuguesa de 2019 na categoria
        Crônica. A garota, da cidade de Catalão, em Goiás, tinha apenas 13
        anos quando escreveu a redação.
        <br />
        Escrito por <strong>Beatriz Pereira Rodrigues</strong>
        <br />
        Revisado por <strong>Vânia Ribeiro</strong>
        <br />
        Adaptado por <strong>Carolina Moreyra</strong>
        <br />
        Ilustrado por <strong>Gabriela Martins Peixoto</strong>
        <br />
          <strong>Fonte:</strong>Itau Cultural - Leia para uma criança.
        </p>

        <br />
        <form method="get" action="./books/livro-2.pdf">
          <button type="submit">Baixe o PDF</button>
        </form>
      </div>
      

      <div className="livro3">
      <img src={Livro3} />
      <br />
      <p><h4>A flor que chegou primeiro</h4>
      
        <strong>Resumo:</strong>Este livro é baseado na história vencedora da
          Olimpíada de Língua Portuguesa de 2016 na categoria “Crônica”.
          <br />
          Escrito por <strong>Mayara de Aleluia Pereira</strong>
          <br />
          Revisado por <strong>Elisete Tavares</strong>
          <br />
          Adaptado por <strong>Jessé Andarilho</strong>
          <br />
          Ilustrado por <strong>Ivy Nunes</strong>
          <br />
          <strong>Fonte:</strong>Itau Cultural - Leia para uma criança.
        </p>
        <br />
        <form method="get" action="./books/livro-3.pdf">
          <button type="submit">Baixe o PDF</button>
        </form>
      </div>
      

      <div className="livro4">
      <img src={Livro4} />
      <br />
      <p><h4>A menina das Estrelas</h4> 
     
        <strong>Resumo:</strong> Para a Vanessa, um livro foi o começo de um grande sonho: alcançar as estrelas.
          <br />
          Escrito por <strong>Tulipa Ruiz</strong>{" "}
          <br />
          Ilustrado por <strong>Laurent Cardon</strong>
          <br />
          <strong>Fonte:</strong>Itau Cultural - Leia para uma criança.
          </p>
          <br />

        <form method="get" action="./books/livro-4.pdf">
          <button type="submit">Baixe o PDF</button>
        </form>
      </div>
      

      <div className="livro5">
      <img src={Livro5} />
      <br />
      <p><h4>As bonecas da vó Maria</h4>
      
        <strong>Resumo:</strong>Essa história foi inspirada nas empreendedoras
          Joyce, Lucia e Cris, proprietárias da loja Preta Pretinha.
        <br />
          Escrito por <strong>Mel Duarte</strong>
          <br />
          Ilustrado por <strong>Giovana Medeiros</strong>
          <br />
          <strong>Fonte:</strong>Itau Cultural - Leia para uma criança.
        </p>

        <br />
        <form method="get" action="./books/livro-5.pdf">
          <button type="submit">Baixe o PDF</button>
        </form>
      </div>
     

      <div className="livro6">
      <img src={Livro6} />
     <br />
        <p><h4>Da Janela de Minas</h4>
        <strong>Resumo:</strong>Este livro é baseado em uma das histórias
          vencedoras da Olimpíada de Língua Portuguesa de 2019 na categoria
          poema. A garota, da cidade de Belo Horizonte, Minas Gerais, tinha
          apenas 12 anos quando escreveu a redação.
          <br />
          Escrito por <strong>Nicole Rodrigues Florentino</strong>
          <br />
          Revisado por <strong>Terezinha Lima da Silva</strong>
          <br />
          Adaptado por <strong>Lulu Lima</strong>
          <br />
          Ilustrado por <strong>Fe Sponchi</strong>
        <br />
          <strong>Fonte:</strong>Itau Cultural - Leia para uma criança.
        </p>
        <br />
        <form method="get" action="./books/livro-6.pdf">
          <button type="submit">Baixe o PDF</button>
        </form>
      </div>

     
     
      <div className="conto">
        <h3 className="box">Dia do Conto: Agendamento</h3>
        <form className="formulario">
          
            <legend><strong>Formulário de Agendamento</strong> </legend>
              <div>
              <br />
            <label for="nome">Nome:</label>
            <br />
            <input type="text" id="nome" />
          </div>
          

          <div>
            <label for="email">E-mail:</label>
            <br />
            <input type="email" id="email" />
          </div>
        

          <div>
            <label for="data">Agendar data:</label>
            <br />
            <input type="date" id="date" nome="data" />
          </div>
        

          <div>
            <label for="horario">Agendar horário:</label>
            <br />
            <input type="time" id="appt" name="appt" />
          </div>
          <br />
        
          <div className="button-conto">
            <button type="submit">Enviar</button>
          </div>
        </form>
        </div>
      </div>
   
  );
}

export default Literatura;
