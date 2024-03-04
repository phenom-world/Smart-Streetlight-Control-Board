import Maintenance from '@/components/maintenance';
import Overview from '@/components/overview';
import { ModeToggle } from '@/components/ui/mode-toggler';
import { SegmentedControl, TabsContent } from '@/components/ui/tabs';
import { dashboardTabs } from '@/constants';
import { useState } from 'react';

export default function DashboardPage() {
  const [tab, setTab] = useState<string>('overview');
  return (
    <div className='flex-col md:flex max-w-full'>
      <div className='flex-1 space-y-4 p-4 md:px-8 '>
        <div className='flex items-center justify-between space-y-2'>
          <h2 className='text-xl md:text-2xl font-bold tracking-tight'>Dashboard</h2>
          <ModeToggle />
        </div>
        <SegmentedControl data={dashboardTabs} onChange={(value) => setTab(value)} value={tab}>
          <TabsContent value='overview' className='space-y-4'>
            <Overview />
          </TabsContent>
          <TabsContent value='maintenance' className='space-y-4'>
            <Maintenance />
          </TabsContent>
        </SegmentedControl>
      </div>
    </div>
  );
}
