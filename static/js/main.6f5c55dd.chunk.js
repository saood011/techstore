(this.webpackJsonptechstore=this.webpackJsonptechstore||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},21:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),s=(a(21),a(2)),o=a(3),i=a(5),m=a(4),d=a(6),u=(a(22),a(14)),h=a(8),p=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).addtoCart=function(e){a.props.remoteCart(e)},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container mb-2"},this.props.data.length>0?this.props.data.map((function(t){return r.a.createElement("div",{className:"row",key:t.isbn13},r.a.createElement("div",{className:"col-sm grey-card",style:{animation:h.animations.popIn}},r.a.createElement("img",{src:t.image,alt:"Book-Cover",className:"w-100"})),r.a.createElement("div",{className:"col-sm p-0"},r.a.createElement("table",{className:"table table-striped text-left"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"font-weight-bold"},"Title"),r.a.createElement("td",null,t.title)),r.a.createElement("tr",null,r.a.createElement("td",{className:"font-weight-bold"},"Price"),r.a.createElement("td",{className:"text-danger"},t.price)),r.a.createElement("tr",null,r.a.createElement("td",{className:"font-weight-bold"},"Rating"),r.a.createElement("td",{className:parseInt(t.rating)<1?"text-muted":"text-warning"},parseInt(t.rating)<1?"No Ratings":Object(u.a)(Array(parseInt(t.rating))).map((function(e,t){return r.a.createElement("i",{className:"material-icons",key:t},"star")})))),r.a.createElement("tr",null,r.a.createElement("td",{className:"font-weight-bold"},"Author"),r.a.createElement("td",null,t.authors)),r.a.createElement("tr",null,r.a.createElement("td",{className:"font-weight-bold"},"Publisher"),r.a.createElement("td",null,t.publisher)),r.a.createElement("tr",null,r.a.createElement("td",{className:"font-weight-bold"},"Published"),r.a.createElement("td",null,t.year)),r.a.createElement("tr",null,r.a.createElement("td",{className:"font-weight-bold"},"Pages"),r.a.createElement("td",null,t.pages)),r.a.createElement("tr",null,r.a.createElement("td",{className:"font-weight-bold"},"Language"),r.a.createElement("td",null,t.language)),r.a.createElement("tr",null,r.a.createElement("td",{className:"font-weight-bold"},"ISBN-10"),r.a.createElement("td",null,t.isbn10)),r.a.createElement("tr",null,r.a.createElement("td",{className:"font-weight-bold"},"Description"),r.a.createElement("td",{className:"text-justify"},t.desc)))),r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("a",{href:"/",className:"btn btn-warning"},"back"),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.addtoCart([{price:t.price,title:t.title,image:t.image}])}},"Add to cart"))))})):r.a.createElement("div",{className:"mt-5"},r.a.createElement("div",{class:"spinner-border",role:"status"},r.a.createElement("span",{class:"sr-only"},"Loading...")),r.a.createElement("div",{class:"spinner-grow ",role:"status"},r.a.createElement("span",{class:"sr-only"},"Loading..."))))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).sendData=function(){a.props.getDataTrigger(a.state.cart)},a.onClick=function(e){var t=a.state.items.slice(e.target.id,Number(e.target.id)+1);a.state.cart.push(t),console.log(a.state.cart),a.sendData()},a.onChange=function(e){a.setState({search:e.target.value})},a.detailed=function(e){a.setState({detailedInfo:!1});var t="".concat("https://cors-anywhere.herokuapp.com/","https://api.itbook.store/1.0/books/").concat(e);fetch(t).then((function(e){return e.json()})).then((function(e){console.log([e]),a.setState({isLoaded:!0,detailedItems:[e]})}),(function(e){a.setState({isLoaded:!0,error:e})}))},a.remoteCart=function(e){console.log(e),a.state.cart.push(e),a.sendData(),setTimeout((function(){a.setState({detailedInfo:!0})}),700)},a.sortAscend=function(e,t){var a=parseFloat(e.price.slice(1)),n=parseFloat(t.price.slice(1));console.log(typeof a);var r=0;return a>n?r=1:a<n&&(r=-1),r},a.sortDes=function(e,t){var a=parseFloat(e.price.slice(1)),n=parseFloat(t.price.slice(1)),r=0;return a>n?r=1:a<n&&(r=-1),-1*r},a.sorted=function(e){a.setState({items:a.state.items.sort(e)})},a.onSearch=function(e){a.setState({isLoaded:!1,search:e});var t="".concat("https://cors-anywhere.herokuapp.com/","https://api.itbook.store/1.0/search/").concat(e);fetch(t).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({isLoaded:!0,items:e.books})}),(function(e){a.setState({isLoaded:!0,error:e})}))},a.state={error:null,isLoaded:!1,items:[],cart:[],search:"",detailedInfo:!0,detailedItems:[]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="".concat("https://cors-anywhere.herokuapp.com/","https://api.itbook.store/1.0/new");fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({isLoaded:!0,items:t.books})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,c=t.items,l=t.detailedInfo,s=t.detailedItems,o=["Python","Javascript","HTML","Latest","Mongodb","Kotlin","Ruby","React","Angular","Vue","Typescript","Linux","Networking"];return a?r.a.createElement("div",null,"Error: ",a.message):!n&&l?r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex mt-2 justify-content-center flex-column"},r.a.createElement("div",{style:{animation:h.animations.fadeIn}},o.map((function(t,a){return r.a.createElement("button",{key:a,className:"btn btn-sm bg-light rounded-pill shadow text-secondary p-2 m-1",onClick:function(){return e.onSearch(t)}},t)}))),r.a.createElement("div",{className:"d-flex mt-2 justify-content-center "},r.a.createElement("input",{type:"text",onChange:this.onChange,className:"form-control w-25 mr-1 shadow",placeholder:"Search here"}),r.a.createElement("button",{type:"button",onClick:function(){return e.onSearch(e.state.search)},className:"btn btn-warning"},"Search"))),r.a.createElement("div",{className:"spinner-border mt-5",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))):l?r.a.createElement("div",{className:""},r.a.createElement("div",{className:"d-flex mt-2 justify-content-center flex-column"},r.a.createElement("div",null,o.map((function(t,a){return r.a.createElement("button",{key:a,className:"btn btn-sm bg-light rounded-pill shadow text-secondary p-2 m-1",onClick:function(){return e.onSearch(t)}},t)}))),r.a.createElement("div",{className:"d-flex mt-2 justify-content-around flex-wrap "},r.a.createElement("button",{className:"btn btn-sm btn-outline-secondary m-1",onClick:function(){return e.sorted(e.sortAscend)}},"Price: Lowest First"),r.a.createElement("div",{className:"d-flex"},r.a.createElement("input",{type:"text",onChange:this.onChange,className:"form-control mr-1 shadow",placeholder:"Search here"}),r.a.createElement("button",{type:"button",onClick:function(){return e.onSearch(e.state.search)},className:"btn btn-warning"},"search")),r.a.createElement("button",{className:"btn btn-sm btn-outline-secondary m-1",onClick:function(){return e.sorted(e.sortDes)}},"Price: Highest First"))),r.a.createElement("div",{className:"d-flex flex-wrap justify-content-center "},c.map((function(t,a){return r.a.createElement("div",{className:"card m-1 shadow grey-card",key:t.isbn13,style:{animation:h.animations.bounceIn}},r.a.createElement("img",{src:t.image,className:"card-img-top",alt:"Book_cover",onClick:function(){return e.detailed(t.isbn13)},title:"Click the image for details"}),r.a.createElement("div",{className:"card-body bg-light"},r.a.createElement("h6",{className:"card-title"},t.title),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("p",{className:" btn-sm btn-danger"},t.price),r.a.createElement("p",{className:"btn-sm btn-primary btn-hover",id:a,onClick:e.onClick,title:"Click to add"},"Add to cart"))))})))):r.a.createElement(p,{data:s,remoteCart:this.remoteCart})}}]),t}(r.a.Component),E=a(13),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).getData=function(e){a.setState({cart:e})},a.onClick=function(e){a.state.cart.splice(e.target.id,e.target.id+1),console.log(a.state.cart),a.forceUpdate()},a.onOpenModal=function(){a.setState({open:!0})},a.onCloseModal=function(){a.setState({open:!1})},a.state={cart:[],open:!1},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"calculateTotal",value:function(e,t){return"$"+(e*t).toFixed(2)}},{key:"render",value:function(){var e=this,t=this.state.open;return r.a.createElement("div",{className:"text-center "},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark jumbo m-0 "},r.a.createElement("p",{className:"navbar-brand text-white border p-2 mt-2 rounded"},"TechStore"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("p",{className:"nav-link"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"}))),r.a.createElement("button",{className:"btn btn-warning position-fixed",onClick:this.onOpenModal},r.a.createElement("i",{class:"material-icons"},"shopping_cart"),this.state.cart.length>0?r.a.createElement("span",{class:"badge badge-danger",style:{animation:h.animations.slideIn}},this.state.cart.length):null),r.a.createElement(E.a,{open:t,onClose:this.onCloseModal,center:!0},0===this.state.cart.length?r.a.createElement("div",{className:""},"Cart is empty!!\xa0\xa0\xa0\xa0\xa0\xa0\xa0"):r.a.createElement("table",{className:"table table-striped text-center w-100"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"6",className:"text-center"},"YOUR CART")),this.state.cart.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,a+1,"."),r.a.createElement("td",{style:{width:"20%",background:"grey"}},r.a.createElement("img",{className:"w-100",src:t[0].image,alt:""})),r.a.createElement("td",null,t[0].title," ",r.a.createElement("p",null,t[0].price)),r.a.createElement("td",null," "),r.a.createElement("td",{className:"text-center"},r.a.createElement("button",{id:a,className:"btn btn-light btn-sm rounded-circle",onClick:e.onClick},"delete")),r.a.createElement("td",{className:"text-danger"},e.calculateTotal(t[0].price.slice(1),1)))})),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"5",className:"text-right"},"Grand total"),r.a.createElement("td",{className:"bg-secondary text-danger h4"},"$",this.state.cart.map((function(e){return e[0].price.slice(1)})).reduce((function(e,t){return Number(e)+Number(t)}),0).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"6",className:"text-center"},r.a.createElement("button",{className:"btn btn-warning m-1"},"Check Out"))))))),r.a.createElement(b,{getDataTrigger:this.getData}))}}]),t}(n.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"bg-black text-white d-flex justify-content-center align-items-center flex-column p-2"},r.a.createElement("h3",{className:"bg-light p-2 text-dark"},"Hire me!"),r.a.createElement("p",null,"I'm currently looking for a job. Would you like to discuss?")," ",r.a.createElement("a",{href:"https://saood011.github.io",className:"d-flex justify-content-center text-warning",target:"blank"},r.a.createElement("span",null,"Check Portfolio"),r.a.createElement("i",{className:"material-icons"},"contacts")),r.a.createElement("h5",{className:"p-3 d-flex justify-content-center"},"Contact ",r.a.createElement("i",{className:"material-icons"},"double_arrow")," "),r.a.createElement("p",{className:"m-0"},"+49-15210920149"),r.a.createElement("p",null,"saood011@yahoo.com"))}}]),t}(n.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container min-height d-flex flex-column justify-content-between bg-light p-0"},r.a.createElement(g,null),r.a.createElement(f,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.6f5c55dd.chunk.js.map