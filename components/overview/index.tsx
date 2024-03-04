import { TestingSection } from '@/components/testing-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDateRangePicker } from '@/components/ui/date-picker';
import { SelectInput } from '@/components/ui/select';
import { overviewOptions } from '@/constants';
import { useState } from 'react';
import { Chart } from '../chart';

const Overview = () => {
  const [filter, setFilter] = useState<string>('today');
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
      <Card className='col-span-3 md:col-span-4'>
        <CardHeader className='justify-between md:flex-row flex-col'>
          <div>
            <CardTitle>Energy Savings</CardTitle>
            <CardDescription>View the energy savings for the past week(s).</CardDescription>
          </div>
          <div className='flex gap-2 flex-wrap md:flex-nowrap pt-2 md:pt-0'>
            <SelectInput
              options={overviewOptions}
              field={{
                value: filter,
                onChange: setFilter,
              }}
            />
            <CalendarDateRangePicker />
          </div>
        </CardHeader>
        <CardContent className='pl-2 mb-12'>
          <Chart />
        </CardContent>
      </Card>
      <Card className='col-span-3'>
        <CardHeader>
          <CardTitle>Testing</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <TestingSection />
        </CardContent>
      </Card>
    </div>
  );
};

export default Overview;
