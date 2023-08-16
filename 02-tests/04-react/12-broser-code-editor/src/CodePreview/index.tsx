import { useEffect } from "react";
import { loadJSPackages, loadJSXCode } from "./services/loadScript";

interface Props {
  jsxCode: string;
  packages: string[];
}

const CodePreview = (props: Props) => {
  const { jsxCode, packages } = props;

  useEffect(() => {
    packages.length && loadJSPackages(packages);
  }, []);

  useEffect(() => {
    loadJSXCode(jsxCode);
  }, [jsxCode]);

  return <div id="code-preview" />;
};

export default CodePreview;
