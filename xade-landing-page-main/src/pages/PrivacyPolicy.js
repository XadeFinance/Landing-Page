import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/style.css";

const PrivacyPolicy = () => {
  return (
    <div style={{ backgroundColor: "black", color: "#cfd8dc" }}>
      <Header />
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-5" style={{ fontFamily: "Benzin-Bold", color: "#fff" }}>Privacy Policy</h1>
            
            <div className="mb-4">
              <h3 style={{ fontFamily: "SemiBold", color: "#fff" }}>Introduction</h3>
              <p style={{ fontFamily: "Regular" }}>
                At Xade, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our platform and services.
              </p>
            </div>

            <div className="mb-4">
              <h3 style={{ fontFamily: "SemiBold", color: "#fff" }}>Information We Collect</h3>
              <p style={{ fontFamily: "Regular" }}>
                We collect information that you provide directly to us, such as when you create an account, use our services, or contact our support team. This may include:
              </p>
              <ul style={{ fontFamily: "Regular" }}>
                <li>Personal information (name, email address, phone number)</li>
                <li>Account information (wallet addresses, transaction history)</li>
                <li>Usage data (including how you interact with our platform)</li>
                <li>Device information (IP address, browser type, operating system)</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 style={{ fontFamily: "SemiBold", color: "#fff" }}>How We Use Your Information</h3>
              <p style={{ fontFamily: "Regular" }}>
                We use the information we collect to:
              </p>
              <ul style={{ fontFamily: "Regular" }}>
                <li>Provide and maintain our services</li>
                <li>Process transactions and verify account activity</li>
                <li>Improve and personalize your experience on our platform</li>
                <li>Communicate with you about updates, security alerts, and support</li>
                <li>Comply with legal obligations</li>
                <li>Prevent potentially prohibited or illegal activities</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 style={{ fontFamily: "SemiBold", color: "#fff" }}>Data Security</h3>
              <p style={{ fontFamily: "Regular" }}>
                We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of electronic storage or transmission is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="mb-4">
              <h3 style={{ fontFamily: "SemiBold", color: "#fff" }}>Sharing Your Information</h3>
              <p style={{ fontFamily: "Regular" }}>
                We do not sell or rent your personal information to third parties. We may share your information with:
              </p>
              <ul style={{ fontFamily: "Regular" }}>
                <li>Service providers who perform services on our behalf</li>
                <li>Law enforcement or other third parties if required by law</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 style={{ fontFamily: "SemiBold", color: "#fff" }}>Your Rights</h3>
              <p style={{ fontFamily: "Regular" }}>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul style={{ fontFamily: "Regular" }}>
                <li>The right to access your information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to delete your information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 style={{ fontFamily: "SemiBold", color: "#fff" }}>Changes to This Privacy Policy</h3>
              <p style={{ fontFamily: "Regular" }}>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </div>

            <div className="mb-4">
              <h3 style={{ fontFamily: "SemiBold", color: "#fff" }}>Contact Us</h3>
              <p style={{ fontFamily: "Regular" }}>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p style={{ fontFamily: "Regular" }}>
                Email: support@xade.finance<br />
                Address: Unit No. 810, Gold Crest Executive, C2A Jumeriah Lake Towers, Dubai, UAE
              </p>
            </div>
            
            <p className="text-center mt-5" style={{ fontFamily: "Regular" }}>Last Updated: June 1, 2023</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 