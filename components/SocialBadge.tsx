import React from 'react';
import { SocialLink } from '../types';

interface SocialBadgeProps {
  link: SocialLink;
}

const SocialBadge: React.FC<SocialBadgeProps> = ({ link }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center gap-2 px-3 py-1.5 rounded-md
        text-xs font-semibold text-white
        transition-all duration-200 transform hover:-translate-y-0.5 hover:brightness-110 shadow-sm
        ${link.color}
      `}
    >
      <i className={link.icon}></i>
      <span>{link.name}</span>
    </a>
  );
};

export default SocialBadge;