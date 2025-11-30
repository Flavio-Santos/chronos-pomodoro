import styles from './Heading.module.css';

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return (
    <>
      {/** mais de uma classe */}
      <h1 className={`${styles.heading} ${styles.purble}`}>{children}</h1>
    </>
  );
}
