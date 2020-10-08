import React from 'react';
import styles from './Band.module.css'

const Band = ({band, changeCurrentBand}) => {
    return (
        <div className="card mt-3">
            <div className="card-header">
                <h3>{band.name}</h3>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <img src={band.img_url} className={styles.mainThumb} alt=""/>
                    </div>
                    <div className="col-6">
                        <p>{band.info.substr(0,200)} ...</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-info float-right" 
                        onClick={()=>{changeCurrentBand(band)}}>read more</button>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Band;