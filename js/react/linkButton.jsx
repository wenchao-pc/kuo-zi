var LinkButton = React.createClass({
    getInitialState: function () {
        return {like: false};
    },
    onClick: function () {
        this.setState({like: !this.state.like});
    },
    render: function () {
        var text = "我" + (this.state.like ? "喜欢" : "不喜欢") + "react";
        return (
            <div>
                <p>{text}</p>
                <button onClick={this.onClick}
                        className="btn btn-default">
                    {this.state.like ? "喜欢" : "不喜欢"}</button>
            </div>
        );
    }
});