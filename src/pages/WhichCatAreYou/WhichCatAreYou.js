import './WhichCatAreYou.css';

export const WhichCatAreYou = () => {
    return (
    <div className="which-cat-container"> 
        <div className="jacques-francois-shadow-regular header-title"> which cat are you? </div>
        <div className="bubble-and-cat">
            <img className="cat-img" src="cute-cat.png" alt="cat" />
            <img className="bubble-img" src="pet-me-bubble.png" alt="bubble" />
        </div>
        <div className="jacques-francois-shadow-regular "> coming to you very soon... </div>
        <div className="jacques-francois-shadow-regular "> feel free to pet this cat for now. </div>

    </div>
    );
  }