# Get Started with React Native

## Setting Up the Project

```html
<ol>
    <li>Create a new Expo app with routing support:</li>
    <pre><code>npx create-expo-app@latest -e with-router ./</code></pre>

    <li>Create the necessary files:</li>
    <pre><code>touch app/index.js</code></pre>
    <pre><code>touch app/_layout.js</code></pre>
</ol>
<ol>
    <li>Create a layout file with the following content:</li>
    <pre><code>
import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return &lt;Stack /&gt;;
};

export default Layout;
</code></pre>
</ol>
<ol>
    <li>Create the index file with the following content:</li>
    <pre><code>
import { View, Text } from "react-native-web";
import React from "react";

const Home = () => {
  return (
    &lt;View&gt;
      &lt;Text&gt;Home&lt;/Text&gt;
    &lt;/View&gt;
  );
};

export default Home;
</code></pre>
</ol>
<ol>
    <li>Install the necessary packages:</li>
    <pre><code>npm i expo-font axios react-native-dotenv</code></pre>
</ol>
<ol>
    <li>Update your Babel configuration with the following content:</li>
    <pre><code>
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["expo-router/babel"],
    // Add more plugins here if needed
  };
};
</code></pre>
</ol>
<ol>
    <li>Start the project using one of the following commands:</li>
    <pre><code>npm start</code></pre>
    <ul>
        <li>Or:</li>
        <pre><code>npx expo start -c</code></pre>
    </ul>
</ol>
<ol>
    <li>Publish your app using Expo:</li>
    <pre><code>expo publish</code></pre>
</ol>
