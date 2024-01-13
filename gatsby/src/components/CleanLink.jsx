import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';

const CleanLink = ({ url, children }) => {
  const [isExternal, setIsExternal] = useState(false);
  const [transformedUrl, setTransformedUrl] = useState(url);

  const base = 'https://www.cbcreativetherapy.ca';

  // eslint-disable-next-line no-useless-escape
  const isValidUrl = (urlString) => {
    try {
      return Boolean(new URL(urlString));
    } catch (e) {
      return false;
    }
  };

  useEffect(() => {
    const isUrlExternal = isValidUrl(url);

    if (isUrlExternal) {
      setIsExternal(true);

      if (url.includes(base)) {
        setTransformedUrl(url.replace(base, ''));
        setIsExternal(false);
      }
    }
  }, [url]);

  return (
    <>
      {isExternal ? (
        <a href={transformedUrl} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <Link to={transformedUrl}>{children}</Link>
      )}
    </>
  );
};

export default CleanLink;
