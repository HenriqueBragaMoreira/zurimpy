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
  icon: IconComponent;
  path: string;
};

export const routes: RoutesProps[] = [
  {
    id: 1,
    name: 'Home',
    icon: Home,
    path: '/home'
  },
  {
    id: 2,
    name: 'Dashboard',
    icon: LineChart,
    path: '/dashboard'
  },
  {
    id: 3,
    name: 'Teams',
    icon: Users,
    path: '/teams'
  },
  {
    id: 4,
    name: 'Boards',
    icon: GalleryVerticalEnd,
    path: '/boards'
  },
  {
    id: 5,
    name: 'Inbox',
    icon: MessageSquare,
    path: '/inbox'
  },
  {
    id: 6,
    name: 'Timeline',
    icon: Calendar,
    path: '/timeline'
  },
  {
    id: 7,
    name: 'More Options',
    icon: LayoutGrid,
    path: '/moreOptions'
  }
];
