import { getColors } from "theme-colors";
import styles from "./styles.module.css";
import { useState } from "react";

export const ThemeColors: React.VFC = () => {
  const [color, setColor] = useState("#000000");

  const colorScale = getColors(color);

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Theme Colors</h1>
      <input
        className={styles.colorInput}
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <div className={styles.colors}>
        {Object.entries(colorScale).map(([key, value]) => (
          <>
            <div className={styles.colorName}>
              {key}: {value}
            </div>
            <div
              className={styles.colorExample}
              style={{ backgroundColor: value }}
            />
          </>
        ))}
      </div>
    </div>
  );
};
