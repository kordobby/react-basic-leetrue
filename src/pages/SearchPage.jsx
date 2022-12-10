const SearchPage = () => {
  const data = [1, 2, 3, 4, 5];

  return (
    <>
      {data.map((value, index) => {
        return <>{value}</>;
      })}
    </>
  );
};
