import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingRows = ({ height, count, margin }) => {
  return (
    <Skeleton height={height} count={count} style={{ margin: `${margin}` }} />
  );
};

export default LoadingRows;
