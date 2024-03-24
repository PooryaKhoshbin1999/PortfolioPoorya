// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:justify-center h-full w-full xl:items-center xl:max-w-none relative">
      <Image
        src={"/Poorya.png"}
        fill
        alt=""
        className="translate-z-0 w-full h-full absolute"
      />
    </div>
  );
};

export default Avatar;
