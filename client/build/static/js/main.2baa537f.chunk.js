(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(71)},44:function(e,t,a){},66:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(34),c=a.n(r),l=(a(44),a(12)),o=a(15),s=a(1),u=a(2),v=a(4),d=a(3),h=a(5),m=a(7),p=a.n(m),f=a(13),y=function(e){return i.a.createElement("p",null,e)},w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={newReviewText:""},a.handleInputChange=function(e){a.setState({newReviewText:e.target.value})},a.handleFormSubmission=function(e){e.preventDefault(),a.props.addNewIndividualReviewText(a.state.newReviewText)},a.addReviewToServer=function(e){console.log({newReviewText:e}),console.log(e),p.a.post("/api/reviews/",e).then(function(t){a.setState({newReviewText:t.data.allReviews}),console.log(e)}).catch(function(e){console.log(e)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("form",{onSubmit:this.handleFormSubmission},i.a.createElement("textarea",{rows:"4",cols:"50",type:"text",placeholder:"New Review",value:this.state.newReviewText,onChange:this.handleInputChange}),i.a.createElement("input",{type:"submit",value:"Add Review",onClick:function(){e.addReviewToServer(e.state)}}))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={reviewList:{individualReview:[""]}},a.addNewReview=function(e){var t=Object(f.a)({},a.state.reviewList);t.individualReview.push(e),a.setState({reviewList:t})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"My Review"),i.a.createElement(w,{addNewIndividualReviewText:this.addNewReview}),(e=this.state.reviewList,i.a.createElement("div",null,e.individualReview.map(y))));var e}}]),t}(i.a.Component),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={reviews:[]},a.getReviewsFromServer=function(){p.a.get("/api/reviews/").then(function(e){a.setState({reviews:e.data.allReviews}),console.log(e)}).catch(function(e){console.log(e)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getReviewsFromServer()}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(g,{addNewIndividualReviewText:this.addNewReview}),this.state.reviews.map(function(e){return i.a.createElement("div",null,i.a.createElement("ul",null,i.a.createElement("li",null,e.newReviewText)))}))}}]),t}(n.Component),E=function(e){return i.a.createElement("p",null,e)},j=function(e){return i.a.createElement("p",null,e)},O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={activityName:"",activityLevel:""},a.handleInputChange=function(e){a.setState({activityName:e.target.value})},a.handleRadioChange=function(e){a.setState({activityLevel:e.target.value})},a.handleFormSubmission=function(e){e.preventDefault(),a.props.addNewIndividualActivityText(a.state.activityName),a.props.addNewIndividualEnergyLevel(a.state.activityLevel)},a.addActivityToServer=function(e){console.log({activityName:e}),console.log(e),p.a.post("/api/activities/",e).then(function(t){a.setState({activityName:t.data.allActivities}),console.log(e)}).catch(function(e){console.log(e)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("form",{onSubmit:this.handleFormSubmission},i.a.createElement("input",{required:!0,type:"text",placeholder:"New Activity",value:this.state.activityName,onChange:this.handleInputChange}),i.a.createElement("br",null),i.a.createElement("input",{type:"radio",name:"energyLevel",value:"Low",checked:"Low"===this.state.activityLevel,onChange:this.handleRadioChange}),i.a.createElement("label",null,"Low"),i.a.createElement("input",{type:"radio",name:"energyLevel",value:"Medium",checked:"Medium"===this.state.activityLevel,onChange:this.handleRadioChange}),i.a.createElement("label",null,"Medium"),i.a.createElement("input",{type:"radio",name:"energyLevel",value:"High",checked:"High"===this.state.activityLevel,onChange:this.handleRadioChange}),i.a.createElement("label",null,"High"),i.a.createElement("br",null),i.a.createElement("input",{type:"submit",value:"Add Activity",onClick:function(){e.addActivityToServer(e.state)}}))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={activityList:{individualActivity:[""],energyLevel:[""]}},a.addNewActivity=function(e){var t=Object(f.a)({},a.state.activityList);t.individualActivity.push(e),a.setState({activityList:t})},a.addActivityLevel=function(e){var t=Object(f.a)({},a.state.activityList);t.energyLevel.push(e),a.setState({activityList:t})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Activity"),i.a.createElement(O,{addNewIndividualActivityText:this.addNewActivity,addNewIndividualEnergyLevel:this.addActivityLevel}),(e=this.state.activityList,i.a.createElement("div",null,e.individualActivity.map(E),e.energyLevel.map(j))));var e}}]),t}(i.a.Component),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={activities:[]},a.getActivitiesFromServer=function(){p.a.get("/api/activities/").then(function(e){a.setState({activities:e.data.allActivities}),console.log(e)}).catch(function(e){console.log(e)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getActivitiesFromServer()}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(N,{addNewIndividualActivityText:this.addNewActivity,addNewIndividualEnergyLevel:this.addNewEnergyLevel}),this.state.activities.map(function(e){return i.a.createElement("div",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(l.b,{to:"/api/activities/".concat(e._id,"/users/")},e.activityName)),i.a.createElement("li",null,e.activityLevel)))}))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={rating:Number},a.handleInputChange=function(e){a.setState({rating:e.target.value})},a.handleFormSubmission=function(e){e.preventDefault(),a.props.addNewIndividualRatingNumber(a.state.rating)},a.addRatingToServer=function(e){console.log(a.props.activityId),console.log(e),p.a.post("/api/activities/".concat(a.props.activityId,"/users/"),e).then(function(t){a.setState({rating:t.data}),console.log(e)}).catch(function(e){console.log(e)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("form",{onSubmit:this.handleFormSubmission},i.a.createElement("input",{required:!0,type:"number",placeholder:"New Rating",value:this.state.rating,onChange:this.handleInputChange}),i.a.createElement("input",{type:"submit",value:"Add Rating",onClick:function(){e.addRatingToServer(e.state)}}))}}]),t}(n.Component),L=(i.a.Component,function(e){return i.a.createElement("p",null,e)}),R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={userName:""},a.handleInputChange=function(e){a.setState({userName:e.target.value})},a.handleFormSubmission=function(e){e.preventDefault(),a.props.addNewIndividualUserText(a.state.userName)},a.addUserToServer=function(e){console.log(a.props.activityId),console.log(e),p.a.post("/api/activities/".concat(a.props.activityId,"/users/"),e).then(function(t){a.setState({userName:t.data.allUsers}),console.log(e)}).catch(function(e){console.log(e)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("form",{onSubmit:this.handleFormSubmission},i.a.createElement("textarea",{rows:"4",cols:"50",required:!0,type:"text",placeholder:"How do you feel about the activities listed?",value:this.state.userName,onChange:this.handleInputChange}),i.a.createElement("input",{type:"submit",value:"Add User",onClick:function(){e.addUserToServer(e.state)}}))}}]),t}(i.a.Component),C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={userList:{individualUser:[""]}},a.addNewUser=function(e){var t=Object(f.a)({},a.state.userList);t.individualUser.push(e),a.setState({userList:t})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Reviews"),i.a.createElement(R,{activityId:this.props.activityId,addNewIndividualUserText:this.addNewUser}),(e=this.state.userList,i.a.createElement("div",null,e.individualUser.map(L))));var e}}]),t}(i.a.Component),I=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={users:[]},a.getUsersFromServer=function(e){p.a.get("/api/activities/".concat(e,"/users/")).then(function(e){a.setState({users:e.data.allUsers}),console.log(e.data.allUsers)}).catch(function(e){console.log(e)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getUsersFromServer(this.props.match.params.activity_id)}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(C,{activityId:this.props.match.params.activity_id,addNewIndividualUserText:this.addNewUser}),this.state.users.map(function(e){return i.a.createElement("div",null,i.a.createElement("ul",null,i.a.createElement("li",null,e.userName)))}))}}]),t}(n.Component),x=a(81);a(66);c.a.render(i.a.createElement(function(){return i.a.createElement("div",null,i.a.createElement(l.a,null,i.a.createElement(l.b,{to:"/"},"Home"),i.a.createElement(o.a,{exact:!0,path:"/",render:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Lone Wolf"),i.a.createElement(x.a,{fixed:!0},i.a.createElement("h1",{className:"homePage zeus"},i.a.createElement(l.b,{to:"/api/activities"},"Activities"))),i.a.createElement(x.a,{fixed:!0},i.a.createElement("h1",{className:"homePage hades"},i.a.createElement(l.b,{to:"/api/reviews"},"Journal"))))}}),i.a.createElement(o.a,{exact:!0,path:"/api/reviews",component:b}),i.a.createElement(o.a,{exact:!0,path:"/api/activities",component:S}),i.a.createElement(o.a,{exact:!0,path:"/api/activities/:activity_id/users",component:I})))},null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.2baa537f.chunk.js.map