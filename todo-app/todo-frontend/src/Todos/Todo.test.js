import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from './Todo';

const todo = {
  text: 'I should do this',
  done: false
}

const fn = (todo) => {return false};

it('renders todo text', () => {
  render(<Todo todo={todo} deleteTodo={fn} completeTodo={fn}/>);

  expect(screen.getByText('I should do this')).toBeInTheDocument();
});
