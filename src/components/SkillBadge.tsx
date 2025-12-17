interface SkillBadgeProps {
  skill: string;
}

function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-lg font-medium text-sm hover:from-blue-100 hover:to-blue-200 transition-all duration-200 cursor-default border border-blue-200">
      {skill}
    </span>
  );
}

export default SkillBadge;
