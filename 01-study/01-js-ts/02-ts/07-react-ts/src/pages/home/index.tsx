import Promodoro from "../../components/promodoro/index";
import { TimerProvider } from "../../providers/timer";

const Home = () => (
  <TimerProvider>
    <Promodoro />
  </TimerProvider>
);

export default Home;
