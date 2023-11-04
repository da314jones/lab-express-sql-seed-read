import { Link } from "react-router-dom";

export default function Navbar() {
  const concatSentence = (stringArray) => {
    let firstWord = stringArray[0];
    
    for (let i = 0; i < stringArray.length; i++) {
      if (i !== stringArray.length - 1) {
        firstWord += `, ${stringArray[i]}`;
      }
    }
    return firstWord
  }


    return (
        <nav>
      <h1>
        <Link to="/songs">Songs</Link>
      </h1>
      <button>
        <Link to="/songs/new">New Song</Link>
      </button>
    </nav>
    );
}

