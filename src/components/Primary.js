import React, {Component} from 'react';
import EditTrigger from '../edit/EditTrigger';

export default class PrimarySection extends Component {

    // shouldComponentUpdate () {
    //     return false;
    // }
    componentDidMount () {
        console.log('primary did mount');
    }

    render () {
        console.log('render: Primary');

        const {data, editable, onClick} = this.props;
        const dom = data.map((item) =>
            <div
                key={item.id}
                data-id={item.id}
                className={editable ? "flex-item edit-wrap" : "flex-item"}
            >
                <div className="iconfont">
                    <span className={item.icon + ' theme-ft-color'} />
                </div>
                <h3 className="dropzone drop-txt">{item.title}</h3>
                <p className="dropzone drop-txt">{item.content}</p>
                { editable && <EditTrigger onClick={onClick.bind(null, item.id)} /> }
            </div>
        );

        return (
            <div className="dropzone drop-bg">
                <section className="app-primary drop-content">
                    <div className="layout">
                        <div className="app-flex">
                            {dom}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
};