import { Mail, Github, Linkedin, MapPin, Briefcase, GraduationCap, Code2, Sparkles } from 'lucide-react';
import BentoCard from './components/BentoCard';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';

function App() {
  const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'SQL', 'TailwindCSS', 'Git'];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma completa de comercio electrónico con carrito de compras y pasarela de pagos',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Task Manager App',
      description: 'Aplicación de gestión de tareas con autenticación y colaboración en tiempo real',
      tech: ['TypeScript', 'Supabase', 'React'],
      link: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Dashboard interactivo para visualización de datos y métricas empresariales',
      tech: ['React', 'D3.js', 'Python'],
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">

          <BentoCard className="md:col-span-4 md:row-span-2 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="w-24 h-24 bg-white/20 rounded-2xl mb-4 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-4xl font-bold">TN</span>
                </div>
                <h1 className="text-3xl font-bold mb-2">Tu Nombre</h1>
                <p className="text-blue-100 text-lg mb-4">Full Stack Developer</p>
                <p className="text-blue-50 text-sm leading-relaxed">
                  Desarrollador apasionado por crear experiencias digitales excepcionales y soluciones innovadoras.
                </p>
              </div>
              <div className="flex gap-3 mt-6">
                <a href="mailto:tu@email.com" className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm">
                  <Mail size={20} />
                </a>
                <a href="https://github.com" className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-5 bg-white">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Briefcase className="text-emerald-600" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Experiencia</h2>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-emerald-500 pl-4">
                <h3 className="font-semibold text-gray-900">Senior Developer</h3>
                <p className="text-sm text-gray-600">Tech Company • 2022 - Presente</p>
                <p className="text-sm text-gray-700 mt-2">Desarrollo de aplicaciones web escalables y liderazgo de equipo técnico.</p>
              </div>
              <div className="border-l-2 border-gray-300 pl-4">
                <h3 className="font-semibold text-gray-900">Full Stack Developer</h3>
                <p className="text-sm text-gray-600">Startup Inc • 2020 - 2022</p>
                <p className="text-sm text-gray-700 mt-2">Construcción de productos desde cero y optimización de rendimiento.</p>
              </div>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-3 bg-gradient-to-br from-amber-400 to-orange-500 text-white">
            <div className="flex items-center gap-3 mb-3">
              <MapPin size={24} />
              <h2 className="text-xl font-bold">Ubicación</h2>
            </div>
            <p className="text-lg">Madrid, España</p>
            <p className="text-sm text-white/80 mt-2">Disponible para trabajo remoto</p>
            <div className="mt-6 p-3 bg-white/20 rounded-lg backdrop-blur-sm">
              <p className="text-xs text-white/90">Zona horaria</p>
              <p className="font-semibold">GMT+1 (CET)</p>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-5 bg-white">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Code2 className="text-blue-600" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Habilidades</h2>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">5+</p>
                <p className="text-sm text-gray-600">Años de experiencia</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="text-2xl font-bold text-emerald-600">50+</p>
                <p className="text-sm text-gray-600">Proyectos completados</p>
              </div>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-3 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap size={28} />
              <h2 className="text-xl font-bold">Educación</h2>
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold">Ingeniería Informática</h3>
                <p className="text-sm text-gray-300">Universidad Tech</p>
                <p className="text-xs text-gray-400 mt-1">2016 - 2020</p>
              </div>
              <div className="pt-3 border-t border-gray-700">
                <h3 className="font-semibold text-sm">Certificaciones</h3>
                <ul className="text-xs text-gray-300 mt-2 space-y-1">
                  <li>• AWS Certified Developer</li>
                  <li>• React Advanced Patterns</li>
                </ul>
              </div>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-4 bg-gradient-to-br from-teal-500 to-cyan-600 text-white">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles size={24} />
              <h2 className="text-xl font-bold">Sobre Mí</h2>
            </div>
            <p className="text-sm text-white/90 leading-relaxed">
              Me encanta resolver problemas complejos y aprender nuevas tecnologías.
              Cuando no estoy programando, disfruto contribuyendo a proyectos open source
              y compartiendo conocimiento con la comunidad tech.
            </p>
          </BentoCard>

          <div className="md:col-span-12">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Proyectos Destacados</h2>
              <p className="text-gray-600">Algunos de mis trabajos recientes</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="mailto:tu@email.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <Mail size={20} />
            Contactar
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
