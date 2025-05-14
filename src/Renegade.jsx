import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Renegade = () => {
  const hardWords = [
    "scalene",
    "factoring",
    "integral",
    "completing the square",
    "reciprocal",
    "reflexive property",
  ];

  const [currentWord, setCurrentWord] = useState(hardWords[0]);

  const [index, setIndex] = useState(0);

  const neonWritingStyle = {
    textShadow: "0px 0px 15px #C803B3, 0 0 40px #AF029E, 0 0 10px #FF199C",
    fontFamily: "'Pacifico', cursive",
  };

  const textShadow = {
    textShadow: "1px 1px 2px pink, 0 0 1em blue, 0 0 0.2em black",
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the index and reset to 0 when we reach the end of the array
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % hardWords.length;
        setCurrentWord(hardWords[newIndex]);
        return newIndex;
      });
    }, 8000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home-container">
      <div id="background-sun-and-logo">
        <div className="background-sun"></div>
        <img className="logo" src="src\assets\renegade-banner.png" alt="Logo" />
        <h1>Know yourself. Learn accordingly.</h1>
      </div>
      <div className="column-container">
        <div className="column left-column">
          <div className="content-container">
            <h1 className="text-pinkNeonText">
              Data-driven and
              <br />
              Reality-focused
            </h1>
          </div>
          <br />
          <p>
            The modern student faces an uphill battle. There's a lot to learn,
            and a lot of distractions to pull them away. Every day, young people
            make the choice between working hard to understand the next new
            thing or letting an AI model answer their homework questions for
            them.
            <br />
            <br />
            It's time to help them understand themselves, the work that they're
            doing, and the ways that they can improve. It's also time to respect
            the time and effort we ask of them, and push them toward brigher
            futures.
          </p>
          <h2>Different by Design</h2>
          <ul>
            <li>Made by tutors with decades of experience.</li>
            <li>Every answer–right or wrong–means something.</li>
            <li>
              We respect everyone's time, whether they're a student, a parent,
              an educator, or an administrator.
            </li>
            <li>
              No empty awards or stickers. If you earn it, you learn from it.
            </li>
          </ul>
        </div>
        <div className="column right-column">
          <div className="content-container">
            <h1 className="text-pinkNeonText">
              Providing the right
              <br />
              tools for the job
            </h1>
          </div>
          <br />
          <p>
            At <b>Neon Renegade</b>, we believe in meeting students where they
            are and learning <i>together</i>. As a result, <b>NR</b> is an
            application with both an <b>aesthetic</b> and a <b>mission</b>:
            <br />
            <h2>Our Aesthetic</h2>
            <ul>
              <li>Engaging visuals to communicate actionable feedback.</li>
              <li>
                Interactive elements that maintain attention, rather than beg
                for it.
              </li>
            </ul>
            <h2>Our Mission</h2>
            <ul>
              <li>Learning is a skill–we're here to teach it to you.</li>
              <li>
                Math is more than the sum of its parts–we find patterns where
                others only track right and wrong.
              </li>
              <li>
                <b>Neon Renegade</b> respects its users and understands what it
                takes to make moves in the modern educatoinal landscape.
                <li>
                  We're not just here, we're here for you. Let's get you what
                  you need.
                </li>
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div className="description-container">
        <h2 className="description-text">
          Do some quizzes, learn where <b>you</b> need to <b>focus</b>.
          <br />
          <br />
          Don't review an entire course because you forgot what{" "}
          <i>"{currentWord}"</i> means.
        </h2>
      </div>

      <div>
        <div style={textShadow} className="register-link text-center">
          <Link to={"/"} className="link">
            Back to Charlie's Portfolio
          </Link>
        </div>
      </div>

      <div className="graph-container">
        <div className="graph"></div>
      </div>
    </div>
  );
};

export default Renegade;
