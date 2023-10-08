import React from "react";

export default function Now() {
  return (
    <div className="now">
      <div className="main">
        <div className="placeholder weatherIcon"></div>
        <div>
          <h2>26&deg;</h2>
          <span>clear skies, possible cyclone</span>
        </div>
        <div>
          <div className="range">
            <div className="hilo min">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="minIcon"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <span>Min</span>
                <h3>23&deg;</h3>
              </div>
            </div>
            <div className="hilo max">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="maxIcon"
              >
                <path
                  fillRule="evenodd"
                  d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <span>Max</span>
                <h3>28&deg;</h3>
              </div>
            </div>
          </div>
          <div className="feeling">Feels like 25&deg;</div>
        </div>
      </div>
    </div>
  );
}
