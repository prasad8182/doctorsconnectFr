import React from 'react';
import locationstyles from './innerstyles.module.css';
import useFetchData from '../hooks/useFetchData';
import { Link, useParams } from 'react-router-dom';

const Locations = () => {
    const { tname } = useParams()
    const data = useFetchData(`http://localhost:4000/locationname/${tname}`);

    return (
        <main>
            <section className={locationstyles.locationSection}>
                <div className='container'>
                    <h3 className={`text-center py-4 ${locationstyles.title}`}>
                        Our Hospital Locations of {tname}
                    </h3>

                    <div className='row justify-content-center'>
                        {data.length > 0 ? (
                            data.map((loc) => (
                                <div className='col-lg-4 col-md-6 mb-4' key={loc._id}>
                                    <div className={locationstyles.locationCard}>
                                        <Link to={`/doctor/${loc.tname}/${loc.location}`}>
                                            <h5 className={locationstyles.locationName}>
                                                {loc.location}
                                            </h5>
                                            {/* <p className={locationstyles.treatmentName}>
                                             {loc.tname}
                                             </p> */}
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className='text-center text-muted py-5'>
                                No locations available right now.
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Locations;
