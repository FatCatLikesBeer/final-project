const chefImage = require("../icons_assets/Mario and Adrian A.jpg");

function Header() {
  return (
    <>
    <meta charSet="utf-8"/>
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Markazi+Text|Karla" />
    <meta name="Little Lemon Website" content="Chicago's best resturant for resh, authentic Mediterranean food." />
    <meta name="og:title" content="Little Lemon Resturant" />
    <meta name="og:description" content="Chicago's best resturant for resh, authentic Mediterranean food." />
    <meta name="og:image" content={chefImage} />
    </>
  );
};

export default Header;
