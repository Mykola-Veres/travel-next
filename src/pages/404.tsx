import Image from "next/image";

const Error = () => {
  return (
    <>
      <div className="lg:text-4xl font-bold leading-[1.15] text-rose-400 sm:text-3xl text-center">
        404 Error
      </div>
      ;
      <div className="relative flex place-items-center">
        <Image
          className="drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </>
  );
};

export default Error;
