import { ChevronDown } from 'lucide-react';

export const LanguageSelector = () => {
  return (
    <>
      <style>{`
        .header-lang-selector {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          border-radius: 6px;
          transition: background-color 0.2s;
        }
        
        .lang-flag {
          width: 27px;
          border-radius: 2px;
          object-fit: cover;
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }

        .lang-text {
          font-size: 15px;
          font-weight: 600;
          color: #5a5b5c;
        }

        @media (max-width: 768px) {
          .lang-text {
            display: none;
          }
        }
      `}
      </style>

      <div className="header-lang-selector">
        <img 
          src="https://i.pinimg.com/1200x/df/ab/1b/dfab1babf88c4d1ebf72d3be72c36b86.jpg" 
          className="lang-flag" 
          alt="English" 
        />
        <span className="lang-text">English</span>
        <ChevronDown size={12} strokeWidth={3} />
      </div>
    </>
  );
};
