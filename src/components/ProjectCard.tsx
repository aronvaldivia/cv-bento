import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

function ProjectCard({ title, description, tech, link }: ProjectCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <a
          href={link}
          className="p-2 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-100"
        >
          <ExternalLink size={16} className="text-gray-600" />
        </a>
      </div>
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
