import React from "react";

const SocialLinksSkeleton = () => {
  return (
    <div className="gap-2 hidden sm:flex animate-pulse">
      {/* Skeleton for Facebook */}
      <div className="w-6 h-6 bg-gray-300 rounded-md"></div>

      {/* Skeleton for Twitter */}
      <div className="w-6 h-6 bg-gray-300 rounded-md"></div>

      {/* Skeleton for Instagram */}
      <div className="w-6 h-6 bg-gray-300 rounded-md"></div>
    </div>
  );
};

export default SocialLinksSkeleton;
