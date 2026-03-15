import { motion } from "framer-motion";
import napkinHero from "@/assets/napkin-hero.jpg";

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

const Index = () => {
  return (
    <div className="min-h-svh bg-background text-foreground selection:bg-primary/10 selection:text-primary font-sans antialiased">
      
      {/* HERO */}
      <section className="flex flex-col items-center justify-center px-6 pt-20 pb-24 md:pt-32 md:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="text-center space-y-4 mb-16"
        >
          <h1
            className="font-serif text-[clamp(2.5rem,8vw,4.5rem)] tracking-[-0.02em] leading-[1.1]"
            style={{ textWrap: "balance" as any }}
          >
            La Servilleta
          </h1>
          <p className="font-serif italic text-xl md:text-2xl text-foreground/70">
            2 letras de 27 para un abecedario completo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
          className="relative w-full max-w-2xl"
        >
          <img
            src={napkinHero}
            alt="Servilleta con iniciales bordadas en hilo azul"
            className="w-full h-auto rounded-sm shadow-object outline outline-1 outline-foreground/5 -outline-offset-1"
          />
        </motion.div>
      </section>

      {/* TEXT */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.7 }}
        className="max-w-[600px] mx-auto px-6 space-y-8 pb-24 md:pb-32"
      >
        <p className="text-lg leading-[1.7] text-center" style={{ textWrap: "pretty" as any }}>
          En los años 50, en un internado salesiano de Cádiz, cada alumno llevaba sus iniciales bordadas en una servilleta. Hilo azul sobre tela cruda. Una letra, un número, un nombre.
        </p>
        <p className="text-lg leading-[1.7] text-center" style={{ textWrap: "pretty" as any }}>
          Esta es la servilleta de mi padre. Solo tengo estas dos letras. Me gustaría encontrar el resto de letras para tener un alfabeto completo y crear una tipografía.
        </p>
        <p className="text-lg leading-[1.7] text-center" style={{ textWrap: "pretty" as any }}>
          Si guardas una servilleta como esta, o conoces a alguien que la tenga, escríbeme.
        </p>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 1.0 }}
        className="flex flex-col items-center px-6 pb-32 md:pb-48"
      >
        <a
          href="mailto:la.servilleta.908@gmail.com?subject=Tengo una servilleta"
          className="group relative px-12 py-4 border border-primary text-primary bg-transparent transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-px active:scale-[0.98] will-change-transform"
        >
          <span className="text-lg font-medium tracking-wide">Escríbeme</span>
        </a>
        <p className="mt-6 text-sm text-muted-foreground font-light">
          Solo necesito una foto y la historia que quieras contarme
        </p>
      </motion.section>

      {/* FOOTER */}
      <footer className="flex flex-col items-center gap-4 pb-12 opacity-40 hover:opacity-100 transition-opacity duration-500">
        <a
          href="https://twitter.com/guiomargdp"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
          aria-label="Twitter"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <span className="text-xs tracking-widest uppercase">La Servilleta, 2025</span>
      </footer>
    </div>
  );
};

export default Index;
