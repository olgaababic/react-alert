import React, {PureComponent} from 'react';
import {render} from 'react-dom';
// import {Modal} from 'react-bootstrap';
import ReactAlert from './ReactAlert';

class Demo extends PureComponent {

    render() {
        return (<ReactAlert/>);
    }
}


render(<ReactAlert title="Caos" text="Textic" showCancelButton={true}
                   cancelButtonCallBack={() => console.log("aa")}
/>, document.getElementById("app"));