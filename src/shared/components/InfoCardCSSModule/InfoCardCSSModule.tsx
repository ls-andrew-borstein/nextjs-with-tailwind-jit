import { Link } from "shared/components";
import styles from "./InfoCardCSSModule.module.css";

interface InfoCardCSSModuleProps {
  description: string;
  title: string;
  url: string;
}

const InfoCardCSSModule: React.FC<InfoCardCSSModuleProps> = ({
  description,
  title,
  url,
}) => {
  return (
    <Link className={styles.wrapper} href={url}>
      <h2 className={styles.title}>{title} &rarr;</h2>
      <p className={styles.description}>{description}</p>
    </Link>
  );
};

export { InfoCardCSSModule };
