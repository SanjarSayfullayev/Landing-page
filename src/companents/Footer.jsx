import React from 'react';
import {FaDribbbleSquare,FaFacebookSquare,FaGithubSquare,FaInstagram,FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
    return (
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h3 className="text-pink-900 lg:text-start text-center w-full text-4xl font-bold">
            Sancho.zdes
          </h3>
          <p className="py-4 lg:text-start text-center">
            Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Velit, nostrum. adipisicing elit.
            Officia doloremque et quisquam, ea temporibus reiciendis.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaGithubSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 mt-6 flex justify-between">
          <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
              <li className="py-2 text-medium">Analytics</li>
              <li className="py-2 text-medium">Marketing</li>
              <li className="py-2 text-medium">Commerce</li>
              <li className="py-2 text-medium">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Support</h6>
            <ul>
              <li className="py-2 text-medium">Pricing</li>
              <li className="py-2 text-medium">Documentation</li>
              <li className="py-2 text-medium">Guides</li>
              <li className="py-2 text-medium">Api Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Company</h6>
            <ul>
              <li className="py-2 text-medium">About</li>
              <li className="py-2 text-medium">Blog</li>
              <li className="py-2 text-medium">Jobs</li>
              <li className="py-2 text-medium">Pres</li>
              <li className="py-2 text-medium">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Legal</h6>
            <ul>
              <li className="py-2 text-medium">Claim</li>
              <li className="py-2 text-medium">Policy</li>
              <li className="py-2 text-medium">Term</li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Footer;
