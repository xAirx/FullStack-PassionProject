import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Todo } from './todo';

export default {
  title: 'Components/Todo',
  component: Todo,
  args: {
    handleDeleteTodo: '(data: TodoDto) => void' as unknown as any,
    handleIscompleteTodo: '(data: TodoDto) => void' as unknown as any,
    handleUpdateTodo: '(data: TodoDto) => void' as unknown as any,
    todo: 'TodoDto' as unknown as any,
  },
} as ComponentMeta<typeof Todo>;

const Template: ComponentStory<typeof Todo> = (args) => <Todo {...args} />;

export const Story = Template.bind({});
Story.args = {};
