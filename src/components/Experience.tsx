import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Presente',
      description: 'Liderança técnica de equipe de 5 desenvolvedores, arquitetura de sistemas escaláveis e implementação de CI/CD',
      achievements: [
        'Reduziu tempo de deploy em 60% com implementação de pipelines automatizados',
        'Migrou aplicação legada para arquitetura moderna, aumentando performance em 150%',
        'Mentorou 3 desenvolvedores júnior até a posição plena',
      ],
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2020 - 2022',
      description: 'Desenvolvimento de aplicações web e mobile para diversos clientes, trabalhando com tecnologias modernas',
      achievements: [
        'Desenvolveu 15+ projetos full stack com React, Node.js e React Native',
        'Implementou testes automatizados aumentando cobertura para 85%',
        'Otimizou performance de aplicações reduzindo tempo de carregamento em 40%',
      ],
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      description: 'Responsável pelo desenvolvimento de interfaces modernas e responsivas para plataforma SaaS',
      achievements: [
        'Criou design system reutilizável para toda a plataforma',
        'Implementou features que aumentaram engajamento em 35%',
        'Colaborou com designers para melhorar UX/UI',
      ],
    },
  ];

  const education = [
    {
      type: 'education',
      title: 'Bacharelado em Ciência da Computação',
      company: 'Universidade Federal',
      period: '2015 - 2019',
      description: 'Foco em engenharia de software, algoritmos e estruturas de dados',
      achievements: [
        'Projeto de conclusão premiado em competição nacional',
        'Pesquisa em machine learning publicada em conferência',
      ],
    },
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'MongoDB Certified Developer',
    'Scrum Master Certified',
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Minha <span className="text-emerald-400">trajetória</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400" />
        </div>

        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <Briefcase className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Experiência Profissional</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-slate-800 hover:border-emerald-500/50 transition-colors"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-emerald-500 rounded-full" />

                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-bold text-slate-100">
                        {exp.title}
                      </h4>
                      <span className="text-sm text-emerald-400 font-mono">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-slate-400 font-medium mb-3">
                      {exp.company}
                    </p>

                    <p className="text-slate-300 mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-2 text-slate-400 text-sm"
                        >
                          <span className="text-emerald-400 mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Formação Acadêmica</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-slate-800 hover:border-emerald-500/50 transition-colors"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-emerald-500 rounded-full" />

                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-bold text-slate-100">
                        {edu.title}
                      </h4>
                      <span className="text-sm text-emerald-400 font-mono">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-slate-400 font-medium mb-3">
                      {edu.company}
                    </p>

                    <p className="text-slate-300 mb-4">
                      {edu.description}
                    </p>

                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-2 text-slate-400 text-sm"
                        >
                          <span className="text-emerald-400 mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Certificações</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <span className="text-slate-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
