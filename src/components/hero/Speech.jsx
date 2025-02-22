
import { TypeAnimation } from "react-type-animation";


const Speech = () => {
  return (
   <div className="bubbleContainer">
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "A proactive leader driving innovation and collaboration.",
            
            
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="" />
      </div>
    
  );
};

export default Speech;
