import Icon from './Icon';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'components|Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = () => (
  <Icon name="icChevron" width="30px" height="30px" rotate={90}></Icon>
);

export const icon = Template.bind({});
