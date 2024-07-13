import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
       <div className="row contactus ">
      
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div> 

        <div className="col-md-4">
        <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
          <p>Welcome to ShopEase’s privacy policy. We prioritize the security and confidentiality of your personal information. We collect necessary details like your name, email, shipping address, and payment information to process orders and provide customer support. Your information is used solely for these purposes and to send you relevant updates with your consent. We do not share your information for marketing purposes. Our security measures include encryption and access controls to protect your data. You can opt-out of marketing communications and update 
          your information at any time. We may update this policy 
          periodically and encourage you to check for changes. 
          If you have any questions, please contact us.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
