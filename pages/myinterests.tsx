"use client";
import "../styles/myinterests.css";
import "../app/globals.css";
import Header from "../components/header";

export default function Interests() {
  return (
    <body>
      <Header activeLink="myinterests" />
      <div className="appears">
        <h2>Here are some of my recent crochet projects!</h2>
        <div className="interestphotos">
          <img
            src="/img/crochet/brownbluesweater.jpeg"
            alt="Crocheted granny square sweater in blue, cream, and brown"
          />
          <img src="/img/crochet/crochet_boba.png" alt="Crocheted boba drink" />
          <img src="/img/crochet/cow.png" alt="Crocheted pink cow"  />
          <img src="/img/crochet/owl.png" alt="Crocheted owl in Temple University colors"  />
          <img src="/img/crochet/daisy_bag.jpeg" alt="Crocheted daisy bag in green, purple, and pink"/>
          <img
            src="/img/crochet/dragon.jpeg"
            alt="Crocheted purple dragon"
            
          />
          <img
            src="/img/crochet/penguin.jpeg"
            alt="Crocheted blue and white penguin"
            
          />
          <img
            src="/img/crochet/axolotl.jpeg"
            alt="Crocheted purple axolotl"
            
          />
          <img src="/img/crochet/squid.jpeg" alt="crochet"  />
          <img
            src="/img/crochet/mini_bee.jpeg"
            alt="Crocheted mini bee in blue and white"
            
          />
        </div>

        <h2>This is my dog, Sammy!</h2>
        <div className="interestphotos">
          <img
            src="/img/sammy/sammy_bandana.jpeg"
            alt="Sammy with his fall bandana on"
            
          />
          <img
            src="/img/sammy/sammy_laying.jpeg"
            alt="Sammy laying down and looking up"
            
          />
          <img
            src="/img/sammy/sammy_smiling.jpg"
            alt="Sammy smiling"
            
          />
          <img
            src="/img/sammy/sammy_sunset.jpeg"
            alt="Sammy in the sunset"
            
          />
          <img
            src="/img/sammy/sammy_tiltinghead.jpeg"
            alt="Sammy tilting his head"
            
          />
          <img
            src="/img/sammy/sammy_tugging.jpeg"
            alt="Sammy tugging on a rope toy"
            
          />
          <img
            src="/img/sammy/sammy_with_ball.jpeg"
            alt="Sammy with his ball"
            
          />
          <img
            src="/img/sammy/sammycouch.jpeg"
            alt="Sammy on the couch"
          />
        </div>
      </div>
    </body>
  );
}
