import google from "../assets/google.png";
import apple from "../assets/apple.png";
import { FaTelegram, FaDiscord, FaLink, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    {
      label: "Twitter",
      icon: <FaX />,
      href: "#",
    },
    {
      label: "Telegram",
      icon: <FaTelegram />,
      href: "#",
    },
    {
      label: "Discord",
      icon: <FaDiscord />,
      href: "#",
    },
    {
      label: "Linktree",
      icon: <FaLink />,
      href: "#",
    },
    {
      label: "Instagram",
      icon: <FaInstagram />,
      href: "#",
    },
  ];
  return (
    <div className="w-full bg-white container mx-auto px-4 lg:px-10 py-10">
      <p className="text-xs text-gray-400 text-center w-full border-b border-gray-200 pb-5 hidden lg:block">
        Cryptocurrency may be unregulated in your jurisdiction. The value of
        cryptocurrencies may go down as well as up. Profits may be subject to
        capital gains or other taxes applicable in your jurisdiction.
      </p>
      <div className="flex flex-row lg:hidden gap-2 justify-center mt-5">
        <img src={google} alt="google" className="w-24" />
        <img src={apple} alt="apple" className="w-24" />
      </div>
      <div className="w-full flex flex-row items-start justify-between mt-10 gap-2">
        <div className="w-full hidden lg:flex flex-col items-start justify-center gap-10">
          <p className="text-xs text-gray-400 whitespace-nowrap text-left w-full">
            © 2025 Best Web3. All Right Reserved.
          </p>
          <div className="flex flex-row gap-2">
            <img src={google} alt="google" className="w-24" />
            <img src={apple} alt="apple" className="w-24" />
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <p className="text-sm text-black font-semibold text-left w-full">
            Terms
          </p>
          <p className="text-sm text-black text-left w-full">Privacy</p>
          <p className="text-sm text-bla text-left w-full">Cookies</p>
          <p className="text-sm text-bla text-left w-full">Partners</p>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <p className="text-sm text-black font-semibold text-left w-full">
            Crypto Wallet Guides
          </p>
          <p className="text-sm text-black text-left w-full">
            Best DeFi Wallet
          </p>
          <p className="text-sm text-black text-left w-full">
            Best Web3 Wallet
          </p>
          <p className="text-sm text-black text-left w-full">
            Best Non-Custodial Wallet
          </p>
          <p className="text-sm text-black text-left w-full">
            Best ERC20 Wallet
          </p>
          <p className="text-sm text-black text-left w-full">
            Best Polygon Wallet
          </p>
          <p className="text-sm text-black text-left w-full">
            Best BEP20 Wallet
          </p>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <p className="text-sm text-black font-semibold text-left w-full">
            Crypto Platform Guides
          </p>
          <p className="text-sm text-black text-left w-full">
            Best Decentralized Exchange
          </p>
          <p className="text-sm text-black text-left w-full">
            Best Crypto Staking Platform
          </p>
          <p className="text-sm text-black text-left w-full">
            Best Crypto Launchpad
          </p>
          <p className="text-sm text-black text-left w-full">
            Best Ethereum Launchpad
          </p>
        </div>

        <div className="w-full flex flex-col items-start justify-center gap-2">
          <p className="text-sm text-black font-semibold text-left w-full">
            How to Buy Crypto
          </p>
          <p className="text-sm text-black text-left w-full">
            Best Crypto to Buy
          </p>
          <p className="text-sm text-black text-left w-full">
            Best Meme Coins to Buy
          </p>
          <p className="text-sm text-black text-left w-full">
            New Crypto Coins
          </p>
          <p className="text-sm text-black text-left w-full">
            Best Crypto Presales
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-400 text-center w-full border-b border-gray-200 py-5 block lg:hidden">
        Cryptocurrency may be unregulated in your jurisdiction. The value of
        cryptocurrencies may go down as well as up. Profits may be subject to
        capital gains or other taxes applicable in your jurisdiction.
      </p>
      <div className="w-full flex flex-row items-center justify-between mt-10">
        <div className="w-full flex flex-row items-center justify-center gap-5">
          {socialLinks.map((link) => (
            <a
              href={link.href}
              className="text-gray-400 text-sm rounded-full p-2 bg-gray-100"
              key={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
