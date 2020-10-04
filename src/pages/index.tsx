import { GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';

import { Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface HomeProps {
  recomendedProducts: IProduct[];
}

export default function Home({ recomendedProducts }: HomeProps) {
  return (
    <div>

      <section>
        <Title>Products</Title>

        <ul>
          {recomendedProducts.map(recomendedProducts => {
            return (
              <li key={recomendedProducts.id}>
                {recomendedProducts.title}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch('http://localhost:3333/recommended');
  const recomendedProducts = await response.json();

  return {
    props: {
      recomendedProducts
    }
  }
}
