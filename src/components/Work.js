import { Box } from '@chakra-ui/react';
import { SecHeading } from './Basic/SecHeading';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data';

export const Work = () => {
  return (
    <Box as="section" my="70px" id="work">
      <SecHeading content={'Work'} />
      {projects.map((project, index) => {
        return <ProjectCard key={index} projectInfo={project} />;
      })}
    </Box>
  );
};
