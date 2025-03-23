import Header from "../components/Header";
import hero from "../assets/hero.png";
import hero_mobile from "../assets/hero-mobile.webp";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import multi from "../assets/multi.svg";

import best_wallet from "../assets/best_wallet.png";
import best_card from "../assets/best_card.png";
import best_dex from "../assets/best_dex.png";

import mobile from "../assets/mobile.webp";
import store_icon from "../assets/store-icon.svg";

import cryptonews from "../assets/cryptonews.png";
import bitcoin from "../assets/bitcoin.png";
import readwrite from "../assets/readwrite.png";

import soon from "../assets/soon.png";
import crypto from "../assets/crypto.png";

import g from "../assets/g.png";
import a from "../assets/a.png";
import rate from "../assets/rate.png";

import gColored from "../assets/g-colored.png";

import bg from "../assets/bg.png";
import bgMobile from "../assets/bg-mobile.svg";
import {
  FaX,
  FaTelegram,
  FaDiscord,
  FaLink,
  FaInstagram,
  FaChevronRight,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Footer from "../components/Footer";

const Home = () => {
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
  const appFeatures = [
    "Buy",
    "Store",
    "Deposit",
    "Send",
    "Swap",
    "Sell",
    "Manage portfolio",
    "stake",
    "spend",
    "iGaming",
    "Token Launchpad",
    "Secure",
  ];

  const [selectedFeature, setSelectedFeature] = useState(appFeatures[0]);

  const featuredIn = [
    {
      image: cryptonews,
      alt: "cryptonews",
      text: "“Easy to use, endlessly capable… The standout app in crypto this year.“",
    },
    {
      image: bitcoin,
      alt: "bitcoin",
      text: "“Innovative, secure and intuitive – Best Wallet is a major new player in Crypto Wallets”",
    },
    {
      image: readwrite,
      alt: "readwrite",
      text: "“With Upcoming Tokens, Best Wallet has raised the bar for crypto wallet functionality“",
    },
  ];

  const rating = [
    {
      name: "Ian Roson",
      text: "Great app with early token pre-sale access",
      revieew: 5,
    },
    {
      name: "Sam Smith",
      text: "It is a convenient and easy to use wallet! Happy with the layout and all the functions are clear",
      revieew: 5,
    },
    {
      name: "John Doe",
      text: "Great wallet to use for every crypto asset, no more switching between wallets!",
      revieew: 5,
    },
    {
      name: "Ireneusz Sikorski",
      text: "It is a convenient and easy to use wallet! Happy with the layout and all the functions are clear",
      revieew: 5,
    },
    {
      name: "John Doe",
      text: "Best Wallet is a fantastic non-custodial wallet that offers full control over my crypto assets. It's easy to use, secure, and keeps my private keys safe. I love the simple interface and the privacy it",
      revieew: 5,
    },
  ];
  return (
    <>
      <Header />
      <div className="">
        <section className="bg-[#5860ff] lg:bg-[linear-gradient(180deg,#5860ff_37.64%,#fff_203.72%)] px-4 lg:px-10 py-20 pt-40">
          <div className="container mx-auto flex flex-col-reverse lg:flex-row gap-10 justify-between items-center pb-20 lg:pb-20">
            <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-1/2">
              <h1 className="text-[32px] lg:text-[72px] font-bold text-[#f5f5f5] text-center lg:text-left lg:leading-none">
                Best Crypto Wallet: Anonymous Bitcoin Wallets
              </h1>
              <p className="text-base lg:text-xl text-white text-center lg:text-left">
                Best Wallet is the best Crypto Wallet without Verification, ID
                or KYC. Get the most Secure & Anonymous Non-Custodial Crypto
                Wallet Now.
              </p>
              <div className="flex flex-row gap-4">
                {socialLinks.map((link) => (
                  <Link
                    to={link.href}
                    key={link.label}
                    className="text-[#5861f6]/80 text-2xl rounded-full bg-white p-2"
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
              <div className="flex flex-row gap-4">
                <img src={google} alt="google" className="" />
                <img src={apple} alt="apple" className="" />
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/2">
              <img src={hero} alt="hero" className="w-[80%]" />
            </div>
            <div className="w-full lg:hidden relative flex justify-center items-center">
              <img
                src={hero_mobile}
                alt="hero_mobile"
                className="w-[80%] h-auto max-h-[500px] object-contain"
              />
              {/* Red blur overlay */}
              <div className="absolute bottom-0 h-1/2 w-full bg-[linear-gradient(180deg,_transparent_0%,_#5860ff_35%)] backdrop-blur-[2px]"></div>
            </div>
          </div>
        </section>
        <section className="flex flex-col  container mx-auto px-4 lg:px-10 pt-10 pb-20 gap-10">
          <p className="lg:text-[20px] text-[16px] text-[#212529] font-semibold text-center">
            Recommended By
          </p>
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            <div className="w-full lg:w-1/2 flex flex-col gap-4 items-center lg:items-start justify-center">
              <h2 className="lg:text-[15px] text-[12px] text-[#5a63ff] font-semibold uppercase">
                Non-custodial wallet
              </h2>
              <div className="flex lg:text-[48px] text-[32px] font-semibold text-[#212529] flex-col items-center lg:items-start gap-1 lg:gap-3">
                <h2>Multi-Chain.</h2>
                <h2>Multi-Wallet.</h2>
                <h2>Non-Custodial.</h2>
              </div>
              <h3 className="text-base text-center lg:text-left lg:text-xl text-[#868686] lg:font-semibold">
                Create and manage your Bitcoin wallet and other crypto wallets
                all within the Best Crypto Wallet app. All your tokens, secure
                and ready to trade within one app.
              </h3>
            </div>
            <div className="w-full lg:w-1/2">
              <img src={multi} alt="multi" className="w-full" />
            </div>
          </div>
        </section>
        <section className="flex flex-col container mx-auto px-4 lg:px-10 py-20 gap-10">
          <h2 className="lg:text-[52px] text-[32px] text-[#212529] font-semibold text-center">
            The Best Wallet Ecosystem
          </h2>
          <div className="bg-[#6870f9] w-full p-2 rounded-md flex items-center justify-center gap-4 lg:gap-20">
            <div className="flex items-center justify-center gap-2">
              <img src={best_wallet} alt="best_wallet" className="w-4" />
              <p className="text-white text-center">Best Wallet</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <img src={best_card} alt="best_card" className="w-5" />
              <p className="text-white text-center">Best Card</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <img src={best_dex} alt="best_dex" className="w-5" />
              <p className="text-white text-center">Best Dex</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row  gap-4">
            <div className="hidden lg:flex flex-col gap-4 w-full lg:w-1/3">
              {appFeatures.map((feature) => (
                <p
                  key={feature}
                  className={`rounded-md px-2 py-2 text-sm flex items-center justify-between ${
                    selectedFeature === feature
                      ? "text-[#6070f2] bg-[#6070f2]/10"
                      : "text-[#667085] bg-[#f2f4f7]"
                  }`}
                  onClick={() => setSelectedFeature(feature)}
                >
                  {feature}
                  <FaChevronRight className="text-xs" />
                </p>
              ))}
            </div>
            <div className="w-full lg:w-1/3 flex justify-center items-center ">
              <img src={mobile} alt="mobile" className="w-2/3" />
            </div>
            <div className="flex flex-col justify-between w-full lg:w-1/3 gap-4">
              <div className="flex flex-col">
                <h1 className="lg:text-xl text-base font-semibold text-[#6070f2]">
                  Buy
                </h1>
                <p className="text-sm text-[#344054]">
                  Through Best Wallet's integration of Onramper, get the best
                  exchange rates and lowest processing fees when buying crypto,
                  including Bitcoin, Ethereum, Solana, and more! Hold $BEST for
                  reduced transaction fees when purchasing.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-sm text-[#344054]">60+ Chains Supported:</p>
                <img src={store_icon} alt="store_icon" className="" />
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col  px-4 lg:px-10 py-20 gap-10">
          <h2 className="lg:text-[52px] text-[32px] text-[#212529] font-semibold text-center">
            Featured In
          </h2>
          <div className="flex overflow-hidden w-full">
            <div className="flex gap-4 lg:justify-between loop-scroll">
              {featuredIn.map((item) => (
                <div
                  key={item.alt}
                  className="flex-none w-full lg:w-1/3 flex flex-col gap-4 p-10"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-[300px] mx-auto"
                  />
                  <p className="text-sm text-[#555555] text-center">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="flex flex-col-reverse items-center lg:flex-row container mx-auto px-4 lg:px-10 py-20 gap-10">
          <div className="w-full lg:w-1/2">
            <img src={soon} alt="soon" className="w-full" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h1 className="text-sm uppercase lg:text-[15px] font-bold text-[#5a63ff] text-center lg:text-left">
              Coming soon
            </h1>
            <p className="text-[30px] lg:text-[48px] text-[#212529] text-center lg:text-left font-semibold">
              Crypto Wallet Portfolio Management
            </p>
            <h1 className="text-base lg:text-[20px] text-[#868686] text-center lg:text-left">
              Manage all of your tokens in any wallet within the Best Crypto
              Wallet app. Import or create wallets, including a Bitcoin wallet,
              and track real-time profit or loss with quick views of purchase
              prices and current values. Label, order and search for easy
              management of funds.
            </h1>
          </div>
        </section>
        <section className="flex flex-col items-center lg:flex-row container mx-auto px-4 lg:px-10 py-20 gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h1 className="text-sm uppercase lg:text-[15px] font-bold text-[#5a63ff] text-center lg:text-left">
              Coming soon
            </h1>
            <p className="text-[30px] lg:text-[48px] text-[#212529] text-center lg:text-left font-semibold">
              Best Crypto Wallet Market Insights
            </p>
            <h1 className="text-base lg:text-[20px] text-[#868686] text-center lg:text-left">
              Best Wallet provides the latest market insights, including
              trending tokens, market sentiment, and real-time updates on key
              projects, allowing you to buy, sell, and manage your crypto more
              effectively.
            </h1>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={crypto} alt="crypto" className="w-full" />
          </div>
        </section>
        <section className="bg-[linear-gradient(180deg,#5860ff_37.64%,#fff_203.72%)]">
          <div className="container mx-auto px-4 lg:px-10 py-20 flex flex-col gap-5 items-center text-center ">
            <h1 className="text-4xl lg:text-[52px] font-semibold text-[#f5f5f5] text-center ">
              Trusted by Users Worldwide
            </h1>
            <p className="text-sm lg:text-base text-white text-center w-full lg:w-[50%]">
              Read real reviews to discover what sets Best Wallet apart and why
              we're rated a combined 4.5 stars across the App Store and Play
              Store.
            </p>
            <div className="flex lg:flex-row flex-col gap-5">
              <div className="flex flex-row gap-4 items-center">
                <img src={g} alt="g" className="size-5" />
                <img src={rate} alt="rate" className="" />
              </div>
              <div className="flex flex-row gap-4 items-center">
                <img src={a} alt="a" className="size-5" />
                <img src={rate} alt="rate" className="" />
              </div>
            </div>
          </div>
          <div className="flex pb-10 w-full overflow-hidden">
            <div className="flex flex-row gap-5 loop-scroll">
              {[...rating, ...rating].map((item, index) => (
                <div
                  key={index}
                  className="flex-none w-[350px] flex flex-col gap-3 rounded-xl p-5 bg-white min-h-[250px]"
                >
                  <div className="flex flex-row gap-2 items-center justify-between">
                    <p className="text-lg text-black font-semibold">
                      {item.name}
                    </p>
                    <img src={gColored} alt="gColored" className="size-5" />
                  </div>
                  <div className="flex flex-row gap-2">
                    {Array.from({ length: item.revieew }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" size={20} />
                    ))}
                  </div>
                  <p className="text-base text-start text-[#344054] flex-grow">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 lg:px-10 py-10">
          <div className="w-full relative rounded-4xl overflow-hidden bg-[linear-gradient(180deg,#5860ff_37.64%,#fff_203.72%)]">
            <img src={bg} alt="bg" className="w-full hidden lg:block" />
            <img
              src={bgMobile}
              alt="bgMobile"
              className="w-full block lg:hidden"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-5">
              <h1 className="text-2xl lg:text-[30px] font-semibold text-white text-center ">
                Airdrop
              </h1>
              <p className="text-sm lg:text-base text-white text-center w-full lg:w-[55%]">
                You can also earn $BEST tokens during the Best Airdrop campaign.
                Register and instantly start earning $BEST, by completing Daily
                and One-Time Quests and engaging with Best Wallet socials.
              </p>
              <button className="bg-white text-[#5860ff] px-4 py-2 rounded-md">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-10 py-10">
          <div className="w-full flex lg:flex-row flex-col gap-5 lg:gap-10 rounded-4xl overflow-hidden bg-[linear-gradient(180deg,#5860ff_37.64%,#fff_203.72%)] p-6 lg:p-14 py-10">
            <div className="w-full lg:w-[45%] flex flex-col gap-5 items-center justify-center">
              <img src={best_dex} alt="best_dex" className="w-16" />
              <div className="bg-white w-full rounded-4xl flex flex-col p-5 lg:p-10">
                <p className="text-sm lg:text-base text-black font-semibold text-left w-full">
                  Swap
                </p>
                <div className="flex flex-row gap-2 justify-between w-full">
                  <p className="text-lg lg:text-[32px] text-black w-full">
                    1.2
                  </p>
                  <span className="">
                    <i>
                      <svg
                        width="98"
                        height="41"
                        viewBox="0 0 98 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.09375"
                          y="1.30493"
                          width="96"
                          height="39"
                          rx="9.5"
                          fill="#F9F9F9"
                        ></rect>
                        <rect
                          x="1.09375"
                          y="1.30493"
                          width="96"
                          height="39"
                          rx="9.5"
                          stroke="#DDDDDD"
                        ></rect>
                        <g clip-path="url(#clip0_9893_194249)">
                          <path
                            d="M23.5938 31.8049C29.6689 31.8049 34.5938 26.8801 34.5938 20.8049C34.5938 14.7298 29.6689 9.80493 23.5938 9.80493C17.5186 9.80493 12.5938 14.7298 12.5938 20.8049C12.5938 26.8801 17.5186 31.8049 23.5938 31.8049Z"
                            fill="#627EEA"
                          ></path>
                          <path
                            d="M23.9375 12.5549V18.6531L29.0917 20.9562L23.9375 12.5549Z"
                            fill="white"
                            fillOpacity="0.602"
                          ></path>
                          <path
                            d="M23.9361 12.5549L18.7812 20.9562L23.9361 18.6531V12.5549Z"
                            fill="white"
                          ></path>
                          <path
                            d="M23.9375 24.908V29.0516L29.0951 21.916L23.9375 24.908Z"
                            fill="white"
                            fillOpacity="0.602"
                          ></path>
                          <path
                            d="M23.9361 29.0516V24.9073L18.7812 21.916L23.9361 29.0516Z"
                            fill="white"
                          ></path>
                          <path
                            d="M23.9375 23.949L29.0917 20.9563L23.9375 18.6545V23.949Z"
                            fill="white"
                            fillOpacity="0.2"
                          ></path>
                          <path
                            d="M18.7812 20.9563L23.9361 23.949V18.6545L18.7812 20.9563Z"
                            fill="white"
                            fillOpacity="0.602"
                          ></path>
                        </g>
                        <path
                          d="M45.4742 17.2599V20.3199H49.0742V21.7149H45.4742V24.9099H49.5242V26.3049H43.7642V15.8649H49.5242V17.2599H45.4742ZM58.3654 15.8799V17.2749H55.5904V26.3049H53.8804V17.2749H51.0904V15.8799H58.3654ZM68.4222 15.8799V26.3049H66.7122V21.7449H61.8072V26.3049H60.0972V15.8799H61.8072V20.3499H66.7122V15.8799H68.4222Z"
                          fill="black"
                        ></path>
                        <g clip-path="url(#clip1_9893_194249)">
                          <path
                            d="M77.5938 18.8049L81.5938 22.8049L85.5938 18.8049"
                            stroke="#C6C6C6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_9893_194249">
                            <rect
                              width="22"
                              height="22"
                              fill="white"
                              transform="translate(12.5938 9.80493)"
                            ></rect>
                          </clipPath>
                          <clipPath id="clip1_9893_194249">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(69.5938 8.80493)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </i>
                  </span>
                </div>
                <div className="flex flex-row gap-2 justify-between w-full items-center mt-2">
                  <p className="text-xs text-[#9b9b9b] text-left w-full">
                    $2663.83
                  </p>
                  <p className="text-xs text-[#9b9b9b] text-right w-full">
                    Balance: 1.2{" "}
                    <span className="text-[#5a63ff] ml-1">MAX</span>
                  </p>
                </div>
                <div className="flex flex-row gap-2 justify-between w-full mt-10">
                  <p className="text-lg lg:text-[32px] text-black w-full">
                    2225.6
                  </p>
                  <span className="with-icon with-icon__usdtFrame with-icon--appended">
                    <i>
                      <svg
                        width="110"
                        height="41"
                        viewBox="0 0 110 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.09375"
                          y="1.30493"
                          width="108"
                          height="39"
                          rx="9.5"
                          stroke="#DDDDDD"
                        ></rect>
                        <g clip-path="url(#clip0_9893_194262)">
                          <path
                            d="M23.5938 31.8049C29.6689 31.8049 34.5938 26.8801 34.5938 20.8049C34.5938 14.7298 29.6689 9.80493 23.5938 9.80493C17.5186 9.80493 12.5938 14.7298 12.5938 20.8049C12.5938 26.8801 17.5186 31.8049 23.5938 31.8049Z"
                            fill="#26A17B"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24.912 21.7559V21.7545C24.8364 21.76 24.4466 21.7834 23.5769 21.7834C22.8825 21.7834 22.3937 21.7628 22.2218 21.7545V21.7566C19.5488 21.639 17.5537 21.1736 17.5537 20.6167C17.5537 20.0605 19.5488 19.5951 22.2218 19.4755V21.2932C22.3964 21.3056 22.8969 21.3352 23.5886 21.3352C24.4184 21.3352 24.8343 21.3008 24.912 21.2939V19.4769C27.5795 19.5958 29.5698 20.0612 29.5698 20.6167C29.5698 21.1736 27.5795 21.6377 24.912 21.7559ZM24.912 19.2878V17.6612H28.6341V15.1807H18.4997V17.6612H22.2218V19.2871C19.1968 19.426 16.9219 20.0255 16.9219 20.7432C16.9219 21.461 19.1968 22.0598 22.2218 22.1994V27.412H24.912V22.198C27.9322 22.0591 30.2016 21.4603 30.2016 20.7432C30.2016 20.0262 27.9322 19.4274 24.912 19.2878Z"
                            fill="white"
                          ></path>
                        </g>
                        <path
                          d="M45.4138 15.8799V22.5249C45.4138 23.3149 45.6188 23.9099 46.0288 24.3099C46.4488 24.7099 47.0288 24.9099 47.7688 24.9099C48.5188 24.9099 49.0988 24.7099 49.5088 24.3099C49.9288 23.9099 50.1388 23.3149 50.1388 22.5249V15.8799H51.8488V22.4949C51.8488 23.3449 51.6638 24.0649 51.2938 24.6549C50.9238 25.2449 50.4288 25.6849 49.8088 25.9749C49.1888 26.2649 48.5038 26.4099 47.7538 26.4099C47.0038 26.4099 46.3188 26.2649 45.6988 25.9749C45.0888 25.6849 44.6038 25.2449 44.2438 24.6549C43.8838 24.0649 43.7038 23.3449 43.7038 22.4949V15.8799H45.4138ZM57.5102 26.4099C56.8102 26.4099 56.1802 26.2899 55.6202 26.0499C55.0602 25.7999 54.6202 25.4499 54.3002 24.9999C53.9802 24.5499 53.8202 24.0249 53.8202 23.4249H55.6502C55.6902 23.8749 55.8652 24.2449 56.1752 24.5349C56.4952 24.8249 56.9402 24.9699 57.5102 24.9699C58.1002 24.9699 58.5602 24.8299 58.8902 24.5499C59.2202 24.2599 59.3852 23.8899 59.3852 23.4399C59.3852 23.0899 59.2802 22.8049 59.0702 22.5849C58.8702 22.3649 58.6152 22.1949 58.3052 22.0749C58.0052 21.9549 57.5852 21.8249 57.0452 21.6849C56.3652 21.5049 55.8102 21.3249 55.3802 21.1449C54.9602 20.9549 54.6002 20.6649 54.3002 20.2749C54.0002 19.8849 53.8502 19.3649 53.8502 18.7149C53.8502 18.1149 54.0002 17.5899 54.3002 17.1399C54.6002 16.6899 55.0202 16.3449 55.5602 16.1049C56.1002 15.8649 56.7252 15.7449 57.4352 15.7449C58.4452 15.7449 59.2702 15.9999 59.9102 16.5099C60.5602 17.0099 60.9202 17.6999 60.9902 18.5799H59.1002C59.0702 18.1999 58.8902 17.8749 58.5602 17.6049C58.2302 17.3349 57.7952 17.1999 57.2552 17.1999C56.7652 17.1999 56.3652 17.3249 56.0552 17.5749C55.7452 17.8249 55.5902 18.1849 55.5902 18.6549C55.5902 18.9749 55.6852 19.2399 55.8752 19.4499C56.0752 19.6499 56.3252 19.8099 56.6252 19.9299C56.9252 20.0499 57.3352 20.1799 57.8552 20.3199C58.5452 20.5099 59.1052 20.6999 59.5352 20.8899C59.9752 21.0799 60.3452 21.3749 60.6452 21.7749C60.9552 22.1649 61.1102 22.6899 61.1102 23.3499C61.1102 23.8799 60.9652 24.3799 60.6752 24.8499C60.3952 25.3199 59.9802 25.6999 59.4302 25.9899C58.8902 26.2699 58.2502 26.4099 57.5102 26.4099ZM66.5329 15.8799C67.6429 15.8799 68.6129 16.0949 69.4429 16.5249C70.2829 16.9449 70.9279 17.5549 71.3779 18.3549C71.8379 19.1449 72.0679 20.0699 72.0679 21.1299C72.0679 22.1899 71.8379 23.1099 71.3779 23.8899C70.9279 24.6699 70.2829 25.2699 69.4429 25.6899C68.6129 26.0999 67.6429 26.3049 66.5329 26.3049H63.1279V15.8799H66.5329ZM66.5329 24.9099C67.7529 24.9099 68.6879 24.5799 69.3379 23.9199C69.9879 23.2599 70.3129 22.3299 70.3129 21.1299C70.3129 19.9199 69.9879 18.9749 69.3379 18.2949C68.6879 17.6149 67.7529 17.2749 66.5329 17.2749H64.8379V24.9099H66.5329ZM80.4977 15.8799V17.2749H77.7227V26.3049H76.0127V17.2749H73.2227V15.8799H80.4977Z"
                          fill="black"
                        ></path>
                        <g clip-path="url(#clip1_9893_194262)">
                          <path
                            d="M89.5938 18.8049L93.5938 22.8049L97.5938 18.8049"
                            stroke="#B4B4B4"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_9893_194262">
                            <rect
                              width="22"
                              height="22"
                              fill="white"
                              transform="translate(12.5938 9.80493)"
                            ></rect>
                          </clipPath>
                          <clipPath id="clip1_9893_194262">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(81.5938 8.80493)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </i>
                  </span>
                </div>
                <div className="flex flex-row gap-2 justify-between w-full items-center">
                  <p className="text-xs text-[#9b9b9b] text-left w-full">
                    $2225.97(-0.31%)
                  </p>
                  <p className="text-xs text-[#9b9b9b] text-right w-full">
                    Balance: 0
                  </p>
                </div>
                <button className="bg-[#5a63ff] text-white px-4 py-3 rounded-md mt-10">
                  Trade Now
                </button>
              </div>
            </div>
            <div className="w-full lg:w-[55%] flex flex-col gap-5 items-center lg:items-start justify-center">
              <p className="text-sm lg:text-base uppercase font-semibold text-[#75ffff] text-center ">
                Introducing
              </p>
              <h1 className="text-3xl lg:text-[48px] font-semibold text-white text-center lg:text-left">
                Swaps Powered by the Best DEX
              </h1>
              <p className="text-base lg:text-xl text-white text-center lg:text-left w-full lg:leading-relaxed">
                Trade anything. No registration. No hassle. <br /> <br /> Best
                DEX is a decentralized exchange built into the Best crypto
                wallet app, giving you the cheapest trades by matching with the
                best liquidity pools. Change your DEX trading experience with
                extra market insights, including real-time charts and news,
                token info and analytics, including security audits and
                community scores. Start using the DEX to earn points towards the
                BEST token airdrop.
              </p>
              <button className=" text-[#75ffff] font-semibold px-4 py-2 rounded-md flex items-center gap-2">
                Learn More <FaChevronRight />
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
