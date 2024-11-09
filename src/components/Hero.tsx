
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-white p-8">
      <div className="md:w-1/2 space-y-4 text-center md:text-left" data-aos="fade-right">
        <h1 className="text-gray-800 font-montserrat md:text-[58px] text-[30px] font-bold  tracking-[0.2px]">
          HIGH QUALITY EDUCATION
        </h1>
        <p className="text-gray-500 font-montserrat text-lg font-normal leading-[30px] tracking-[0.2px] ">
          Every day brings with it a fresh set of learning possibilities.
        </p>
        <div className="space-x-4 py-5">
          <Link href="/" className="bg-green-500 text-white  rounded-md hover:bg-green-600 px-[40px] py-[15px]">
            School Portal
          </Link>
          <Link href="/" className="border border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white px-[25px] py-[15px]">
            About Us
          </Link>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
        <Image src="/images/hero.png" alt="Person thinking with book" className=" max-w-sm"  width={400} height={400}/>
      </div>
    </section>
  );
}
