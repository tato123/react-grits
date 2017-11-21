import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { SplitHalf, Layout, AsideLeft, AsideRight } from '../src/Layouts';


const style = {
  background: 'red',
}

const InnerView = () => ([
<div >
  <h1>Test</h1>
</div>,
<h1>Test 2</h1>
])


const AsideLeftView = () => (
  <Layout component={AsideLeft}>
    <div >
      <h1>Test</h1>
    </div>
    <h1>Test 2</h1>
  </Layout>
)




storiesOf('Layouts', module)
  .add('SplitHalf', () => <Layout component={SplitHalf}>{InnerView()}</Layout>)
  .add('AsideLeft', () => <Layout component={AsideLeft}>{InnerView()}</Layout>)
  .add('AsideRight', () => <Layout component={AsideRight}>{InnerView()}</Layout>)
