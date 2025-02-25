import React from 'react';

const KeyToolsSection = () => {
  const tools = [
    {
      name: 'ClickTime',
      icon: 'https://www.mdlcv.org/wp-content/uploads/2024/10/clicktime.jpg',
      url: 'https://login.clicktime.com',
      alt: 'ClickTime'
    },
    {
      name: 'GoTo Phone',
      icon: 'https://www.mdlcv.org/wp-content/uploads/2024/10/goto_connect.png',
      url: 'https://app.goto.com/domain/01eff197-029a-45a4-99c8-11518e3af551/user/83af9281-dcb1-4ede-bc39-d1a5078e2b79/call',
      alt: 'GoTo Phone'
    },
    {
      name: 'Engagifii',
      icon: 'https://www.mdlcv.org/wp-content/uploads/2024/10/engagifii_logo.jpg',
      url: 'https://engagifii-identity-live.azurewebsites.net/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dng.EngagifiiUI%26redirect_uri%3Dhttps%253A%252F%252Fmdlcv.engagifii.com%252Fauth-callback%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%2520email%2520UsersAPI%2520AccreditationAPI%2520BilltrackingApi%2520CommentApi%2520NotesApi%26state%3D52d79ebcae8e4c9ea562c745a38833bc%26nonce%3Dad7d0c839fb14f93ab482dfd717b1abd',
      alt: 'Engagifii'
    },
    {
      name: 'EveryAction',
      icon: 'https://www.mdlcv.org/wp-content/uploads/2024/10/everyaction_logo.jpg',
      url: 'https://lcv.everyaction.com/Default.aspx?HasCommittee=1',
      alt: 'EveryAction'
    },
    {
      name: 'Maryland LCV',
      icon: 'https://www.mdlcv.org/wp-content/uploads/2021/11/MDLCV_Logo1_S_GreenBlueS.png',
      url: 'https://www.mdlcv.org/',
      alt: 'Maryland LCV'
    },
    {
      name: 'Maryland LCV Education Fund',
      icon: 'https://www.marylandconservation.org/wp-content/uploads/2021/11/MDLCV-EdFund_Logo_S_BlueOrange_Reg-1.png',
      url: 'https://www.marylandconservation.org/',
      alt: 'Maryland LCV Education Fund'
    },
    {
      name: 'Staff Calendar',
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAq1BMVEVChfT////7vAQ0qFMZZ9IYgDgtfPPd5vzqQzX+8dr7uADb7d8ZokNZkOwLb+g7f+0AYdrWq1I6hNIUgCIvoE773t1tlE3pLBbpODfyOjMAZOb3pRUAa+epw/hDetegt+kAXdD09/7N2/hSi+uwxvVEj1agwacAeCZXkPXA0vrb2d3Wp0SQsPF2oO+ApvBjle0AW+VFhOvp7/wqfdK+2Nzi3r/5oABijkHwIBJS8X6cAAABcklEQVRIie3W2XKCMBSA4ZyWkm4cullrGkUgLrSgQtf3f7IGWYxeMCdML5xp/xsGh09iEhwYwHjJSPlO0yQAYLB0ac6AznQCbEx1JnSmASOO8wA6EzI7gM4/PGLodnZjtu8S3tHL663RPuTQ0cXlidGfhVGarVTYijDiNLgWiCiFql2EIiZBT6L0UaJIti7VX+NRYLLBXA9TSXT1WZFLJEKI4qI8ZCi0Fyg9lwjrVluoNgFQ71hPJaJfHvVHFjBKxi6KqD6zgH45I42zga7Qa5AX9jAMeapvag/LlJRBLwgS11Yw8vxquKK6ngxjKVW1ATC1glzvskypWO/ywu43Kr0UUs9p/XRYTA73hBBy3Swj5HlGnlXeql1H+Wf12/BkD94Zvb1fdfTx+WzE7s2uu/oaPbUNB+zM7OG0o8fRedNwAL2gdr1g6frAresBK2cPa2cNG2cLWwdsZgN3Dth8QYeG0y/zswUVfhtOQ5jPiNB08APtXDn4IeC56AAAAABJRU5ErkJggg==',
      url: '/events',
      alt: 'Staff Calendar',
      internal: true
    },
    {
      name: 'Google Drive',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/120px-Google_Drive_icon_%282020%29.svg.png',
      url: 'https://drive.google.com/drive/folders/0AHr86qQoVB_IUk9PVA',
      alt: 'Google Drive'
    }
  ];

  return (
    <section className="key-tools">
      <h2>Key Links and Tools</h2>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div className="tool-item" key={index}>
            <a 
              href={tool.url} 
              target={tool.internal ? "_self" : "_blank"} 
              rel={tool.internal ? "" : "noopener noreferrer"}
              className="tool-link"
            >
              <div className="tool-icon">
                <img src={tool.icon} alt={tool.alt} />
              </div>
              <p>{tool.name}</p>
            </a>
          </div>
        ))}
      </div>

      <style jsx>{`
        .key-tools {
          padding: 2rem;
          background-color: #f8f9fa;
          border-radius: 8px;
          margin: 2rem 0;
        }

        h2 {
          color: #2c5e2e;
          margin-bottom: 1.5rem;
          font-size: 1.75rem;
          text-align: center;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 1.5rem;
        }

        .tool-item {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .tool-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .tool-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.25rem;
          color: #333;
          text-decoration: none;
          height: 100%;
        }

        .tool-icon {
          width: 80px;
          height: 80px;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tool-icon img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        p {
          margin: 0;
          text-align: center;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .tools-grid {
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 1rem;
          }

          .tool-icon {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default KeyToolsSection;