import React, { useState } from "react";

const translations = {
  en: {
    welcome: "Welcome to CashQuiz.in",
    selectGame: "Select Your Game",
    quiz: "Quiz Game",
    ludo: "Ludo Game",
    login: "Login",
    walletBalance: "Wallet Balance",
    addMoney: "Add Money",
    withdrawMoney: "Withdraw Money",
    language: "Language"
  },
  hi: {
    welcome: "कैशक्विज़.इन में आपका स्वागत है",
    selectGame: "अपना गेम चुनें",
    quiz: "क्विज़ गेम",
    ludo: "लूडो गेम",
    login: "लॉगिन करें",
    walletBalance: "वॉलेट बैलेंस",
    addMoney: "पैसे जोड़ें",
    withdrawMoney: "पैसे निकालें",
    language: "भाषा"
  }
};

export default function App() {
  const [language, setLanguage] = useState("en");
  const [wallet, setWallet] = useState(500);

  const t = translations[language];

  return (
    <div style={{ fontFamily: "Arial", maxWidth: 600, margin: "auto", padding: 20 }}>
      <header style={{ marginBottom: 30 }}>
        <h1>{t.welcome}</h1>
        <div>
          {t.language}:{" "}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{ padding: 5 }}
          >
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
          </select>
        </div>
      </header>

      <section style={{ marginBottom: 20 }}>
        <h2>{t.selectGame}</h2>
        <button style={{ marginRight: 10, padding: "10px 20px" }}>{t.quiz}</button>
        <button style={{ padding: "10px 20px" }}>{t.ludo}</button>
      </section>

      <section style={{ marginBottom: 20 }}>
        <h3>{t.walletBalance}: ₹{wallet}</h3>
        <button
          onClick={() => setWallet(wallet + 100)}
          style={{ marginRight: 10, padding: "8px 15px" }}
        >
          {t.addMoney}
        </button>
        <button
          onClick={() => setWallet(wallet - 100)}
          disabled={wallet < 100}
          style={{ padding: "8px 15px" }}
        >
          {t.withdrawMoney}
        </button>
      </section>

      <section>
        <button style={{ padding: "10px 25px", fontSize: 16 }}>{t.login}</button>
      </section>
    </div>
  );
}
