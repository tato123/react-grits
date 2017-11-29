[![Build Status](https://travis-ci.org/tato123/react-grits.svg?branch=master)](https://travis-ci.org/tato123/react-grits)

# Overview

An extensible layout system for React based on the [CSS grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid) specification. 

React-Grits attempts to reduce the complexity in sharing, debugging, and previewing standardized layouts by providing a thin layer on top of CSS grid.

# How it works


# API

Functions
- createGridItemsForChildren

Components
- Layout
- Grid
- GridItem

Template Components 
- SplitHalf
- AsideLeft
- AsideRight
- Thirds



# Using a predefined layout
```jsx
 import Layout, {AsideLeft} from 'react-grits';

const MyPage = () => (
  <Layout component={AsideLeft}>
    <AwesomeSidebar />
    <MainContent />
  </Layout>
)
 
```


# Defining a custom layout
```jsx
import {Grid} from 'grid';


const OneTopTwoBottom = ({children, ...rest}) => {
    const [Top, BottomLeft, BottomRight] = createGridItemsForChildren(children);
    return (
        <Grid 
            templateAreas={[["top"], ["bl", "br"]]} 
            templateColumns="100%"
            templateRows="50% 50%"
            columnGap="30px" 
        {...rest}>
           <Top gridArea="top"/>
           <BottomLeft gridArea="bl"/>
           <BottomRight gridArea="br"/>
        </Grid>
    )
}


// Later on we want to use this design ....
const Page = () => (
    <Layout component={OneTopTwoBottom}>
        <img src="large_image.jpg" />
        
        <div>
            This is content that will display left
        </div>

        <div>
            This is content that will display right
        </div>        
    </Layout>
)

```


# License

Copyright 2017 Jonathan Fontanez

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
