import Promodoro from "../../components/promodoro/index";
import { TimerProvider } from "../../providers/timer";

const Home = () => (
  <div>
    <TimerProvider>
      <Promodoro />
    </TimerProvider>
  </div>
);

export default Home;
