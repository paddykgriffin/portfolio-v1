import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Helmet } from 'react-helmet-async';
import type React from 'react';
import ScrollToTop from '../navigation/ScrollToTop';
import ResetScroll from '../ResetScroll';

interface LayoutProps {
  children: React.ReactNode;
  emptyPage?: boolean;
  pageTitle?: string;
}

const Layout = ({ pageTitle, emptyPage, children }: LayoutProps) => {
  const projectTitle = import.meta.env.REACT_APP_PROJECT_NAME || import.meta.env.REACT_APP_SLUG;

  return (
    <>
      <ResetScroll />
      {/* Set title fallback in Layout if none set by child */}
      <Helmet>
        <title>{pageTitle ? `${pageTitle} | ${projectTitle}` : projectTitle}</title>
      </Helmet>

      {emptyPage ? (
        children
      ) : (
        <div id="site-wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </>
  );
};

export default Layout;
