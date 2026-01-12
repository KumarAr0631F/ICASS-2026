import React from "react";
import { NavLink } from "react-router-dom";

const Sponsorships = () => {
  return (
    <div>
      <div className="bg-red-500 text-white flex justify-center items-center text-3xl font-bold w-full h-32 text-center">
        CALL FOR FINANCIAL SUPPORTERS
      </div>
      <div className="mb-4 ml-5 mr-5  mt-3">
        <p className="text-justify mb-2">
          <b>ICASS 2026</b>, the inaugural edition of the IEEE{" "}
          <b>
            International Conference on Intelligent Computing and Automation for
            Sustainable Solutions
          </b>
          , will be held in February 2026. As the first conference in this
          series, ICASS 2026 sets the stage for establishing a premier platform
          where researchers, academicians, industry professionals, and
          innovators converge to exchange ideas, showcase advancements, and
          shape the future of technology and applications in this domain.
        </p>
        <p className="text-justify mb-2">
          The success of such a conference is greatly amplified by the support
          of our sponsors. Sponsorship contributions enable us to:
        </p>
        <ul className="list-disc list-inside mt-2 ml-3 mb-2">
          <li>
            {" "}
            Provide <b>student travel grants and scholarships</b>, empowering
            the next generation of researchers.
          </li>
          <li>
            Invite and support the participation of{" "}
            <b>eminent keynote speakers</b>, enhancing the global visibility and
            impact of the event.
          </li>
          <li>
            Deliver a high-quality conference experience for all delegates,
            ensuring ICASS establishes itself as a respected IEEE conference
            series.
          </li>
        </ul>
        <p className="text-justify mb-2">
          By sponsoring ICASS 2026, your organization will not only contribute
          to the success of this landmark event but also gain strategic
          visibility and engagement opportunities. Sponsorship benefits include:
        </p>
        <ul className="list-disc list-inside mt-2 ml-3 mb-2">
          <li>
            <b>Recruitment</b>: Directly connect with highly skilled students
            and researchers.
          </li>
          <li>
            <b>Branding</b>: Showcase your organization’s leadership and vision
            on a global IEEE platform.
          </li>
          <li>
            <b>Customers</b>: Reach potential clients, collaborators, and
            stakeholders from academia and industry.
          </li>
          <li>
            <b>Community</b>: Build long-term relationships with the
            international community of scholars and practitioners.
          </li>
        </ul>
      </div>
      <div className="overflow-x-auto my-8 ml-5 mr-5">
        <table className="table-auto w-full max-w-[100vw] border border-gray-300 bg-white rounded-lg text-xs sm:text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-2 py-2 border border-gray-300">Benefits</th>
              <th className="px-2 py-2 border border-gray-300">
                Platinum
                <br />
                (₹ 1 Lakhs)
              </th>
              <th className="px-2 py-2 border border-gray-300">
                Gold
                <br />
                (₹ 80 Thousand)
              </th>
              <th className="px-2 py-2 border border-gray-300">
                Silver
                <br />
                (₹ 50 Thousand)
              </th>
              <th className="px-2 py-2 border border-gray-300">
                Bronze
                <br />
                (₹ 25 Thousand)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-2 py-2 border border-gray-300">
                Free conference attendance passes*
              </td>
              <td className="px-2 py-2 border border-gray-300">5</td>
              <td className="px-2 py-2 border border-gray-300">4</td>
              <td className="px-2 py-2 border border-gray-300">3</td>
              <td className="px-2 py-2 border border-gray-300">2</td>
            </tr>
            <tr>
              <td className="px-2 py-2 border border-gray-300">
                Special thanks during the opening ceremony
              </td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">
                &#10003;
              </td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">
                &#10003;
              </td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">
                &#10003;
              </td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">
                &#10003;
              </td>
            </tr>

            <tr>
              <td className="px-2 py-2 border border-gray-300">
                Live talks by Leader(s) of the company
              </td>
              <td className="px-2 py-2 border border-gray-300">
                15-mins (Banquet/Reception)
              </td>
              <td className="px-2 py-2 border border-gray-300">
                10-mins (Partner Session)
              </td>
              <td className="px-2 py-2 border border-gray-300">
                5-mins (Partner Session)
              </td>
              <td className="px-2 py-2 border border-gray-300 text-red-500 font-bold">
                &#10007;
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2 border border-gray-300">
                Logos in the conference background
              </td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">
                &#10003;
              </td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">
                &#10003;
              </td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">
                &#10003;
              </td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">
                &#10003;
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2 border border-gray-300">
                Mention in the social media posts
              </td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">
                &#10003;
              </td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">
                &#10003;
              </td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">
                &#10003;
              </td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">
                &#10003;
              </td>
            </tr>

            <tr>
              <td className="px-2 py-2 border border-gray-300">
                Sponsors’ Booths (space and position of booths vary depending on
                tier of sponsorship)
              </td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">
                &#10003;
              </td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">
                &#10003;
              </td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">
                &#10003;
              </td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">
                &#10003;
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center mb-3 font-bold text-3xl">
        <h1 className="text-blue-600">Expression of Interest</h1>
      </div>
      <div>
        <p className="text-justify mb-5 ml-5 mr-5">
          If your organization is interested in sponsoring ICASS 2026, we kindly
          request you to share your Expression of Interest through the Google
          Form provided below. This will help our sponsorship team connect with
          you, share detailed information, and guide you through the sponsorship
          process.
        </p>
      </div>
      <div>
        <NavLink
          to="https://docs.google.com/forms/d/e/1FAIpQLScwkn5uFTWODMKhWgfnZ9UTUowP8KmoGuHPwwBcSXdY3GbjZg/viewform?usp=header"
          target="_blank"
          className="flex justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded w-64 mx-auto mb-10"
        >
          Sponsorship Interest Form
        </NavLink>
      </div>
    </div>
  );
};

export default Sponsorships;
