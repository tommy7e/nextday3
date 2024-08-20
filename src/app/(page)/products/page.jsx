'use client';

import MainLayout from '@/app/layout/Layout';
import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import Card from '@/app/components/Card';
import LoadingPage from '@/app/loading';
import { Tilt_Neon } from 'next/font/google'

export default function ProductPage() {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const {data,error,isLoading} = useSWR('https://freetestapi.com/api/v1/movies', fetcher);
  if (isLoading) return <LoadingPage/>
  console.log(data);
  
  return (
    <MainLayout>
      <section className='max-w-screen min-h-screen flex flex-wrap justify-center gap-5'>
        {data.map((product) => (
          <Card
            key={product.id}
            title={product.title}       // Assuming 'title' should be 'product.title' and not 'product.image'
            desc={product.plot}
            image={product.poster}
            href={"/products/" + product.id}
          />
        ))}
      </section>
    </MainLayout>
  )
}
