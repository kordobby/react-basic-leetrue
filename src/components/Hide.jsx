import { setHttpClientAndAgentOptions } from "next/dist/server/config";
import React from "react";
import { useEffect } from "react";

const Hide = () => {
  const data = useSelector((state) => state.todos);

  useEffect(() => {
    if (loading === false) return;
    setTitle();
  }, [loading]);

  return (
    <>
      <h1>Hide</h1>
    </>
  );
};

export default Hide;
