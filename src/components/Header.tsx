interface IHeaderProps {
  category: string;
}

export function Header(props: IHeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {props.category}</span>
      </span>
    </header>
  );
}
