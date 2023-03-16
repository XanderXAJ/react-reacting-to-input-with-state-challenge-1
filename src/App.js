import { useState } from "react";

export default function Picture() {
  const [lastClicked, setLastClicked] = useState("background");

  function trackClick(element) {
    return (e) => {
      e.stopPropagation();
      setLastClicked(element);
    };
  }

  return (
    <div
      className={`background ${
        lastClicked === "background" ? "background--active" : ""
      }`}
      onClick={trackClick("background")}
    >
      <img
        className={`picture ${
          lastClicked === "picture" ? "picture--active" : ""
        }`}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={trackClick("picture")}
      />
    </div>
  );
}
