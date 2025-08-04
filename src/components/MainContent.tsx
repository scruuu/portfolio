import React from 'react';
import Home from './Home';
import Issues from './Issues';
import Projects from './Projects';
import Discussions from './Discussions';

interface MainContentProps {
  selected: string;
}

const MainContent: React.FC<MainContentProps> = ({ selected }) => {
  switch (selected) {
    case 'Home':
      return <Home />;
    case 'Issues':
      return <Issues />;
    case 'Projects':
      return <Projects />;
    case 'Discussions':
      return <Discussions />;
    default:
      return <Home />;
  }
};

export default MainContent;
