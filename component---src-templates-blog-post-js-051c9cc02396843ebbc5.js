"use strict";(self.webpackChunkchloe=self.webpackChunkchloe||[]).push([[989],{866:function(e,t,n){var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n(7294)),i=s(n(5697));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=["shortname","identifier","title","url","category_id","onNewComment","language"],f=!1;function m(e,t){var n=t.onNewComment,r=t.language,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["onNewComment","language"]);for(var o in a)e.page[o]=a[o];e.language=r,n&&(e.callbacks={onNewComment:[n]})}var p=function(e){function t(){return l(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return u.some((function(e){return e===n}))?t:r({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))}),{});return o.default.createElement("div",t,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!f){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),f=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};u.forEach((function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){m(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){m(this,t)},this.addDisqusScript())}}]),t}(o.default.Component);p.displayName="DisqusThread",p.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},p.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=p},1227:function(e,t,n){e.exports=n(866)},5898:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(7294),a=function(){return r.createElement("hr",{className:"custom-hr"})},o=n(9031),i=n(7850),s=function(e){var t=e.title;return r.createElement("h1",null,t)},l=function(e){var t=e.date;return r.createElement("p",{className:"post-date"},t)},c=function(e){var t=e.html;return r.createElement("div",{dangerouslySetInnerHTML:{__html:t}})},u=function(e){var t=e.onClick;return r.createElement("a",{className:"resp-sharing-button__link",href:"#",target:"_blank",rel:"noopener","aria-label":"Share on Facebook",onClick:t},r.createElement("div",{className:"resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"},r.createElement("div",{"aria-hidden":"true",className:"resp-sharing-button__icon resp-sharing-button__icon--solid"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.createElement("path",{d:"M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"}))),r.createElement("span",{className:"service-label"},"Share on Facebook")))},f=function(e){var t=e.onClick;return r.createElement("a",{className:"resp-sharing-button__link",href:"#",rel:"noopener","aria-label":"Share on Twitter",onClick:t},r.createElement("div",{className:"resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large"},r.createElement("div",{"aria-hidden":"true",className:"resp-sharing-button__icon resp-sharing-button__icon--solid"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.createElement("path",{d:"M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"}))),r.createElement("span",{className:"service-label"},"Share on Twitter")))},m=function(e){var t='Recommend on "'+e.title+'" written by @'+e.author;return r.createElement("div",{className:"social-share"},r.createElement(u,{onClick:function(e){return e.preventDefault(),function(e,t){window.FB.ui({method:"share",mobile_iframe:!0,href:e,quote:t})}(window.location.href,t)}}),r.createElement(f,{onClick:function(e){return e.preventDefault(),function(e,t){window.open("https://twitter.com/share?url="+encodeURI(encodeURI(e))+"&text="+t,"sharer","toolbar=0,status=0,width=626,height=436")}(window.location.href,t)}}))},p=function(e){var t=e.sponsorId;return r.createElement("div",{className:"sponsor-button"},r.createElement("a",{className:"bmc-button",target:"_blank",rel:"noopener noreferrer",href:"https://www.buymeacoffee.com/"+t},r.createElement("img",{src:"https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg",alt:"Buy me a coffee"}),r.createElement("span",null,"Buy me a coffee")))},d=n(8195),h=n(1597),g=function(e){var t=e.pageContext,n=t.previous,a=t.next;return r.createElement("ul",{className:"navigator"},r.createElement("li",null,n&&r.createElement(h.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),r.createElement("li",null,a&&r.createElement(h.Link,{to:a.fields.slug,rel:"next"},a.frontmatter.title," →")))};function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var v=n(1721),w=n(1227),y=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(b(n)),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(b(n)),n}(0,v.Z)(t,e);var n=t.prototype;return n.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},n.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!!"}),this.setState({toasts:e})},n.render=function(){var e=this.props,t=e.post,n=e.shortName,a=e.siteUrl+e.slug;return r.createElement(w.default,{shortname:n,identifier:t.frontmatter.title,title:t.frontmatter.title,url:a,category_id:t.frontmatter.category_id,onNewComment:this.notifyAboutComment})},t}(r.Component),E=n(164),k=n(4758),C=function(e){var t=e.repo,n=r.createRef();return(0,r.useEffect)((function(){var e=E.j8(k.C6.DARK),r=document.createElement("script"),a={src:"https://utteranc.es/client.js",repo:t,branch:"master",theme:e?"photon-dark":"github-light",label:"comment",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(a).forEach((function(e){r.setAttribute(e,a[e])})),n.current.appendChild(r)}),[]),r.createElement("div",{className:"utterances",ref:n})},_=n(2685),N=function(e){var t=e.data,n=e.pageContext,u=e.location;(0,r.useEffect)((function(){return _.S(),function(){return _.o()}}),[]);var f=t.markdownRemark,h=t.site.siteMetadata,b=h.title,v=h.comment,w=h.author,E=h.sponsor,k=h.siteUrl,N=v.disqusShortName,S=v.utterances,O=f.frontmatter,j=O.title,x=O.date,D=O.image;return r.createElement(o.A,{location:u,title:b},r.createElement(i.F,{title:j,description:f.excerpt,image:D}),r.createElement(s,{title:j}),r.createElement(l,{date:x}),r.createElement(c,{html:f.html}),r.createElement(m,{title:j,author:w}),!!E.buyMeACoffeeId&&r.createElement(p,{sponsorId:E.buyMeACoffeeId}),r.createElement(a,null),r.createElement(d.w,null),r.createElement(g,{pageContext:n}),!!N&&r.createElement(y,{post:f,shortName:N,siteUrl:k,slug:n.slug}),!!S&&r.createElement(C,{repo:S}))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-051c9cc02396843ebbc5.js.map