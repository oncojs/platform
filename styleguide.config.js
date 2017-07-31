module.exports = {
  components: 'src/{ui,core,aggregations}/**/[A-Z]*.js',
  skipComponentsWithoutExample: true,
  require: [
    'sanitize.css/sanitize.css',
    '@blueprintjs/core/dist/blueprint.css',
    '@blueprintjs/datetime/dist/blueprint-datetime.css',
    '@blueprintjs/labs/dist/blueprint-labs.css',
  ],
};
