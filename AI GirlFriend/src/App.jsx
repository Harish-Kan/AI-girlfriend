import { useEffect, useState } from "react";

const PETALS = [
  { left: "5%",  delay: "0s",   dur: "6s",  size: 18, rotate: 20 },
  { left: "12%", delay: "0.8s", dur: "7s",  size: 14, rotate: -15 },
  { left: "22%", delay: "1.5s", dur: "5.5s",size: 22, rotate: 35 },
  { left: "33%", delay: "0.3s", dur: "8s",  size: 16, rotate: -30 },
  { left: "44%", delay: "2s",   dur: "6.5s",size: 20, rotate: 10 },
  { left: "55%", delay: "0.6s", dur: "7.5s",size: 12, rotate: -20 },
  { left: "63%", delay: "1.2s", dur: "5s",  size: 24, rotate: 45 },
  { left: "72%", delay: "2.5s", dur: "6s",  size: 15, rotate: -10 },
  { left: "82%", delay: "0.9s", dur: "7s",  size: 19, rotate: 25 },
  { left: "91%", delay: "1.8s", dur: "5.5s",size: 13, rotate: -40 },
  { left: "18%", delay: "3s",   dur: "8s",  size: 17, rotate: 15 },
  { left: "48%", delay: "3.5s", dur: "6s",  size: 21, rotate: -25 },
  { left: "77%", delay: "2.8s", dur: "7s",  size: 16, rotate: 30 },
];

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const charStyle = {
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(30px)",
    transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
  };

  const textStyle = {
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Irish+Grover&family=Italiana&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        html, body, #root {
          width: 100%;
          height: 100%;
        }

        body { background: #fff; overflow: hidden; }

        @keyframes fall {
          0%   { top: -50px; opacity: 0; transform: rotate(0deg) translateX(0px); }
          10%  { opacity: 1; }
          90%  { opacity: 0.8; }
          100% { top: 110vh; opacity: 0; transform: rotate(360deg) translateX(40px); }
        }

        @keyframes sway {
          0%   { margin-left: 0px; }
          50%  { margin-left: 30px; }
          100% { margin-left: 0px; }
        }

        .petal {
          position: absolute;
          top: -50px;
          z-index: 10;
          animation: fall linear infinite, sway ease-in-out infinite;
          pointer-events: none;
        }

        .flower-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 120px;
          z-index: 5;
          pointer-events: none;
        }

        .left-bar {
          width: 14px;
          height: 100vh;
          background: #1a1a1a;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 3;
        }

        .sakura-container {
          width: 100vw;
          height: 100vh;
          background: #ffffff;
          display: flex;
          align-items: stretch;
          justify-content: flex-start;
          position: relative;
          overflow: hidden;
        }

        .character-wrap {
          flex: 0 0 45%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-left: 14px;
          z-index: 2;
          position: relative;
        }

        .character-wrap img {
          height: 100vh;
          width: auto;
          object-fit: contain;
          display: block;
        }

        .text-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px 40px 40px 20px;
          z-index: 2;
        }

        .sakura-title {
          font-family: 'Irish Grover', cursive;
          font-weight: 400;
          font-size: clamp(80px, 10vw, 160px);
          line-height: 1;
          color: #1a1a1a;
          letter-spacing: -2px;
          margin-bottom: 12px;
        }

        .sakura-subtitle {
          font-family: 'Italiana', serif;
          font-size: clamp(28px, 3.5vw, 55px);
          font-weight: 400;
          color: #444444;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .sakura-container {
            flex-direction: column;
            align-items: center;
            height: auto;
            min-height: 100vh;
          }
          .character-wrap {
            flex: none;
            width: 100%;
            padding-left: 0;
          }
          .character-wrap img {
            height: 55vh;
          }
          .text-content {
            padding: 20px;
          }
        }
      `}</style>

      <div className="sakura-container">
        <div className="left-bar" />

        {/* Flower border at top */}
        <svg className="flower-bar" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,80 Q180,30 360,70 Q540,110 720,60 Q900,10 1080,65 Q1260,110 1440,55" stroke="#d4a0b0" strokeWidth="2.5" fill="none" opacity="0.5"/>
          {[60,160,280,400,520,640,760,880,1000,1120,1240,1370].map((x, i) => (
            <g key={i} transform={`translate(${x}, ${30 + (i % 3) * 18})`}>
              {[0,72,144,216,288].map((angle, j) => (
                <ellipse key={j}
                  cx={Math.cos((angle * Math.PI) / 180) * 8}
                  cy={Math.sin((angle * Math.PI) / 180) * 8}
                  rx="7" ry="5"
                  fill={i % 2 === 0 ? "#f9c6d0" : "#f7b8c8"}
                  opacity="0.85"
                  transform={`rotate(${angle}, ${Math.cos((angle * Math.PI) / 180) * 8}, ${Math.sin((angle * Math.PI) / 180) * 8})`}
                />
              ))}
              <circle cx="0" cy="0" r="4" fill="#f9e4b7" />
              <ellipse cx="14" cy="-6" rx="6" ry="3" fill="#b8dbb0" opacity="0.7" transform="rotate(-30,14,-6)"/>
            </g>
          ))}
          {[110,230,480,700,820,960,1100,1300].map((x, i) => (
            <g key={i} transform={`translate(${x}, ${58 + (i % 2) * 15})`}>
              {[0,72,144,216,288].map((angle, j) => (
                <ellipse key={j}
                  cx={Math.cos((angle * Math.PI) / 180) * 5}
                  cy={Math.sin((angle * Math.PI) / 180) * 5}
                  rx="4.5" ry="3"
                  fill="#fde0ea"
                  opacity="0.7"
                  transform={`rotate(${angle}, ${Math.cos((angle * Math.PI) / 180) * 5}, ${Math.sin((angle * Math.PI) / 180) * 5})`}
                />
              ))}
              <circle cx="0" cy="0" r="2.5" fill="#fef0c0" />
            </g>
          ))}
        </svg>

        {/* Falling petals */}
        {PETALS.map((p, i) => (
          <svg key={i} className="petal"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: `${p.dur}, ${parseFloat(p.dur) * 1.3}s`,
              animationDelay: `${p.delay}, ${p.delay}`,
            }}
            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="10" cy="10" rx="9" ry="6" fill="#f9c6d0" opacity="0.85" transform={`rotate(${p.rotate}, 10, 10)`}/>
          </svg>
        ))}

        <div className="character-wrap" style={charStyle}>
          <img src="/ChatGpt GirlFriend.png" alt="Sakura character" />
        </div>

        <div className="text-content" style={textStyle}>
          <h1 className="sakura-title">Sakura</h1>
          <p className="sakura-subtitle">Your personal ai girl</p>
        </div>
      </div>
    </>
  );
}