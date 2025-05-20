import { Project } from '@/types/common.types';
import { Link } from 'react-router-dom';

export const projects: Project[] = [
  {
    id: 1,
    name: 'Ballycullen Community Church',
    showOnHome: true,
    logo: 'logo-bcc',
    tags: ['wordpress', 'visual design', 'development', 'UX', 'SEO', 'Social Media'],
    thumbnail: 'bg-bcc',
    details: {
      description:
        'Local church website built using wordpress to help communicate abotu the church in positive visual way.',
      image: 'th-bcc',
      bodyText: (
        <div>
          <p>
            As I was the sole person working on this project, my responsibilities covered a full design process which
            included UX, UI, Frontend and backend development. The first phase started with meeting the client to
            discuss the requirements of their website.
          </p>
          <p>
            I carried out some research of other church websites in Ireland for comparison to get an idea of what
            features the new website should have. Using the research as a base, designs were created and sent to the
            client for approval. Once the designs were approved, the development of the website started.
          </p>
          <p>
            The website was created in{' '}
            <Link
              to="https://www.wordpress.org"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-dotted text-primary hover:decoration-solid global-transition"
            >
              Wordpress
            </Link>{' '}
            and a theme was created from the ground up. I usually choose to create a theme from scratch in order to have
            more control and manage the code correctly.
          </p>
          <p>
            Once the development was complete and tested from my perspective, a test site was sent to the client for
            their own round of testing. I encouraged them to test all aspects of the site, report any bugs and ask
            questions they may have on the functionality of the site.
          </p>
        </div>
      ),
      link: 'https://www.ballycullencc.com',
    },
    related: [2, 3],
  },
  {
    id: 2,
    name: 'Blessington No1 School',
    showOnHome: true,
    logo: 'logo-blessington',
    tags: ['wordpress', 'visual design', 'development', 'UX', 'SEO', 'Social Media'],
    thumbnail: 'bg-bless',
    details: {
      description: 'A primary school website built with wordpress to act as brochure and communication tool.',
      image: 'th-bless',
      bodyText: (
        <div>
          <p>
            Initially the school required a developer to support with the exisiting website due to technical issues, I
            came in to support but it unfolded that the site really needed a full replacement so first step I gathered
            the requirements from the school and created a detailed proposal on what the new website would do and how it
            would be done.
          </p>
          <p>
            Once approval was given I designed in Figma concept designs of the homepage, newspage and genric content
            page and sent to the Principal for feedback and approval. Once I recieved feedback and made changes the
            designs were approved which allowed me start with the code of the site.
          </p>
          <p>
            Wordpress was chosen as the platform for the site due to its ease of use and practially made the most sense
            for the school as the content creation would be simple news items and events.
          </p>
        </div>
      ),
      link: 'https://www.blessingtonno1.ie',
    },
    related: [1, 3],
  },
  {
    id: 3,
    name: 'Easy Technology',
    showOnHome: true,
    logo: 'logo-easy',
    tags: ['ux', 'visual design', 'development', 'SEO', 'Tailwind CSS'],
    thumbnail: 'bg-easy',
    details: {
      description: 'This is an example project built in React using Tailwind CSS.',
      image: 'th-easy',
      bodyText: (
        <div>
          <p>
            The purpose of this project is create an example of React App using Tailwind CSS. I used the visual design
            from a concept design I created in the past to show how to implement the design in React using Tailwind CSS.
          </p>
        </div>
      ),
      link: 'https://tailwind-example-git-master-paddy-griffins-projects.vercel.app/',
    },
    related: [1, 2],
  },
  {
    id: 4,
    name: 'Gason Counselling',
    logo: 'logo-gason',
    tags: ['wordpress', 'ux', 'development', 'SEO'],
    thumbnail: 'bg-gason',
    details: {
      description: 'A simple wordpress site for a counselling service.',
      image: 'th-gason',
      bodyText: (
        <div>
          <p>
            I was approached to aid in upgrading the website to be responsive and improve its UX and SEO capabilities.
          </p>
          <p>I upgraded the site to use a wordpress theme which was clean and easy to work with.</p>
          <p>
            One of the main goals was to modernise the site and make it more user friendly. I achieved this by using a
            simple theme which was easy to navigate and had a clean design.
          </p>
        </div>
      ),
      link: 'https://www.gasoncounselling.com/',
    },
    related: [5, 6],
  },
  {
    id: 5,
    name: 'Project 2 - MUI Example',
    logo: 'logo',
    tags: ['development', 'mui', 'react'],
    thumbnail: 'marina-zvada-i-rflWX15kg-unsplash',
    details: {
      description: 'This is a description of the project.',
      image: 'bg-name',
      bodyText: (
        <div>
          <p>
            The purpose of this project is create an example of React App using{' '}
            <Link
              to="https://mui.com/"
              className="underline decoration-dotted text-primary hover:decoration-solid global-transition"
              target="_blank"
            >
              Material UI.
            </Link>{' '}
            I used the visual design from a figma template to show how to implement the design.
          </p>
        </div>
      ),
      link: '#',
    },
    related: [4, 6],
  },
  {
    id: 6,
    name: 'Project 3 - Styled Components Example',
    logo: 'logo',
    tags: ['development', 'react', 'styled-components'],
    thumbnail: 'marina-zvada-i-rflWX15kg-unsplash',
    details: {
      description: 'This is a description of the project.',
      image: 'bg-name',
      bodyText: (
        <div>
          <p>
            The purpose of this project is create an example of React App using{' '}
            <Link
              to="https://styled-components.com/"
              className="underline decoration-dotted text-primary hover:decoration-solid global-transition"
              target="_blank"
            >
              Styled Components.
            </Link>{' '}
            I used the visual design from a figma template to show how to implement the design.
          </p>
        </div>
      ),
      link: '#',
    },
    related: [4, 5],
  },
];
