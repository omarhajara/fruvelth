import React from 'react';
import '../Disease-dashboard/illness';

const DiseaseDetail = ({ disease, selectedDisease}) => {
    if (!disease) {
        return <div>Loading....</div>
    }

    return (
        <div>
            {
                disease.length ? disease.map((item) => {
                    if (item.id === selectedDisease) {
                        return (
                            <div key={item.id}>
                                <h1>{item.id}</h1>
                            </div>
                        )
                    }
                    return null
                }):null
            }
        </div>
    );
}

export default DiseaseDetail