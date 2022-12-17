import axios from "axios";
import { useEffect } from "react";

const Component = () => {
  const data = useSelector((state) => state.todos);
  const { title } = data ?? { title: "" };

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return <>{title}</>;
};

export default Component;
