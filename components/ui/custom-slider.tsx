import { Slider } from '@/components/ui/slider';
import { CustomTooltip } from '@/components/ui/tooltip';
import { SliderProps } from '@radix-ui/react-slider';
import { BsLightbulbFill } from 'react-icons/bs';

type Props = SliderProps & {
  label: string;
  sliderValue: number;
  onValueChange: (value: number[]) => void;
};

export default function CustomSlider({
  className,
  label,
  sliderValue,
  onValueChange,
  ...props
}: Props) {
  const handleSliderChange = (newValue: number[]) => {
    onValueChange(newValue);
  };

  return (
    <div className='flex gap-4 my-8'>
      <div className='font-bold whitespace-nowrap md:w-28'>{label}</div>
      <div className={`relative ${className}`}>
        <Slider
          value={[sliderValue]}
          onValueChange={handleSliderChange}
          defaultValue={[0]}
          max={100}
          step={20}
          name='slider'
          {...props}
        />
        <div className='space-x-3 flex w-full mt-3 justify-between'>
          {[0, 20, 40, 60, 80, 100].map((step, index) => (
            <CustomTooltip key={index} content={<p>{`${step}%`}</p>}>
              <BsLightbulbFill
                key={index}
                size={20}
                cursor='pointer'
                className={`${
                  step === 0 ? 'fill-foreground/10' : step !== 100 && `fill-foreground/${step}`
                }`}
                onClick={() => handleSliderChange([step])}
              />
            </CustomTooltip>
          ))}
        </div>
      </div>
    </div>
  );
}
