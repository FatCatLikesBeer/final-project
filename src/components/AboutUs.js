import { useState } from "react";

const aboutUsImage1 = require("../icons_assets/adrian_and_mario_a.jpg");
const aboutUsImage2 = require("../icons_assets/adrian_and_mario_b.jpg");
const aboutUsText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut."

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
      <div id="aboutuscomponents">
        <div id="aboutuscopy">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>{aboutUsText}</p>
        </div>
        <div id="foundersImageComponent">
          <img id="foundersImagebg" src={foundersImagebg} alt="Our founding brothers, Mario and Adrian." />
          <img id="foundersImage" src={foundersImage} alt="Our founding brothers, Mario and Adrian." onClick={swapImage} />
        </div>
      </div>
    </div>
  );
};
