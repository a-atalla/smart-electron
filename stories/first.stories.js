import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from '../src/components/Title';

storiesOf('Title', module)
  .add('First Title', () => <Title text="StoryBook is awesome" />)
  .add('Second Title', () => <Title text="Electron is awesome too" />);
