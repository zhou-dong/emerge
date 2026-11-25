import { Composition } from "remotion";
import { HelloWorld } from "./compositions/HelloWorld";

export const Root = () => (
  <Composition
    id="HelloWorld"
    component={HelloWorld}
    durationInFrames={90}
    fps={30}
    width={1280}
    height={720}
    defaultProps={{ title: "Hello, emerge!" }}
  />
);
