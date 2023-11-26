import React from "react";
import GridLoader from "react-spinners/GridLoader";

const GridLoaderBar = ({ loading, height, width }) => {
  return (
    <div className="text-lg text-center py-6">
      <GridLoader
        color="#34D399"
        loading={loading}
        height={height ? height : 20}
        width={width ? width : 2}
        radius={2}
        margin={2}
      />
    </div>
  );
};

export default GridLoaderBar;
