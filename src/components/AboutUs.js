import { useState } from "react";

const aboutUsImage1 = require("../icons_assets/Mario_and_Adrian_a.jpg");
const aboutUsImage2 = require("../icons_assets/Mario_and_Adrian_b.jpg");

export default function AboutUs() {
  const [foundersImage, setFoundersImage] = useState(aboutUsImage1);
  const [foundersImagebg, setFoundersImagebg] = useState(aboutUsImage2);

  const swapImage = () => {
    if (foundersImage === aboutUsImage1) {
      setFoundersImage(aboutUsImage2);
      setFoundersImagebg(aboutUsImage1);
    } else {
      setFoundersImage(aboutUsImage1);
      setFoundersImagebg(aboutUsImage2);
    };
  };

  return (
    <div id="aboutus">
      <h2 id="aboutustitle">About Us</h2>
      <div id="foundersImageComponent">
      <img id="foundersImagebg" src={foundersImagebg} alt="Our founding brothers, Mario and Adrian." />
      <img id="foundersImage" src={foundersImage} alt="Our founding brothers, Mario and Adrian." onClick={swapImage} />
      </div>
    </div>
  );
};
