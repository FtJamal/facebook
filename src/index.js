import React from 'react';
import ReactDOM from 'react-dom';
import postImg from "./img/nature.jpg";
import quoteImg from "./img/quote.jpg";
import pakDay from "./img/pak.jpg";
import profileImg from "./img/profile.jpg";
import './index.css';



const MediaCard =
  ({ profile, name, date, text, imageUrl, likes, comments, shares }) => (
    <div class="body">
      <div class="header">
        <img class="profile" src={profile} alt="" />
        <div>
          <p class="name">{name}</p>
          <p class="date">{date}</p>
        </div>
      </div>

      <p>
        {text}
      </p>

      <img class="post" src={imageUrl} alt="" />

      <div class="a">
        <span>{likes}</span>   <span>{comments}</span>   <span>{shares}</span>
      </div>

      <div class="button">
        <button>Like</button>   <button>Comment</button>   <button>Share</button>
      </div>

    </div>
  )

const MediaPage = () => (
  <div>
    <MediaCard
      profile={profileImg}
      name="Farya Jamal"
      date="8 Sep 2022"
      text="Try,try never say why"
      imageUrl={postImg}
      likes={"250 likes"}
      comments={"70 comments"}
      shares={"100 shares"}
    />

    <MediaCard
      profile={profileImg}
      name="Farya Jamal"
      date="7 Sep 2022"
      text="Stay Blessed!"
      imageUrl={quoteImg}
      likes={"100 likes"}
      comments={"150 comments"}
      shares={"90 shares"}
    />

    <MediaCard
      profile={profileImg}
      name="Farya Jamal"
      date="14 aug 2022"
      text="Pakistan Zindabaad!"
      imageUrl={pakDay}
      likes={"200 likes"}
      comments={"100 comments"}
      shares={"50 shares"}
    />
  </div>
)

ReactDOM.render(<MediaPage />, document.querySelector("#root"));