import React, { useState } from "react";
import { themecolor } from "../features/Theme";
import { useDispatch } from "react-redux";

const Theme = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type='text'
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(themecolor(color));
        }}>
        Change color
      </button>
    </div>
  );
};

export default Theme;
