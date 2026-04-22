import { Link } from 'react-router';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 text-white">Privacy Policy</h1>
            <p className="text-xl text-white/90">
              How we collect, use, and disclose personal information when you use our website and services.
            </p>
          </div>
        </div>
      </section>

      <article className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-[#6B6A64] space-y-6 leading-relaxed">
          <p>
            We are committed to protecting and respecting your privacy. This Privacy Policy (this &quot;Policy&quot;)
            describes how we collect, use and disclose personal information of users of our services, including our
            Website (our &quot;Site&quot;). Please read this Privacy Policy carefully.
          </p>
          <p>
            By using our Site, you agree to the terms of this Policy. If you do not agree with the terms of this
            Policy, do not use our Site. Your use of our Site for the limited and exclusive purpose of reviewing this
            Policy does not constitute your agreement to this Policy unless you make further use of our Site. This
            Policy may be updated from time to time.
          </p>
          <div>
            <p className="mb-2 font-semibold text-[#1a1a1a]">This Policy describes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The personal information we collect</li>
              <li>How we collect such information</li>
              <li>How such information is used</li>
              <li>How such information is shared</li>
              <li>How you can contact us</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold text-[#1a1a1a] pt-4 border-t border-[#D4C9BA]">
            INFORMATION WE COLLECT
          </h2>
          <p>
            We and our third-party service providers may collect and process the following types of personal
            information about you:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Social network profile information</li>
            <li>
              Information we collect when you use our Site, such as your domain name, Internet protocol (IP) address,
              mobile device model, Internet service provider, Site access times, websites that referred you to us and
              web pages within our Site that you visit
            </li>
            <li>Information you communicate to us through our Site, our social media pages or through other means</li>
          </ul>

          <h2 className="text-xl font-bold text-[#1a1a1a] pt-4 border-t border-[#D4C9BA]">
            HOW WE COLLECT INFORMATION
          </h2>
          <p>We and our third-party service providers may collect personal information as follows:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              We may collect information you provide when you use our Site, including when you fill in forms on our
              Site, subscribe to any of our services, complete a survey on our Site, post material to our Site or
              download content from our Site.
            </li>
            <li>
              We may collect information you provide when you contact us by phone, email, text message or messaging
              application on social media.
            </li>
            <li>
              We may collect social network profile information that you have made publicly available through your
              social network account settings if you choose to access our social media pages or connect or otherwise
              link to our Site with your own social media page. We also may collect customers&apos; and public feedback
              on social media.
            </li>
            <li>
              Our Site may use cookies, tracking pixels and other similar technologies to collect information about
              visitors to our Site. A cookie is a small amount of data that is sent to your browser from a Web server and
              stored on your computer&apos;s hard drive. A tracking pixel is a graphic that is loaded when a user visits
              a website or opens an email and is used to track certain user activities.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-[#1a1a1a] pt-4 border-t border-[#D4C9BA]">
            HOW WE USE THE INFORMATION COLLECTED
          </h2>
          <p>We and our third-party service providers may use information collected to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Operate, maintain and improve our Site.</li>
            <li>Conduct analytics to help us better understand our customers and improve our products and services.</li>
            <li>Process and manage purchases made by you.</li>
            <li>
              Respond to your customer service inquiries, post your comments related to our products and services on
              our social network pages and take other actions in response to your questions, comments or Site activity.
            </li>
            <li>Communicate with you about special offers, services and promotions that may be of interest to you.</li>
            <li>Help us develop, customize, deliver, support and improve our services.</li>
            <li>Allow you to participate in interactive features of our service when you choose to do so.</li>
            <li>Notify you about changes to our service.</li>
            <li>Conduct market research in order to serve targeted advertisements.</li>
          </ul>
          <p>
            We and our third-party service providers may use the information collected from cookies, tracking pixels and
            other similar technologies to target advertising to you personally, through online and offline methods
            including email, display media, video media and direct mail. You may opt out of receiving direct mail from us
            or our third-party service providers by{' '}
            <Link to="/contact" className="text-[#EB9833] hover:underline font-medium">
              clicking here
            </Link>
            . For detailed information on the cookies we use and the purposes for which we use them see our Cookie
            Policy.
          </p>
          <p>
            When you log in to or visit our Site, your IP address may be combined with other de-identified data (such
            as a hashed, non-readable email or postal address) and such information may be used by third-party service
            providers to send ads and materials to you based on your preferences, interests and attributes. Such
            information may also be combined with aggregate information collected from other users or sources and used by
            third-party service providers to conduct market research and to better target their advertising. Although
            you may not opt out of receiving online advertisements generally, you may find out how to opt out of having
            your online behavior collected by third-party advertisers for advertising purposes. You may visit each ad
            network&apos;s website individually to opt-out and review their privacy policies, or you may visit the
            Digital Advertising Alliance&apos;s opt-out website at{' '}
            <a
              href="https://www.aboutads.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EB9833] hover:underline break-all"
            >
              https://www.aboutads.info/
            </a>{' '}
            or the Network Advertising Initiative&apos;s opt-out website at{' '}
            <a
              href="https://networkadvertising.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EB9833] hover:underline break-all"
            >
              https://networkadvertising.org/
            </a>
            .
          </p>

          <h2 className="text-xl font-bold text-[#1a1a1a] pt-4 border-t border-[#D4C9BA]">
            HOW WE DISCLOSE THE INFORMATION COLLECTED
          </h2>
          <p>We and our third-party service providers may share your personal information under the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              We may share your personal information with any member of our group of companies (our subsidiaries and
              our ultimate parent company and its subsidiaries).
            </li>
            <li>
              We may share your personal information with companies that provide services to us, such as credit card
              processors, website hosts, email vendors and other companies that help us provide our services or our Site.
            </li>
            <li>
              We may disclose your personal information in response to legal process, when required to comply with laws,
              to combat fraudulent or criminal activity, to enforce our agreements, corporate policies and the terms of
              use of our Site, and to protect the rights, property and safety of our business, our employees, agents,
              customers or others.
            </li>
            <li>
              We may share technical data that we collect about your browsing habits and your device (such as data
              collected via our cookies, tracking pixels and similar technologies, as discussed above) with third-party
              service providers and other advertising companies. This enables them and us to better target ads to you
              and other consumers.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-[#1a1a1a] pt-4 border-t border-[#D4C9BA]">
            HOW TO CONTACT US
          </h2>
          <p>
            If you have any questions, comments or requests regarding this Policy, please contact us using the contact
            information shown on our{' '}
            <Link to="/contact" className="text-[#EB9833] hover:underline font-medium">
              Contact
            </Link>{' '}
            page.
          </p>
        </div>
      </article>
    </div>
  );
}
