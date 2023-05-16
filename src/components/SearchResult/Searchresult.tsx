import styles from "./Search.module.scss";

const Searchresult = ({ result }: any) => {
  return (
    <div className={styles.searchResultsWrapper}>
      {result.name}
    </div>
  );
};

export default Searchresult;