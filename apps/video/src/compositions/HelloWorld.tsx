import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const HelloWorld = ({ title }: { title: string }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0b1020",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 96,
        fontFamily: "sans-serif",
        opacity,
      }}
    >
      {title}
    </AbsoluteFill>
  );
};
