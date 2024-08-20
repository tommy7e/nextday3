"use client"

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MainLayout from '@/app/layout/Layout';
import { Main } from 'next/document';
import Link from 'next/link';

export default function ErrorPage({error}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <MainLayout>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <p style={{ fontSize: '1.5rem' }}>Why error? {error.message}</p>
      <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Go back to the homepage
      </Link>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
    </MainLayout>
  );
};