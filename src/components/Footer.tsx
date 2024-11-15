import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-8 px-6 md:px-20">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-gray-800">
        
        {/* School Info */}
        <div>
          <h3 className="font-semibold text-lg">School Info</h3>
          <ul className="mt-4 space-y-2">
            <li>About Us</li>
            <li>Curriculum</li>
            <li>We are hiring</li>

          </ul>
        </div>
        
        {/* Legal */}
        <div>
          <h3 className="font-semibold text-lg">Activities</h3>
          <ul className="mt-4 space-y-2">
            <li>Competitions</li>
            <li>Sports</li>
            <li>Social Clubs</li>
          </ul>
        </div>
        
        {/* Features */}
        <div>
          <h3 className="font-semibold text-lg">Administration</h3>
          <ul className="mt-4 space-y-2">
            <li>School Admins</li>
            <li>School Teachers</li>
            <li>Academic Staff</li>
            <li>Non Academic Staff</li>
          </ul>
        </div>
        
       
        {/* Get In Touch */}
        <div>
          <h3 className="font-semibold text-lg">Get In Touch</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2 text-green-600" />
              (234) 7060259428
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-green-600" />
              4517 Washington Ave. Enugu, Nigeria
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-green-600" />
              debra.holt@example.com
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Social Media */}
      <div className="border-t border-gray-300 mt-8 pt-4 flex justify-between items-center">
        <p className="text-gray-600 text-sm">
          Made With ❤️ <a href="https://www.netrobase.com" className="underline">Netrobase Limited</a> | All Rights Reserved
        </p>
        <div className="flex space-x-4 text-green-600 text-lg">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
}
