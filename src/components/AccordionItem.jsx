import React, { useState } from 'react';
import './AccordionItem.css';

function AccordionItem({ title, children }) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="accordion-item">
      <div 
        className={`accordion-header ${expanded ? 'expanded' : ''}`} 
        onClick={() => setExpanded(!expanded)}
      >
        <span className="toggle-icon">{expanded ? '▾' : '▸'}</span>
        <h3>{title}</h3>
      </div>
      {expanded && <div className="accordion-content">{children}</div>}
    </div>
  );
}

export default AccordionItem;
