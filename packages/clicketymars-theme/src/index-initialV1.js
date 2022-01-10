const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/clicketymars-theme/src/index.js</pre>
    </>
  );
};

export default {
  name: "clicketymars-theme",
  roots: {
    clicketymarsTheme: Root
  },
  state: {
    clicketymarsTheme: {}
  },
  actions: {
    clicketymarsTheme: {}
  }
};
