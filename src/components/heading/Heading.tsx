import styles from './Heading.module.css';

export function Heading() {
  console.log(styles);
  const classes = 'heading';
  return (
    <>
      {/** nao funciona pois o nome da classe agora é unico  */}
      <h1 className={classes}>Titulo - classes</h1>

      {/** nao funciona pois o nome da classe agora é unico  */}
      <h1 className='heading'>Titulo - heading</h1>

      {/** pega direto do modules css */}
      <h1 className={styles.heading}>Titulo - styles.purble</h1>

      {/** mais de uma classe */}
      <h1 className={`${styles.heading} ${styles.purble}`}>
        Titulo - styles.purble
      </h1>
    </>
  );
}
