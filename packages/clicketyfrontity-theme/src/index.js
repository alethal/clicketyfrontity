const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/clicketyfrontity-theme/src/index.js</pre>
    </>
  );
};

export default {
  name: "clicketyfrontity-theme",
  roots: {
    clickfrontitytheme: Root
  },
  state: {
    clickfrontitytheme: {}
  },
  actions: {
    clickfrontitytheme: {}
  }
};
