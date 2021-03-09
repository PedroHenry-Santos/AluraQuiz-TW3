interface Props {
  title: string;
  content?: string;
  urlSite?: string;
  urlImage?: string;
}

const HeadPage: React.FC<Props> = ({
  title,
  content,
  urlSite,
  urlImage = ''
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={content} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlSite} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={content} />
      <meta property="og:image" content={urlImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlSite} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={content} />
      <meta property="twitter:image" content={urlImage} />
    </>
  );
};

export default HeadPage;
