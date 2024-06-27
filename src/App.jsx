import styles from "./style";
import { Billing, Business, CardDeal, CursorEffect, CTA, Footer, Navbar, Stats, Clients, ContactSection, Testimonials, Hero, Plans } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />        
        <Testimonials />
        <Clients />
        <CTA />
        <Plans />
        <ContactSection/>
        <Footer />
        {/*<CursorEffect/>*/}
      </div>
    </div>
  </div>
);

export default App;
