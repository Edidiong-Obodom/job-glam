# Get Started with React Native

## Setting Up the Project

<ol>

<li>
    <p>Create a new Expo app with routing support:</p>
    <pre><code>npx create-expo-app@latest -e with-router ./</code></pre>

    <li>Create the necessary files:</li>
    <pre><code>touch app/index.js</code></pre>
    <pre><code>touch app/_layout.js</code></pre>

</li>
<li>
    <p>Create a layout file with the following content:</p>
    <pre><code>
import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
return &lt;Stack /&gt;;
};

export default Layout;
</code></pre>

</li>
<li>
    <p>Create the index file with the following content:</p>
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

</li>
<li>
    <p>Install the necessary packages:</p>
    <pre><code>npm i expo-font axios react-native-dotenv</code></pre>
</li>
<li>
    <p>Update your Babel configuration with the following content:</p>
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
</li>
<li>
    <p>Start the project using one of the following commands:</p>
    <pre><code>npm start</code></pre>
    <ul>
        <li>Or:</li>
        <pre><code>npx expo start -c</code></pre>
    </ul>
</li>
<li>
    <p>Publish your app using Expo:</p>
    <pre><code>expo publish</code></pre>
</li>
</ol>
