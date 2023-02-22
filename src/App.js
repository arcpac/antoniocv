
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Portfolio/Portfolio.css';


import PortfolioTitle from './components/Portfolio/Title';
import Body from './components/Portfolio/Body';
import Content from './components/Portfolio/Content';
import Articles from './components/Portfolio/Articles';

function App() {
  const ARTICLES = [
    {
      id: '1',
      title: 'Cybersecurity 1',
      tag: 'Cybersecurity',
      description: 'I completely re-recorded the "Routing" (20), "Authentication" (21), "Deployment" (22) and "React Summary" (29) Routing" (20), "Authentication" (21), "Deployment" (22) and "React Summary" (29) sections.sections.',
      link: 'www.google.com',
      date: new Date(2020, 7, 14),
    },
    {
      id: '2',
      title: 'Programming',
      tag: 'Programming,',
      description: 'I completely re-recorded the "Routing" (20), "Authentication" (21), "Deployment" (22) and "React Summary" (29) sections.',
      link: 'www.google.com',
      date: new Date(2020, 7, 14),
    },
    {
      id: '3',
      title: 'Frontend',
      tag: 'Frontend 3',
      description: 'I completely re-recorded the "Routing" (20), "Authentication" (21), "Deployment" (22) and "React Summary" (29) sections.',
      link: 'www.google.com',
      date: new Date(2020, 7, 14),
    },
    {
      id: '4',
      title: 'Frontend',
      tag: 'Frontend 3, Bootstrap, Tailwind',
      description: 'I completely re-recorded the "Routing" (20), "Authentication" (21), "Deployment" (22) and "React Summary" (29) sections.',
      link: 'www.google.com',
      date: new Date(2020, 7, 14),
    },
    
  ]
  return (
    <div className="App">
      <PortfolioTitle />
      <Body />
      <Content />
      <Articles items={ARTICLES}/>
    </div>
  );
}

export default App;
