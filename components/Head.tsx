import React, { ReactElement } from 'react';
import Head from 'next/head';
interface Props {
  title?: string;
  children?: React.ReactNode;
}

export default function HeadComponent({
  title,
  children,
}: Props): ReactElement {
  console.log(title);
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Head>

      <div>{children}</div>
    </div>
  );
}
