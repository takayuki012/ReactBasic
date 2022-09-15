import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./componets/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlg = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlg || setFaceShowFlg(true);
    } else {
      faceShowFlg && setFaceShowFlg(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlg}>オンオフ</button>
      <p>{num}</p>
      {faceShowFlg && <p>(^^)</p>}
    </>
  );
};

export default App;
