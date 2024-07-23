import { HiOutlineMoon } from "react-icons/hi";
import { BsSun } from "react-icons/bs";
import useTheme from "../custom-hooks/useTheme";

const Banner = () => {
  const { selectedTheme, toggleTheme } = useTheme();

  return (
    <div
      className={`card ${selectedTheme} flex flex-col justify-center items-center p-6`}
    >
      <h4 className="mb-2">Current Theme: {selectedTheme}</h4>
      <span>
        {selectedTheme === "light" ? (
          <HiOutlineMoon
            size={40}
            className="icon mt-4 mb-4"
            onClick={toggleTheme}
          />
        ) : (
          <BsSun size={40} className="icon mt-4 mb-4" onClick={toggleTheme} />
        )}
      </span>
      <p>Click to change</p>
    </div>
  );
};

export default Banner;
