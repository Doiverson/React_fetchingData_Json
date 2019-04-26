import React from 'react'
import dummy from './dummyPaymentAll';

let counter = 0;
function createData(fullName, companyName, refundReason, refundReasonComment, updated_at) {
    counter += 1;

    return { id: counter, fullName, companyName, refundReason, refundReasonComment, updated_at };
}

class GetData extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }




    componentDidMount() {

        let dataObject = dummy.map(e => {

            if(e.refundReason!==''){

                return  createData(
                    e.fullName,
                    e.companyName,
                    e.refundReason,
                    e.refundReasonComment,
                    e.updated_at
                )
            }else{
                return false;
            }
        })

        let filteredData = dataObject.filter(a =>
            a !== false
        );

        this.setState({data: filteredData});
    }


    render() {

        console.log(this.state.data)


        return (
            <div>
                {this.state.data.map(data => {
                    return <h1>data</h1>
                })

                }
            </div>
        )

    }


}

export default GetData;
