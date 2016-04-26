var ProfilePic = React.createClass({
    render: function () {
        return (<img src={"../../imgs/icon-"+this.props.img+".png"}/>)
    }
});

var ProfileLink = React.createClass({
    render: function () {
        return (<a className="btn btn-primary" href={"https://www."+this.props.url.url+".com"}
                   target="_bank">{this.props.url.name}</a>)
    }
});

var Avatar = React.createClass({
    render: function () {
        return (
            <div>
                <ProfilePic img="1"/>
                <ProfileLink url={{url:"baidu",name:"百度"}}/>
            </div>
        )
    }
});