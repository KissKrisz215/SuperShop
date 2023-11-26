import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = ({ loading }) => {
  return (
    <div className="text-lg text-center py-6">
      <ClipLoader
        color="#34D399"
        loading={loading}
        height={20}
        width={2}
        radius={2}
        margin={2}
      />
    </div>
  );
};

export default LoadingSpinner;
