import './Experience.css';

export const Experience = () => {
    return (
      <div className="experience-container"> 
        <div className="jacques-francois-shadow-regular header-title"> technical experience </div>

        <div className="vertical-text-body">
          {/* Microsoft section */}
          <div className="text-and-pic">
          <div className="job">
            <img className="microsoft" src="microsoft.svg" alt="microsoft" />
            <div className="title-and-date">
                <div className="halant-bold">
                  Incoming Software Engineer Intern
                </div>
                <div className="jacques-francois-shadow-regular all-the-way-right">
                  May 2025 - August 2025
                </div>
            </div>
            <div className="halant-regular scooch-right">
              Description arriving in the summer of 2025...
            </div>
            </div>

            <div className="fake-pic-box">
            </div>
        </div>

        {/* 84.51º section */}
        <div className="text-and-pic">
          <div className="job">
          <img className="eighty-four-fifty-one" src="84.51.svg" alt="84.51" />
            <div className="title-and-date">
              <div className="halant-bold">
                Software Engineer Intern
              </div>
              <div className="jacques-francois-shadow-regular all-the-way-right">
                May 2024 - August 2024
              </div>
            </div>
            <div className="halant-regular scooch-right">
              <li>Developed a backend multi-sub account access solution using Spring Boot WebFilters, supplying brokers and internal users with the ability to view assets from multiple sub-accounts using the same API credentials</li>
              <li>Updated the client profile interface to display accounts clients want to act on behalf by utilizing Svelte and integrating an API endpoint to retrieve the account UUID’s clients have access to</li>
            </div>
            </div>

            <div className="job-pic-box">
                <img className="cubs-image" src="cubs.jpg" alt="Cubs Game" />
                <div className="job-pic-caption">
                  <div className="halant-bold"> 84.51° Cubs game with some intern friends!</div>
                </div>
            </div>
          </div>

        {/* Morningstar section */}
        <div className="text-and-pic">
          <div className="job">
          <img className="morningstar" src="morningstar.svg" alt="Morningstar" />
            <div className="title-and-date">
              <div className="halant-bold">
                Software Engineer Intern
              </div>
              <div className="jacques-francois-shadow-regular all-the-way-right">
                May 2023 - August 2023
              </div>
            </div>
            <div className="halant-regular scooch-right">
              <li>Crafted a user interface for a direct feed manager with Vue.js through feed tables and scheduler flyovers, in order to create a clean, professional experience for interacting users</li>
              <li>Implemented SonarQube for the repo by creating a Jenkins multi-branch pipeline permitting communication with Bitbucket pull requests during builds, granting vulnerability and code smell detection</li>
            </div>
            </div>

            <div className="job-pic-box">
                <img className="crew-image" src="morningstar-crew.jpg" alt="Morningstar Crew" />
                <div className="job-pic-caption">
                  <div className="halant-bold"> Favorite people at Morningstar!</div>
                </div>
            </div>
          </div>

          {/* Department of CS section */}
        <div className="text-and-pic">
          <div className="job">
          <img className="uic" src="uic-department-of-cs.svg" alt="UIC Department of CS" />
            <div className="title-and-date">
              <div className="halant-bold">
                Software Engineer Intern
              </div>
              <div className="jacques-francois-shadow-regular all-the-way-right">
                May 2023 - August 2023
              </div>
            </div>
            <div className="halant-regular scooch-right">
              <li>Leading weekly labs and helping students debug their bimonthly programs in VS Code and zyBooks</li>
              <li>Holding office hours explaining C/C++ concepts, including data structures, pointers, and recursion</li>
              <li>Proctoring exams and holding oral exams for around 500 students</li>
            </div>
            </div>

            <div className="job-pic-box">
                <img className="arduino-image" src="arduino.jpg" alt="Arduino" />
                <div className="job-pic-caption">
                  <div className="halant-bold"> Arduino LCD display shenanigans from fall 2023!</div>
                </div>
            </div>
          </div>


          </div>



    </div>
    );
  }