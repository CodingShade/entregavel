import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em <span className="text-emerald-400">contato</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400" />
          <p className="text-slate-400 mt-4 text-lg">
            Vamos trabalhar juntos? Envie uma mensagem!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a
                href="mailto:contato@exemplo.com"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                contato@exemplo.com
              </a>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Telefone</h3>
              <a
                href="tel:+5511999999999"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                +55 11 99999-9999
              </a>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Localização</h3>
              <p className="text-slate-400">
                São Paulo, SP<br />
                Brasil
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Disponibilidade</h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-slate-400">Disponível para projetos</span>
              </div>
              <p className="text-slate-500 text-sm mt-2">
                Responderei em até 24 horas
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  placeholder="Conte mais sobre seu projeto..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-700 text-slate-950 font-semibold rounded-lg transition-all hover:scale-105 disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>Enviando...</>
                ) : status === 'sent' ? (
                  <>Mensagem enviada!</>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar mensagem
                  </>
                )}
              </button>

              {status === 'sent' && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/50 rounded-lg text-emerald-400 text-center">
                  Obrigado! Responderei em breve.
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-slate-800 text-center">
          <p className="text-slate-400">
            © 2024 Thomas Otsa Bender. Feito com dedicação e muito café.
          </p>
          <div className="mt-4 flex items-center justify-center gap-6">
            <a href="#home" className="text-slate-500 hover:text-emerald-400 transition-colors text-sm">
              Política de Privacidade
            </a>
            <span className="text-slate-700">•</span>
            <a href="#home" className="text-slate-500 hover:text-emerald-400 transition-colors text-sm">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
