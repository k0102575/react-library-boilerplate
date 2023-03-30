import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from './Icon';

export default {
  title: 'components|Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = () => {
  return <Icon name="icChevron" width="30px" height="30px" rotate={90} />;
};

export const icon = Template.bind({});
