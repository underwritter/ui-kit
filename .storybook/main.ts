import type {StorybookConfig} from "@storybook/react-vite";
import path from "path";

export default {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.module?.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
        include: path.resolve(__dirname, "../src"),
      },
      {
        test: /\.(css|sass|scss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../src"),
      }
    );

    const fontRuleIndex = config.module?.rules.findIndex(
      (rule) =>
        rule.test &&
        rule.test.toString() === /\.(woff|woff2|eot|ttf|otf)$/.toString()
    );

    if (fontRuleIndex !== undefined && fontRuleIndex !== -1) {
      const fontRule = {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "url-loader",
        include: path.resolve(__dirname, "../src"),
      };

      config.module.rules[fontRuleIndex] = fontRule;
    } else {
      const fontRule = {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "url-loader",
        include: path.resolve(__dirname, "../src"),
      };

      config.module.rules.push(fontRule);
    }

    return config;
  },
} as StorybookConfig;
