import styles from './readme.module.css'

export interface ReadmeProps {
  readTitle: string
  readDescription: string
}

export const Readme: React.FC<ReadmeProps> = ({
  readTitle,
  readDescription,
}) => {
  return (
    <div id={styles.readMe}>
      <div className={styles.readMeSummary}>
        <h1>{readTitle}</h1>
        <div dangerouslySetInnerHTML={{ __html: readDescription }}></div>
      </div>
    </div>
  )
}

export default Readme
