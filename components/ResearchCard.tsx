import React from 'react';
import { ResearchInterest } from '../types';

interface ResearchCardProps {
  interest: ResearchInterest;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ interest }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
          <i className={`${interest.icon} text-xl`}></i>
        </div>
        <h3 className="font-serif text-xl font-bold text-slate-800 leading-tight">
          {interest.title}
        </h3>
      </div>
      <ul className="space-y-3">
        {interest.description.map((item, idx) => (
          <li key={idx} className="flex gap-3 text-slate-600 text-sm leading-relaxed text-justify">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResearchCard;