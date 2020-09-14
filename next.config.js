const webpack = require('webpack')
const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const path = require('path');

module.exports = withPlugins([
        optimizedImages
    ]);