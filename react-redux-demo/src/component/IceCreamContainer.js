import React from "react";
import {connect} from 'react-redux'
import { buyIceCream } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>No. of IceCReams  - {props.numOfIcecreams}</h2>
      <button onClick={props.buyIceCream}>buy IceCreams </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIcecreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
    return{
        buyIceCream : ()=>dispatch(buyIceCream())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);
