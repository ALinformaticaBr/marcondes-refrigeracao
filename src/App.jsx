import { useState } from "react";
import {
  Snowflake,
  Refrigerator,
  Zap,
  Check,
  MessageCircle
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "./assets/logo.png";
import "./App.css";
import profissionalImage from "./assets/profissional.jpg";
import tecnico from "./assets/tecnico.png";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">

        <div className="brand">

  <img
    src={logo}
    alt="Logo Marcondes Refrigeração & Elétrica"
    className="brand-logo"
  />

  <div className="logo">
    <strong>MARCONDES</strong>
    <span>REFRIGERAÇÃO & ELÉTRICA</span>
  </div>

</div>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>

  <a
    href="#servicos"
    onClick={() => setMenuOpen(false)}
  >
    Serviços
  </a>

  <a
    href="#sobre"
    onClick={() => setMenuOpen(false)}
  >
    Sobre
  </a>

  <a
    href="#contato"
    onClick={() => setMenuOpen(false)}
  >
    Contato
  </a>

</nav><button
  className="menu-toggle"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Abrir menu"
>
  {menuOpen ? "✕" : "☰"}
</button>

        <a
          className="header-button"
          href="https://wa.me/5521980116385"
          target="_blank"
          rel="noreferrer"
        >
          ORÇAMENTO
        </a>

      </header>


      {/* HERO */}
      <main>

        <section className="hero">

          <div className="hero-content">

            <p className="hero-label">
              MARCONDES REFRIGERAÇÃO & ELÉTRICA
            </p>

            <h1>
              Conforto,
              <br />
              segurança
              <br />
              <span>e qualidade.</span>
            </h1>

            <p className="hero-description">
              Soluções em refrigeração, ar-condicionado
              e elétrica para sua casa ou empresa.
            </p>

            <div className="hero-buttons">

              <a
                href="https://wa.me/5521980116385"
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                PEDIR ORÇAMENTO
              </a>

              <a
                href="#servicos"
                className="secondary-button"
              >
                CONHECER SERVIÇOS
              </a>

            </div>

          </div>


          {/* FOTO DO TÉCNICO */}

          <div className="hero-image">

            <div className="image-glow"></div>

            <div className="technician">
  <img src={tecnico} alt="Técnico Marcondes Refrigeração & Elétrica" />
</div>

          </div>

        </section>
{/* SERVIÇOS */}

<section className="services" id="servicos">

  <div className="section-title">

    <p>O QUE FAZEMOS</p>

    <h2>Nossos serviços</h2>

    <span>
      Soluções profissionais para manter
      seu ambiente confortável, seguro e funcionando.
    </span>

  </div>


  <div className="service-grid">

    <article className="service-card">

      <div className="service-icon">
  <Snowflake size={32} strokeWidth={1.8} />
</div>

      <h3>Ar-condicionado</h3>

      <p>
        Instalação, manutenção, limpeza,
        higienização e recarga de gás.
      </p>

      <a href="#contato">
        SOLICITAR SERVIÇO →
      </a>

    </article>


    <article className="service-card">

   <div className="service-icon">
  <Refrigerator size={32} strokeWidth={1.8} />
</div>

      <h3>Refrigeração</h3>

      <p>
        Manutenção e soluções para
        equipamentos de refrigeração.
      </p>

      <a href="#contato">
        SOLICITAR SERVIÇO →
      </a>

    </article>


    <article className="service-card">

      <div className="service-icon">
  <Zap size={32} strokeWidth={1.8} />
</div>

      <h3>Elétrica residencial</h3>

      <p>
        Chuveiros, tomadas, iluminação
        e outros serviços elétricos.
      </p>

      <a href="#contato">
        SOLICITAR SERVIÇO →
      </a>

    </article>

  </div>

</section>{/* DIFERENCIAIS */}

<section className="differentials">

  <div className="section-title">

    <p>POR QUE ESCOLHER A MARCONDES?</p>

    <h2>
      Serviço feito para você.
    </h2>

    <span>
      Compromisso, qualidade e atenção em cada serviço realizado.
    </span>

  </div>


  <div className="differential-grid">

    <div className="differential">

      <div className="differential-icon">
  <Check size={22} strokeWidth={2.5} />
</div>

      <h3>Atendimento rápido</h3>

      <p>
        Agilidade para atender sua necessidade
        e resolver seu problema.
      </p>

    </div>


    <div className="differential">

      <div className="differential-icon">
  <Check size={22} strokeWidth={2.5} />
</div>

      <h3>Orçamento sem compromisso</h3>

      <p>
        Avaliamos sua necessidade antes
        da realização do serviço.
      </p>

    </div>


    <div className="differential">

      <div className="differential-icon">
  <Check size={22} strokeWidth={2.5} />
</div>

      <h3>Serviço de qualidade</h3>

      <p>
        Atenção aos detalhes e cuidado
        durante a execução do trabalho.
      </p>

    </div>


    <div className="differential">

      <div className="differential-icon">
  <Check size={22} strokeWidth={2.5} />
</div>

      <h3>Segurança e garantia</h3>

      <p>
        Trabalho responsável, buscando
        segurança e satisfação do cliente.
      </p>

    </div>

  </div>

{/* SOBRE A MARCONDES */}

<section className="about" id="sobre">

  <div className="about-image">

    <img
      src={profissionalImage}
      alt="Profissional da Marcondes Refrigeração & Elétrica"
      className="about-photo"
    />

  </div>

  <div className="about-content">

    <p className="about-label">
      SOBRE A MARCONDES
    </p>

    <h2>
      Experiência para cuidar
      <span> do que realmente importa.</span>
    </h2>

    <p>
      A Marcondes Refrigeração & Elétrica trabalha
      oferecendo soluções em climatização,
      refrigeração e elétrica residencial.
    </p>

    <p>
      Nosso objetivo é oferecer um atendimento
      responsável e um serviço de qualidade,
      buscando sempre a satisfação de cada cliente.
    </p>

    <a
      href="https://wa.me/5521980116385"
      target="_blank"
      rel="noreferrer"
      className="primary-button"
    >
      FALAR COM A MARCONDES
    </a>

  </div>

</section>

</section>{/* SERVIÇOS DETALHADOS */}

<section className="services-detail" id="servicos-detalhados">

  <div className="section-title">

    <p>NOSSAS SOLUÇÕES</p>

    <h2>
      Tudo para sua casa
      <br />
      funcionar melhor.
    </h2>

    <span>
      Serviços em refrigeração, climatização
      e elétrica residencial.
    </span>

  </div>


  <div className="detail-grid">

    {/* AR-CONDICIONADO */}

    <article className="detail-card">

      <div className="detail-number">
        01
      </div>

      <div className="detail-icon">
  <Snowflake size={30} strokeWidth={1.8} />
</div>

      <h3>
        Ar-condicionado
      </h3>

      <p>
        Cuidado completo para manter seu
        equipamento funcionando com eficiência.
      </p>

      <ul>
        <li>Instalação</li>
        <li>Manutenção</li>
        <li>Higienização</li>
        <li>Recarga de gás</li>
      </ul>

    </article>


    {/* REFRIGERAÇÃO */}

    <article className="detail-card">

      <div className="detail-number">
        02
      </div>

     <div className="detail-icon">
  <Refrigerator size={30} strokeWidth={1.8} />
</div>

      <h3>
        Geladeira
      </h3>

      <p>
        Serviços para manutenção e funcionamento
        adequado de equipamentos de refrigeração.
      </p>

      <ul>
        <li>Troca de Compressor</li>
        <li>Carga de Gás</li>
        <li>Sensores & Resistência</li>
        <li>Gacheta - Borracha da Porta</li>
      </ul>

    </article>


    {/* ELÉTRICA */}

    <article className="detail-card">

      <div className="detail-number">
        03
      </div>

      <div className="detail-icon">
  <Zap size={30} strokeWidth={1.8} />
</div>

      <h3>
        Elétrica residencial
      </h3>

      <p>
        Soluções elétricas para deixar sua
        residência mais segura e funcional.
      </p>

      <ul>
        <li>Chuveiros</li>
        <li>Tomadas</li>
        <li>Iluminação</li>
        <li>Instalações elétricas</li>
      </ul>

    </article>

  </div>


  <div className="services-cta">

    <p>
      Não encontrou o serviço que procura?
    </p>

    <a
      href="https://wa.me/5521980116385"
      target="_blank"
      rel="noreferrer"
      className="secondary-button"
    >
      FALE CONOSCO
    </a>

  </div>

</section>{/* DEPOIMENTOS */}

<section className="testimonials">

  <div className="section-title">

    <p>CLIENTES MARCONDES</p>

    <h2>
      Quem conhece,
      <br />
      recomenda.
    </h2>

    <span>
      A confiança dos nossos clientes é parte
      importante do nosso trabalho.
    </span>

  </div>


  <div className="testimonial-grid">

    <article className="testimonial-card">

      <div className="stars">
        ★★★★★
      </div>

      <p>
        “Serviço realizado com muita atenção
        e profissionalismo. Fiquei muito satisfeito
        com o resultado.”
      </p>

      <div className="customer">
        <div className="customer-avatar">
          C
        </div>

        <div>
          <strong>Cliente</strong>
          <span>Cliente Marcondes</span>
        </div>
      </div>

    </article>


    <article className="testimonial-card">

      <div className="stars">
        ★★★★★
      </div>

      <p>
        “Atendimento excelente e serviço feito
        com muito cuidado. Recomendo o trabalho
        da Marcondes.”
      </p>

      <div className="customer">
        <div className="customer-avatar">
          M
        </div>

        <div>
          <strong>Cliente</strong>
          <span>Cliente Marcondes</span>
        </div>
      </div>

    </article>


    <article className="testimonial-card">

      <div className="stars">
        ★★★★★
      </div>

      <p>
        “Gostei muito do atendimento e da
        qualidade do serviço. Com certeza
        procuraria novamente.”
      </p>

      <div className="customer">
        <div className="customer-avatar">
          A
        </div>

        <div>
          <strong>Cliente</strong>
          <span>Cliente Marcondes</span>
        </div>
      </div>

    </article>

  </div>

</section>{/* CTA - ORÇAMENTO */}

<section className="contact" id="contato">

  <div className="contact-content">

    <p className="contact-label">
      PRECISA DE UM SERVIÇO?
    </p>

    <h2>
      Vamos resolver
      <span> isso juntos.</span>
    </h2>

    <p className="contact-description">
      Entre em contato com a Marcondes e solicite
      seu orçamento.
    </p>

    <a
      href="https://wa.me/5521980116385"
      target="_blank"
      rel="noreferrer"
      className="contact-button"
    >
      FALAR NO WHATSAPP
    </a>

    <strong className="phone">
      (21) 98011-6385
    </strong>

  </div>

</section>
      </main>

      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-content">

          <div className="footer-brand">

            <strong>MARCONDES</strong>

            <span>
              REFRIGERAÇÃO & ELÉTRICA
            </span>

            <p>
              Conforto, segurança e qualidade
              para sua casa ou empresa.
            </p>

          </div>


          <div className="footer-links">

            <h3>Navegação</h3>

            <a href="#">Início</a>

            <a href="#servicos">Serviços</a>

            <a href="#sobre">Sobre</a>

            <a href="#contato">Contato</a>

          </div>


          <div className="footer-contact">

            <h3>Contato</h3>

            <a
              href="https://wa.me/5521980116385"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a href="tel:+5521980116385">
              (21) 98011-6385
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 Marcondes Refrigeração & Elétrica
          </span>

          <span>
            Todos os direitos reservados.
          </span>

        </div>

      </footer>
      {/* WHATSAPP FLUTANTE */}

      <a
  href="https://wa.me/5521980116385"
  target="_blank"
  rel="noreferrer"
  className="whatsapp-float"
  aria-label="Falar com a Marcondes pelo WhatsApp"
>
  <FaWhatsapp size={32} />
</a>
    </div>
  );
}

export default App;