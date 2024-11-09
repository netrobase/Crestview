import Image from 'next/image';
import Link from 'next/link';


export default function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 bg-white space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Left Section - Image and Stats */}
      <div className="relative w-full lg:w-1/2 flex items-center justify-center" data-aos="fade-right">
        <div className="relative w-48 h-48 md:w-56 md:h-56 bg-teal-100 rounded-full flex items-center justify-center">
          <Image
            src="/images/about.png"
            alt="Profile"
            className="rounded-full object-cover"
            width={150}
            height={150}
          />
        </div>

        {/* Overlay Elements */}
        <div className="absolute top-4 left-4 text-white rounded-lg p-2 text-xs md:text-sm">
        <Image src="/images/stats.png" alt='stats' width={115} height={58}/>
        </div>

        <div className="absolute bottom-6 left-10 bg-white rounded-lg p-2 shadow-md hidden md:block">
          <div className="w-12 h-12 md:w-16 md:h-16">
            <Image src="/images/stat.png" alt="Pie Chart" width={155} height={106} />
          </div>
        </div>

        <div className="absolute bottom-4 right-10 bg-white rounded-lg p-2 shadow-md text-xs md:text-sm">
          <div className="flex justify-between">
            <Image src="/images/sta.png" alt='stats' width={115} height={58}/>
          </div>
        </div>
      </div>

      {/* Right Section - Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left p-6" data-aos="fade-left">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">About Our School</h2>
        <p className="text-gray-600 mt-4">
          Problems trying to resolve the conflict between the two major realms of Classical physics:
          Newtonian mechanics.
        </p>
        <Link
          href="#"
          className="text-green-600 mt-4 inline-block font-medium hover:underline"
        >
          Learn More &rarr;
        </Link>
      </div>
    </div>
  );
}
