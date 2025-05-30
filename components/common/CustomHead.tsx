import Head from 'next/head';
import { PropsWithChildren } from 'react';

type Props = {
  canonicalLink: string;
};

export const CustomHead = ({
  canonicalLink,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Head>
      {canonicalLink ? <link rel="canonical" href={canonicalLink} /> : null}
      {children}
    </Head>
  );
};
