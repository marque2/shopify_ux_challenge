(this.webpackJsonpshopify_ux_challenge=this.webpackJsonpshopify_ux_challenge||[]).push([[0],{1:function(e,t,a){e.exports={inputDiv:"styles_inputDiv__35jMn",searchInput:"styles_searchInput__1fdmR",focusedDiv:"styles_focusedDiv__1AGV7",title1:"styles_title1__1h9HJ",title2:"styles_title2__1ZC_Q",regularText:"styles_regularText__3k7jA",topBanner:"styles_topBanner__3CbS0",nominationCardPoster:"styles_nominationCardPoster__33rNN",removeNominationButton:"styles_removeNominationButton__38dAD",contentBody:"styles_contentBody__1em19",shareLink:"styles_shareLink__2p2vQ",movieCard:"styles_movieCard__iqTsS",shareLinkContainer:"styles_shareLinkContainer__3QXwH",shareLinkInputDiv:"styles_shareLinkInputDiv__3Ibnp",closeButton:"styles_closeButton__3BnqZ",blackTitle2:"styles_blackTitle2__1xooA",nominationsMainContainer:"styles_nominationsMainContainer__2hn4b",mobileDisplayOnly:"styles_mobileDisplayOnly__1vtH8",shareIcon:"styles_shareIcon__1ELqT",modal:"styles_modal__3zW2H",searchResultsMainContainer:"styles_searchResultsMainContainer__1rqut",movieCardPoster:"styles_movieCardPoster__3gDXL",middleText:"styles_middleText__1Pii6",disabledButton:"styles_disabledButton__GUcf1",button:"styles_button__3gdzL",desktopDisplayOnly:"styles_desktopDisplayOnly__S-cT-"}},10:function(e,t,a){e.exports={snackbar:"snackBar_snackbar__3IDid",show:"snackBar_show__paIeq",fadein:"snackBar_fadein__1dXxO",fadeout:"snackBar_fadeout__1xqQO",fadeinmobile:"snackBar_fadeinmobile__3Q9fZ",fadeoutmobile:"snackBar_fadeoutmobile__2STB4"}},27:function(e,t,a){},28:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(2),s=a.n(i),o=a(20),r=a.n(o),c=(a(27),a(21)),l=a(6),h=a(7),u=a(4),d=a(9),m=a(8),p=(a(28),a(5)),f=a.n(p),b=a(1),v=a.n(b),_=a.p+"static/media/search.841f128c.svg",g=a.p+"static/media/trash.0f34c80f.svg",j=a.p+"static/media/share-android.53649730.svg",k=a.p+"static/media/copy.7dcc5ed9.svg",y=a.p+"static/media/x.1b162409.svg",O=a(10),L=a.n(O),x=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).message="",e.state={isActive:!1},e.openSnackBar=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Something went wrong...";e.message=t,e.setState({isActive:!0},(function(){setTimeout((function(){e.setState({isActive:!1})}),5e3)}))},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state.isActive;return Object(n.jsx)("div",{className:e?L.a.snackbar+" "+L.a.show:L.a.snackbar,children:this.message})}}]),a}(i.PureComponent),S=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={titleSearchInput:"",searchResults:[],nominationsList:[],searchResultErrorMessage:"",shareLinkIsActive:!1},n.handleInputChange=n.handleInputChange.bind(Object(u.a)(n)),n.nominateMovie=n.nominateMovie.bind(Object(u.a)(n)),n.unNominateMovie=n.unNominateMovie.bind(Object(u.a)(n)),n.isNominated=n.isNominated.bind(Object(u.a)(n)),n.updateLocalStorage=n.updateLocalStorage.bind(Object(u.a)(n)),n.clearLocalStorage=n.clearLocalStorage.bind(Object(u.a)(n)),n.handleShareLinkModalClick=n.handleShareLinkModalClick.bind(Object(u.a)(n)),n.copyLink=n.copyLink.bind(Object(u.a)(n)),n.showShareLinkModal=n.showShareLinkModal.bind(Object(u.a)(n)),n.inputRef=s.a.createRef(),n.inputDivRef=s.a.createRef(),n.snackBarRef=s.a.createRef(),n.shareLinkContainerRef=s.a.createRef(),n.shareLinkInputRef=s.a.createRef(),n.closeModalButtonRef=s.a.createRef(),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new URLSearchParams(window.location.search).get("nomi");if(t&&t.length>0){for(var a=t.split("$$"),n=[],i=[],s=0;s<a.length;s++)i.push(f.a.get("https://www.omdbapi.com/?apikey=82ab90b1&i="+a[s]));f.a.all(i).then(f.a.spread((function(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];for(var s=0;s<a.length;s++)"True"===a[s].data.Response&&n.push(a[s].data);n.length>0&&e.setState({nominationsList:n})})))}else"undefined"!==typeof Storage&&localStorage.movieNominations&&this.setState({nominationsList:JSON.parse(localStorage.movieNominations)});this.inputRef.current&&this.inputDivRef.current&&(this.inputRef.current.onfocus=function(){e.inputDivRef.current.classList.add(v.a.focusedDiv)},this.inputRef.current.onblur=function(){e.inputDivRef.current.classList.remove(v.a.focusedDiv)})}},{key:"handleInputChange",value:function(e){var t=this,a=e.target,n=a.name,i=a.value;"titleSearchInput"===n&&(i.length>0?f.a.get("https://www.omdbapi.com/?apikey=82ab90b1&i&s="+i+"&type=movie").then((function(e){"True"===e.data.Response?t.setState({searchResults:e.data.Search}):e.data.Error&&t.setState({searchResultErrorMessage:e.data.Error})})).catch((function(e){t.snackBarRef.current.openSnackBar("There was an error with omdb's server! Please try again.")})):this.setState({searchResults:[],searchResultErrorMessage:""})),this.setState(Object(c.a)({},n,i))}},{key:"updateLocalStorage",value:function(){"undefined"!==typeof Storage&&localStorage.setItem("movieNominations",JSON.stringify(this.state.nominationsList))}},{key:"clearLocalStorage",value:function(){"undefined"!==typeof Storage&&localStorage.removeItem("movieNominations")}},{key:"nominateMovie",value:function(e){for(var t=this,a=e.imdbID,n=this.state.nominationsList,i=0;i<n.length;i++)if(n[i].imdbID===a)return;this.state.nominationsList.length<=4&&(n.push(e),this.setState({nominationsList:n},(function(){t.updateLocalStorage()})))}},{key:"unNominateMovie",value:function(e){for(var t=this,a=e.imdbID,n=this.state.nominationsList,i=0;i<n.length;i++)if(n[i].imdbID===a)return n.splice(i,1),void this.setState({nominationsList:n},(function(){t.updateLocalStorage()}))}},{key:"isNominated",value:function(e){for(var t=0;t<this.state.nominationsList.length;t++)if(this.state.nominationsList[t].imdbID===e)return!0;return!1}},{key:"showShareLinkModal",value:function(){this.state.nominationsList.length>0?this.setState({shareLinkIsActive:!0}):this.snackBarRef.current.openSnackBar("Please nominate a movie before sharing your list.")}},{key:"handleShareLinkModalClick",value:function(e){e.target!==this.shareLinkContainerRef.current&&e.target!==this.closeModalButtonRef.current||this.setState({shareLinkIsActive:!1})}},{key:"copyLink",value:function(){if(this.shareLinkInputRef.current){var e=this.shareLinkInputRef.current;e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),window.getSelection().removeAllRanges(),this.snackBarRef.current.openSnackBar("Link copied successfully!")}else this.snackBarRef.current.openSnackBar("Could not copy link:(")}},{key:"render",value:function(){var e,t,a,i,s=this;return e=this.state.searchResults.length>0?this.state.searchResults.map((function(e,t){return Object(n.jsxs)("div",{className:v.a.movieCard,children:[Object(n.jsx)("div",{className:v.a.movieCardPoster,style:{backgroundImage:"url('"+e.Poster+"')"}}),Object(n.jsxs)("p",{className:v.a.regularText,children:[e.Title," (",e.Year,")"]}),s.isNominated(e.imdbID)?Object(n.jsx)("button",{className:v.a.disabledButton,children:"Nominate"}):Object(n.jsx)("button",{className:v.a.button,onClick:function(){s.nominateMovie(e)},children:"Nominate"})]},t)})):this.state.searchResultErrorMessage.length>0?Object(n.jsx)("p",{className:v.a.regularText+" "+v.a.middleText,children:this.state.searchResultErrorMessage}):Object(n.jsx)("p",{className:v.a.regularText+" "+v.a.middleText,children:"Search for a movie title in the input above."}),this.state.nominationsList.length>0?(a="https://marque2.github.io/shopify_ux_challenge?nomi=",t=this.state.nominationsList.map((function(e,t){return a+=e.imdbID+"$$",Object(n.jsxs)("div",{style:{backgroundImage:"url('"+e.Poster+"')"},className:v.a.nominationCardPoster,children:[Object(n.jsx)("div",{onClick:function(){s.unNominateMovie(e)},className:v.a.removeNominationButton,children:Object(n.jsx)("img",{alt:"",src:g})}),Object(n.jsxs)("p",{className:v.a.regularText,children:[e.Title," (",e.Year,")"]})]},t)})),a=a.substring(0,a.length-2)):t=Object(n.jsx)("p",{className:v.a.regularText,children:"Nominate up to 5 of your favorite movies."}),this.state.shareLinkIsActive&&(i=Object(n.jsx)("div",{ref:this.shareLinkContainerRef,onClick:this.handleShareLinkModalClick,id:v.a.shareLinkContainer,children:Object(n.jsxs)("div",{className:v.a.modal,children:[Object(n.jsx)("img",{alt:"",ref:this.closeModalButtonRef,src:y,className:v.a.closeButton}),Object(n.jsx)("p",{className:v.a.blackTitle2,children:"Share your nominations list"}),Object(n.jsxs)("div",{id:v.a.shareLinkInputDiv,children:[Object(n.jsx)("img",{alt:"",src:k,onClick:this.copyLink}),Object(n.jsx)("input",{ref:this.shareLinkInputRef,readOnly:!0,type:"text",value:a})]})]})})),Object(n.jsxs)("div",{className:"App",children:[5===this.state.nominationsList.length?Object(n.jsx)("div",{id:v.a.topBanner,children:Object(n.jsx)("p",{className:v.a.regularText,children:"Your nomination list is full! (5 movies max.)"})}):null,Object(n.jsxs)("div",{id:v.a.contentBody,children:[Object(n.jsx)("p",{className:v.a.title1,children:"The Shoppies Awards"}),Object(n.jsx)("img",{alt:"",className:v.a.desktopDisplayOnly,onClick:this.showShareLinkModal,id:v.a.shareIcon,src:j}),Object(n.jsxs)("div",{ref:this.inputDivRef,id:v.a.inputDiv,children:[Object(n.jsx)("img",{alt:"",src:_}),Object(n.jsx)("input",{id:v.a.searchInput,ref:this.inputRef,onChange:this.handleInputChange,type:"text",name:"titleSearchInput",value:this.state.titleSearchInput,placeholder:"movie title"})]}),Object(n.jsx)("img",{alt:"",className:v.a.mobileDisplayOnly,onClick:this.showShareLinkModal,id:v.a.shareIcon,src:j}),Object(n.jsx)("div",{id:v.a.searchResultsMainContainer,children:e}),Object(n.jsxs)("div",{id:v.a.nominationsMainContainer,children:[Object(n.jsx)("p",{className:v.a.title2,children:"Nominations"}),t]})]}),i,Object(n.jsx)(x,{ref:this.snackBarRef}),Object(n.jsx)("p",{className:v.a.regularText,children:"Made by Marc-Andr\xe9 Meza"})]})}}]),a}(s.a.Component),R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),s(e),o(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),R()}},[[47,1,2]]]);
//# sourceMappingURL=main.2c2f679c.chunk.js.map