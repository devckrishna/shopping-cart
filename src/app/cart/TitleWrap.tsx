type TitleProps = {
  children: JSX.Element | JSX.Element[];
};

export default function TitleWrap({ children }: TitleProps) {
  return (
    <div className="flex items-center justify-between borderBottom">
      {children}
    </div>
  );
}
