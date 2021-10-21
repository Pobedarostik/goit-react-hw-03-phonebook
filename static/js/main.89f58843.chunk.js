(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={div:"Filter_div___GrMZ",input:"Filter_input__2Orwq"}},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(12),r=n.n(o),s=n(13),i=n(10),l=n(4),u=n(5),b=n(7),m=n(6),h=n(3),d=n(2),j=n.n(d),p=n(0),f=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onContact(t.state),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:j.a.label,children:["Name",Object(p.jsx)("input",{className:j.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:this.state.name,onChange:this.handleChange,placeholder:"Ivan Ivanov"})]}),Object(p.jsxs)("label",{className:j.a.label,children:["Number",Object(p.jsx)("input",{className:j.a.input,type:"text",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:this.state.number,onChange:this.handleChange,placeholder:"111-11-11"})]}),Object(p.jsx)("button",{className:j.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),v=n(21),O=n(8),C=n.n(O),x=function(t){var e=t.contacts,n=t.onRemoveContact;return Object(p.jsx)("ul",{className:C.a.list,children:e.map((function(t){return Object(p.jsxs)("li",{className:C.a.item,children:[t.name+" : "+t.number,Object(p.jsx)("button",{className:C.a.btn,type:"button",name:"delte",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},g=n(11),_=n.n(g);function y(t){var e=t.value,n=t.onChangeFilter;return Object(p.jsxs)("div",{className:_.a.div,children:["Find contacts by name",Object(p.jsx)("input",{className:_.a.input,type:"text",value:e,onChange:function(t){return n(t.target.value)},placeholder:"Search"})]})}var N=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.forForm=function(e){var n=t.state.contacts.map((function(t){return t.name})).includes(e.name);if(n)alert("".concat(e.name," is already in contacts"));else if(0===e.name.length)alert("Fields must be filled!");else{var a=Object(i.a)(Object(i.a)({},e),{},{id:Object(v.a)()});t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(s.a)(e))}}))}},t.changeFilter=function(e){t.setState({filter:e})},t.getContactName=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.getContactName(),e=this.state.filter;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(f,{onContact:this.forForm}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(y,{value:e,onChangeFilter:this.changeFilter}),t.length>0?Object(p.jsx)(x,{contacts:t,onRemoveContact:this.removeContact}):Object(p.jsx)("p",{children:"Your phonebook is empty. Please add contact."})]})}}]),n}(a.Component);r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={label:"ContactForm_label__GFDbg",input:"ContactForm_input__251UM",btn:"ContactForm_btn__3-bFb"}},8:function(t,e,n){t.exports={list:"ContactList_list__1rhnY",item:"ContactList_item__J2axm",btn:"ContactList_btn__2EQ8q"}}},[[19,1,2]]]);
//# sourceMappingURL=main.89f58843.chunk.js.map