const If = ({ test, children }) => {
  if (test) return children;
  return false;
};

export default If;
