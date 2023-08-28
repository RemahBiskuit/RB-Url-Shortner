import { useState } from "react";

const InputShortner = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };

  return (
    <div className="inputContainer">
      <h1>
        RemahBiskuit <span>Shortner</span>
        <div>
          <input
            type="text"
            placeholder="Paste a link to shorten it"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={handleClick}>Shorten It!</button>
        </div>
      </h1>
    </div>
  );
};

export default InputShortner;
