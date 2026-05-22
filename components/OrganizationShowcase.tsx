import React, { useRef, useState, MouseEvent } from 'react';
import { LinkItem } from '../types';
import { ExternalLink } from 'lucide-react';

interface OrganizationShowcaseProps {
  organizations: LinkItem[];
  mounted: boolean;
}

const OrganizationShowcase: React.FC<OrganizationShowcaseProps> = ({ organizations, mounted }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className={`mb-16 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="mb-6">
        <h2 className="mb-2 font-display font-bold text-slate-900 dark:text-white text-2xl md:text-3xl text-center">
          Powered by
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm text-center">
          Community-driven initiatives for ECNU students
        </p>
      </div>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-2xl">
        {organizations.map((org) => (
          <a
            key={org.hash}
            href={org.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredId(org.hash)}
            onMouseLeave={() => setHoveredId(null)}
            className="group block relative bg-white dark:bg-white/5 shadow-lg hover:shadow-2xl backdrop-blur-md p-6 border border-slate-200 hover:border-slate-300 dark:border-white/10 dark:hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-300"
          >
            {/* Background Gradient */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${org.color} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`}
            />

            {/* Shimmer Effect */}
            <div className="z-20 absolute inset-0 bg-gradient-to-r from-transparent via-slate-400/10 dark:via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />

            <div className="z-10 relative flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  {/^https?:\/\//.test(org.icon) ? (
                    <img
                      src={org.icon}
                      alt={`${org.title} logo`}
                      className="shadow-md rounded-lg w-12 h-12 object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${org.color} shadow-md`}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.002 12.002 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:group-hover:text-slate-50 dark:text-white group-hover:text-slate-700 transition-colors">
                      {org.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">
                      {org.description}
                    </p>
                  </div>
                </div>
              </div>

              <ExternalLink className={`w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 flex-shrink-0 ml-2 transition-all duration-300 transform ${hoveredId === org.hash ? 'translate-x-1 -translate-y-1' : ''}`} />
            </div>

            {/* Hover Indicator */}
            <div className="right-0 bottom-0 left-0 absolute bg-gradient-to-r from-transparent via-slate-300 dark:via-white/30 to-transparent h-1 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 transform" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default OrganizationShowcase;
