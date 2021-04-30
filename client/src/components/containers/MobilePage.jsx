import React from 'react';

export default function MobilePage() {
  return (
    <div className="mobile-page">
      <p>
        To use Guitar Scale Finder on mobile, download the iOS app
        (free, no ads):
      </p>
      <a
        className="mobile-link"
        rel="noopener noreferrer"
        href="https://apps.apple.com/us/app/guitar-scale-finder/id1487884068"
        target="_blank"
      >
        Guitar Scale Finder on the App Store
      </a>
      <p>Otherwise, please come back on a laptop or desktop.</p>
      <a
        className="mobile-link"
        id="contact"
        rel="noopener noreferrer"
        href="mailto: jake.ralph.carr@gmail.com"
        target="_blank"
      >
        Contact
      </a>
    </div>
  );
}
