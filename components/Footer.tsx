import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center gap-6 mb-8">
           <a href="https://github.com/ono1025" className="hover:text-white transition-colors"><i className="fa-brands fa-github text-2xl"></i></a>
           <a href="https://www.linkedin.com/in/mahfuz-ahmed-anik-a5a6b5215/" className="hover:text-white transition-colors"><i className="fa-brands fa-linkedin text-2xl"></i></a>
           <a href="mailto:mahfuzahmedanik1025@gmail.com" className="hover:text-white transition-colors"><i className="fa-solid fa-envelope text-2xl"></i></a>
        </div>
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} Mahfuz Ahmed Anik. All rights reserved.
        </p>
        <p className="text-xs text-slate-600">
          Built with React, TypeScript & Tailwind CSS. Inspired by <a href="https://azminewasi.github.io/" className="hover:text-slate-300 underline decoration-slate-600 underline-offset-2">Azmine Wasi</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;