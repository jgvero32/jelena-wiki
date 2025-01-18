import './Interests.css';

export const Interests = () => {
    return (
      <div className="experience-container"> 
        <div className="jacques-francois-shadow-regular header-title"> interests </div>

        <div className="vertical-text-body">
        {/* WiCS section */}
        <div className="text-and-pic">
          <div className="job">
          <img className="wics-logo" src="WiCS_logo.png" alt="WiCS Logo" />
            <div className="title-and-date">
              <div className="halant-bold">
                President
              </div>
              <div className="jacques-francois-shadow-regular all-the-way-right">
                2023 - Present
              </div>
            </div>
            <div className="halant-regular scooch-right">
              <li>Was mentored...then became a mentor, met a ton of sweet, smart people with cool perspectives on computer science and life!</li>
              <li>Love sharing everything I’ve learned and encouraging people to succeed by paving a new path for themselves in their own way.</li>
            </div>
            </div>

            <div className="job-pic-box">
                <img className="board-image" src="wics-board.JPEG" alt="WiCS Board" />
                <div className="job-pic-caption">
                  <div className="halant-bold"> WiCS 2024 Exec Board Secret Santa (taken on my digital:))</div>
                </div>
            </div>
          </div>

        {/* SparkHacks section */}
        <div className="text-and-pic">
          <div className="job">
            <div className="horizontal-images">
              <img className="sparkhacks" src="sparkhacks-logo.svg" alt="SparkHacks 2025" />
              <img className="sparkhacks2024-logo" src="sparkhacks2024-logo.png" alt="SparkHacks 2024" />
              <img className="sparkhacks2023-logo" src="sparkhacks2023-logo.png" alt="SparkHacks 2023" />
            </div>
            <div className="title-and-date">
              <div className="halant-bold">
                Director
              </div>
              <div className="jacques-francois-shadow-regular all-the-way-right">
                2023 - Present
              </div>
            </div>
            <div className="halant-regular scooch-right">
              <li>Bringing cool companies to UIC to push our students to become more technical</li>
              <li>Raised 37k for SparkHacks 2025, worked with 5+ companies, and met a ton of cool people:)</li>
            </div>
            </div>

            <div className="job-pic-box">
                <img className="team-image" src="sparkhacks-team-2024.png" alt="SparkHacks Team" />
                <div className="job-pic-caption">
                  <div className="halant-bold"> SparkHacks 2024 Team!</div>
                </div>
            </div>
          </div>


          </div>



    </div>
    );
  }