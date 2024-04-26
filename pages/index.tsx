import type { NextPage } from "next";
import { useEffect, useState } from 'react';
import styles from "./index.module.css";

const WubbleLandingPage: NextPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
   

    <div className={styles.wubbleLandingPage}>
      
       <section className={styles.wubblelandingvideo1}>
       {isClient && (
          <video className={styles.videoPlayer} autoPlay muted loop>
            <source src="/landingpagevideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </section>
      <img
        className={styles.logoIcon}
        loading="lazy"
        alt=""
        src="/logo@2x.png"
      />
      <section className={styles.mainContent}>
        <div className={styles.featuresParent}>
          <div className={styles.features}>
            <div className={styles.featureDetails}>
              <div className={styles.detailListParent}>
                <div className={styles.detailList}>
                  <div className={styles.musicFeature}>
                    <div className={styles.musicIcon} />
                    <div className={styles.musicDescription}>
                      <div className={styles.royaltyFree}>Royalty free</div>
                      <div
                        className={styles.musicThatIs}
                      >{`Music that is - `}</div>
                    </div>
                  </div>
                  <div className={styles.detailItems}>
                    <div className={styles.itemShapes} />
                    <div className={styles.personalized}>Personalized</div>
                  </div>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.instantaenous}>Instantaneous</div>
                  </div>
                  <main className={styles.rectangleGroup}>
                    <div className={styles.frameItem} />
                    <div className={styles.intelligent}>{`Intelligent `}</div>
                  </main>
                </div>
                <div className={styles.placeholder} />
              </div>
              <div className={styles.signupContainer}>
                <div className={styles.signupContainer1} />
                <div className={styles.signupForm}>
                  <div className={styles.signupText}>
                    I want early access! Here’s my email
                  </div>
                  <div className={styles.inputbox}>
                    <div className={styles.emailContainer} />
                    <div className={styles.placeholdertext}>
                      you@example.com
                    </div>
                  </div>
                </div>
                <button className={styles.button}>
                  <div className={styles.buttonContainer} />
                  <div className={styles.buttonText}>Let’s go!</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.announcement}>
            <div className={styles.comingSoon}>
              <div className={styles.comingSoonText}>{`Coming soon `}</div>
              <div className={styles.soundSetting}>
                <img className={styles.loudIcon} alt="" src="/loud.svg" />
              </div>
            </div>
          </div>
          <img className={styles.quietIcon} alt="" />
        </div>
      </section>
    </div>
  );
};

export default WubbleLandingPage;
