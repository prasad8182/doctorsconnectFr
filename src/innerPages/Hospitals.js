import React from 'react';
import useFetchData from '../hooks/useFetchData';
import styles from './innerstyles.module.css';

const Hospitals = () => {
  const data = useFetchData(`http://localhost:4000/hospital`);

  return (
    <main className={styles.hospitalMain}>
      <section className="container py-2">
        <h4 className="text-center mb-5 fw-bold">
          Associated <span className={styles.highlight}>Hospitals</span>
        </h4>
        <div className="row g-4">
          {data.map((hos, i) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
              <div className={styles.hospitalCard}>
                <div className={styles.imageWrapper}>
                  <img
                    src={`http://localhost:4000${hos.path}`}
                    alt={hos.catname}
                    className="img-fluid"
                  />
                  <div className={styles.overlay}>
                    <p className={styles.hospitalName}>{hos.catname}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Hospitals;
