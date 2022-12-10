export const matchColors = (colors) => {
  switch (colors) {
    case "warning":
      return "red";
    case "confirm":
      return "blue";
    case "cancel":
      return "yellow";
    default:
      return "black";
  }
};
