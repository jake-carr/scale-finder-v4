import React from 'react';

export default function Footer() {
  return (
    <div
      className="footer"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span>App Store Link</span>
      <span>Contact</span>
    </div>
  );
}
