import "./styles.css";
import React, {
  useRef,
  useEffect,
  useLayoutEffect,
  forwardRef,
  useState,
} from "react";
import "../styles/style.css";
const App = () => {
  return (
    <>
      <>
        <>
          <section class="container" id="container4" style={{ marginTop: "8%" }}>
            <div class="left-half">
              <img
                className="credimg"
                src="/iPhone 14 - 30.png"
                style={{ 
                  width: "500px", 
                  height: "500px",
                  objectFit: "cover",
                  objectPosition: "top"
                }}
                alt="image"
              ></img>
            </div>
            <div class="right-half" style={{ 
              display: "flex", 
              alignItems: "flex-start",
              justifyContent: "center",
              height: "100%" 
            }}>
              <div className="line2" style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontFamily: "Benzin-Medium",
                    fontSize: "0.6rem",
                    letterSpacing: "10px",
                    color: "rgb(232, 109, 111)",
                  }}
                >
                  {/* <span className="gradient1" >SEAMLESS ONBOARDING </span> */}
                </div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontFamily: "Benzin-Bold",
                  }}
                >
                  <h3 style={{ fontSize: "32px", lineHeight: "1.2" }}>
               SEAMLESS ONBOARDING
                  </h3>
                </div>
                <div style={{ fontSize: "1rem", fontFamily: "Regular" }}>
                  <span>
                    {" "}
                    Get started effortlessly with an omnichain wallet that you can generate with just your email address, seamless onramping and onboarding. Experience a user-friendly interface designed for both crypto natives and newcomers, with built-in security features and easy access to all your digital assets across multiple chains.
                  </span>
                </div>
                <br></br>
              </div>
            </div>
          </section>
          <section class="container" style={{ marginTop: "8%" }}>
            <div class="left-half" style={{}}>
              <div className="line2">
                <div
                  style={{
                    fontFamily: "Benzin-Medium",
                    fontSize: "0.6rem",
                    letterSpacing: "10px",
                    color:
                      "var(--linnn, linear-gradient(113deg, #8C46FF -2.72%, #B080FF 111.29%))",
                  }}
                >
                  {/* <span className="gradient1">GLOBAL PAYMENTS </span>{" "} */}
                </div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontFamily: "Benzin-Bold",
                  }}
                >
                  <h3 style={{ fontSize: "32px", lineHeight: "1.2" }}>
                  NO CODE AGENT LAUNCHER
                  </h3>
                </div>
                <div style={{ fontSize: "1rem", fontFamily: "Regular" }}>
                  <span>
                 Xade no code agent launcher allows anybody to create DeFi and non DeFi agents with over 100+ integrations in just a few clicks with omnichain transacting capabilities, customisable llms, training data and real time data 

These agents can be both sentient or interactive and can be launched with pricing ranging from $100 to $1000 depending on the capabilities of the agent
                  </span>
                </div>
              </div>
            </div>
            <div class="right-half" style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              height: "100%"
            }}>
              <img
                className="credimg"
                src="/iPhone 14 - 31.png"
                style={{ 
                  width: "500px", 
                  height: "500px",
                  objectFit: "cover",
                  objectPosition: "top"
                }}
                alt="payment image"
             
              ></img>
            </div>
          </section>
          <section class="container" id="container4" style={{ marginTop: "8%" }}>
            <div class="left-half">
              <img
                className="credimg"
                src="/iPhone 14 - 32.png"
                style={{ 
                  width: "500px", 
                  height: "500px",
                  objectFit: "cover",
                  objectPosition: "top"
                }}
                alt="image"
              ></img>
            </div>
            <div class="right-half" style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              height: "100%"
            }}>
              <div className="line2" style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontFamily: "Benzin-Medium",
                    fontSize: "0.6rem",
                    letterSpacing: "10px",
                    color: "rgb(232, 109, 111)",
                  }}
                >
                  {/* <span className="gradient1" >PRO TRADING </span> */}
                </div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontFamily: "Benzin-Bold",
                  }}
                >
                  <h3 style={{ fontSize: "32px", lineHeight: "1.2" }}>
                   AI ASSISTANT
                  </h3>
                </div>
                <div style={{ fontSize: "1rem", fontFamily: "Regular" }}>
                  <span>
                  A chatbot created specifically for retail traders to research and analyze crypto markets and their portfolios.

Our custom AI model is optimized for maximum efficiency and best execution of trades.

Access real-time and historical data across crypto, social media, portfolios, news, and macroeconomic indicators.

