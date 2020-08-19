# RN Paper makeStyles Hook [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

Custom Hook to define RN StyleSheets in a dynamic way.

## Table of contents

- [Use Case](#use-case)
- [Compatibility](#compatibility)
- [Pre Requisites](#pre-requisites)
- [Installation](#installation)
  - [NPM](#npm)
  - [YARN](#yarn)
- [Example Usage](#example-usage)
- [Issues](#issues)
- [Contributing](#contributing)
- [License](#license)

## Use case

You're using RN for building an app, and you need to make custom styles based on theme and props.

## Compatibility

Our package currently supports apps with **RN >= 0.60**. `We don't have a plan currently to support olders ones, but if you need we're open to support it.`

## Pre Requisites

You're using `react-native-paper` components in your app.

## Installation

You can install this library via NPM or YARN.

### NPM

```bash
npm i @blackbox-vision/react-native-paper-use-styles
```

### YARN

```bash
yarn add @blackbox-vision/react-native-paper-use-styles
```

## Example Usage

After reading and performing the previous steps, you should be able to import the library and use it like in this example:

```javascript
// MyComponent.js
import React from 'react';
import { View } from 'react-native';

import { useStyles } from './styles';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const MyComponent = (props) => {
  const styles = useStyles({
    deviceWidth,
    deviceHeight,
  });

  return <View style={styles.container}> .... </View>;
};

export default MyComponent;
```

```javascript
// styles.ts

export const useStyles = makeStyles((theme, props) => ({
  container: {
    backgroundColor: theme.colors.backgroundColor,
    height: props.deviceHeight,
    width: props.deviceWidth,
  },
}));
```

## Issues

Please, open an [issue](https://github.com/BlackBoxVision/react-native-paper-use-styles/issues) following one of the issues templates. We will do our best to fix them.

## Contributing

If you want to contribute to this project see [contributing](https://github.com/BlackBoxVision/react-native-paper-use-styles/blob/master/CONTRIBUTING.md) for more information.

## License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/react-native-paper-use-styles/blob/master/LICENSE) for more information.
