var Page = React.createClass({
    getInitialState: function () {
        return {init: true}
    },
    //组件加载完立即执行函数
    componentDidMount: function () {
        this.toPage(1);
    },
    //翻页函数
    toPage: function (currPage) {
        if (this.isMounted()) {
            $.ajax({
                url: "../../page.do",
                success: function (data) {
                    this.setState({
                        info: data.info.list,
                        totalPage: Math.ceil(data.info.totalSize / 10),
                        totalSize: data.info.totalSize,
                        currPage: currPage,
                        init: false
                    });
                }.bind(this)
            })
        }
    },
    //渲染组件
    render: function () {
        if (this.state.init) {
            return false;
        }
        var trs = [];
        for (var i = 0; i < this.state.info.length; i++) {
            trs.push(
                <tr>
                    <td>{this.state.info[i].id}</td>
                    <td>{this.state.info[i].name}</td>
                    <td>{this.state.info[i].email}</td>
                </tr>
            )
        }

        var lis = [];
        if (this.state.currPage == 1) {
            lis.push(
                <li className="disabled">
                    <a href="#">&laquo;</a>
                </li>
            )
        } else {
            lis.push(
                <li>
                    <a onClick={this.toPage.bind(this,this.state.currPage-1)} href="#">&laquo;</a>
                </li>
            )
        }
        if (this.state.totalPage < 6) {
            for (var i = 1; i < this.state.totalPage + 1; i++) {
                if (i === this.state.currPage) {
                    lis.push(
                        <li className="active">
                            <a onClick={this.toPage.bind(this,i)} href="#">{i}</a>
                        </li>
                    )
                } else {
                    lis.push(
                        <li>
                            <a onClick={this.toPage.bind(this,i)} href="#">{i}</a>
                        </li>
                    )
                }
            }
        } else {
            if (this.state.currPage < 3) {
                for (var i = 1; i < 6; i++) {
                    if (i === this.state.currPage) {
                        lis.push(
                            <li className="active">
                                <a onClick={this.toPage.bind(this,i)} href="#">{i}</a>
                            </li>
                        )
                    } else {
                        lis.push(
                            <li>
                                <a onClick={this.toPage.bind(this,i)} href="#">{i}</a>
                            </li>
                        )
                    }
                }
            }
            if (this.state.currPage >= 3 && this.state.totalPage - this.state.currPage >= 3) {
                for (var i = this.state.currPage - 2; i < this.state.currPage + 3; i++) {
                    if (i === this.state.currPage) {
                        lis.push(
                            <li className="active">
                                <a onClick={this.toPage.bind(this,i)} href="#">{i}</a>
                            </li>
                        )
                    } else {
                        lis.push(
                            <li>
                                <a onClick={this.toPage.bind(this,i)} href="#">{i}</a>
                            </li>
                        )
                    }
                }
            }
            if (this.state.totalPage - this.state.currPage < 3) {
                for (var i = this.state.totalPage - 4; i < this.state.totalPage + 1; i++) {
                    if (i === this.state.currPage) {
                        lis.push(
                            <li className="active">
                                <a onClick={this.toPage.bind(this,i)} href="#">{i}</a>
                            </li>
                        )
                    } else {
                        lis.push(
                            <li>
                                <a onClick={this.toPage.bind(this,i)} href="#">{i}</a>
                            </li>
                        )
                    }
                }
            }
        }
        if (this.state.currPage == this.state.totalPage) {
            lis.push(
                <li className="disabled">
                    <a href="#">&raquo;</a>
                </li>
            )
        } else {
            lis.push(
                <li>
                    <a onClick={this.toPage.bind(this,this.state.currPage+1)} href="#">&raquo;</a>
                </li>
            )
        }
        return (
            <div>
                <table className="table table-bordered">
                    <tbody>
                    {trs}
                    </tbody>
                </table>
                <nav>
                    <ul className="pagination">
                        {lis}
                    </ul>
                    <ul className="pagination pagination-text pull-right">
                        <li><a>{this.state.currPage}/{this.state.totalPage} 共{this.state.totalSize}条记录</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
});

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


ReactDOM.render(
    <Page/>,
    document.querySelector("#page")
);

ReactDOM.render(
    <LinkButton/>,
    document.querySelector("#LinkButton")
);

ReactDOM.render(
    <Avatar/>,
    document.querySelector("#Avatar")
);