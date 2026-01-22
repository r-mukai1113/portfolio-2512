type Props = {
  className?: string;
};

export const Copyright = ({ className = "" }: Props) => {
  return (
    <footer className={`text-center ${className}`}>
      {/* smallタグはコピーライトなどの注釈に使う意味的にも正しいタグです */}
      <small className="font-inter text-[10px] md:text-[12px] opacity-40">
        © 2026 Ryuta Mukai
      </small>
    </footer>
  );
};
