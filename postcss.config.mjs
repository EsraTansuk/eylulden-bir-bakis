const config = {
  plugins: {
    "@tailwindcss/postcss": {
      plugins: [
        {
          tailwindcss: {
            config: {
              corePlugins: {
                preflight: false,
              }
            }
          }
        }
      ]
    }
  }
};

export default config;
