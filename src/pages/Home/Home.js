import './Home.css';

export const Home = () => {
  return (
    <div className="container">
            {/* <svg width="700" height="113" viewBox="0 0 973 113" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M926.819 56.4245L969.921 111.5H1.5V1.5H969.853L926.835 54.5553L926.082 55.4835L926.819 56.4245Z" fill="white" stroke="#53A2BE" stroke-width="3"/>
            </svg> */}
            <div className="jacques-francois-shadow-regular header-title"> welcome, internet travelor. </div>
            <div className="horizontal-text-body">
              <div className="letter-h-and-text">
                <div className="letter-h">
                  <svg width="54" height="71" viewBox="0 0 54 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2.5" y="11.5" width="49" height="49" stroke="#53A2BE"/>
                  <rect x="49.5" y="58.5" width="4" height="4" fill="white" stroke="#53A2BE"/>
                  <rect x="0.5" y="58.5" width="4" height="4" fill="white" stroke="#53A2BE"/>
                  <rect x="0.5" y="9.5" width="4" height="4" fill="white" stroke="#53A2BE"/>
                  <rect x="49.5" y="9.5" width="4" height="4" fill="white" stroke="#53A2BE"/>
                  <path d="M40.1 26.05V49.4C40.8667 49.7333 42.0333 49.9 43.6 49.9C43.6333 50.1 43.65 50.4333 43.65 50.9C43.65 51.3667 43.5667 51.9833 43.4 52.75H28.65C28.65 52.4833 28.65 52.1 28.65 51.6C28.65 51.0667 28.7333 50.5 28.9 49.9C29.9667 49.7333 30.75 49.45 31.25 49.05C31.7833 48.6167 32.05 47.9 32.05 46.9V38.55H20.5V49.4C21.2667 49.7333 22.4333 49.9 24 49.9C24.0333 50.1 24.05 50.4333 24.05 50.9C24.05 51.3667 23.9667 51.9833 23.8 52.75H9.05C9.05 52.5167 9.05 52.1333 9.05 51.6C9.05 51.0667 9.15 50.5 9.35 49.9C10.3833 49.7333 11.1667 49.45 11.7 49.05C12.2333 48.6167 12.5 47.9 12.5 46.9V23.6C11.6667 23.2333 10.4833 23.05 8.95 23.05C8.95 22.85 8.95 22.5167 8.95 22.05C8.95 21.55 9.03333 20.95 9.2 20.25H23.9C23.9 20.5167 23.9 20.9167 23.9 21.45C23.9 21.95 23.8167 22.4833 23.65 23.05C22.6167 23.2167 21.8333 23.5167 21.3 23.95C20.7667 24.35 20.5 25.05 20.5 26.05V34.7H32.05V23.6C31.2167 23.2333 30.05 23.05 28.55 23.05C28.55 22.8167 28.55 22.4833 28.55 22.05C28.55 21.6167 28.6167 21.0167 28.75 20.25H43.5C43.5 20.5167 43.5 20.9167 43.5 21.45C43.5 21.95 43.4167 22.4833 43.25 23.05C42.1833 23.2167 41.3833 23.5167 40.85 23.95C40.35 24.35 40.1 25.05 40.1 26.05Z" fill="#84596B"/>
                  </svg>
                </div>
                <div className="text">
                  <div className="halant-medium first-paragraph">
                    ello! I’m Jelena Gvero, a senior computer science student at the University of Illinois Chicago, animal lover, racket sports fan, and sleep connoisseur.
                  </div>
                  <div className="halant-medium">
                    My passion is creating cool stuff and working with people!
                  </div>
                  <div className="halant-medium">
                    You must have trekked long and far to reach this website. Allow me to offer you a cup of hot coco and a seat at my comfortable armchair by the fireplace until you depart for your next voyage.
                  </div>
                </div>
              </div>
              {/* <div className="jelena-pic"> */}
                <div className="jelena-pic-box">
                  <img className="jelena-image" src="jelena-pic.JPG" alt="jelena-pic" />
                  <div className="jelena-pic-caption">
                    <div className="halant-bold"> Jelena accidentally wearing a black sweater on a warm September day</div>
                  </div>
                </div>
              {/* </div> */}
            </div>
    </div>
  );
}