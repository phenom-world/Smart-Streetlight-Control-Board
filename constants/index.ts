import { Tab } from '@/types';

const overviewOptions: Tab[] = [
  {
    label: 'Today',
    value: 'today',
  },
  {
    label: 'Yesterday',
    value: 'yesterday',
  },
  {
    label: 'Last 7 days',
    value: 'last-7-days',
  },
  {
    label: 'Last 30 days',
    value: 'last-30-days',
  },
];

const dashboardTabs: Tab[] = [
  { label: 'Savings & Testing', value: 'overview' },
  { label: 'Maintenance', value: 'maintenance' },
];

export { dashboardTabs, overviewOptions };
