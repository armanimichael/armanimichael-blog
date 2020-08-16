<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter Mike
</h1>

A general-purpose starter with Mdx blog support and styled-components styling.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new new-project https://github.com/armanimichael/gatsby-starter-mike
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd new-project/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `new-project` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## ⚙ Configuration

You can configure many aspects of the website by editing the corresponding JSON files inside `./src/configs/`;

### 🎨 Changing Color Theme

You can choose whether or not you want to enable multi-theme support.

You must import every used theme inside `./src/themes/themes.ts`. <br/>
If only one theme is exported, multi-theme will be disabled automatically.

Every theme object must implement the DefaultTheme interface found inside `./src/themes/styled.d.ts`.
