import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.card}>
      <div>
        <h2 className={styles['card-title']}>John Doe</h2>
        <p className={styles['card-description']}>
          React Developer
        </p>
      </div>
      <img
        src='https://randomuser.me/api/portraits/men/1.jpg'
        alt='John Doe'
        className={styles['card-image']}
      />
    </div>
  );
}

export default App;
