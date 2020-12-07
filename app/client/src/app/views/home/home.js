import React, { useEffect } from "react";
import "./home.scss";

import Button from "react-bootstrap/Button";
import Fade from "react-reveal/Fade";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import { faqQuestions } from "assets/data/faq-questions";
import { FAQCollapse } from "app/containers";
import { Fireflies } from "app/components";
import hackathon from "assets/images/site/hackathon.jpg";
import antMentor from "assets/images/site/ant_mentor_grey_blue.png";
import antSponsor from "assets/images/site/ant_sponsor_green.png";
import fireflyOne from "assets/images/site/fireflies_1.png";
import fireflyTwo from "assets/images/site/fireflies_2.png";

// Sponsor Image Imports
import uciBren from "assets/images/sponsors/ucibren.png";
import twilio from "assets/images/sponsors/twilio-logo-red.png";
import bentley from "assets/images/sponsors/bentley.png";
import microsoft from "assets/images/sponsors/microsoft.png";
import fifteenSeventeen from "assets/images/sponsors/1517.png";

function Home() {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <div className="home">
      <Fireflies fireflyCount={15} />
      <section className="home-banner">
        <div className="banner-image" />
        <motion.div className="banner-info" style={{ opacity: opacity }}>
          <h1>
            <span className="hack">Hack</span>
            <span className="uci">UCI</span>
          </h1>
          <h3>February 20-22, 2021</h3>
          <h3>Online</h3>
          <h3>Apply by November 20, 2020</h3>
          <Button className="hack-button">Apply Now</Button>
          <p>
            In light of the COVID-19 pandemic, HackUCI 2021 will be fully
            virtual and open to all! You can participate from the comfort of
            your home.
          </p>
        </motion.div>
      </section>
      <div className="remaining-gradient">
        <section className="description-block">
          <div className="description-tagline">
            <div className="firefly-wrapper">
              <img src={fireflyOne} />
              <motion.div
                animate={{ opacity: [0.8, 7, 0.7, 0.9, 1, 0.9, 0.7, 0.8] }}
                transition={{
                  duration: 5,
                  repeat: "Infinity",
                  ease: "easeInOut"
                }}
                className="firefly-glow"
              />
            </div>
            <p>
              <span className="block">
                500&nbsp; <span className="yellow">hackers.</span>
              </span>
              <span className="block">
                36&nbsp;
                <span className="yellow">hours.</span>
              </span>
              <span className="block">
                10,000 in&nbsp;
                <span className="yellow">prizes.</span>
              </span>
            </p>
            <div />
            <div className="firefly-wrapper">
              <img src={fireflyOne} />
              <motion.div
                animate={{ opacity: [0.8, 0.6, 0.7, 0.9, 0.7, 0.9, 0.8, 0.8] }}
                transition={{
                  duration: 5,
                  repeat: "Infinity",
                  ease: "easeInOut"
                }}
                className="firefly-glow"
              />
            </div>
          </div>
          <div className="description-tagline connect-inspire">
            <div className="firefly-wrapper">
              <img src={fireflyOne} />
              <motion.div
                animate={{ opacity: [0.8, 1, 0.7, 0.7, 0.9, 0.8, 0.9, 0.8] }}
                transition={{
                  duration: 5,
                  repeat: "Infinity",
                  ease: "easeInOut"
                }}
                className="firefly-glow"
              />
            </div>
            <p>
              <span className="block">Create</span>
              <span className="block">
                <span className="yellow">+</span>
              </span>
              <span className="block">Connect</span>
              <span className="block">
                <span className="yellow">+</span>
              </span>
              <span className="block">Inspire</span>
            </p>

            <div className="firefly-wrapper">
              <img src={fireflyOne} />
              <motion.div
                animate={{ opacity: [0.8, 1, 0.9, 0.8, 0.9, 0.7, 0.7, 0.8] }}
                transition={{
                  duration: 5,
                  repeat: "Infinity",
                  ease: "easeInOut"
                }}
                className="firefly-glow"
              />
            </div>
          </div>
          <div className="description-image-wrapper">
            <div className="description-image">
              <img src={hackathon} alt="picture of students at table" />
            </div>

            <div className="description-text">
              <p>
                HackUCI is the largest collegiate hackathon in Orange County and
                we continue expanding and improving our event every year. Our
                focus? – Enhance the community around us by giving students the
                platform to unleash their creativity in an environment of
                forward thinking individuals.
              </p>
              <p>
                For HackUCI 2021, we plan to unite an even more diverse and
                talented group of developers to build the technology of
                tomorrow!
              </p>
              <p>
                Maybe insert some extra text regarding COVID-19 changes. So that
                peeps know that we’re trying to adjust?
              </p>
            </div>
          </div>
        </section>
        <section className="volunteer-block">
          <h2>Lend a Hand</h2>
          <div className="volunteer-item-wrapper">
            <div className="volunteer-mentor-item">
              <img src={antMentor} />
              <p>
                Due to the virtual format of Hack 2021, mentorship this year
                will be more important than ever. We need YOUR help to make this
                event successful and enjoyable for our hackers. Apply to be a
                mentor today!
              </p>
              <Button className="hack-button">Mentor</Button>
            </div>
            <div className="volunteer-mentor-item">
              <img src={antSponsor} />
              <p>
                Due to the virtual format of Hack 2021, mentorship this year
                will be more important than ever. We need YOUR help to make this
                event successful and enjoyable for our hackers. Apply to be a
                mentor today!
              </p>
              <Button className="hack-button">Sponsor</Button>
            </div>
          </div>
        </section>
        <section className="faq-block">
          <Fade duration={1000}>
            <h2>FAQ</h2>
            <div>
              {faqQuestions.map(function(item, index) {
                return (
                  <FAQCollapse
                    question={item.question}
                    answer={item.answer}
                    key={index}
                  />
                );
              })}
            </div>
          </Fade>
        </section>
        <section className="sponsor-block">
          <Fade duration={1000}>
            <h2>Sponsors</h2>
            <div className="sponsor-card">
              <img src={uciBren} />
              <img src={twilio} />
              <img src={microsoft} />
              <img src={bentley} />
              <img src={fifteenSeventeen} />
            </div>
          </Fade>
        </section>
      </div>
    </div>
  );
}

export default Home;