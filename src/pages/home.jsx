import React, { Fragment, Component} from "react";
import "../styles/home-pg1.css";

// import Page2 from "../components/page2.jsx";
import Cover from "../components/cover.jsx";



class Home extends Component {
    state = {  }

    // componentDidMount() {
    //     window.addEventListener('scroll', (e)=>console.log(e.target.scrollHeight), true);
    //  }

    // handleScroll = (e) => {
    //     console.log(0)
    //     const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    //     if (bottom) {
    //         console.log("bottom")
    //         this.render(<Page2/>)
    //     }
    //   }

    render() { 
        return ( <Fragment>
            <Cover/>
        </Fragment>);
    }
}

export default Home;
