import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
}

const SEO = ({ title, description }: SEOProps) => {
  return (
    <Helmet>
      <title>
        {title} | {import.meta.env.REACT_APP_PROJECT_NAME}
      </title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default SEO;
