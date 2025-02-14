import React from 'react';
import './Branding.css';

function Branding() {
  return (
    <div className="branding">
      {/* Banner */}
      <div className="branding-banner">
        <h2>Maryland LCV Branding and Style Guide</h2>
        <p>
          Get a quick overview of our core brand elements including colors, logo usage, vision, mission, fonts, and tone.
          For full details, please refer to our complete Branding Guide.
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

      {/* Colors & Logo Usage */}
      <div className="branding-section">
        <div className="branding-section-header">
          <h3>Colors &amp; Logo Usage</h3>
        </div>
        <div className="branding-section-content">
          <h4>Primary Color</h4>
          <p>Digital: HEX <span className="color-code">#81D4AF</span></p>
          <div className="color-circle" style={{ backgroundColor: '#81D4AF' }}></div>

          <h4>Secondary Color</h4>
          <p>Digital: HEX <span className="color-code">#004F70</span></p>
          <div className="color-circle" style={{ backgroundColor: '#004F70' }}></div>

          <h4>Tertiary Colors</h4>
          <div className="tertiary-colors">
            <div>
              <p>HEX <span className="color-code">#93D1E3</span></p>
              <div className="color-circle" style={{ backgroundColor: '#93D1E3' }}></div>
            </div>
            <div>
              <p>HEX <span className="color-code">#665898</span></p>
              <div className="color-circle" style={{ backgroundColor: '#665898' }}></div>
            </div>
            <div>
              <p>HEX <span className="color-code">#E17262</span></p>
              <div className="color-circle" style={{ backgroundColor: '#E17262' }}></div>
            </div>
            <div>
              <p>HEX <span className="color-code">#F5C04F</span></p>
              <div className="color-circle" style={{ backgroundColor: '#F5C04F' }}></div>
            </div>
          </div>

          <h4>Logo Usage Guidelines</h4>
          <ul>
            <li>Always use the correct logo colors and proportions.</li>
            <li>Do <strong>not</strong> alter the aspect ratio or modify the logo colors.</li>
            <li>Do <strong>not</strong> change any logo text.</li>
            <li>Use the Primary logo whenever possible and the Secondary or Tertiary logos when needed for contrast.</li>
          </ul>
        </div>
      </div>

      {/* Brand Overview */}
      <div className="branding-section">
        <div className="branding-section-header">
          <h3>Brand Overview</h3>
        </div>
        <div className="branding-section-content">
          <p><strong>Vision:</strong> A healthy environment for everyone in Maryland.</p>
          <p>
            <strong>Mission:</strong> Educate and activate people to take equitable and just political actions for clean water, healthy air and climate‑resilient communities.
          </p>
          <h4>Core Values</h4>
          <ul>
            <li>Urgency in addressing climate change</li>
            <li>Commitment to environmental justice and equity</li>
            <li>Building long-term, respectful relationships</li>
            <li>Nonpartisan, evidence-based advocacy</li>
          </ul>
        </div>
      </div>

      {/* Font and Typeface */}
      <div className="branding-section">
        <div className="branding-section-header">
          <h3>Font and Typeface</h3>
        </div>
        <div className="branding-section-content">
          <p>Maryland LCV uses two primary typeface families for all communications:</p>
          <ul>
            <li><strong>Lato</strong> (Sans Serif) – ideal for headings and body text.</li>
            <li><strong>Lora</strong> (Serif) – used for formal or traditional communications.</li>
          </ul>
          <p>Use bold or italic variations to emphasize key points while maintaining consistency.</p>
        </div>
      </div>

      {/* Brand Personality & Tone */}
      <div className="branding-section">
        <div className="branding-section-header">
          <h3>Brand Personality &amp; Tone</h3>
        </div>
        <div className="branding-section-content">
          <p>
            Maryland LCV is professional yet approachable, passionate yet evidence‑based. Our tone adapts to our audience:
          </p>
          <ul>
            <li><strong>General:</strong> Clear, engaging, and inclusive.</li>
            <li><strong>Members:</strong> Empowering and inspiring.</li>
            <li><strong>Legislators:</strong> Respectful, data‑driven, and persuasive.</li>
            <li><strong>Voters:</strong> Approachable and community‑focused.</li>
          </ul>
        </div>
      </div>

      {/* Protecting the Brand */}
      <div className="branding-section">
        <div className="branding-section-header">
          <h3>Protecting the Brand</h3>
        </div>
        <div className="branding-section-content">
          <p>
            Consistency in using our brand elements is key. Any inquiries regarding proper usage should be directed to our Executive Director or Director of Strategic Communications.
          </p>
        </div>
      </div>

      {/* Social Media Guidelines */}
      <div className="branding-section">
        <div className="branding-section-header">
          <h3>Social Media Guidelines</h3>
        </div>
        <div className="branding-section-content">
          <ul>
            <li><strong>Facebook:</strong> Conversational and community‑oriented.</li>
            <li><strong>Instagram:</strong> Playful, visually engaging, and creative.</li>
            <li><strong>LinkedIn:</strong> Professional, factual, and polished.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Branding;
