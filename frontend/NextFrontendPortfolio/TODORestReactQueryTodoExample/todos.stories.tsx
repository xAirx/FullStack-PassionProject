import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Todos } from './todos';

export default {
  title: 'Components/Todos',
  component: Todos,
  args: {
    handleDeleteTodo: '(data: any) => void' as unknown as any,
    handleIscompleteTodo: '(data: any) => void' as unknown as any,
    handleUpdateTodo: '(data: any) => void' as unknown as any,
    todos: '{}' as unknown as any,
  },
} as ComponentMeta<typeof Todos>;

const Template: ComponentStory<typeof Todos> = (args) => <Todos {...args} />;

export const Story = Template.bind({});
Story.args = {};
