import Button from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'components|Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => (
  <Button
    onClick={() => {
      console.log('onClick');
    }}
  >
    버튼
  </Button>
);

export const button = Template.bind({});
