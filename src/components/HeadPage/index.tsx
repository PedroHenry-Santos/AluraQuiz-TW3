import Head from 'next/head';
import { Content } from '../Widget';

interface Props {
  title: string;
  content?: string;
  urlSite?: string;
  urlImage?: string;
}

const HeadPage: React.FC<Props> = ({ title, urlSite, urlImage }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={Content} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlSite} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={Content} />
      <meta property="og:image" content={urlImage} />
    </Head>
  );
};

export default HeadPage;
