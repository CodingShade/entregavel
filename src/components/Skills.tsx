export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Vue.js', level: 85 },
        { name: 'React Native', level: 80 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js / Express', level: 90 },
        { name: 'Python / Django', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 82 },
        { name: 'GraphQL', level: 80 },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git / GitHub', level: 95 },
        { name: 'Docker', level: 85 },
        { name: 'AWS / Vercel', level: 80 },
        { name: 'CI/CD', level: 82 },
        { name: 'Linux', level: 88 },
      ],
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Resolução de Problemas', level: 95 },
        { name: 'Comunicação', level: 90 },
        { name: 'Trabalho em Equipe', level: 92 },
        { name: 'Gestão de Tempo', level: 88 },
        { name: 'Mentoria', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Minhas <span className="text-emerald-400">habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400" />
          <p className="text-slate-400 mt-4 text-lg">
            Tecnologias e ferramentas que domino
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-emerald-500/50 transition-all"
            >
              <h3 className="text-2xl font-bold mb-6 text-emerald-400">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-emerald-400 text-sm font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Anos de Experiência', value: '5+' },
            { label: 'Projetos Concluídos', value: '50+' },
            { label: 'Clientes Satisfeitos', value: '30+' },
            { label: 'Xícaras de Café', value: '∞' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 text-center hover:border-emerald-500/50 transition-all hover:scale-105"
            >
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
