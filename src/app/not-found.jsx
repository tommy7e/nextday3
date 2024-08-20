import React from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '4rem' }}>404</h1>
      <p style={{ fontSize: '1.5rem' }}>Page Not Found</p>
      <p>
        <Link href="/">
          Go back to the homepage
        </Link>
      </p>
    </div>
  );
};