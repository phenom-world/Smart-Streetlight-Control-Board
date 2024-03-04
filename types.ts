export type LightControlGroupProps = {
  title: string;
  description: string;
  sliderValues: number[];
  handleSliderChange: (index: number, newValue: number[]) => void;
  updateAllSliders: (newValue: number) => void;
};

export type Tab = {
  label: string;
  value: string;
};
