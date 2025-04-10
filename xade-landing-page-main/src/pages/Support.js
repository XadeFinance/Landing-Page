import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/style.css";

const Support = () => {
  return (
    <div style={{ backgroundColor: "black", color: "#cfd8dc" }}>
      <Header />
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-5" style={{ fontFamily: "Benzin-Bold", color: "#fff" }}>Customer Support</h1>
            
            <div className="row justify-content-center mb-5">
              <div className="col-md-8">
                <p className="text-center" style={{ fontFamily: "Regular", fontSize: "1.2rem" }}>
                  We're here to help you with any questions or issues you may have with our platform.
                  Our support team is available 24/7 to assist you.
                </p>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-md-4 mb-4">
                <div className="card h-100" style={{ backgroundColor: "#111", border: "1px solid #333", borderRadius: "10px" }}>
                  <div className="card-body text-center p-4">
                    <h3 style={{ fontFamily: "SemiBold", color: "#fff", marginBottom: "1rem" }}>Email Support</h3>
                    <p style={{ fontFamily: "Regular" }}>
                      For general inquiries and non-urgent matters, please email us at:
                    </p>
                    <p style={{ fontFamily: "Medium", color: "#04d9ff" }}>support@xade.finance</p>
                    <p style={{ fontFamily: "Regular" }}>
                      We typically respond to emails within 24 hours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card h-100" style={{ backgroundColor: "#111", border: "1px solid #333", borderRadius: "10px" }}>
                  <div className="card-body text-center p-4">
                    <h3 style={{ fontFamily: "SemiBold", color: "#fff", marginBottom: "1rem" }}>Live Chat</h3>
                    <p style={{ fontFamily: "Regular" }}>
                      For real-time assistance, use the live chat feature on our platform.
                    </p>
                    <p style={{ fontFamily: "Regular" }}>
                      Our support agents are available 24/7 to assist you with any issues.
                    </p>
                    <a href="https://xade.finance" className="btn btn-primary mt-3" style={{ fontFamily: "Regular" }}>
                      Start Chat
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card h-100" style={{ backgroundColor: "#111", border: "1px solid #333", borderRadius: "10px" }}>
                  <div className="card-body text-center p-4">
                    <h3 style={{ fontFamily: "SemiBold", color: "#fff", marginBottom: "1rem" }}>Community Support</h3>
                    <p style={{ fontFamily: "Regular" }}>
                      Join our community channels for peer support and updates.
                    </p>
                    <div className="d-flex justify-content-center mt-4">
                      <a href="https://t.me/xadeofficial" target="_blank" rel="noreferrer" className="mx-2" style={{ color: "#04d9ff" }}>
                        Telegram
                      </a>
                      <a href="https://discord.gg/VxuKdRRzmN" target="_blank" rel="noreferrer" className="mx-2" style={{ color: "#04d9ff" }}>
                        Discord
                      </a>
                      <a href="https://twitter.com/xade_xyz/" target="_blank" rel="noreferrer" className="mx-2" style={{ color: "#04d9ff" }}>
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12">
                <h2 className="text-center mb-4" style={{ fontFamily: "SemiBold", color: "#fff" }}>Frequently Asked Questions</h2>
                <div className="accordion" id="supportFAQ">
                  
                  <div className="card mb-3" style={{ backgroundColor: "#111", border: "1px solid #333", borderRadius: "10px" }}>
                    <div className="card-header" id="headingOne" style={{ backgroundColor: "#111", border: "none" }}>
                      <h5 className="mb-0">
                        <button className="btn btn-link text-white" style={{ fontFamily: "Medium", textDecoration: "none" }} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          How do I create an account on Xade?
                        </button>
                      </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#supportFAQ">
                      <div className="card-body" style={{ fontFamily: "Regular" }}>
                        Creating an account on Xade is simple. Visit our platform and click on "Get Started" or "Sign Up". You'll need to connect your wallet to create an account. We support various wallet providers including MetaMask, WalletConnect, and more.
                      </div>
                    </div>
                  </div>
                  
                  <div className="card mb-3" style={{ backgroundColor: "#111", border: "1px solid #333", borderRadius: "10px" }}>
                    <div className="card-header" id="headingTwo" style={{ backgroundColor: "#111", border: "none" }}>
                      <h5 className="mb-0">
                        <button className="btn btn-link text-white collapsed" style={{ fontFamily: "Medium", textDecoration: "none" }} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          How secure is Xade?
                        </button>
                      </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#supportFAQ">
                      <div className="card-body" style={{ fontFamily: "Regular" }}>
                        Xade takes security very seriously. We use industry-standard security measures to protect your assets and data. Our platform is non-custodial, which means you always maintain control of your assets. Additionally, our smart contracts are audited by leading security firms in the blockchain industry.
                      </div>
                    </div>
                  </div>
                  
                  <div className="card mb-3" style={{ backgroundColor: "#111", border: "1px solid #333", borderRadius: "10px" }}>
                    <div className="card-header" id="headingThree" style={{ backgroundColor: "#111", border: "none" }}>
                      <h5 className="mb-0">
                        <button className="btn btn-link text-white collapsed" style={{ fontFamily: "Medium", textDecoration: "none" }} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          What fees does Xade charge?
                        </button>
                      </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#supportFAQ">
                      <div className="card-body" style={{ fontFamily: "Regular" }}>
                        Xade charges minimal fees for transactions on our platform. The exact fees depend on the type of transaction and the blockchain network being used. You can view the fee breakdown before confirming any transaction. We strive to keep our fees as low as possible while ensuring the sustainability of our platform.
                      </div>
                    </div>
                  </div>
                  
                  <div className="card mb-3" style={{ backgroundColor: "#111", border: "1px solid #333", borderRadius: "10px" }}>
                    <div className="card-header" id="headingFour" style={{ backgroundColor: "#111", border: "none" }}>
                      <h5 className="mb-0">
                        <button className="btn btn-link text-white collapsed" style={{ fontFamily: "Medium", textDecoration: "none" }} data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          How can I recover my account if I lose access?
                        </button>
                      </h5>
                    </div>
                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#supportFAQ">
                      <div className="card-body" style={{ fontFamily: "Regular" }}>
                        Since Xade is a non-custodial platform, account recovery is handled through your connected wallet. If you lose access to your wallet, you'll need to use the recovery methods provided by your wallet provider (typically a recovery phrase or seed words). We strongly recommend storing your recovery phrase in a secure location.
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            
            <div className="row mt-5">
              <div className="col-12">
                <h2 className="text-center" style={{ fontFamily: "SemiBold", color: "#fff" }}>Can't find what you're looking for?</h2>
                <p className="text-center mb-4" style={{ fontFamily: "Regular" }}>
                  If you couldn't find the answer to your question, please contact our support team.
                </p>
                <div className="text-center">
                  <a href="mailto:support@xade.finance" className="btn btn-primary mx-2" style={{ fontFamily: "Regular" }}>
                    Contact Support
                  </a>
                  <a href="https://docs.xade.finance" target="_blank" rel="noreferrer" className="btn btn-secondary mx-2" style={{ fontFamily: "Regular" }}>
                    Documentation
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support; 