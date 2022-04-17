import React from 'react';


function Error({ children }) {
  return (
    <wrapper>
      <alert>!</alert>
      <message>{children}</message>
    </wrapper>
  );
}

export default Error