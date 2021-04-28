import React from 'react';
import ContentLoader from 'react-content-loader'

function LoadingBlock() {
    return (
      <ContentLoader 
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="125" cy="119" r="119" /> 
      <rect x="0" y="243" rx="6" ry="6" width="280" height="30" /> 
      <rect x="0" y="283" rx="6" ry="6" width="280" height="84" /> 
      <rect x="0" y="383" rx="6" ry="6" width="80" height="30" /> 
      <rect x="122" y="374" rx="20" ry="20" width="158" height="44" />
    </ContentLoader>
  );
}

export default LoadingBlock;
