import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CustomTooltip } from '@/components/ui/tooltip';
import { getFillColor } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { BsLightbulbFill } from 'react-icons/bs';
import LightControlGroup from '../light-group';

const Maintenance = () => {
  const { theme } = useTheme();
  const [sliderValues, setSliderValues] = useState({
    groupA: [0, 0, 0],
    groupB: [0, 0, 0],
  });

  const handleSliderChange = (group: 'groupA' | 'groupB', index: number, newValue: number[]) => {
    setSliderValues((prevValues) => ({
      ...prevValues,
      [group]: prevValues[group].map((value, i) => (i === index ? newValue[0] : value)),
    }));
  };

  const updateAllSliders = (group: string, newValue: number) => {
    setSliderValues((prevValues) => ({
      ...prevValues,
      [group]: Array(3).fill(newValue),
    }));
  };

  return (
    <div className='grid gap-4 md:grid-cols-1'>
      <Card>
        <CardHeader className='flex md:flex-row justify-between items-start'>
          <div>
            <CardTitle>Maintenance Section</CardTitle>
            <CardDescription>Control the street lights in different sections. </CardDescription>
          </div>
          <div className='space-x-2 md:space-x-8 flex self-end pt-4 md:pt-0 !mt-0'>
            {[0, 20, 40, 60, 80, 100].map((step, index) => (
              <CustomTooltip key={index} content={<p>{`${step}%`}</p>}>
                <BsLightbulbFill
                  key={index}
                  size={40}
                  cursor='pointer'
                  onClick={() => {
                    updateAllSliders('groupA', step);
                    updateAllSliders('groupB', step);
                  }}
                  fill={getFillColor(step, theme)}
                />
              </CustomTooltip>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            <LightControlGroup
              title='Group A'
              description='Control all the lights in this section.'
              sliderValues={sliderValues.groupA}
              handleSliderChange={(index: number, newValue: number[]) =>
                handleSliderChange('groupA', index, newValue)
              }
              updateAllSliders={(newValue: number) => updateAllSliders('groupA', newValue)}
            />
            <LightControlGroup
              title='Group B'
              description='Control all the lights in this section.'
              sliderValues={sliderValues.groupB}
              handleSliderChange={(index: number, newValue: number[]) =>
                handleSliderChange('groupB', index, newValue)
              }
              updateAllSliders={(newValue: number) => updateAllSliders('groupB', newValue)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Maintenance;
