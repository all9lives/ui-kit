[![CircleCI](https://circleci.com/gh/Fineighbor/ui-kit.svg?style=shield)](https://circleci.com/gh/Fineighbor/ui-kit)
[![codecov](https://codecov.io/gh/Fineighbor/ui-kit/graph/badge.svg)](https://codecov.io/gh/Fineighbor/ui-kit)

# UI Kit

This is the UI Kit powered by `storybook` and `styled-components`.

It contains some basic components that we find using them a lot in other projects. We use it as a foundation of other components for both web and app development.

## Demo
<img src="https://raw.githubusercontent.com/Fineighbor/ui-kit/master/screenshots/web.png" width="500">
<img src="https://raw.githubusercontent.com/Fineighbor/ui-kit/master/screenshots/android.png" width="500">
<img src="https://raw.githubusercontent.com/Fineighbor/ui-kit/master/screenshots/ios.png" width="500">

## Why

A team consists of at least engineers and designers. Hence, the tools those can help each others are important. This UI Kit not only provides design guidelines but components that can be directly used in development.

## Current Available Components

* Text
* View
* Image
* Button
* Input
* FloatLabel

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

```
git clone https://github.com/Fineighbor/ui-kit.git
cd ui-kit
npm install // or yarn install
```

### Running

Run storybook for web
```
npm run storybook:web
// or
yarn stroybook:native
```

Run storybook for native (android & ios)
```
npm run storybook:native
// or
yarn stroybook:native
```

Build dist source
```
npm run build
// or
yarn build
```

## Running the tests

```
npm test 
npm test:watch
npm test:coverage
// or
yarn test
yarn test:watch
yarn test:coverage
```

### And coding style linting

```
npm run lint:js
npm run lint:js-fix
npm run lint:css
// or
yarn lint:js
yarn lint:js-fix
yarn lint:css
```

## Generate Template Files

```
npm run generate:component [COMPONENT_NAME]
npm run generate:story [STORY_NAME]
// or
yarn generate:component [COMPONENT_NAME]
yarn generate:story [STORY_NAME]
```

## Built With

* [storybook](https://storybook.js.org/) - The UI Development Environment You'll ♥️ to use
* [styled-component](https://www.styled-components.com/) - Visual primitives for the component age.
* [jest](https://facebook.github.io/jest/) - Delightful JavaScript Testing

## Known Issues
* Props are not filtering out so that all of them are passed to the inner components/elements ([Issue](https://github.com/styled-components/styled-components/issues/439))
* Currently Jest is not resolving files based on `Platform` correctly. ([Issue](https://github.com/facebook/jest/issues/1370))
* Can't use this repo as git submodules in react-native project (module duplicated)
  * On web, forking this repo and make it submodules in any directory you like.
  * On native, forking this repo and specify it as dependencies in `package.json`.
  * Or simply copy this repo in your own project and make some adjustments.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
