import React, { useState } from 'react';

const Communications = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Current priority messages - editable by communications team
// Current priority messages - editable by communications team
const currentPriorities = [
  {
    id: 1,
    title: "Clean Energy is Maryland's Power Play",
    description: "Emphasize Maryland's path to reliable, affordable power through clean energy solutions that address grid reliability and ratepayer impacts.",
    keyPoints: [
      "Clean energy paired with storage lowers energy bills over time",
      "Maryland needs a statewide resource adequacy plan prioritizing non-carbon sources",
      "Expedite renewable energy projects in the PJM queue",
      "Support actions creating 1750 MW of energy storage with strong labor provisions"
    ]
  },
  {
    id: 2,
    title: "AACE Act",
    description: "The Abundant, Affordable Clean Energy Act provides a clear path to reliable, affordable clean power while protecting ratepayers.",
    keyPoints: [
      "Creates local clean energy jobs",
      "Reduces dependence on expensive out-of-state power",
      "Implements innovative profit-sharing with customers",
      "Ensures reliability while meeting climate goals"
    ]
  },
  {
    id: 3,
    title: "CHERISH Our Communities Act",
    description: "Reform Maryland's environmental protection system to address the combined effects of multiple pollution sources on community health.",
    keyPoints: [
      "Communities deserve protection from cumulative pollution impacts",
      "Ensures meaningful community engagement in permitting decisions",
      "Creates stronger conditions to reduce pollution in overburdened areas",
      "Follows successful models from NJ, NY, and MN"
    ]
  },
  {
    id: 4,
    title: "Nearshore Farm Finance Act",
    description: "Smart solutions that support both the Chesapeake Bay and our farming communities through targeted conservation practices.",
    keyPoints: [
      "Conservation in nearshore areas is 6x more effective for Bay health",
      "Provides fair compensation to both landowners and tenant farmers",
      "Strategically targets the most efficient areas for conservation",
      "Helps meet Maryland's nutrient reduction goals"
    ]
  },
  {
    id: 5,
    title: "Coal Clean Up and Asthma Mitigation Fund",
    description: "Address the health and environmental impacts of coal transport through dedicated funding for affected communities.",
    keyPoints: [
      "Provides $5 million annually for asthma treatment along transport routes",
      "Directs 40% of revenue to overburdened and underserved communities",
      "Creates sustainable funding for climate programs",
      "Follows Maryland's successful model of addressing pollution impacts"
    ]
  }
];

  // Strategy sections
  const strategySections = [
    {
      id: 'overview',
      title: 'Strategy Overview',
      content: (
        <div>
          <p>
            Maryland LCV's communications strategy serves as the linchpin in our efforts to educate, engage, and empower stakeholders - from grassroots advocates to policymakers. At its core, this strategy embodies our commitment to environmental stewardship.
          </p>
          <p>
            Through strategic communications, Maryland LCV will solidify its position as the "go-to" voice and resource in Maryland's environmental policy and climate change discourse. Our strategy is not just a roadmap but a declaration of our dedication to influencing policy, mobilizing public support, and amplifying the importance of legislative action for a sustainable future.
          </p>
        </div>
      )
    },
    {
      id: 'objectives',
      title: 'Core Objectives',
      content: (
        <div className="grid-layout">
          <div className="strategy-card">
            <h4>Amplify Environmental Advocacy</h4>
            <p>Elevate the discourse on environmental issues, focusing on implementing the Climate Pollution Reduction Act and the Climate Pollution Reducation Plan</p>
          </div>
          <div className="strategy-card">
            <h4>Influence Policy</h4>
            <p>Directly engage with legislators and policymakers to influence and support pro-environmental policies and legislation.</p>
          </div>
          <div className="strategy-card">
            <h4>Expand Audience</h4>
            <p>Reach diverse audiences, including Maryland voters, environmental advocates, and community members, to broaden our support base.</p>
          </div>
          <div className="strategy-card">
            <h4>Empower Grassroots</h4>
            <p>Utilize communications to support and empower grassroots activities, ensuring public participation in environmental advocacy.</p>
          </div>
          <div className="strategy-card">
            <h4>Strengthen Brand</h4>
            <p>Position Maryland LCV as the leading authority and go-to resource for environmental policy and advocacy in Maryland.</p>
          </div>
          <div className="strategy-card">
            <h4>Enhance Digital Presence</h4>
            <p>Expand and enhance digital communication channels to reach a wider audience and foster deeper engagement.</p>
          </div>
        </div>
      )
    },
    {
      id: 'audiences',
      title: 'Target Audiences',
      content: (
        <div className="audience-section">
          <div className="audience-card">
            <h4>Legislators</h4>
            <p><strong>Strategy:</strong> Customize messaging for individual legislators, focusing on their interests and constituencies.</p>
            <ul>
              <li>Provide concise, data-driven policy briefs (HOT LIST)</li>
              <li>Organize direct engagement opportunities</li>
              <li>Mobilize constituent advocacy campaigns</li>
            </ul>
          </div>
          
          <div className="audience-card">
            <h4>General Public</h4>
            <p><strong>Strategy:</strong> Launch educational campaigns about environmental issues and importance of policy change.</p>
            <ul>
              <li>Community events and workshops</li>
              <li>Digital outreach with interactive content</li>
              <li>Collaborate with local organizations</li>
            </ul>
          </div>
          
          <div className="audience-card">
            <h4>Members</h4>
            <p><strong>Strategy:</strong> Provide exclusive content and engagement opportunities.</p>
            <ul>
              <li>Member-exclusive updates and insights</li>
              <li>Targeted recruitment campaigns</li>
              <li>Member-centric programs and events</li>
            </ul>
          </div>
          
          <div className="audience-card">
            <h4>Media & Officials</h4>
            <p><strong>Strategy:</strong> Maintain proactive media relations program.</p>
            <ul>
              <li>Regular press releases and media kits</li>
              <li>Strong relationships with journalists</li>
              <li>Press conferences and media briefings</li>
            </ul>
          </div>
          
          <div className="audience-card">
            <h4>Broader Community</h4>
            <p><strong>Strategy:</strong> Develop strategic partnerships with like-minded organizations.</p>
            <ul>
              <li>Joint campaigns and events</li>
              <li>Resource sharing</li>
              <li>Networking and information exchange</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'tactics',
      title: 'Key Tactics & Activities',
      content: (
        <div>
          <div className="tactics-section">
            <h4>Legislative Communications</h4>
            <div className="tactics-grid">
              <div className="tactic-item">
                <span className="tactic-name">Hot List</span>
                <span className="tactic-desc">Weekly detailed summary for legislators on environmental legislation</span>
              </div>
              <div className="tactic-item">
                <span className="tactic-name">Conservation Weekly</span>
                <span className="tactic-desc">Simplified version of Hot List for members and public</span>
              </div>
              <div className="tactic-item">
                <span className="tactic-name">Legislator Meetings</span>
                <span className="tactic-desc">Direct engagement with key decision-makers</span>
              </div>
              <div className="tactic-item">
                <span className="tactic-name">Action Alerts</span>
                <span className="tactic-desc">Timely calls to action on critical legislation</span>
              </div>
            </div>
          </div>
          
          <div className="tactics-section">
            <h4>Public & Member Engagement</h4>
            <div className="tactics-grid">
              <div className="tactic-item">
                <span className="tactic-name">Friday Digests</span>
                <span className="tactic-desc">Weekly webinars during legislative session</span>
              </div>
              <div className="tactic-item">
                <span className="tactic-name">Changemakers Event</span>
                <span className="tactic-desc">Annual celebration of environmental leaders</span>
              </div>
              <div className="tactic-item">
                <span className="tactic-name">Community Events</span>
                <span className="tactic-desc">Workshops, forums, and local engagement</span>
              </div>
              <div className="tactic-item">
                <span className="tactic-name">Environmental Scorecard</span>
                <span className="tactic-desc">Comprehensive record of legislators' environmental votes</span>
              </div>
            </div>
          </div>
          
          <div className="tactics-section">
            <h4>Digital Engagement</h4>
            <div className="tactics-grid">
              <div className="tactic-item">
                <span className="tactic-name">Social Media Campaigns</span>
                <span className="tactic-desc">Targeted content across multiple platforms</span>
              </div>
              <div className="tactic-item">
                <span className="tactic-name">Website Resources</span>
                <span className="tactic-desc">Comprehensive online information hub</span>
              </div>
              <div className="tactic-item">
                <span className="tactic-name">Email Marketing</span>
                <span className="tactic-desc">Regular updates to members and supporters</span>
              </div>
              <div className="tactic-item">
                <span className="tactic-name">Multimedia Content</span>
                <span className="tactic-desc">Videos, infographics, and interactive elements</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'chispa',
      title: 'Chispa Maryland',
      content: (
        <div>
          <p>
            Chispa Maryland empowers Latino families and community leaders in environmental advocacy. Through grassroots organizing, civic engagement, and strategic campaigns, Chispa ensures Latino voices are heard in environmental decision-making.
          </p>
          
          <div className="chispa-strategies">
            <div className="chispa-strategy">
              <h4>Community Engagement</h4>
              <ul>
                <li>Culturally relevant workshops and training</li>
                <li>Educational materials in Spanish and English</li>
                <li>School partnerships and programs</li>
                <li>Community meetings on environmental issues</li>
              </ul>
            </div>
            
            <div className="chispa-strategy">
              <h4>Grassroots Organizing</h4>
              <ul>
                <li>Volunteer recruitment within Latino communities</li>
                <li>Leadership development through Promotores</li>
                <li>Door-to-door canvassing and outreach</li>
                <li>Targeted issue campaigns (clean air, electric school buses)</li>
              </ul>
            </div>
            
            <div className="chispa-strategy">
              <h4>Civic Engagement</h4>
              <ul>
                <li>Voter registration drives</li>
                <li>Candidate forums and town halls</li>
                <li>Advocacy days at the state capitol</li>
                <li>Get-Out-The-Vote campaigns</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'metrics',
      title: 'Evaluation & Metrics',
      content: (
        <div>
          <p>Effective evaluation ensures our communications strategies are achieving desired outcomes and identifies areas for continuous improvement.</p>
          
          <div className="metrics-grid">
            <div className="metric-category">
              <h4>Legislative Engagement</h4>
              <ul>
                <li>Number of legislative meetings</li>
                <li>Percentage of targeted legislators reached</li>
                <li>Policy briefs distributed</li>
                <li>Legislative actions taken from advocacy</li>
              </ul>
            </div>
            
            <div className="metric-category">
              <h4>Public Engagement</h4>
              <ul>
                <li>Event attendance</li>
                <li>Educational materials distributed</li>
                <li>Social media engagement metrics</li>
                <li>Website traffic statistics</li>
              </ul>
            </div>
            
            <div className="metric-category">
              <h4>Member Engagement</h4>
              <ul>
                <li>New member recruitment</li>
                <li>Membership renewal rates</li>
                <li>Member event attendance</li>
                <li>Member satisfaction scores</li>
              </ul>
            </div>
            
            <div className="metric-category">
              <h4>Media Relations</h4>
              <ul>
                <li>Press releases distributed</li>
                <li>Media coverage and mentions</li>
                <li>Relationships with media contacts</li>
                <li>Official engagement metrics</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'crisis',
      title: 'Crisis Communications',
      content: (
        <div>
          <p>A clear protocol for managing communications during crises ensures we respond swiftly and effectively to situations that could impact our reputation or operations.</p>
          
          <div className="crisis-protocol">
            <h4>Crisis Response Steps</h4>
            <ol>
              <li><strong>Immediate Assessment</strong> - Quickly gather all relevant information to understand the nature and scope of the crisis.</li>
              <li><strong>Team Activation</strong> - Convene the crisis communication team to develop a response strategy.</li>
              <li><strong>Internal Communication</strong> - Provide clear and timely information to all staff members.</li>
              <li><strong>External Response</strong> - Issue initial public statement, engage with media, and update stakeholders.</li>
              <li><strong>Ongoing Management</strong> - Monitor the situation, provide support, and adjust response as needed.</li>
              <li><strong>Post-Crisis Follow-up</strong> - Debrief staff, issue follow-up statement, and document lessons learned.</li>
            </ol>
            
            <div className="crisis-note">
              <strong>Important Note:</strong> Every crisis deserves its own unique communications plan. Use these guidelines as a starting point, but tailor your approach to each specific situation.
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="communications-container">
      {/* Current priorities section - top 1/4 of page */}
      <section className="current-priorities-section">
        <h2>Current Priority Communications Messaging</h2>
        <p className="priorities-subheading">Key messages to emphasize in all communications from {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        
        <div className="priorities-container">
          {currentPriorities.map(priority => (
            <div className="priority-card" key={priority.id}>
              <h3>{priority.title}</h3>
              <p>{priority.description}</p>
              <ul className="key-points">
                {priority.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      
      {/* Communications strategy section - remaining 3/4 */}
      <section className="strategy-section">
        <h2>Communications Strategy</h2>
        
        <div className="strategy-nav">
          {strategySections.map(section => (
            <button 
              key={section.id}
              className={activeTab === section.id ? 'active' : ''} 
              onClick={() => setActiveTab(section.id)}
            >
              {section.title}
            </button>
          ))}
        </div>
        
        <div className="strategy-content">
          {strategySections.find(section => section.id === activeTab).content}
        </div>
      </section>
      
      <style jsx>{`
        .communications-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 2rem;
          color: #333;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        /* Current Priorities Section - Top 1/4 */
        .current-priorities-section {
          background: linear-gradient(135deg, #2c5e2e, #1b5e20);
          color: white;
          padding: 2rem;
          border-radius: 12px;
          margin-bottom: 2rem;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
        
        .current-priorities-section h2 {
          margin-top: 0;
          font-size: 1.8rem;
        }
        
        .priorities-subheading {
          margin-top: -0.5rem;
          font-size: 1rem;
          opacity: 0.9;
        }
        
.priorities-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.25rem;
  margin-top: 1.5rem;
}
        
        .priority-card {
          background-color: rgba(255, 255, 255, 0.15);
          padding: 1.5rem;
          border-radius: 8px;
          backdrop-filter: blur(10px);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .priority-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        
        .priority-card h3 {
          margin-top: 0;
          font-size: 1.3rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.3);
          padding-bottom: 0.5rem;
        }
        
        .key-points {
          padding-left: 1.5rem;
          margin-bottom: 0;
        }
        
        .key-points li {
          margin-bottom: 0.5rem;
        }
        
        /* Strategy Section - Remaining 3/4 */
        .strategy-section {
          background-color: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
        }
        
        .strategy-section h2 {
          margin-top: 0;
          font-size: 1.8rem;
          color: #2c5e2e;
        }
        
        .strategy-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid #eee;
          padding-bottom: 1rem;
        }
        
        .strategy-nav button {
          background: none;
          border: none;
          padding: 0.75rem 1.25rem;
          font-size: 1rem;
          font-weight: 500;
          color: #555;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .strategy-nav button:hover {
          background-color: #f5f5f5;
          color: #2c5e2e;
        }
        
        .strategy-nav button.active {
          background-color: #2c5e2e;
          color: white;
        }
        
        .strategy-content {
          padding: 1rem;
          line-height: 1.6;
        }
        
        /* Grid layouts */
        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 1rem;
        }
        
        .strategy-card {
          background-color: #f9f9f9;
          padding: 1.5rem;
          border-radius: 8px;
          border-left: 4px solid #2c5e2e;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        }
        
        .strategy-card h4 {
          margin-top: 0;
          color: #2c5e2e;
        }
        
        /* Audience section */
        .audience-section {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        
        .audience-card {
          background-color: #f9f9f9;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        }
        
        .audience-card h4 {
          margin-top: 0;
          color: #2c5e2e;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #e0e0e0;
        }
        
        .audience-card ul {
          padding-left: 1.5rem;
        }
        
        /* Tactics section */
        .tactics-section {
          margin-bottom: 2rem;
        }
        
        .tactics-section h4 {
          color: #2c5e2e;
          border-bottom: 1px solid #e0e0e0;
          padding-bottom: 0.5rem;
        }
        
        .tactics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1rem;
        }
        
        .tactic-item {
          background-color: #f5f5f5;
          padding: 1rem;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
        }
        
        .tactic-name {
          font-weight: 600;
          color: #2c5e2e;
          margin-bottom: 0.5rem;
        }
        
        /* Chispa section */
        .chispa-strategies {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        
        .chispa-strategy {
          background-color: #f9f9f9;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        }
        
        .chispa-strategy h4 {
          margin-top: 0;
          color: #2c5e2e;
        }
        
        /* Metrics section */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        
        .metric-category {
          background-color: #f9f9f9;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        }
        
        .metric-category h4 {
          margin-top: 0;
          color: #2c5e2e;
          border-bottom: 2px solid #e0e0e0;
          padding-bottom: 0.5rem;
        }
        
        /* Crisis communications */
        .crisis-protocol {
          background-color: #f9f9f9;
          padding: 1.5rem;
          border-radius: 8px;
          margin-top: 1.5rem;
        }
        
        .crisis-protocol h4 {
          color: #2c5e2e;
          margin-top: 0;
        }
        
        .crisis-protocol ol {
          padding-left: 1.5rem;
        }
        
        .crisis-protocol li {
          margin-bottom: 0.75rem;
        }
        
        .crisis-note {
          background-color: #fffde7;
          padding: 1rem;
          border-left: 4px solid #fbc02d;
          margin-top: 1.5rem;
          border-radius: 4px;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .communications-container {
            padding: 1rem;
          }
          
          .priorities-container,
          .grid-layout,
          .audience-section,
          .tactics-grid,
          .chispa-strategies,
          .metrics-grid {
            grid-template-columns: 1fr;
          }
          
          .strategy-nav {
            overflow-x: auto;
            padding-bottom: 0.5rem;
            margin-bottom: 1.5rem;
          }
          
          .strategy-nav button {
            white-space: nowrap;
            padding: 0.5rem 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Communications;