import { createRoutesFromElements, Route } from 'react-router-dom';
import Home from '@/pages/home/Home';
import NotFound from '@/pages/NotFoundPage';
import Projects from '@/pages/projects/Projects';
import About from '@/pages/about/About';
import Contact from '@/pages/contact/Contact';

export const AppRoutes = () => {
  return createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </>,
  );
};
