import React, { useState } from 'react';

const ToggleMessage = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                Toggle Message
            </button>
            {isVisible && <p>This message is conditionally rendered!</p>}
        </div>
    );
};
function PostComponent({ name, role, time, profilePic, content }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "8px",
        padding: "15px",
        marginBottom: "20px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }
    }
    >
      {/* Header */}
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <img
          src={profilePic}
          alt="Profile"
          style={{ height: 48, width: 48, borderRadius: "50%" }}
        />
        <div style={{ marginLeft: "10px" }}>
          <b>{name}</b>
          <div style={{ color: "gray", fontSize: "14px" }}>{role}</div>
          <div style={{ color: "gray", fontSize: "12px" }}>{time}</div>
        </div>
      </div>

      {/* Post content */}
      <div style={{ fontSize: "14px", lineHeight: "1.5" }}>{content}</div>
    </div>
  );
}

// Main App
function App() {
  return (
    <div
      style={{
        backgroundColor: "#dfe6e9",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* Center container */}
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <PostComponent
          name="Rosario Borgesi"
          role="Blockchain Engineer"
          time="5m"
          profilePic="https://media.licdn.com/dms/image/v2/D4D03AQH4HVm8o3VgAQ/profile-displayphoto-scale_100_100/B4DZizudjAHYAc-/0/1755361959479?e=1761177600&v=beta&t=csdSlf1k2l4wPaQiIuTpx1MIQFQdzSkslKYW77bDv1s"
          content="Day 3 of Foundry Advanced 🚀 with Cyfrin Updraft. Today I finally cleared some challenges I had skipped before: ✅ Solidity 101 Section 1–4 NFTs ✅ Foundry Fundamentals Section 1–2 NFTs 💡 Pro tip: cast send is your best friend when you want to interact with a smart contract function directly from the CLI."
        />

        <PostComponent
          name="Alice Johnson"
          role="Frontend Developer"
          time="10m"
          profilePic="https://randomuser.me/api/portraits/women/44.jpg"
          content="Just finished building my new React portfolio! 💻 Check it out and give feedback. 🎯"
        />

        <PostComponent
          name="Bob Smith"
          role="UI/UX Designer"
          time="30m"
          profilePic="https://randomuser.me/api/portraits/men/32.jpg"
          content="Exploring new UI trends for 2025. Minimalism is 🔑. Let me know your thoughts on micro-interactions."
        />
        <ToggleMessage />
      </div>
    </div>
  );
}

export default App;
