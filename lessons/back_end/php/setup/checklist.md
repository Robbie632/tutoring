# Checklist for starting with PHP


1. Install PHP [link to homebrew](https://formulae.brew.sh/formula/php)
2. Check it is installed successfuly by running `php -v`. Should see output starting with something like `PHP 8.3.6 (cli) (built: Jul 14 2025 18:30:55) (NTS)
` though your version may be different which is ok.
3. Install intelliphense vscode extension
4. Install PHP Debug vscode extension
5. Check if XDebug already installed with `php --version`
6. If not installed, [install with pecl](https://xdebug.org/docs/install#pecl)
7. Check if Xdebug active by running `php -m`
8. If not active, [configure Xdebug](https://xdebug.org/docs/install#configure-php)
9. Check everything works by creating index.html that renders html file and serving using development server
10. set up launch.json to work with debugger.
11. Work through basic example to show how the debugger works
12. Client-server architecture
   1. GET request to render HTML file
   2. load JavaScript, CSS.

