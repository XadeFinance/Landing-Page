import styles from './TradingAgents.module.css';
import '../fonts.css';

const TradingAgents = () => {
  return (
    <section className={styles.container}>
      <div className={styles.badge}>Trading agents</div>
      
      <div className={styles.content}>
        <h2 className={styles.title} style={{ fontFamily: 'General Sans Medium, sans-serif' }}>
          Build trading agents <span className={styles.dimmed}>across</span><br/>
          more than <span>5</span> <span className={styles.dimmed}>chains</span>
        </h2>

        <div className={styles.cardContainer}>
          <div className={styles.card} style={{ background: 'center/cover no-repeat url("/strategies.png")' }}>
            <div className={styles.cardContent}>
              <h3>Launch advanced strategies</h3>
              <p>Deploy DeFi, trading, MEV and prediction market strategies</p>
            </div>
          </div>

          <div className={styles.card} style={{ background: 'center/cover no-repeat url("/50.png")' }}>
            <div className={styles.cardContent}>
              <h3>Available on 5+ chains</h3>
              <p>There are more than 5 chains supported by the Agent Launcher, including Polygon, Solana and BASE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingAgents;