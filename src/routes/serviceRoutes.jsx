import BED from '../Files/Services/BED';
import FED from '../Files/Services/FED';
import FSD from '../Files/Services/FSD';
import IS from '../Files/Services/IS';
import JavaI from '../Files/Services/JavaI';
import PA from '../Files/Services/PA';
import PD from '../Files/Services/PD';
import ProjectD from '../Files/Services/ProjectD';
import ProjectM from '../Files/Services/ProjectM';
import PythonI from '../Files/Services/PythonI';

export const serviceRoutes = [
  { path: "/bed", element: <BED /> },
  { path: "/fed", element: <FED /> },
  { path: "/fsd", element: <FSD /> },
  { path: "/is", element: <IS /> },
  { path: "/javai", element: <JavaI /> },
  { path: "/pa", element: <PA /> },
  { path: "/pd", element: <PD /> },
  { path: "/projectd", element: <ProjectD /> },
  { path: "/projectm", element: <ProjectM /> },
  { path: "/pythoni", element: <PythonI /> },
];
