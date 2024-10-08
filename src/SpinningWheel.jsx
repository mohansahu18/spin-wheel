import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

export default function SpinningWheel() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [userInput, setUserInput] = useState("");

  const data = Array.from({ length: 60 }, (_, i) => ({ option: `${i + 1}` }));

  const handleSpinClick = () => {
    if (!userInput || parseInt(userInput) < 1 || parseInt(userInput) > 60) {
      alert("Please enter a number between 1 and 60");
      return;
    }
    const newPrizeNumber = parseInt(userInput) - 1;
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
        padding: "1rem",
      }}
    >
      <div style={{ marginBottom: "2rem" }}>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
          backgroundColors={["#ff8f43", "#70bbe0", "#0b3351", "#f9dd50"]}
          textColors={["#ffffff"]}
          outerBorderColor="#eeeeee"
          outerBorderWidth={10}
          innerRadius={0}
          innerBorderColor="#30261a"
          innerBorderWidth={0}
          radiusLineColor="#eeeeee"
          radiusLineWidth={1}
          fontSize={12}
          perpendicularText={true}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <input
          type="number"
          min="1"
          max="60"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter a number (1-60)"
          style={{
            width: "200px",
            padding: "0.5rem",
            fontSize: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleSpinClick}
          disabled={mustSpin}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            backgroundColor: mustSpin ? "#cccccc" : "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: mustSpin ? "not-allowed" : "pointer",
          }}
        >
          {mustSpin ? "Spinning..." : "SPIN"}
        </button>
      </div>
    </div>
  );
}
