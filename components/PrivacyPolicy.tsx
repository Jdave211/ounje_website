import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
      id="privacy-policy"
      className="p-6 sm:p-4 w-full max-w-3xl mx-auto font-sans border-2 border-black bg-gray-200"
      style={{ marginBottom: "50px" }}
    >
      <h1 className="text-4xl sm:text-2xl font-bold text-center text-black mb-8">
        Privacy Policy
      </h1>

      <div className="mb-6">
        <h2 className="text-2xl sm:text-xl font-semibold text-black mb-2">
          Introduction
        </h2>
        <p className="text-black leading-relaxed">
          Welcome to Ounje. This Privacy Policy outlines how we collect, use,
          and protect your personal information when you use our app. By using
          Ounje, you agree to the terms outlined in this policy. If you have any
          questions or concerns, please contact us at{" "}
          <a href="mailto:thisisounje@gmail.com" className="underline">
            thisisounje@gmail.com
          </a>
          .
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl sm:text-xl font-semibold text-black mb-2">
          Information We Collect
        </h2>

        <h3 className="text-xl sm:text-lg font-semibold text-black mb-2">
          Personal Information
        </h3>
        <p className="text-black leading-relaxed">
          - <strong>Email Address</strong>: Collected during registration and
          for account-related communication.
        </p>
        <p className="text-black leading-relaxed">
          - <strong>Name</strong>: Collected during registration and used to
          identify your account.
        </p>
        <p className="text-black leading-relaxed">
          - <strong>Password</strong>: Collected during registration to secure
          your account. (Note: We store passwords securely using
          industry-standard encryption methods.)
        </p>

        <h3 className="text-xl sm:text-lg font-semibold text-black mb-2">
          Inventory/Fridge Data
        </h3>
        <p className="text-black leading-relaxed">
          - <strong>Inventory/Fridge Pictures</strong>: Collected when you
          upload images of your inventory or fridge items.
        </p>
        <p className="text-black leading-relaxed">
          - <strong>Inventory/Fridge Items</strong>: Collected when you add or
          update items in your inventory or fridge.
        </p>

        <h3 className="text-xl sm:text-lg font-semibold text-black mb-2">
          Saved Recipes
        </h3>
        <p className="text-black leading-relaxed">
          - <strong>Recipes</strong>: Collected when you save recipes within the
          app.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl sm:text-xl font-semibold text-black mb-2">
          How We Collect Information
        </h2>
        <p className="text-black leading-relaxed">
          - <strong>Directly from You</strong>: When you provide information
          during account registration, update your profile, or use specific
          features of the app.
        </p>
        <p className="text-black leading-relaxed">
          - <strong>Automatically</strong>: When you interact with the app, we
          may collect information such as usage data and device information.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl sm:text-xl font-semibold text-black mb-2">
          Use of Information
        </h2>
        <p className="text-black leading-relaxed">
          We use the collected information to:
        </p>
        <ul className="list-disc list-inside text-black leading-relaxed">
          <li>Provide and improve our services.</li>
          <li>Personalize your experience.</li>
          <li>
            Communicate with you regarding updates, promotions, and
            account-related matters.
          </li>
          <li>Maintain and secure your account.</li>
          <li>
            Analyze app usage to improve functionality and user experience.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl sm:text-xl font-semibold text-black mb-2">
          Sharing of Information
        </h2>
        <p className="text-black leading-relaxed">
          We do not share your personal information with third parties except in
          the following cases:
        </p>
        <ul className="list-disc list-inside text-black leading-relaxed">
          <li>
            <strong>Service Providers</strong>: We may share information with
            third-party service providers who assist us in operating our app,
            conducting our business, or servicing you. These providers have
            agreed to keep your information confidential and provide the same
            level of protection as stated in this policy.
          </li>
          <li>
            <strong>Legal Requirements</strong>: We may disclose information if
            required by law or in response to valid requests by public
            authorities.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl sm:text-xl font-semibold text-black mb-2">
          Data Retention and Deletion
        </h2>
        <p className="text-black leading-relaxed">
          We retain your personal information for as long as your account is
          active or as needed to provide you with our services. You can request
          the deletion of your account and personal data at any time by using
          the account deletion button within the app or by contacting us at{" "}
          <a href="mailto:jagadave21@gmail.com" className="underline">
            jagadave21@gmail.com
          </a>
          . Upon request, we will delete your information in accordance with
          applicable laws and regulations.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl sm:text-xl font-semibold text-black mb-2">
          Your Rights
        </h2>
        <p className="text-black leading-relaxed">
          You have the following rights regarding your personal information:
        </p>
        <ul className="list-disc list-inside text-black leading-relaxed">
          <li>
            <strong>Access</strong>: You can request access to the personal
            information we hold about you.
          </li>
          <li>
            <strong>Correction</strong>: You can request corrections to any
            inaccurate or incomplete information.
          </li>
          <li>
            <strong>Deletion</strong>: You can request the deletion of your
            personal information.
          </li>
          <li>
            <strong>Objection</strong>: You can object to the processing of your
            personal information.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl sm:text-xl font-semibold text-black mb-2">
          Security
        </h2>
        <p className="text-black leading-relaxed">
          We implement industry-standard security measures to protect your
          personal information from unauthorized access, alteration, disclosure,
          or destruction. However, no method of transmission over the internet
          or electronic storage is 100% secure. Therefore, we cannot guarantee
          absolute security.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl sm:text-xl font-semibold text-black mb-2">
          Changes to This Privacy Policy
        </h2>
        <p className="text-black leading-relaxed">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page.
          Your continued use of the app after any changes signifies your
          acceptance of the new policy.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl sm:text-xl font-semibold text-black mb-2">
          Contact Us
        </h2>
        <p className="text-black leading-relaxed">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at{" "}
          <a href="mailto:thisisounje@gmail.com" className="underline">
            thisisounje@gmail.com
          </a>
          .
        </p>
      </div>

      <div className="text-black text-center mt-6">
        <p>**Ounje**</p>
        <p>**June 24, 2024**</p>
        <p>This Privacy Policy was last updated on June 24, 2024.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
