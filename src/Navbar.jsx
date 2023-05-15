import reactLogo from "./assets/react.svg";

export default function Navbar() {
  return (
    <div className="header-container">
      <div className="left-div">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p> ReactFacts</p>
      </div>
      <nav>React Course - Project 1</nav>
    </div>
  );
}
