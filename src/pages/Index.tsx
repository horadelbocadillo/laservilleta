import { useEffect, useRef, useState } from "react";
import { Twitter, Mail, ArrowUp } from "lucide-react";
import napkinHero from "@/assets/napkin-hero.jpg";

const LETTERS = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
const FOUND = new Set(['M', 'R']);
const DEDUCED = new Set(['A', 'B', 'D', 'E', 'I', 'N', 'O', 'P', 'U']);

const Index = () => {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const [showNav, setShowNav] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const reveal = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="page-wrapper">
      {/* STICKY NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          background: "rgba(255,255,255,0.97)",
          boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.6rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          transition: "transform 0.3s ease, opacity 0.3s ease",
          transform: showNav ? "translateY(0)" : "translateY(-100%)",
          opacity: showNav ? 1 : 0,
          pointerEvents: showNav ? "auto" : "none",
        }}
      >
        {[
          { label: "La letra", href: "#la-letra" },
          { label: "Origen", href: "#origen" },
          { label: "El sistema", href: "#el-sistema" },
          { label: "El laboratorio", href: "#el-laboratorio" },
          { label: "Colabora", href: "#colabora" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={{
              color: "#1e3a56",
              textDecoration: "none",
              padding: "0.25rem 0",
              borderBottom: "1px solid transparent",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#1e3a56")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* FLOATING ACTION BUTTONS */}
      <div
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <a
          href="https://twitter.com/intent/tweet?text=Buscan%20servilletas%20de%20internados%20de%20los%20a%C3%B1os%2050%20para%20rescatar%20una%20tipograf%C3%ADa%20olvidada%20y%20convertirla%20en%20una%20fuente%20libre.%20%23LaServilleta&url=https://laservilleta.lovable.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: 44, height: 44, borderRadius: 22, background: "#1e3a56", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Twitter size={20} />
        </a>
        <a
          href="mailto:la.servilleta.908@gmail.com?subject=Tengo%20una%20letra%20para%20La%20Servilleta"
          style={{ width: 44, height: 44, borderRadius: 22, background: "#1e3a56", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Mail size={20} />
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ width: 44, height: 44, borderRadius: 22, background: "#1e3a56", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", border: "none", cursor: "pointer" }}
        >
          <ArrowUp size={20} />
        </button>
      </div>
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

      {/* IMAGEN SERVILLETA */}
      <section className="section" style={{ textAlign: "center", paddingTop: "2rem", paddingBottom: "2rem" }}>
        <img
          ref={reveal}
          src={napkinHero}
          alt="Servilleta bordada con las iniciales MR en hilo azul"
          className="reveal"
          style={{
            maxWidth: "min(500px, 90vw)",
            width: "100%",
            margin: "0 auto",
            borderRadius: "12px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
          }}
        />
      </section>

      {/* LA LETRA */}
      <section id="la-letra" className="typo-section section">
        <h2 ref={reveal} className="reveal">Esta no es una M cualquiera</h2>
        <div ref={reveal} className="typo-compare reveal">
          <div className="typo-box">
            <svg width="100%" viewBox="0 0 200 240" fill="none" stroke="#111" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ maxWidth: 160, margin: "0 auto 1rem", display: "block" }}>
              <line x1="40" y1="200" x2="40" y2="30" />
              <line x1="40" y1="30" x2="100" y2="120" />
              <line x1="100" y1="120" x2="160" y2="30" />
              <line x1="160" y1="30" x2="160" y2="200" />
            </svg>
            <div className="label">M convencional</div>
          </div>
          <div className="typo-box-custom">
            <svg width="100%" viewBox="0 0 200 240" fill="none" stroke="#1e3a56" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ maxWidth: 160, margin: "0 auto 1rem", display: "block" }}>
              <line x1="10" y1="200" x2="190" y2="200" stroke="#eee" strokeWidth="0.75" strokeDasharray="4,3" />
              <path d="M 35 220 C 22 170, 18 100, 30 60 C 45 22, 90 12, 140 18" fill="none" />
              <line x1="140" y1="18" x2="140" y2="200" />
              <line x1="115" y1="50" x2="115" y2="155" />
            </svg>
            <div className="label">M de la servilleta</div>
          </div>
        </div>
        <p ref={reveal} className="typo-explain reveal">Una M estándar se traza con dos verticales y dos diagonales formando una V central. Cuatro trazos rectos. Ninguna curva.</p>
        <p ref={reveal} className="typo-explain highlight reveal">Pero esta M es curva.</p>
        <p ref={reveal} className="typo-explain reveal">No sigue ninguna caligrafía escolar ni ninguna tipografía conocida. Alguien diseñó un sistema de letras con reglas propias y yo quiero encontrar más para completar el abecedario.</p>
      </section>

      {/* ORIGEN */}
      <section className="story section">
        <div ref={reveal} className="divider reveal">
          <span className="divider-line" />
          <span className="divider-symbol">ORIGEN</span>
          <span className="divider-line" />
        </div>
        <div ref={reveal} className="reveal">
          <p>Esta tipografía viene de Los Salesianos de El Campillo, un internado en Antequera, Málaga. Año 1952.</p>
        </div>
        <div ref={reveal} className="reveal">
          <p>El colegio asignaba un número a cada alumno y marcaba todo su ajuar —sábanas, toallas, servilletas— con sus iniciales y un número. No lo hacían las familias. Lo hacía el colegio.</p>
        </div>
        <div ref={reveal} className="reveal">
          <p className="accent">Eso significa que esta tipografía no es una pieza única. Es un diseño que se repitió cientos de veces, en cientos de piezas, con todas las letras del abecedario.</p>
        </div>
      </section>

      {/* MR */}
      <section className="story section">
        <div ref={reveal} className="divider reveal">
          <span className="divider-line" />
          <span className="divider-symbol">MR</span>
          <span className="divider-line" />
        </div>
        <div ref={reveal} className="reveal">
          <p>Tengo esta servilleta porque era de mi padre. Fue alumno interno en Los Salesianos de El Campillo, en Antequera. Su número era el 908.</p>
        </div>
        <div ref={reveal} className="reveal">
          <p>Esto es lo único que conservo de su etapa escolar: un trozo de lino con dos letras en hilo azul. La M y la R.</p>
        </div>
        <div ref={reveal} className="reveal">
          <p>Si él era el 908, hubo al menos 907 antes. Cada uno con su ajuar marcado con esta misma tipografía, con sus propias iniciales. Esas piezas están en algún sitio.</p>
        </div>
      </section>

      {/* ANIMACIÓN M */}
      <section className="section" style={{ textAlign: "center", padding: "2rem 0" }}>
        <video
          ref={reveal}
          className="reveal"
          src="/videos/animacion-M.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            maxWidth: "min(500px, 90vw)",
            width: "100%",
            margin: "0 auto",
            borderRadius: "12px",
            display: "block",
          }}
        />
      </section>

      {/* ABECEDARIO */}
      <section ref={reveal} className="alphabet-section section reveal">
        <h2>El abecedario</h2>
        <p className="subtitle">Letras encontradas, deducidas y por encontrar</p>
        <div className="alphabet-grid">
          {LETTERS.map((letter) => (
            <div
              key={letter}
              className={`letter-cell ${FOUND.has(letter) ? "found" : DEDUCED.has(letter) ? "deduced" : "missing"}`}
            >
              {letter}
            </div>
          ))}
        </div>
      </section>

      {/* EL SISTEMA */}
      <section className="sistema">
        <div ref={reveal} className="divider reveal">
          <span className="divider-line" />
          <span className="divider-symbol">LAS REGLAS</span>
          <span className="divider-line" />
        </div>
        <h2 ref={reveal} className="reveal">El sistema</h2>

        <div ref={reveal} className="reveal">
          <div className="regla">
            <div className="regla-numero">Regla 01</div>
            <div className="regla-titulo">La curva sustituye al ángulo, pero no a todos.</div>
            <div className="regla-texto">Donde una letra convencional usa trazos rectos que se encuentran en ángulos diagonales, esta tipografía los reemplaza por arcos. Pero el sistema conserva el ángulo recto: el punto donde la curva se quiebra a 90° para iniciar un trazo recto es un rasgo deliberado, no una excepción. La curva resuelve la forma; el ángulo recto marca la transición.</div>
          </div>
        </div>

        <div ref={reveal} className="reveal">
          <div className="regla">
            <div className="regla-numero">Regla 02</div>
            <div className="regla-titulo">Cada letra se resuelve con el mínimo de trazos.</div>
            <div className="regla-texto">Un gesto curvo continuo resuelve la estructura principal de la letra. Los trazos adicionales se reducen al mínimo imprescindible.</div>
          </div>
        </div>

        <div ref={reveal} className="reveal">
          <div className="regla">
            <div className="regla-numero">Regla 03</div>
            <div className="regla-titulo">La identidad se logra por reducción, no por acumulación.</div>
            <div className="regla-texto">Lo que diferencia una letra de otra no es añadir trazos, sino conservar solo el rasgo mínimo que la hace reconocible. En la M, un asta corta paralela es suficiente para distinguirla de la N. En la E, una barra horizontal corta la distingue de la C.</div>
          </div>
        </div>

        <div ref={reveal} className="reveal">
          <div className="regla">
            <div className="regla-numero">Regla 04</div>
            <div className="regla-titulo">Las letras rompen la línea base.</div>
            <div className="regla-texto">La M arranca por debajo del renglón. La pierna de la R desciende bajo él. Las mayúsculas invaden la zona de los descendentes, que normalmente es territorio de las minúsculas.</div>
          </div>
        </div>

        <div ref={reveal} className="reveal">
          <div className="regla">
            <div className="regla-numero">Regla 05</div>
            <div className="regla-titulo">Las panzas se sobredimensionan.</div>
            <div className="regla-texto">En la R, la panza baja hasta el tercio inferior del asta, mucho más abajo que en una R convencional. Este rasgo probablemente se repite en la P, la B y la D.</div>
          </div>
        </div>
      </section>

      {/* EL LABORATORIO */}
      <section className="laboratorio">
        <div ref={reveal} className="divider reveal">
          <span className="divider-line" />
          <span className="divider-symbol">LETRAS DEDUCIDAS</span>
          <span className="divider-line" />
        </div>
        <h2 ref={reveal} className="reveal">El laboratorio</h2>
        <p className="subtitle" ref={reveal}>Hipótesis tipográficas a partir de dos letras reales</p>
        <p className="intro" ref={reveal}>Solo tengo dos letras reales: la M y la R. Pero aplicando las reglas del sistema he empezado a deducir cómo serían las demás. Estas son hipótesis — las letras que el sistema produciría si sigue su propia lógica. Cada vez que alguien me envíe una letra real, podré confirmar o corregir estas deducciones.</p>

        {/* Grupo 1 — Estructura de arco + asta */}
        <div className="grupo-label" ref={reveal}>Grupo 1 — Estructura de arco + asta</div>
        <div className="grupo" ref={reveal}>
          <div className="letra-card">
            <svg width="100" height="120" viewBox="0 0 200 240" fill="none" stroke="#1e3a56" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="10" y1="200" x2="190" y2="200" stroke="#eee" strokeWidth="0.75" strokeDasharray="4,3" />
              <path d="M 35 220 C 22 170, 18 100, 30 60 C 45 22, 90 12, 140 18" fill="none" />
              <line x1="140" y1="18" x2="140" y2="200" />
              <line x1="115" y1="50" x2="115" y2="155" />
            </svg>
            <div className="letra-nombre">M</div>
            <div className="letra-estado estado-conocida">Conocida</div>
          </div>
          <div className="letra-card">
            <svg width="100" height="120" viewBox="0 0 200 240" fill="none" stroke="#1e3a56" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
              <line x1="10" y1="200" x2="190" y2="200" stroke="#eee" strokeWidth="0.75" strokeDasharray="4,3" />
              <path d="M 35 220 C 22 170, 18 100, 30 60 C 45 22, 90 12, 140 18" fill="none" />
              <line x1="140" y1="18" x2="140" y2="200" />
            </svg>
            <div className="letra-nombre">N</div>
            <div className="letra-estado estado-deducida">Deducida</div>
          </div>
          <div className="letra-card">
            <svg width="100" height="120" viewBox="0 0 200 240" fill="none" stroke="#1e3a56" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
              <line x1="10" y1="200" x2="190" y2="200" stroke="#eee" strokeWidth="0.75" strokeDasharray="4,3" />
              <path d="M 35 220 C 22 170, 18 100, 30 60 C 45 22, 90 12, 140 18" fill="none" />
              <line x1="140" y1="18" x2="140" y2="200" />
              <line x1="52" y1="155" x2="135" y2="155" />
            </svg>
            <div className="letra-nombre">A</div>
            <div className="letra-estado estado-deducida">Deducida</div>
          </div>
        </div>

        {/* Grupo 2 — Estructura de asta + panza */}
        <div className="grupo-label" ref={reveal}>Grupo 2 — Estructura de asta + panza</div>
        <div className="grupo" ref={reveal}>
          <div className="letra-card">
            <svg width="100" height="130" viewBox="0 0 200 260" fill="none" stroke="#1e3a56" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="10" y1="200" x2="190" y2="200" stroke="#eee" strokeWidth="0.75" strokeDasharray="4,3" />
              <line x1="55" y1="200" x2="55" y2="30" />
              <path d="M 55 30 C 70 28, 145 30, 148 70 C 151 110, 120 138, 55 140" fill="none" />
              <path d="M 55 140 C 75 155, 110 185, 135 215 C 142 223, 150 224, 155 219" fill="none" />
            </svg>
            <div className="letra-nombre">R</div>
            <div className="letra-estado estado-conocida">Conocida</div>
          </div>
          <div className="letra-card">
            <svg width="100" height="130" viewBox="0 0 200 260" fill="none" stroke="#1e3a56" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
              <line x1="10" y1="200" x2="190" y2="200" stroke="#eee" strokeWidth="0.75" strokeDasharray="4,3" />
              <line x1="55" y1="200" x2="55" y2="30" />
              <path d="M 55 30 C 70 28, 145 30, 148 70 C 151 110, 120 138, 55 140" fill="none" />
            </svg>
            <div className="letra-nombre">P</div>
            <div className="letra-estado estado-deducida">Deducida</div>
          </div>
          <div className="letra-card">
            <svg width="100" height="130" viewBox="0 0 200 260" fill="none" stroke="#1e3a56" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
              <line x1="10" y1="200" x2="190" y2="200" stroke="#eee" strokeWidth="0.75" strokeDasharray="4,3" />
              <line x1="55" y1="200" x2="55" y2="30" />
              <path d="M 55 30 C 70 28, 145 28, 148 65 C 151 100, 120 115, 55 117" fill="none" />
              <path d="M 55 117 C 70 115, 150 112, 153 148 C 156 184, 120 198, 55 200" fill="none" />
            </svg>
            <div className="letra-nombre">B</div>
            <div className="letra-estado estado-deducida">Deducida</div>
          </div>
          <div className="letra-card">
            <svg width="100" height="130" viewBox="0 0 200 260" fill="none" stroke="#1e3a56" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
              <line x1="10" y1="200" x2="190" y2="200" stroke="#eee" strokeWidth="0.75" strokeDasharray="4,3" />
              <line x1="55" y1="200" x2="55" y2="30" />
              <path d="M 55 30 C 70 26, 170 25, 172 100 C 174 175, 100 215, 75 225" fill="none" />
            </svg>
            <div className="letra-nombre">D</div>
            <div className="letra-estado estado-deducida">Deducida</div>
          </div>
        </div>

        {/* Grupo 3 — Vocales */}
        <div className="grupo-label" ref={reveal}>Grupo 3 — Vocales</div>
        <div className="grupo" ref={reveal}>
          <div className="letra-card">
            <svg width="100" height="120" viewBox="0 0 200 220" fill="none" stroke="#1e3a56" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
              <path d="M 45 25 C 43 75, 38 130, 50 158 C 65 188, 135 190, 150 160 C 162 132, 158 75, 155 25" fill="none" />
            </svg>
            <div className="letra-nombre">U</div>
            <div className="letra-estado estado-deducida">Deducida</div>
          </div>
          <div className="letra-card">
            <svg width="100" height="120" viewBox="0 0 200 220" fill="none" stroke="#1e3a56" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
              <path d="M 98 28 C 55 24, 38 60, 40 108 C 42 155, 58 192, 102 189 C 145 186, 162 152, 160 106 C 158 60, 142 26, 102 28" fill="none" />
            </svg>
            <div className="letra-nombre">O</div>
            <div className="letra-estado estado-deducida">Deducida</div>
          </div>
          <div className="letra-card">
            <svg width="100" height="120" viewBox="0 0 200 220" fill="none" stroke="#1e3a56" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
              <path d="M 100 195 C 99 155, 101 115, 100 80 C 99 55, 101 35, 100 25" fill="none" />
            </svg>
            <div className="letra-nombre">I</div>
            <div className="letra-estado estado-deducida">Deducida</div>
          </div>
          <div className="letra-card">
            <svg width="100" height="120" viewBox="0 0 200 220" fill="none" stroke="#1e3a56" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
              <path d="M 145 30 C 95 26, 42 55, 40 108 C 38 162, 92 195, 145 190" fill="none" />
              <line x1="58" y1="110" x2="105" y2="110" />
            </svg>
            <div className="letra-nombre">E</div>
            <div className="letra-estado estado-deducida">Deducida</div>
          </div>
        </div>

        <p className="laboratorio-cta" ref={reveal}>¿Tienes una servilleta con alguna de estas iniciales? Una foto bastaría para confirmar si la deducción es correcta.</p>
      </section>

      {/* EL DESTINO */}
      <section className="goal-section section">
        <div ref={reveal} className="reveal">
          <p className="label">El destino</p>
          <p>
            Si conseguimos reunir todas las letras, voy a digitalizar esta tipografía y crear{" "}
            <em>una fuente libre</em>. Para que cualquiera pueda usarla. Para que un sistema de letras diseñado en un internado de los años 50 y olvidado en cajones, vuelva a vivir.
          </p>
        </div>
      </section>

      {/* LA PETICIÓN */}
      <section className="cta-section section">
        <div ref={reveal} className="reveal">
          <h2>Puede estar en un cajón, en un arcón, en un mercadillo</h2>
          <p>Busco servilletas, sábanas o cualquier pieza de ajuar escolar de internados españoles de los años 40, 50 o 60 que tenga iniciales con esta misma tipografía.</p>
          <p>No importa el estado. No importa la letra. Una sola foto es suficiente.</p>
          <p>Y si no tienes ninguna servilleta: comparte esto. Porque la persona que sí la tiene puede ser alguien que tú conozcas.</p>
        </div>
        <div ref={reveal} className="cta-actions reveal">
          <a
            href="https://twitter.com/intent/tweet?text=Buscan%20servilletas%20de%20internados%20de%20los%20a%C3%B1os%2050%20para%20rescatar%20una%20tipograf%C3%ADa%20olvidada%20y%20convertirla%20en%20una%20fuente%20libre.%20%23LaServilleta%20%40guiomargdp&url=https://laservilleta.lovable.app"
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
