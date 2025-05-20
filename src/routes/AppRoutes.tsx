import { createRoutesFromElements, Route } from 'react-router-dom';
import Home from '@/pages/home/Home';
import NotFound from '@/pages/NotFoundPage';
import Projects from '@/pages/projects/Projects';
import About from '@/pages/about/About';
import Contact from '@/pages/contact/Contact';
import ProjectDetails from '@/components/custom/projects/Details';
import ProjectList from '@/components/custom/projects/List';

export const AppRoutes = () => {
  return createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />}>
        <Route index element={<ProjectList />} />
      </Route>
      <Route path="/projects/:name" element={<ProjectDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </>,
  );
};
