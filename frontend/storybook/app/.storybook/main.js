//const path = require("path");
//
//module.exports = {
//  stories: ["../src/**/*.stories.tsx"],
//  // Add any Storybook addons you want here: https://storybook.js.org/addons/
//  addons: [],
//  webpackFinal: async (config) => {
//    config.module.rules.push({
//      test: /\.scss$/,
//      use: ["style-loader", "css-loader", "sass-loader"],
//      include: path.resolve(__dirname, "../")
//    });
//
//    config.module.rules.push({
//      test: /\.(ts|tsx)$/,
//      loader: require.resolve("babel-loader"),
//      options: {
//        presets: [["react-app", { flow: false, typescript: true }]]
//      }
//    });
//    config.resolve.extensions.push(".ts", ".tsx");
//
//    return config;
//  }
//};



const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  /** Expose public folder to storybook as static */
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (config) => {
    /**
    * Add *.scss support
    * @see https://nebulab.it/blog/nextjs-tailwind-storybook/
    */
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader'],
    });
    /**
     * Add support for alias-imports
     * @see https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
     */
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@': [path.resolve(__dirname, '../src/'), path.resolve(__dirname, '../')],
    };

    /**
     * Fixes font import with /
     * @see https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
     */
    config.resolve.roots = [
      path.resolve(__dirname, '../public'),
      'node_modules',
    ];

    return config;
  },
};