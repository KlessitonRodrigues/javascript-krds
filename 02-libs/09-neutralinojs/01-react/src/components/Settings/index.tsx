import { Typography } from "@material-ui/core";
import { BsGear } from "react-icons/bs";

import useGlobalContext from "../../hooks/useGlobalContext";
import Sidepanel from "../Templates/Sidepanel";
import { flexCenter } from "./styles";

const Settings = () => {
  const [global] = useGlobalContext();

  return (
    <Sidepanel show={global.settingsOpen}>
      <div style={flexCenter}>
        <BsGear fontSize="1.5rem" />
        <Typography variant="h2">&nbsp; Settings</Typography>
      </div>
    </Sidepanel>
  );
};

export default Settings;
