import React from 'react';
import './Branding.css';

function Branding() {
  return (
    <div className="branding">
      <div className="branding-banner">
        <h2>Maryland LCV Branding and Style Guide</h2>
        <p>
          Below you'll find an overview of our branding guidelines, including logo usage, colors, and typeface.
          For complete details, refer to the full Branding Guide.
        </p>
        <a 
          href="https://docs.google.com/document/d/1fG29fDpldCufRyZgcq42F7qatiOezIdcGNr_eGU1Psk/"
          target="_blank"
          rel="noopener noreferrer"
          className="branding-button"
        >
          View Full Branding Guide ↗
        </a>
      </div>
      
      <div className="branding-sections">
        <div className="branding-section">
          <div className="branding-section-header">
            <h3>Logo Usage and Style</h3>
          </div>
          <div className="branding-section-content">
            <h4>Primary Logo Color</h4>
            <p>HEX: <span className="color-code">#81D4AF</span></p>
            <div className="color-circle" style={{ backgroundColor: '#81D4AF' }}></div>
            
            <h4>Secondary Logo Color</h4>
            <p>HEX: <span className="color-code">#004F70</span></p>
            <div className="color-circle" style={{ backgroundColor: '#004F70' }}></div>
            
            <h4>Tertiary Logo Colors</h4>
            <div className="tertiary-colors">
              <div>
                <p>HEX: <span className="color-code">#93D1E3</span></p>
                <div className="color-circle" style={{ backgroundColor: '#93D1E3' }}></div>
              </div>
              <div>
                <p>HEX: <span className="color-code">#665898</span></p>
                <div className="color-circle" style={{ backgroundColor: '#665898' }}></div>
              </div>
              <div>
                <p>HEX: <span className="color-code">#E17262</span></p>
                <div className="color-circle" style={{ backgroundColor: '#E17262' }}></div>
              </div>
              <div>
                <p>HEX: <span className="color-code">#F5C04F</span></p>
                <div className="color-circle" style={{ backgroundColor: '#F5C04F' }}></div>
              </div>
            </div>
            <p>Use the appropriate logo colors based on context and background.</p>
          </div>
        </div>
        
        <div className="branding-section">
          <div className="branding-section-header">
            <h3>Font and Typeface Style</h3>
          </div>
          <div className="branding-section-content">
            <p>Maryland LCV uses two primary typefaces for communications:</p>
            <ul>
              <li><strong>Lato</strong> (Sans Serif) – for headings and body text.</li>
              <li><strong>Lora</strong> (Serif) – for formal communications.</li>
            </ul>
            <p>Use variations like bold or italic to add emphasis where needed.</p>
          </div>
        </div>
        
        <div className="branding-section">
          <div className="branding-section-header">
            <h3>Social Media Guidelines</h3>
          </div>
          <div className="branding-section-content">
            <p>Our social media tone should be approachable and engaging:</p>
            <ul>
              <li><strong>Facebook</strong>: Conversational.</li>
              <li><strong>Instagram</strong>: Playful and visually appealing.</li>
              <li><strong>LinkedIn</strong>: Professional and polished.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Branding;
