import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
const Canvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [ctx, setCtx] = useState();
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.66;
    canvas.height = window.innerHeight * 0.45;
    const context = canvas.getContext("2d");
    context.strokeStyle = "black"; // 선의 색 {color}
    context.lineWidth = 2.5; // 선의 굵기
    contextRef.current = context;
    setCtx(context);
  }, []);

  const controlDrawing = (value) => {
    setIsDrawing(value);
  };

  const drawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    if (ctx && !isDrawing) {
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
    } else if (ctx && isDrawing) {
      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
    }
  };

  const toBlob = (url) => {
    const splitDataUrl = url.split(",");
    const byteString =
      splitDataUrl[0].indexOf("base64") >= 0
        ? atob(splitDataUrl[1])
        : decodeURI(splitDataUrl[1]);
    const mimeString = splitDataUrl[0].split(":")[1].split(";")[0];
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);
    return new Blob([ia], { type: mimeString });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    const canvasImg = canvasRef.current;
    // canvasImg.toBlob(function (blob) {
    //   const formData = new FormData();
    //   formData.append("my-file", blob, "filename.png");
    //   console.log(formData);
    //   for (let key of formData.keys()) {
    //     console.log(key);
    //   }
    //   for (let value of formData.values()) {
    //     console.log(value);
    //   }
    // });

    const dataUrl = canvasRef.current.toDataURL("image/png", 0.6);
    const blob = toBlob(dataUrl);
    let formData = new FormData();
    formData.append("canvas", blob);
    for (let key of formData.keys()) {
      console.log(key);
    }
    for (let value of formData.values()) {
      console.log(value);
    }
    console.log(JSON.stringify(formData));
  };

  return (
    <CanvasWrapper>
      <form encType="multipart/form-data">
        <canvas
          ref={canvasRef}
          name="canvas"
          onMouseDown={() => controlDrawing(true)}
          onMouseUp={() => controlDrawing(false)}
          onMouseMove={drawing}
          onMouseLeave={() => controlDrawing(false)}
        ></canvas>
        <button type="submit" onClick={SubmitHandler}>
          test
        </button>
      </form>
    </CanvasWrapper>
  );
};

const CanvasWrapper = styled.div`
  form {
    border: 2px solid black;
    background-color: #fff;
  }
  button {
    margin-top: 30px;
    width: 200px;
    height: 50px;
    &:hover {
      background-color: blue;
      color: white;
    }
  }
`;

export default Canvas;
