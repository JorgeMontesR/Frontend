import { useRoutes } from 'react-router-dom';

import config from '../config';
import MainRoutes from './MainRoutes';

export default function AppRoutes() {
  return useRoutes(MainRoutes, config.basename);
}
