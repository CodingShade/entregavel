import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6">
          <span className="text-emerald-400 font-mono text-sm">👋 Olá, eu sou</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-100 via-slate-100 to-emerald-400 bg-clip-text text-transparent">
          Thomas Otsa Bender
        </h1>

        <p className="text-lg md:text-xl text-emerald-400 font-medium mb-4">Desenvolvedor Full Stack</p>
        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transformo ideias em produtos digitais através de código limpo e soluções criativas
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:contato@exemplo.com"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToAbout}
            className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold rounded-lg transition-all hover:scale-105"
          >
            Conheça meu trabalho
          </button>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-slate-700 hover:border-emerald-500 rounded-lg transition-all hover:scale-105"
          >
            Entrar em contato
          </a>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 hover:text-emerald-400 transition-colors"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}
