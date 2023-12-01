import { useEffect, useState } from "react";
import ReviewsCard from "./ReviewsCard.js"

export default function Reviews() {
  //I'm really upset that I couldn't figure out how to do this using cleaner code...
  //I spent 8 hours trying to get this to work using for loops, mappings, the spread operator.
  //Instead I failed and just repeated myself 15 fucking times.
  //I'll have to get back to this...
  const [user0, setUser0] = useState({});
  const [user1, setUser1] = useState({});
  const [user2, setUser2] = useState({});
  const [user3, setUser3] = useState({});
  const [user4, setUser4] = useState({});
  const users = [user0, user1, user2, user3, user4]

  const url = "https://randomuser.me/api/";
  const generateRandomUser = (callback) => {
    let userObject = {name: "", image: "", id: ""};
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        userObject.name = data.results[0].name.first + " " + data.results[0].name.last.slice(0, 1) + ".";
        userObject.image = data.results[0].picture.medium;
        userObject.id= data.results[0].login.uuid;
        callback(userObject);
      });
  };

  useEffect(() => {
    generateRandomUser(setUser0);
    generateRandomUser(setUser1);
    generateRandomUser(setUser2);
    generateRandomUser(setUser3);
    generateRandomUser(setUser4);
  }, []);

  // One down, 2 to go...
  const reviewsCardsList = users.map((e) => {
      return <ReviewsCard name={e.name} image={e.image} id={e.id} key={e.id}/>
    }
  );

  return (
    <>
      <h2>Testimonials</h2>
      <div id="reviewssection">
        {reviewsCardsList}
      </div>
    </>
  );
};
