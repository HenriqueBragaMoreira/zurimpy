import {
  Home,
  LineChart,
  Users,
  MessageSquare,
  Calendar,
  LayoutGrid,
  GalleryVerticalEnd
} from 'lucide-react';

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export type RoutesProps = {
  id: number;
  name: string;
  navName?: string;
  icon: IconComponent;
  path: string;
};

export const routes: RoutesProps[] = [
  {
    id: 1,
    name: 'Home',
    navName: 'Tasks Home',
    icon: Home,
    path: '/home'
  },
  {
    id: 2,
    name: 'Dashboard',
    navName: 'Dashboard',
    icon: LineChart,
    path: '/dashboard'
  },
  {
    id: 3,
    name: 'Teams',
    navName: 'Teams',
    icon: Users,
    path: '/teams'
  },
  {
    id: 4,
    name: 'Boards',
    navName: 'Boards',
    icon: GalleryVerticalEnd,
    path: '/boards'
  },
  {
    id: 5,
    name: 'Inbox',
    navName: 'Inbox',
    icon: MessageSquare,
    path: '/inbox'
  },
  {
    id: 6,
    name: 'Timeline',
    navName: 'Timeline',
    icon: Calendar,
    path: '/timeline'
  },
  {
    id: 7,
    name: 'More Options',
    navName: 'More Options',
    icon: LayoutGrid,
    path: '/moreOptions'
  }
].map((route) => ({ ...route, navName: route.navName || 'Back' }));
