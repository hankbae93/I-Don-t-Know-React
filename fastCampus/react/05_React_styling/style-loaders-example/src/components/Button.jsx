import React, { useState } from "react";
import styles from "./Button.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Button = (props) => {
  const [isClick, setIsClick] = useState(false);
  console.log(cx("active", { primary: isClick }));
  return (
    <button
      onClick={() => setIsClick((prev) => !prev)}
      //   className={styles[isClick ? "button" : "loading"]}
      {...props}
      className={cx("active", { primary: isClick })}
    >
      클릭
    </button>
  );
};

export default Button;
