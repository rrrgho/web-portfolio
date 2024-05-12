import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DownloadThisWebsite = () => {
  return (
    <span className="font-mainLight">
      I built this website with
      <FontAwesomeIcon icon={faHeart} className="text-pink-500 mx-2" />
      Get it on my{" "}
      <a
        href="https://github.com/rrrgho/igho-web-portfolio"
        className="text-blue-500"
        target="_blank"
      >
        GitHub
      </a>
    </span>
  );
};

export default DownloadThisWebsite;
