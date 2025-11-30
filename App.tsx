import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialBadge from './components/SocialBadge';
import ResearchCard from './components/ResearchCard';
import { 
  SOCIAL_LINKS, 
  RESEARCH_INTERESTS, 
  EXPERIENCE, 
  PUBLICATIONS_REVIEW, 
  PUBLICATIONS_PROGRESS,
  PROJECTS,
  SKILLS,
  ACHIEVEMENTS,
  TRAINING,
  EDUCATION,
  PUBLICATIONS_JOURNAL,
  PUBLICATIONS_CONFERENCE,
  PUBLICATIONS_WORKSHOP,
  PUBLICATIONS_POSTER
} from './constants';
import { PublicationItem, ProjectItem } from './types';

// Helper components defined inline for App structure
const HighlightAuthor: React.FC<{ text: string }> = ({ text }) => {
  const name = "Mahfuz Ahmed Anik";
  const parts = text.split(new RegExp(`(${name})`, 'g'));
  
  return (
    <span className="text-slate-600">
      {parts.map((part, i) => (
        part === name ? 
        <span key={i} className="font-bold underline text-slate-800">{part}</span> : 
        <span key={i}>{part}</span>
      ))}
    </span>
  );
};

const PublicationEntry: React.FC<{ pub: PublicationItem }> = ({ pub }) => {
  return (
    <li className="mb-6 last:mb-0">
       <div className="flex gap-2 items-start">
         <div className="flex-1">
           <h4 className="text-lg font-bold text-slate-900 leading-snug mb-1">
             {pub.title}
           </h4>
           <div className="text-sm leading-relaxed mb-1">
             <HighlightAuthor text={pub.authors || ""} />
           </div>
           <div className="text-sm text-slate-500 mb-2">
             {pub.venue && <span className="font-bold text-slate-700">{pub.venue}</span>}
             {pub.note && <span className="block mt-0.5 text-slate-600"><i className="fa-solid fa-trophy text-amber-500 mr-1.5"></i>{pub.note}</span>}
           </div>
           
           {pub.links && pub.links.length > 0 && (
             <div className="flex flex-wrap gap-2 mt-2">
               {pub.links.map((link, idx) => (
                 <a 
                  key={idx} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded hover:bg-blue-100 transition-colors"
                 >
                   [{link.name}]
                 </a>
               ))}
             </div>
           )}
         </div>
       </div>
    </li>
  );
};

