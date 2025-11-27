import styles from './Heading.module.css';

export function Heading(props: any) {
  console.log(props);
  return (
    <>
      {/** mais de uma classe */}
      <h1 className={`${styles.heading} ${styles.purble}`}>{props.children}</h1>
    </>
  );
}
