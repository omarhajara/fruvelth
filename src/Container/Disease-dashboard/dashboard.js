import React, { Component } from 'react'
import DiseaseList from '../Diseases/disease-list'
import Search from '../Search/search';
import DiseaseDetail from '../Diseases/disease-details';
import HospitalList from '../Hospitals/hospital-list'


class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchInput: "",
        };
    }

    setInput = (event) => {
        this.setState({ searchInput: event.target.value});
    };

   

    render() {
        const filterdResult = illness.filter((disease) =>
            disease.title.toLowerCase().includes(this.state.searchInput.toLowerCase())
        );
        return (
            <div>
                <Search setInput= {this.setInput} />
                <DiseaseList illness={filterdResult} />
                <HospitalList hospitals={hospitals}/>

            </div>
        )
    }
}


export default Dashboard;


var hospitals = [
    {
        id: 1,
        name: "Cancer Institute",
        description: "we are specialize in so so so we are specialize in so so s we are specialize in so so so",
        diseases: [

        ],
        Location: "Lagos Nigeria",
        Email: "uucancer@gmail.com",
        Website: "www.cancerins.com",
        contact: "090100psoikas"
    },
    {
        id: 2,
        name: "Cancer Institute",
        description: "we are specialize in so so so we are specialize in so so s we are specialize in so so so",
        diseases: [

        ],
        Location: "Lagos Nigeria",
        Email: "uucancer@gmail.com",
        Website: "www.cancerins.com",
        contact: "090100psoikas"
    },
    {
        id: 3,
        name: "Cancer Institute",
        description: "we are specialize in so so so we are specialize in so so s we are specialize in so so so",
        diseases: [

        ],
        Location: "Lagos Nigeria",
        Email: "uucancer@gmail.com",
        Website: "www.cancerins.com",
        contact: "090100psoikas"
    },
    {
        id: 4,
        name: "Cancer Institute",
        description: "we are specialize in so so so we are specialize in so so s we are specialize in so so so",
        diseases: [

        ],
        Location: "Lagos Nigeria",
        Email: "uucancer@gmail.com",
        Website: "www.cancerins.com",
        contact: "090100psoikas"
    },
    {
        id: 5,
        name: "Cancer Institute",
        description: "we are specialize in so so so we are specialize in so so s we are specialize in so so so",
        diseases: [

        ],
        Location: "Lagos Nigeria",
        Email: "uucancer@gmail.com",
        Website: "www.cancerins.com",
        contact: "090100psoikas"
    },
    {
        id: 6,
        name: "Cancer Institute",
        description: "we are specialize in so so so we are specialize in so so s we are specialize in so so so",
        diseases: [

        ],
        Location: "Lagos Nigeria",
        Email: "uucancer@gmail.com",
        Website: "www.cancerins.com",
        contact: "090100psoikas"
    },
    {
        id: 7,
        name: "Cancer Institute",
        description: "we are specialize in so so so we are specialize in so so s we are specialize in so so so",
        diseases: [

        ],
        Location: "Lagos Nigeria",
        Email: "uucancer@gmail.com",
        Website: "www.cancerins.com",
        contact: "090100psoikas"
    }
]


var illness = [
    {
        id : 1,
        title : "Diabetes"
    },
    {
        id : 2,
        title : "Cholera"
    },
    {
        id : 3,
        title : "Tuberculosis."
    },
    {
        id : 4,
        title : "Stroke"
    },
    {
        id : 5,
        title : "Cirrhosis"
    },
    {
        id : 6,
        title : "HIV/AIDS"
    },
    {
        id : 7,
        title : "Diabetes"
    },
    {
        id : 8,
        title : "Diabetes"
    },
    {
        id : 9,
        title : "Diabetes"
    },
    {
        id : 10,
        title : "Diabetes"
    },
    {
        id : 11,
        title : "Diabetes"
    },
    {
        id : 12,
        title : "Diabetes"
    },
    {
        id : 13,
        title : "Diabetes"
    }
]