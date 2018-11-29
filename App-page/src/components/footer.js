import React from 'react'

export default class Footer extends React.Component {
    render() {
        return (
            <div className={`row`} style={{ height: '50px', padding: '0px 20px' }}>
                <div className="col-xs-12">
                    &copy; 2018 Rautaruukki Corporation. All Rights Reserved.
                </div>
            </div>
        )
    }
}
