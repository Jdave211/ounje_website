import React from "react";

const TermsOfService = () => {
  return (
    <div
      id="terms-of-service"
      className="p-6 max-w-3xl mx-auto font-sans border-2 border-black bg-gray-200"
      style={{ marginBottom: "50px", padding: "24px" }}
    >
      <h1 className="text-4xl font-bold text-center text-black mb-8">
        Terms of Service
      </h1>
      <p className="text-gray-600 mb-2">Last Updated: June 24, 2024</p>
      <p className="text-black leading-relaxed mb-4">
        Welcome to Ounje, a mobile application that transforms your fridge
        contents into delicious recipes, helps you track your caloric intake,
        and assists in managing your dietary goals. Please read these Terms of
        Service ("Terms") carefully before using Ounje ("the App") operated by
        Ounje Inc. ("we," "us," "our").
      </p>
      <p className="text-black leading-relaxed mb-4">
        By accessing or using the App, you agree to be bound by these Terms. If
        you disagree with any part of the Terms, you may not access the App.
      </p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-black mb-2">
          1. Use of the App
        </h2>
        <h3 className="text-xl font-semibold text-black mb-2">Eligibility</h3>
        <p className="text-black leading-relaxed">
          You must be at least 13 years old to use the App. By using the App,
          you represent and warrant that you have the legal capacity to enter
          into a binding agreement.
        </p>

        <h3 className="text-xl font-semibold text-black mt-4 mb-2">
          Account Registration
        </h3>
        <p className="text-black leading-relaxed mb-4">
          To access certain features of the App, you may need to register for an
          account. You agree to provide accurate, current, and complete
          information during the registration process and to update such
          information to keep it accurate, current, and complete. You are
          responsible for safeguarding your password and for all activities that
          occur under your account.
        </p>

        <h2 className="text-2xl font-semibold text-black mb-2">
          2. Subscription Plans
        </h2>
        <h3 className="text-xl font-semibold text-black mb-2">Free Tier</h3>
        <ul className="list-disc list-inside text-black leading-relaxed mb-4">
          <li>Recipe generation from the database only</li>
          <li>2 calorie checks per month</li>
          <li>Maximum of 25 spaces in inventory</li>
          <li>1 fridge image</li>
        </ul>

        <h3 className="text-xl font-semibold text-black mb-2">Premium Tier</h3>
        <ul className="list-disc list-inside text-black leading-relaxed mb-4">
          <li>Recipe generation from both the database and OpenAI</li>
          <li>Unlimited calorie checks per month</li>
          <li>Unlimited inventory space</li>
          <li>Maximum of 3 fridge images</li>
          <li>Price: 5.99 CAD per month</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mb-2">
          3. Payment and Refunds
        </h2>
        <h3 className="text-xl font-semibold text-black mb-2">Payment</h3>
        <p className="text-black leading-relaxed mb-4">
          All payments for the Premium Tier are processed through the Apple App
          Store. By subscribing to the Premium Tier, you agree to pay the
          subscription fee specified at the time of purchase. Payments are
          non-refundable except as required by law.
        </p>

        <h3 className="text-xl font-semibold text-black mb-2">
          Automatic Renewal
        </h3>
        <p className="text-black leading-relaxed mb-4">
          The Premium Tier subscription will automatically renew at the end of
          each billing cycle unless you cancel your subscription at least 24
          hours before the end of the current period. You can manage your
          subscription and turn off auto-renewal in your Apple ID account
          settings.
        </p>

        <h2 className="text-2xl font-semibold text-black mb-2">
          4. User Content
        </h2>
        <h3 className="text-xl font-semibold text-black mb-2">
          Content Ownership
        </h3>
        <p className="text-black leading-relaxed mb-4">
          You retain ownership of any content you submit, post, or display on or
          through the App. By submitting content, you grant us a non-exclusive,
          worldwide, royalty-free, sublicensable, and transferable license to
          use, reproduce, distribute, prepare derivative works of, display, and
          perform the content in connection with the App and our business.
        </p>

        <h3 className="text-xl font-semibold text-black mb-2">
          Content Guidelines
        </h3>
        <p className="text-black leading-relaxed mb-4">
          You agree not to post content that is unlawful, harmful, threatening,
          abusive, harassing, defamatory, vulgar, obscene, or otherwise
          objectionable. We reserve the right to remove any content that
          violates these guidelines.
        </p>

        <h2 className="text-2xl font-semibold text-black mb-2">5. Privacy</h2>
        <p className="text-black leading-relaxed mb-4">
          Your privacy is important to us. Our{" "}
          <a
            href="https://ounje.net/privacy"
            className="underline text-blue-600"
          >
            Privacy Policy
          </a>{" "}
          explains how we collect, use, and protect your personal information.
          By using the App, you consent to the collection and use of your
          information as outlined in the Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold text-black mb-2">
          6. Intellectual Property
        </h2>
        <h3 className="text-xl font-semibold text-black mb-2">Ownership</h3>
        <p className="text-black leading-relaxed mb-4">
          The App and its original content, features, and functionality are and
          will remain the exclusive property of Ounje Inc. and its licensors.
          The App is protected by copyright, trademark, and other laws of both
          the United States and foreign countries.
        </p>

        <h3 className="text-xl font-semibold text-black mb-2">Restrictions</h3>
        <p className="text-black leading-relaxed mb-4">
          You agree not to modify, copy, distribute, transmit, display, perform,
          reproduce, publish, license, create derivative works from, transfer,
          or sell any information, software, products, or services obtained from
          the App.
        </p>

        <h2 className="text-2xl font-semibold text-black mb-2">
          7. Disclaimers and Limitation of Liability
        </h2>
        <h3 className="text-xl font-semibold text-black mb-2">
          Disclaimer of Warranties
        </h3>
        <p className="text-black leading-relaxed mb-4">
          The App is provided on an "as is" and "as available" basis without
          warranties of any kind, either express or implied, including, but not
          limited to, implied warranties of merchantability, fitness for a
          particular purpose, or non-infringement. We do not warrant that the
          App will be uninterrupted or error-free.
        </p>

        <h3 className="text-xl font-semibold text-black mb-2">
          Limitation of Liability
        </h3>
        <p className="text-black leading-relaxed mb-4">
          In no event shall Ounje Inc., its directors, employees, partners,
          agents, suppliers, or affiliates be liable for any indirect,
          incidental, special, consequential, or punitive damages, including
          without limitation, loss of profits, data, use, goodwill, or other
          intangible losses, resulting from (i) your use or inability to use the
          App; (ii) any unauthorized access to or use of our servers and/or any
          personal information stored therein; (iii) any interruption or
          cessation of transmission to or from the App; (iv) any bugs, viruses,
          trojan horses, or the like that may be transmitted to or through the
          App by any third party; (v) any errors or omissions in any content or
          for any loss or damage incurred as a result of the use of any content
          posted, emailed, transmitted, or otherwise made available through the
          App; and/or (vi) the defamatory, offensive, or illegal conduct of any
          third party. In no event shall Ounje Inc. be liable for any damages,
          losses, and causes of action exceeding the amount paid by you, if any,
          for accessing the App.
        </p>

        <h2 className="text-2xl font-semibold text-black mb-2">
          8. Indemnification
        </h2>
        <p className="text-black leading-relaxed mb-4">
          You agree to defend, indemnify, and hold harmless Ounje Inc. and its
          affiliates, licensors, and service providers, and their respective
          officers, directors, employees, contractors, agents, licensors,
          suppliers, successors, and assigns from and against any and all
          claims, damages, losses, liabilities, costs, and expenses, including
          attorneys' fees, arising out of or relating to your use of the App or
          your violation of these Terms.
        </p>

        <h2 className="text-2xl font-semibold text-black mb-2">
          9. Termination
        </h2>
        <p className="text-black leading-relaxed mb-4">
          We may terminate or suspend your access to the App at any time,
          without notice or reason. We may also terminate or suspend your access
          for violating these Terms. Upon termination, your right to use the App
          will immediately cease.
        </p>

        <h2 className="text-2xl font-semibold text-black mb-2">
          10. Governing Law
        </h2>
        <p className="text-black leading-relaxed mb-4">
          These Terms shall be governed by and construed in accordance with the
          laws of the Province of Ontario, Canada, without regard to its
          conflict of law provisions.
        </p>

        <h2 className="text-2xl font-semibold text-black mb-2">
          11. Dispute Resolution
        </h2>
        <p className="text-black leading-relaxed mb-4">
          Any dispute arising out of or relating to these Terms or your use of
          the App shall be resolved by binding arbitration in accordance with
          the Arbitration Rules of the Canadian Arbitration Association ("CAA").
          The arbitration shall be conducted in Toronto, Ontario, Canada.
        </p>

        <h2 className="text-2xl font-semibold text-black mb-2">
          12. Entire Agreement
        </h2>
        <p className="text-black leading-relaxed mb-4">
          These Terms constitute the entire agreement between you and Ounje Inc.
          regarding your use of the App and supersede all prior or
          contemporaneous agreements, communications, and representations,
          whether oral or written.
        </p>

        <h2 className="text-2xl font-semibold text-black mb-2">
          13. Severability
        </h2>
        <p className="text-black leading-relaxed mb-4">
          If any provision of these Terms is held to be invalid or
          unenforceable, such provision shall be struck and the remaining
          provisions shall remain in full force and effect.
        </p>

        <h2 className="text-2xl font-semibold text-black mb-2">14. Waiver</h2>
        <p className="text-black leading-relaxed mb-4">
          No waiver of any provision of these Terms shall be deemed a further or
          continuing waiver of such provision or any other provision.
        </p>

        <h2 className="text-2xl font-semibold text-black mb-2">
          15. Contact Us
        </h2>
        <p className="text-black leading-relaxed mb-4">
          If you have any questions about these Terms, please contact us at{" "}
          <a
            href="mailto:thisisounje@gmail.com"
            className="underline text-blue-600"
          >
            thisisounje@gmail.com
          </a>{" "}
          or 416-871-2611.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
