import Divider from "./Divider";

type Props = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  divider?: boolean;
  className?: string;
};

export default function ScriptHeading({
  children,
  as: Tag = "h2",
  divider = false,
  className = "",
}: Props) {
  return (
    <div className="text-center">
      <Tag className={`font-script text-rose-ink text-5xl md:text-6xl leading-tight ${className}`}>
        {children}
      </Tag>
      {divider && <Divider className="mt-1" />}
    </div>
  );
}
