import { useEffect, useRef } from "react";

const LETTERS = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
const FOUND = new Set(['M', 'R']);

const Index = () => {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  let revealIndex = 0;
  const reveal = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="page-wrapper">
      {/* HERO */}
      <section className="hero section">
        <div className="hero-counter">2 de 27 letras para un alfabeto completo</div>
        <h1 className="hero-title">
          La<br /><em>Servilleta</em>
        </h1>
        <p className="hero-subtitle">
          Unas iniciales bordadas en una servilleta con una tipografía diferente a cualquier fuente conocida. Solo tengo dos letras. Busco las 25 que faltan.
        </p>
        <div className="hero-scroll">La letra</div>
      </section>

      {/* 1. LA LETRA */}
      <section className="typo-section section">
        <h2 ref={reveal} className="reveal">Esta no es una M cualquiera</h2>

        <div ref={reveal} className="typo-compare reveal">
          <div className="typo-box">
            <svg width="100%" viewBox="0 0 200 220" fill="none" stroke="#111" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ maxWidth: 160, margin: "0 auto 1rem", display: "block" }}>
              <line x1="40" y1="190" x2="40" y2="30" />
              <line x1="40" y1="30" x2="100" y2="120" />
              <line x1="100" y1="120" x2="160" y2="30" />
              <line x1="160" y1="30" x2="160" y2="190" />
            </svg>
            <div className="label">M convencional</div>
          </div>
          <div className="typo-box-custom">
            <svg width="100%" viewBox="0 0 200 220" fill="none" stroke="#1e3a56" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ maxWidth: 160, margin: "0 auto 1rem", display: "block" }}>
              <path d="M 40 190 C 25 140, 25 80, 40 50 C 55 20, 90 10, 120 15 C 145 19, 155 35, 155 50 L 155 190" />
              <line x1="135" y1="60" x2="135" y2="150" />
            </svg>
            <div className="label">M de la servilleta</div>
          </div>
        </div>

        <p ref={reveal} className="typo-explain reveal">Una M estándar se traza con dos verticales y dos diagonales formando una V central. Cuatro trazos rectos. Ninguna curva.</p>
        <p ref={reveal} className="typo-explain highlight reveal">Pero esta M es curva.</p>
        <p ref={reveal} className="typo-explain reveal">No sigue ninguna caligrafía escolar ni ninguna tipografía conocida. Alguien diseñó un sistema de letras con reglas propias y yo quiero encontrar más para completar el abecedario.</p>
      </section>

      {/* 2. DE DÓNDE VIENE */}
      <section className="story section">
        <div ref={reveal} className="divider reveal">
          <span className="divider-line" />
          <span className="divider-symbol">ORIGEN</span>
          <span className="divider-line" />
        </div>
        <div ref={reveal} className="reveal">
          <p>Esta tipografía viene de un internado español de los años 50.</p>
        </div>
        <div ref={reveal} className="reveal">
          <p>El colegio asignaba un número a cada alumno y marcaba todo su ajuar —sábanas, toallas, servilletas— con sus iniciales y un número. No lo hacían las familias. Lo hacía el colegio.</p>
        </div>
        <div ref={reveal} className="reveal">
          <p className="accent">Eso significa que esta tipografía no es una pieza única. Es un diseño que se repitió cientos de veces, en cientos de piezas, con todas las letras del abecedario.</p>
        </div>
      </section>

      {/* 3. POR QUÉ LA TENGO YO */}
      <section className="story section">
        <div ref={reveal} className="divider reveal">
          <span className="divider-line" />
          <span className="divider-symbol">MR</span>
          <span className="divider-line" />
        </div>
        <div ref={reveal} className="reveal">
          <p>Tengo esta servilleta porque era de mi padre. Él era el alumno 908.</p>
        </div>
        <div ref={reveal} className="reveal">
          <p>Esto es lo único que conservo de su etapa escolar: un trozo de lino con dos letras en hilo azul. La M y la R.</p>
        </div>
        <div ref={reveal} className="reveal">
          <p>Si él era el 908, hubo al menos 907 antes. Cada uno con su ajuar marcado con esta misma tipografía, con sus propias iniciales. Esas piezas están en algún sitio.</p>
        </div>
      </section>

      {/* 4. EL ABECEDARIO */}
      <section ref={reveal} className="alphabet-section section reveal">
        <h2>El abecedario</h2>
        <p className="subtitle">Letras encontradas y letras por encontrar</p>
        <div className="alphabet-grid">
          {LETTERS.map((letter) => (
            <div
              key={letter}
              className={`letter-cell ${FOUND.has(letter) ? "found" : "missing"}`}
            >
              {letter}
            </div>
          ))}
        </div>
      </section>

      {/* 5. EL DESTINO */}
      <section className="goal-section section">
        <div ref={reveal} className="reveal">
          <p className="label">El destino</p>
          <p>
            Si conseguimos reunir todas las letras, voy a digitalizar esta tipografía y crear{" "}
            <em>una fuente libre</em>. Para que cualquiera pueda usarla. Para que un sistema de letras diseñado en un internado de los años 50 y olvidado en cajones, vuelva a vivir.
          </p>
        </div>
      </section>

      {/* 6. LA PETICIÓN */}
      <section className="cta-section section">
        <div ref={reveal} className="reveal">
          <h2>Puede estar en un cajón, en un arcón, en un mercadillo</h2>
          <p>Busco servilletas, sábanas o cualquier pieza de ajuar escolar de internados españoles de los años 40, 50 o 60 que tenga iniciales con esta misma tipografía.</p>
          <p>No importa el estado. No importa la letra. Una sola foto es suficiente.</p>
          <p>Y si no tienes ninguna servilleta: comparte esto. Porque la persona que sí la tiene puede ser alguien que tú conozcas.</p>
        </div>
        <div ref={reveal} className="cta-actions reveal">
          <a
            href="https://twitter.com/intent/tweet?text=Buscan%20servilletas%20de%20internados%20de%20los%20a%C3%B1os%2050%20para%20rescatar%20una%20tipograf%C3%ADa%20olvidada%20y%20convertirla%20en%20una%20fuente%20libre.%20%23LaServilleta&url=https://laservilleta.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
          >
            Compartir en Twitter
          </a>
          <a
            href="mailto:la.servilleta.908@gmail.com?subject=Tengo%20una%20letra%20para%20La%20Servilleta"
            className="cta-email"
          >
            Escribirme un email
          </a>
          <a
            href="https://twitter.com/guiomargdp"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary"
          >
            O escríbeme un DM con la foto
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="section">
        <p>#LaServilleta</p>
      </footer>
    </div>
  );
};

export default Index;
