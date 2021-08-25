import React from "react";


class Detail extends React.Component{
    // componentDidMount(){
    //     const {location, history} = this.props;
    //     console.log(this.props);
    //     if(location.state ===undefined){
    //         history.push("/");
    //     }
    // };

    render(){
        const {location,history} =this.props;
        console.log(this.props);
        if (location.state){
        return <span>{location.state.title}</span>;
        } else if (location.state===undefined) {
            history.push("/");
            return null;
        }
    }
}
export default Detail