(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return f});n(28);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(143),c=n.n(l),u=n(134),s=n(138),d=n(137),p=n(133),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,n=e.excerpt,a=this.props.pageContext,r=a.previous,i=a.next;return o.a.createElement(d.a,{location:this.props.location,title:t},o.a.createElement(c.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:e.frontmatter.title+" | "+t}),o.a.createElement("h1",null,e.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(p.b)(-.2),{display:"block",marginBottom:Object(p.a)(1),marginTop:Object(p.a)(-1)})},e.frontmatter.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),o.a.createElement("hr",{style:{marginBottom:Object(p.a)(1)}}),o.a.createElement(s.a,null),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,r&&o.a.createElement(u.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),o.a.createElement("li",null,i&&o.a.createElement(u.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))))},t}(o.a.Component);t.default=m;var f="3804820323"},133:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return u});var a=n(140),r=n.n(a),i=n(141),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var l=new r.a(o.a);var c=l.rhythm,u=l.scale},134:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(132),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(135),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(29);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},135:function(e,t,n){var a;e.exports=(a=n(136))&&a.default||a},136:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(46),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},137:function(e,t,n){"use strict";n(28);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(134),c=n(133),u=(n(142),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.title,r=t.children;return e="/nickblog-articles/"===n.pathname?o.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},o.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(c.a)(-1)}},o.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},e,r)},t}(o.a.Component));t.a=u},138:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=(n(146),n(147),n(139)),c=n.n(l),u=n(133),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(u.a)(2.5)}},o.a.createElement("img",{src:c.a,alt:"Nicholas Xue",style:{marginRight:Object(u.a)(.5),marginBottom:0,width:Object(u.a)(2),height:Object(u.a)(2),borderRadius:"50%"}}),o.a.createElement("p",null,"Some people call us nerds, we claim that label with prides.",o.a.createElement("br",null),"I stand up for every nerd trying to be a ",o.a.createElement("strong",null,"rock star"),"."))},t}(o.a.Component);t.a=s},139:function(e,t,n){e.exports=n.p+"static/avatar-a1539eeab41ff21483300fd04cb671d4.png"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-509ab78733b99213eedb.js.map