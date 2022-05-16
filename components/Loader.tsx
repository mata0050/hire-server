import styles from '../styles/Loader.module.scss';

type LoaderProps = {
  show: boolean;
};

// Loading Spinner
export default function Loader({ show }: LoaderProps) {
  return show ? <div className={styles.loader}></div> : null;
}
