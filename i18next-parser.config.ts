/** @type {import('i18next-parser').UserConfig} */
export default {
  contextSeparator: "_",
  createOldCatalogs: true,
  defaultNamespace: "translation",
  defaultValue: "",
  indentation: 2,
  keepRemoved: false,
  keySeparator: ".",
  lexers: {
    // hbs: ["HandlebarsLexer"],
    // handlebars: ["HandlebarsLexer"],

    // htm: ["HTMLLexer"],
    // html: ["HTMLLexer"],

    // mjs: ["JavascriptLexer"],
    // js: ["JavascriptLexer"], // if you're writing jsx inside .js files, change this to JsxLexer
    // ts: ["JavascriptLexer"],
    // jsx: ["JsxLexer"],
    tsx: ["JsxLexer"],

    default: ["JavascriptLexer"],
  },

  lineEnding: "auto",
  locales: ["en", "de"],
  namespaceSeparator: ":",
  output: "src/locales/$LOCALE/$NAMESPACE.json",
  pluralSeparator: "_",
  input: undefined,
  sort: false,
  verbose: false,
  failOnWarnings: false,
  failOnUpdate: false,
  customValueTemplate: null,
  resetDefaultValueLocale: null,
  i18nextOptions: null,
  yamlOptions: null,
  func: {
    list: ["t", "i18n.t", "Trans"], // Add 'Trans' to the list
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Add your file extensions
    keyAsDefaultValue: true,
  },
};