const ProjectCard: React.FC<{ project: ProjectItem; index: number }> = ({ project, index }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center mb-16 last:mb-0">
      {/* Text Side */}
      <div className="flex-1 order-2 lg:order-1">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl font-black text-slate-200">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="h-px bg-slate-200 flex-1"></div>
          <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shrink-0 border border-purple-100">
            <i className={`${project.icon} text-lg`}></i>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">
          {project.title}
        </h3>
        <p className="text-slate-600 leading-relaxed text-justify text-base">
          {project.description}
        </p>
      </div>
      
      {/* Image Side */}
      <div className="w-full lg:w-1/2 order-1 lg:order-2">
         <div className="rounded-xl overflow-hidden shadow-lg border border-slate-100 group bg-white relative">
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10 pointer-events-none"></div>
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
            />
         </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      <main className="pt-24 md:pt-32">
        {/* Hero / About Section */}
        <section id="about" className="max-w-6xl mx-auto px-6 mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            <div className="flex-1 order-2 md:order-1">
              <div className="mb-6">
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  Mahfuz Ahmed Anik
                </h1>
                <p className="text-lg text-blue-600 font-medium">
                  AI Researcher in Intelligent Healthcare, Digital Twins & Agentic AI
                </p>
              </div>

              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-justify space-y-4 text-base">
                <p>
                  I am <strong>Mahfuz Ahmed Anik</strong>, a recent graduate of Industrial and Production Engineering at 
                  <span className="font-semibold text-slate-800"> Shahjalal University of Science and Technology (SUST)</span> with a CGPA of 3.80/4.00 (3rd position in Class). 
                  I have a strong foundation in operation Research, supply chain management, data science, and AI/ML, 
                  which shaped my research journey. My research is dedicated to developing human-centric, safe, and reliable models for healthcare, transportation,
                  clinical applications, and process optimization. My research interests lie at the intersection of 
                  Artificial Intelligence, Data-Driven learning under uncertainty and Optimization, focusing in healthcare, 
                  additive manufacturing, supply chain optimization and transportation. I am also curious about Graph Machine Learning (GNNs) 
                  and Agentic AI frameworks. 
                </p>
                
                <p className="font-medium text-blue-800 bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
                  Currently, I am actively seeking a PhD position to begin in Fall 2026 to further my research in this domain.
                </p>

                <p>
                  I started my research journey under <a href="https://scholar.google.com/citations?user=HOOJPRYAAAAJ&hl=en" target="_blank" rel="noreferrer" className="font-medium text-slate-900 underline decoration-slate-300 hover:text-blue-600 hover:decoration-blue-600 transition-colors">Prof. A.M.M. Mukaddes (SUST)</a> in data science and operations research and I completed my undergraduate thesis under <a href="https://www.sust.edu/departments/ipe/faculty/karim-ipe@sust.edu" target="_blank" rel="noreferrer" className="font-medium text-slate-900 underline decoration-slate-300 hover:text-blue-600 hover:decoration-blue-600 transition-colors">Prof. Mohammed Abdul Karim (SUST)</a>
                  Later, after joining <a href="https://ciol-researchlab.github.io/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">CIOL research lab</a>, I had the privilege to collaborate with <a href="https://scholar.google.com/citations?user=fvWTiS8AAAAJ&hl=en" target="_blank" rel="noreferrer" className="font-medium text-slate-900 underline decoration-slate-300 hover:text-blue-600 hover:decoration-blue-600 transition-colors">Prof. Ahsan (OU)</a> and <a href="https://www.lsu.edu/eng/mie/people/faculty/bappy.php" target="_blank" rel="noreferrer" className="font-medium text-slate-900 underline decoration-slate-300 hover:text-blue-600 hover:decoration-blue-600 transition-colors">Prof. Bappy (LSU)</a> on digital twins, additive manufacturing, GNNs, and Agentic AI for industrial and medical applications. 
                  I also work with <a href="https://riashat.github.io/" target="_blank" rel="noreferrer" className="font-medium text-slate-900 underline decoration-slate-300 hover:text-blue-600 hover:decoration-blue-600 transition-colors">Riashat Islam, PhD (Microsoft Research)</a> and <a href="https://scholar.google.com/citations?user=KhC8rtcAAAAJ&hl=en" target="_blank" rel="noreferrer" className="font-medium text-slate-900 underline decoration-slate-300 hover:text-blue-600 hover:decoration-blue-600 transition-colors">Md Rizwan Parvez, PhD (QCRI)</a> on generative AI, agents, and reasoning. 
                  Outside CIOL, I also collaborate with <a href="https://www.ai4chemia.org/about" target="_blank" rel="noreferrer" className="font-medium text-slate-900 underline decoration-slate-300 hover:text-blue-600 hover:decoration-blue-600 transition-colors">Prof. Alshehri (KSU)</a> on generative AI and uncertainty modeling in chemical substances.
                </p>
                
                <p>
                  My research has been published in workshop venues associated with <strong>ICLR, ACL, NAACL, and CSCW</strong>. Several of my 
                  journal submissions under review in peer-reviewed journal and I am engaged in multiple ongoing projects. I am a quick learner and highly adaptable, capable of working both independently and in teams. I enjoy exploring new topics, sharing knowledge, honing my skills, and pushing my limits through experimentation.
                </p>
                
                <p>
                  <a href="https://ono1025.github.io/CV/Curriculum_Vitae_Anik.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center text-blue-600 font-bold hover:underline">
                    View my Curriculum Vitae <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
                  </a>
                </p>
                
                <p className="text-sm text-slate-500 italic">
                  Feel free to email me (mahfuzahmedanik1025 at gmail dot com) if you're interested in collaboration or discussing research. I'm open to new ideas and collaborations.
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-3">Connect</h3>
                <div className="flex flex-wrap gap-2">
                  {SOCIAL_LINKS.map((link) => (
                    <SocialBadge key={link.name} link={link} />
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 w-full md:w-64 shrink-0 mx-auto md:mx-0 pt-2">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="./Anik.png" 
                  alt="Mahfuz Ahmed Anik" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </section>

        <div className="bg-slate-100 h-px w-full max-w-6xl mx-auto my-12"></div>

        {/* Research Interests */}
        <section id="research" className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-blue-600 w-1 h-8 rounded-full"></div>
            <h2 className="font-serif text-3xl font-bold text-slate-900">Research Interests</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESEARCH_INTERESTS.map((interest, idx) => (
              <ResearchCard key={idx} interest={interest} />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="max-w-6xl mx-auto px-6 py-12 bg-white rounded-3xl my-12 border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3 mb-10">
             <div className="bg-amber-500 w-1 h-8 rounded-full"></div>
            <h2 className="font-serif text-3xl font-bold text-slate-900">Experience</h2>
          </div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0">
                <div className="md:flex gap-6 justify-between group">
                  {/* Timeline Line (Desktop) */}
                  <div className="hidden md:block absolute left-[180px] top-2 bottom-0 w-px bg-slate-200 group-last:bg-transparent"></div>
                  <div className="hidden md:block absolute left-[176px] top-2.5 w-2.5 h-2.5 rounded-full bg-slate-300 ring-4 ring-white group-hover:bg-blue-500 transition-colors"></div>

                  {/* Date */}
                  <div className="md:w-[160px] shrink-0 text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1 md:mb-0 md:text-right">
                    {exp.period}
                  </div>

                  {/* Content */}
                  <div className="md:flex-1 md:pl-10">
                    <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
                    <div className="text-blue-600 font-medium mb-3">
                      {exp.orgUrl ? (
                        <a href={exp.orgUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {exp.organization} <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
                        </a>
                      ) : (
                        exp.organization
                      )}
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base text-justify">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-emerald-500 w-1 h-8 rounded-full"></div>
            <h2 className="font-serif text-3xl font-bold text-slate-900">Publications</h2>
          </div>

          <div className="space-y-12">
            {/* Journal */}
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6 flex items-center gap-2">
                 <i className="fa-solid fa-book-journal-whills text-emerald-600"></i> Journal
              </h3>
              <ol className="list-decimal pl-5 space-y-6 marker:text-slate-400 marker:font-medium">
                {PUBLICATIONS_JOURNAL.map((pub, idx) => (
                  <PublicationEntry key={idx} pub={pub} />
                ))}
              </ol>
            </div>

            {/* Conference */}
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6 flex items-center gap-2">
                 <i className="fa-solid fa-users-rectangle text-blue-600"></i> Conference Paper
              </h3>
              <ol className="list-decimal pl-5 space-y-6 marker:text-slate-400 marker:font-medium">
                {PUBLICATIONS_CONFERENCE.map((pub, idx) => (
                  <PublicationEntry key={idx} pub={pub} />
                ))}
              </ol>
            </div>

            {/* Workshop */}
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6 flex items-center gap-2">
                 <i className="fa-solid fa-chalkboard-user text-purple-600"></i> Workshop Paper
              </h3>
              <ol className="list-decimal pl-5 space-y-6 marker:text-slate-400 marker:font-medium">
                {PUBLICATIONS_WORKSHOP.map((pub, idx) => (
                  <PublicationEntry key={idx} pub={pub} />
                ))}
              </ol>
            </div>

            {/* Poster */}
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6 flex items-center gap-2">
                 <i className="fa-solid fa-image text-rose-500"></i> Poster Paper
              </h3>
              <ol className="list-decimal pl-5 space-y-6 marker:text-slate-400 marker:font-medium">
                {PUBLICATIONS_POSTER.map((pub, idx) => (
                  <PublicationEntry key={idx} pub={pub} />
                ))}
              </ol>
            </div>

            {/* In Review */}
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6 flex items-center gap-2">
                 <i className="fa-solid fa-file-pen text-amber-500"></i> Works In Review
              </h3>
              <ol className="list-decimal pl-5 space-y-6 marker:text-slate-400 marker:font-medium">
                {PUBLICATIONS_REVIEW.map((pub, idx) => (
                  <PublicationEntry key={idx} pub={pub} />
                ))}
              </ol>
            </div>

            {/* In Progress */}
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6 flex items-center gap-2">
                 <i className="fa-solid fa-bars-progress text-slate-500"></i> Work In Progress
              </h3>
              <ol className="list-decimal pl-5 space-y-4 marker:text-slate-400 marker:font-medium">
                {PUBLICATIONS_PROGRESS.map((item, idx) => (
                  <li key={idx} className="text-slate-700 font-medium">
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Education Section (NEW) */}
        <section id="education" className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-teal-500 w-1 h-8 rounded-full"></div>
            <h2 className="font-serif text-3xl font-bold text-slate-900">Education</h2>
          </div>
          
          <div className="space-y-8">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-2 mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                    <p className="text-blue-600 font-medium">{edu.institution}</p>
                  </div>
                  <span className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-3 items-center mb-4 text-sm text-slate-600">
                   {edu.major && <span className="font-semibold"><i className="fa-solid fa-book-open mr-1.5"></i>{edu.major}</span>}
                   {edu.major && edu.result && <span className="text-slate-300">•</span>}
                   {edu.result && <span className="font-semibold text-emerald-600"><i className="fa-solid fa-star mr-1.5"></i>{edu.result}</span>}
                </div>

                {edu.courses && (
                  <div className="mt-4 pt-4 border-t border-slate-50">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Relevant Coursework</p>
                    <p className="text-sm text-slate-600 leading-relaxed text-justify">
                      {edu.courses}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Grid for Projects & Skills */}
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 gap-12">
          
          {/* Projects */}
          <section id="projects">
            <div className="flex items-center gap-3 mb-12">
              <div className="bg-purple-500 w-1 h-8 rounded-full"></div>
              <h2 className="font-serif text-3xl font-bold text-slate-900">Academic Projects</h2>
            </div>
            <div>
              {PROJECTS.map((proj, idx) => (
                <ProjectCard key={idx} project={proj} index={idx} />
              ))}
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="mt-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-rose-500 w-1 h-8 rounded-full"></div>
              <h2 className="font-serif text-3xl font-bold text-slate-900">Technical Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(SKILLS).map(([category, items]) => (
                <div key={category} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map(skill => (
                      <span key={skill} className="bg-slate-50 text-slate-700 px-3 py-1.5 rounded-md text-sm font-medium border border-slate-200 hover:bg-white hover:border-slate-300 transition-all">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Achievements & Training */}
        <section id="achievements" className="max-w-6xl mx-auto px-6 py-8">
           <div className="grid md:grid-cols-2 gap-12">
             
             {/* Achievements */}
             <div className="bg-slate-900 text-slate-200 rounded-2xl p-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 opacity-5">
                 <i className="fa-solid fa-trophy text-9xl"></i>
               </div>
               <h2 className="font-serif text-2xl font-bold text-white mb-6 flex items-center gap-3">
                 <i className="fa-solid fa-award text-yellow-500"></i> Achievements
               </h2>
               <ul className="space-y-4">
                 {ACHIEVEMENTS.map((ach, idx) => (
                   <li key={idx} className="border-b border-slate-700 pb-3 last:border-0 last:pb-0">
                     <p className="font-bold text-white">
                       {ach.url ? (
                         <a href={ach.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:underline">
                           {ach.title} <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1 opacity-70"></i>
                         </a>
                       ) : ach.title}
                     </p>
                     {ach.detail && <p className="text-sm text-slate-400 mt-1">{ach.detail}</p>}
                   </li>
                 ))}
               </ul>
             </div>

             {/* Training */}
             <div className="bg-white border border-slate-200 rounded-2xl p-8">
               <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                 <i className="fa-solid fa-certificate text-blue-500"></i> Certifications & Training
               </h2>
               <ul className="space-y-4">
                 {TRAINING.map((train, idx) => (
                   <li key={idx} className="flex gap-3 text-slate-700 text-sm">
                      <i className="fa-solid fa-check text-green-500 mt-1 shrink-0"></i>
                      <span>
                        {train.url ? (
                          <a href={train.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline font-medium">
                            {train.name} <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1 opacity-70"></i>
                          </a>
                        ) : train.name}
                      </span>
                   </li>
                 ))}
               </ul>
             </div>

           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default App;