Enable custom analysis techniques without writing any code.
                  </span>
                </div>
                <br></br>
              </div>
            </div>
          </section>
        </>
        {/* <section class="container">
          <div class="left-half" style={{}}>
            <div className="line2" style={{}}>
              <div
                style={{
                  fontFamily: "Benzin-Medium",
                  fontSize: "0.6rem",
                  letterSpacing: "10px",
                  color: "#40CEFF",
                }}
              >
                <span>PRO TRADING </span>
              </div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 500,
                  lineHeight: 1.2,
                  fontFamily: "Benzin-Bold",
                }}
              >
                <h3 style={{ fontSize: "32px", lineHeight: "1.2" }}>
                  FINANCE YOUR LOANS EASILY AND INSTANTLY
                </h3>
              </div>
              <div style={{ fontSize: "1rem", fontFamily: "Regular" }}>
                <span>
                  {" "}
                  Finance your real world loans such as EMIs or Mortgages or
                  against ERC-20 Tokens in various manners with no paperwork
                  powered by SabeX.
                </span>{" "}
              </div>
            </div>
          </div>
          <div class="right-half">
            <img
              className="credimg"
              src="https://res.cloudinary.com/xade-finance/image/upload/v1684697495/payments-3_ccnbii.png"
              alt="image"
            ></img>
          </div>
        </section> */}
      </>
      <section class="container" style={{ marginTop: "8%" }}>
        <div class="left-half" style={{}}>
          <div className="line2" style={{}}>
            <div
              style={{
                fontFamily: "Benzin-Medium",
                fontSize: "0.6rem",
                letterSpacing: "10px",
                color: "#FFCE40",
              }}
            >
              {/* <span className="gradient1">SPEND SEAMLESSLY </span> */}
            </div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: 500,
                lineHeight: 1.2,
                fontFamily: "Benzin-Bold",
              }}
            >
              <h3 style={{ fontSize: "32px", lineHeight: "1.2" }}>
                AGENTBOARD
              </h3>
            </div>
            <div style={{ fontSize: "1rem", fontFamily: "Regular" }}>
              <span>
                {" "}
                Xade Agents are filtered in 2 major categories: DeFi and Non-DeFi. You can choose to interact and filter any AI agents based on their returns or mindshare, usage and more.
                Go up the agentboard to earn amazing rewards from Xade and it's partners and usage from other users as well
              </span>{" "}
            </div>
          </div>
        </div>
        <div class="right-half">
          <img
            className="credimg"
            src="/iPhone 14 - 29.png"
            style={{ 
              width: "500px", 
              height: "500px",
              objectFit: "cover",
              objectPosition: "top"
            }}
            alt="image"
          ></img>
        </div>
      </section>
      {/* <section class="container" id="container2">
        <div class="left-half">
          <img
            className="credimg"
            src="/Media/new_savings.png"
            alt="image"
          ></img>
        </div>
        <div class="right-half">
          <div className="line2" style={{ textAlign: "left" }}>
            <div
              style={{
                fontFamily: "Benzin-Medium",
                fontSize: "0.6rem",
                letterSpacing: "10px",
                color: "#A15EFF",
              }}
            >
              <span className="gradient1"> HIGH YIELD SAVINGS </span>{" "}
            </div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: 500,
                lineHeight: 1.2,
                fontFamily: "Benzin-Bold",
              }}
            >
              <h3 style={{ fontSize: "32px", lineHeight: "1.2" }}>
                BEAT INFLATION WITH A STABLE SAVINGS ACCOUNT
              </h3>
            </div>
            <div style={{ fontSize: "1rem", fontFamily: "Regular" }}>
              <span>
                Get a savings account created specifically to beat inflation
                by financing real world loans powered by our innovative
                savings protocol SabeX.
              </span>
            </div>
          </div>
        </div>
      </section> */}

      <br />
      <br />

      {/* <div className="Partnersdiv" style={{ backgroundColor: "black" }}>
        <div
          className="header3"
          id="he3"
          style={{
            marginTop: "2%",
            fontFamily: "Benzin-Medium",
            color: "#ddd",
            paddingTop: "5%",
            backgroundColor: "black",
          }}
        >
          PARTNERS & BACKERS{" "}
        </div>
        <div
          className="header"
          id="cardh"
          style={{ fontFamily: "Benzin-Bold", color: "#fff" }}
        >
          <h2>We are working with the best</h2>
        </div>
        <div
          className="topText"
          id="cardtt"
          style={{ fontFamily: "Regular", color: "#B3C5BB" }}
        >
          We are working with the best projects in the space across
          community,infrastructure and more while we are backed by some
          reputable companies in the space
        </div>
        <br></br>
        <div class="slider1">
          <div class="slide-track">
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684873941/Untitled_design-6_px1l3a.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684873941/Untitled_design-7_ukycnc.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684875583/Untitled_design-11_kvwtp6.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684876252/Untitled_design-17_rc6m3r.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684874141/Untitled_design-10_ucyjce.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684876252/Untitled_design-16_utgxlo.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <a href="https://www.tradingview.com/symbols/TVC-DXY/">
                <img
                  src="/Media/TRADINGVIEW.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </a>
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684873941/Untitled_design-6_px1l3a.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684873941/Untitled_design-7_ukycnc.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684875583/Untitled_design-11_kvwtp6.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684876252/Untitled_design-17_rc6m3r.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684874141/Untitled_design-10_ucyjce.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684876252/Untitled_design-16_utgxlo.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          class="slider2"
          style={{
            paddingBottom: "1%",
            background: "rgb(18, 19, 20)",
            backgroundColor: "black",
          }}
        >
          <div class="slide-track">
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684876827/Untitled_design-15_istprd.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684874140/Untitled_design-8_gy9tfa.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684875583/Untitled_design-12_egkocd.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684874141/Untitled_design-9_mk3u1v.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684875584/Untitled_design-14_n1b6iz.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684875584/Untitled_design-13_qtoz2g.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684876827/Untitled_design-15_istprd.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684874140/Untitled_design-8_gy9tfa.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684875583/Untitled_design-12_egkocd.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684874141/Untitled_design-9_mk3u1v.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684875584/Untitled_design-14_n1b6iz.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684875584/Untitled_design-13_qtoz2g.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default App;
