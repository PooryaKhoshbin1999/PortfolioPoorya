// links
import Link from "next/link";

//icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiGithubLine,
  RiLinkedinLine,
  RiTelegramLine,
  RiGoogleLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href="https://github.com/PooryaKhoshbin1999"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link href='https://www.instagram.com/poorya_khoshbin' className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href="https://www.facebook.com/profile.php?id=100062459288523" className="hover:text-accent transition-all duration-300">
        <RiFacebookBoxLine />
      </Link>
      <Link href="https://www.linkedin.com/in/poorya-khoshbin-2735b72b4" className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href="https://www.t.me/MohammedPooryaKhoshbin" className="hover:text-accent transition-all duration-300">
        <RiTelegramLine />
      </Link>
      <Link href="https://www.pooryakhoshbin@gmail.com" className="hover:text-accent transition-all duration-300">
        <RiGoogleLine />
      </Link>
    </div>
  );
};

export default Socials;
