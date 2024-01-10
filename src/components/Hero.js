import React, { useState, useEffect } from 'react';
//import { init } from 'ityped';
import Typewriter from "typewriter-effect";
import './Hero.scss';
import AnimatedLetters from './AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {

  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter

} from '@fortawesome/free-brands-svg-icons'

function Hero() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [showBlobs, setShowBlobs] = useState(false); 
  const [showIcons, setShowIcons] = useState(false); 
  const [showWord, setShowWord] = useState(false); 
  const hiArray = ['H', 'i,'];
  const imArray = ['I', ' ', 'a', 'm'];
  const nameArray = ['i','n','a','y','a','k',' ','B','h','o','s','a','l','e'];
  const jobArray = ['S','o','f','t','w','a','r','e'];
  

  // const textRef = useRef();

  // useEffect(() => {
  //   const currentRef = textRef.current;
  
  //   return () => {
  //     if (currentRef) {
  //       let timeoutId;
  
  //       const initTyping = () => {
  //         init(currentRef, {
  //           showCursor: true,
  //           backDelay: 1000,
  //           backSpeed: 60,
  //           strings: ['Developer'],
  //         });
  //       };
  
  //       if (!timeoutId) {
  //         timeoutId = setTimeout(initTyping, 2300); 
  //       } else {
  //         clearTimeout(timeoutId);
  //         initTyping();
  //       }
  //     }
  //   };
  // }, [textRef]);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass(prevLetterClass =>
        prevLetterClass === 'text-animate' ? 'text-animate-hover' : 'text-animate'
      );
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);



  // Delayed rendering of the blobs
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowBlobs(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowIcons(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowWord(true);
    }, 2300);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <section className="bg-black text-white px-5 py-20 md:py-32">
      <div className="lettersc container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between relative">
        <div className="hero-info">
        <h1 className="text-4xl lg:text-6xl">
          <AnimatedLetters letterClass={letterClass} strArray={hiArray} idx={10} />{' '}
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={imArray} idx={14} />{' '}
          <span className={`${letterClass} _16 text-accent`}>V</span>
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={17} /> <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={23} />{' '}
          <div className={`word inline ${showWord ? 'word-visible' : ''}`} >         
            {showWord && (
                <Typewriter
                  options={{
                    strings: ['Developer / Data Scientist'],
                    autoStart: true,
                    pauseFor: 700,
                    loop: true,
                  }}
                />
              )}
          </div>
        </h1>

        </div>

        <div className={`blobc relative hero-img mt-12 ${showBlobs ? 'blobs-visible' : ''}`}>
  
            <div className="blob-overlay ml-16 md:ml-auta"></div>
            <div className="blob ml-16 md:ml-auto"></div>
 
        </div>

        <div className={`icons relative translate-x-20 -translate-y-28 cursor-pointer   `}>
            <a href="https://github.com/vinayak-97"target="_blank" rel="noreferrer" className='pr-6'>
              <FontAwesomeIcon
              icon={faGithub}
              color="#37e4db"
              className={`github ${showIcons ? 'icons-show' : ''} `}
              size='2x'
              />
            </a>
            <a href="https://www.linkedin.com/in/vinayak-bhosale-a7437616a/" target="_blank" rel="noreferrer" className='pr-6'>
              <FontAwesomeIcon
              icon={faLinkedin}
              color="#37e4db"
              className={`linkedin ${showIcons ? 'icons-show' : ''} `}
              size='2x'
              />  
            </a>
          </div>
      </div>
    </section>
  );
}

export default Hero;
