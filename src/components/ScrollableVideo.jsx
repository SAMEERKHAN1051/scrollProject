import React, { useState, useEffect, useRef } from "react";
import "../styles/scrollVideoPlayer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import videoF from "../assests/video-forward.mp4";
import videoR from "../assests/video-reverse.mp4";

const ScrollVideoPlayer = ({ videoUrl }) => {
  const videoRefF = useRef(null);
  // const videoRefR = useRef(null);
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  // Introduce a state to track if the modal has been opened at least once
  const [hasModalBeenOpened, setHasModalBeenOpened] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isForward, setForward] = useState(true);
  const [scrollCount, setScrollCount] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [speed, setSpeed] = useState(1);

  const [forwardVideoTime, setForwardVideoTime] = useState([]);
  const [backwardVideoTime, setBackwardVideoTime] = useState([]);

  // Assuming the next section is within the same component
  const nextSectionRef = useRef(null);
  // Function to scroll to the next section
  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Update handleVideoEnd to include scrolling
  const handleVideoEnd = () => {
    setIsVideoFinished(true);
    handleCloseModal();
    scrollToNextSection(); // Scroll to the next section when the video ends
  };

  useEffect(() => {
    document.body.style.overflowY = modalOpen ? "hidden" : "auto";
  }, [modalOpen]);

  const handleCloseModal = () => {
    setModalOpen(false);
    resetPlaybackRate();
  };

  const currentVideoTime = (currentTime) => {
    videoRefF.current.currentTime = currentTime;
  };

  const resetPlaybackRate = () => {
    if (videoRefF.current) {
      videoRefF.current.playbackRate = 1;
    }
  };

  const handleScroll = () => {
    if (modalOpen) {
      document.body.overflowY = "hidden";
      // document.body.overflowX = "hidden !important";
    } else {
      // document.body.overflowX = "hidden";
      document.body.overflowY = "scroll";
    }
    const direction = window.scrollY < lastScrollY ? "up" : "down";
    setLastScrollY(window.scrollY);

    if (!videoRefF.current) return;

    // Adjust playback only if the modal is open
    if (modalOpen) {
      const videoTime = videoRefF.current.currentTime;
      // const videoTimeR = videoRefR.current.currentTime;
      if (direction === "up") {
        setBackwardVideoTime(videoTime); // Updated to directly set the time
        setSpeed((prevCount) => prevCount + 0.1);
        console.log(videoTime + " backward time"); // Log the current video time
        if (isForward) {
          videoRefF.current.pause();
          setForward(false);
        }
      } else {
        setForward(true);
        setForwardVideoTime(videoTime); // Updated to directly set the time
        setSpeed((prevCount) => prevCount + 0.1);
        console.log(videoTime + " forward time"); // Log the current video time
      }
      videoRefF.current.playbackRate = speed;
      videoRefF.current.currentTime =
        direction === "up" ? backwardVideoTime : forwardVideoTime;
    } else {
      // Increment scroll count only if modal hasn't been opened yet
      if (!hasModalBeenOpened) {
        setScrollCount((prevCount) => prevCount + 1);
      }
    }

    // Open the modal on the first 10 scrolls only
    if (scrollCount >= 9 && !hasModalBeenOpened && !isVideoFinished) {
      setModalOpen(true);
      setHasModalBeenOpened(true); // Prevent modal from opening again on further scrolls
    }
  };

  useEffect(() => {
    const videoElement = videoRefF.current;
    if (videoElement) {
      const handleVideoEnd = () => {
        console.log("Video has ended.");
        setIsVideoFinished(true);
        handleCloseModal();
      };

      // Add event listener
      videoElement.addEventListener("ended", handleVideoEnd);

      // Cleanup function to remove event listener
      return () => {
        videoElement.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, []);

  useEffect(() => {
    if (modalOpen && videoRefF.current) {
      videoRefF.current.play().catch((error) => {
        console.error("Video play failed:", error);
      });
    }
  }, [modalOpen]);

  useEffect(() => {
    const scrollHandler = handleScroll;

    window.addEventListener("scroll", scrollHandler, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [
    modalOpen,
    scrollCount,
    isVideoFinished,
    lastScrollY,
    hasModalBeenOpened,
  ]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      {modalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={handleCloseModal}
          data-aos="fade-up"
        >
          <video
            id="myVideo"
            ref={videoRefF}
            src={isForward ? videoF : videoR}
            autoPlay
            muted
            poster=""
            onEnded={handleVideoEnd}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "130%",
              maxHeight: "100%",
              borderRadius: "10px",
            }}
          >
            Your browser does not support the video tag.
          </video>

          {/* {isForward ? 
          <video
          id="myVideo"
            ref={videoRefF}
            src={videoF}
            autoPlay
            muted
            onEnded={handleVideoEnd}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '130%', maxHeight: '100%', borderRadius: '10px' }}
          >
            Your browser does not support the video tag.
          </video>
          : <video
          id="myVideo2"
            ref={videoRefR}
            src={videoR}
            autoPlay
            muted
            onEnded={handleVideoEnd}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '130%', maxHeight: '100%', borderRadius: '10px' }}
          >
            Your browser does not support the video tag.
          </video>} */}
        </div>
      )}
      {!modalOpen && (
        <video
          ref={videoRefF}
          src={isForward ? videoF : videoR}
          width="70%"
          className="scrollVideoPlayer"
          poster=""
        >
          Your browser does not support the video tag.
        </video>
      )}

      <div ref={nextSectionRef}></div>
    </>
  );
};

export default ScrollVideoPlayer;
