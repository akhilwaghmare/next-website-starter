import Head from 'next/head';

const CustomHead = () => {
  return (
    <Head>
      <title>Website Title</title>
      <link rel="icon" href="/favicon.png" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet"></link>
    </Head>
  );
}

export default CustomHead;