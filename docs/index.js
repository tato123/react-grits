import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Layout, { SplitHalf, AsideLeft, AsideRight, Thirds } from '../src';
import LoremIpsum from './LoremIpsum';
import SideMenu from './SideMenu';

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
  .add('SplitHalf', () => <Layout component={SplitHalf}>
    <LoremIpsum />
    <LoremIpsum />
  </Layout>)
  .add('AsideLeft', () => <Layout component={AsideLeft}><SideMenu/><LoremIpsum/></Layout>)
  .add('AsideRight', () => <Layout component={AsideRight}><LoremIpsum/><SideMenu/></Layout>)
  .add('Thirds', () => <Layout component={Thirds}>
    <LoremIpsum />
    <LoremIpsum />
    <LoremIpsum />
  </Layout>)
