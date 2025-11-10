import { Code2, Rocket, Users, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Código Limpo',
      description: 'Escrevo código mantível, escalável e bem documentado',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Foco em otimização e experiência do usuário',
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Trabalho bem em equipe e comunicação clara',
    },
    {
      icon: Zap,
      title: 'Aprendizado',
      description: 'Sempre atualizado com as últimas tecnologias',
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-emerald-400">mim</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Olá! Sou Thomas Otsa Bender, um desenvolvedor apaixonado por criar soluções digitais que fazem a diferença.
              Com mais de 5 anos de experiência, trabalhei em projetos de diversos segmentos,
              desde startups até grandes empresas.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Minha expertise está em construir aplicações web modernas e escaláveis,
              sempre buscando as melhores práticas e tecnologias mais adequadas para cada desafio.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Quando não estou programando, você pode me encontrar contribuindo com projetos
              open source, escrevendo artigos técnicos ou explorando novas tecnologias.
            </p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
            <div className="space-y-6">
              <div>
                <span className="text-emerald-400 font-mono text-sm">const desenvolvedor = {'{'}</span>
                <div className="ml-6 mt-2 space-y-2 font-mono text-sm">
                  <p><span className="text-cyan-400">nome:</span> <span className="text-amber-300">"Thomas Otsa Bender"</span>,</p>
                  <p><span className="text-cyan-400">idade:</span> <span className="text-amber-300">28</span>,</p>
                  <p><span className="text-cyan-400">localização:</span> <span className="text-amber-300">"São Paulo, BR"</span>,</p>
                  <p><span className="text-cyan-400">experiência:</span> <span className="text-amber-300">"5+ anos"</span>,</p>
                  <p><span className="text-cyan-400">foco:</span> <span className="text-amber-300">"Full Stack"</span>,</p>
                  <p><span className="text-cyan-400">disponível:</span> <span className="text-emerald-400">true</span></p>
                </div>
                <span className="text-emerald-400 font-mono text-sm">{'}'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all hover:scale-105"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
