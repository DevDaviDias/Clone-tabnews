import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  // Aplica a classe no body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <label style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer"
    }}>
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        style={{ display: "none" }}
      />
      <span
        style={{
          width: "50px",
          height: "25px",
          background: darkMode ? "#333" : "#ccc",
          borderRadius: "25px",
          position: "relative",
          transition: "0.3s"
        }}
      >
        <span
          style={{
            content: "",
            position: "absolute",
            top: "3px",
            left: darkMode ? "27px" : "3px",
            width: "19px",
            height: "19px",
            background: "white",
            borderRadius: "50%",
            transition: "0.3s"
          }}
        />
      </span>
      {darkMode ? "🌙" : "☀️"}
    </label>
  );
}
