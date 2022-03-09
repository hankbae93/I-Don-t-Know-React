import { useState } from "react";

const withPersonData = (WrappedComponent) => {
  const Component = (props) => {
    const [data, setData] = useState([
      {
        name: "RANJA",
        age: 30,
      },
    ]);

    const [message, setMessage] = useState("");
    const handleMessage = (e) => setMessage(e.target.value);

    // 중복 로직 등등

    const combinedProps = {
      ...props,
      data,
      setData,
      message,
      handleMessage,
    };
    return <WrappedComponent {...combinedProps} />;
  };

  return Component;
};

export default withPersonData;
