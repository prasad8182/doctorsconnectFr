import React from 'react';
import styles from './innerstyles.module.css';
import { Link } from 'react-router-dom'
import useFetchData from '../hooks/useFetchData';

const Treatments = () => {
  const data = useFetchData(`https://doctorsconnect.onrender.com/uploads`);

  return (
    <main>
      <section className={styles.treatmentsSection}>
        <div className='container'>
          <h3 className='text-center py-4'>Treatments</h3>
          <div className={`row ${styles.treatmentsRow}`}>
            {data.map((treat, i) => (
              <div className={`col-lg-4 col-md-6 col-sm-12 ${styles.treatCard}`} key={i}>
                <Link to={`/locations/${treat._id}/${treat.tname}`}>
                  <div className={styles.treatInner}>
                    <div className={styles.treatImg}>
                      <img
                        src={`https://doctorsconnect.onrender.com/uploads/${treat.filename}`}
                        alt={treat.tname}
                        className='img-fluid'
                      />
                    </div>
                    <div className={styles.treatName}>
                      <h5>{treat.tname}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main >
  );
};

export default Treatments;
