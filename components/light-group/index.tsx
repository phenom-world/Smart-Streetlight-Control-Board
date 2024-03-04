import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CustomTooltip } from '@/components/ui/tooltip';
import { LightControlGroupProps } from '@/types';
import { BsLightbulbFill } from 'react-icons/bs';
import CustomSlider from '../ui/custom-slider';

const LightControlGroup = ({
  title,
  description,
  sliderValues,
  handleSliderChange,
  updateAllSliders,
}: LightControlGroupProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex gap-4'>
          <div className='w-28' />
          <div className='space-x-3 flex w-full mt-3 justify-between'>
            {[0, 20, 40, 60, 80, 100].map((step, index) => (
              <CustomTooltip key={index} content={<p>{`${step}%`}</p>}>
                <BsLightbulbFill
                  key={index}
                  size={32}
                  cursor='pointer'
                  className={`${
                    step === 0 ? 'fill-foreground/10' : step !== 100 && `fill-foreground/${step}`
                  }`}
                  onClick={() => updateAllSliders(step)}
                />
              </CustomTooltip>
            ))}
          </div>
        </div>
        {sliderValues.map((value, index) => (
          <CustomSlider
            key={index}
            className='w-full'
            label={`Light ${index + 1}`}
            sliderValue={value}
            onValueChange={(newValue) => handleSliderChange(index, newValue)}
          />
        ))}
      </CardContent>
    </Card>
  );
};
export default LightControlGroup;
