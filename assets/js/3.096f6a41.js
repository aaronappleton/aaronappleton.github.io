(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{300:function(t,s,e){},301:function(t,s,e){},302:function(t,s,e){"use strict";e(300)},303:function(t,s,e){"use strict";e(301)},314:function(t,s,e){"use strict";e.r(s);var i={},a=e(38),l=Object(a.a)(i,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("nav",{staticClass:"tabs is-small"},[e("ul",[e("li",[e("a",{attrs:{href:"/"}},[t._v("home")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/about"}},[t._v("about")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/resume"}},[t._v("resume/cv")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/thatcotter",target:"blank"}},[e("i",{staticClass:"fab fa-github"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.instagram.com/thatcotter/",target:"blank"}},[e("i",{staticClass:"fab fa-instagram"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/ThatCotter",target:"blank"}},[e("i",{staticClass:"fab fa-twitter"})])])])])}],!1,null,null,null).exports,r={},n=Object(a.a)(r,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-3-desktop is-1-tablet"}),this._v(" "),s("div",{staticClass:"column is-6-desktop"},[s("section",{staticClass:"hero is-medium is-bold"},[s("div",{staticClass:"hero-body"},[s("h1",{staticClass:"title"},[s("Content",{attrs:{"slot-key":"header"}})],1),this._v(" "),s("Content")],1)])])])}),[],!1,null,null,null).exports,c={computed:{allWork(){return this.$site.pages.filter(t=>t.path.includes("/cv/work/")).sort((t,s)=>t.frontmatter.Order-s.frontmatter.Order)},allTeaching(){return this.$site.pages.filter(t=>t.path.includes("/cv/teaching/")).sort((t,s)=>t.frontmatter.Order-s.frontmatter.Order)},allCore(){return this.$site.pages.filter(t=>t.path.includes("/cv/core/")).sort((t,s)=>t.frontmatter.Order-s.frontmatter.Order)},allSkills(){return this.$site.pages.filter(t=>t.path.includes("/cv/skills/"))[0]},allEdu(){return this.$site.pages.filter(t=>t.path.includes("/cv/education/")).sort((t,s)=>t.frontmatter.Order-s.frontmatter.Order)}}},o=Object(a.a)(c,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-1-widescreen"}),t._v(" "),e("div",{staticClass:"column is-9-widescreen is-12-tablet"},[t._m(0),t._v(" "),e("section",{staticClass:"section"},[e("div",{staticClass:"tile is-ancestor"},[e("div",{staticClass:"tile is-vertical is-7"},[e("article",{staticClass:"tile is-parent is-vertical"},[e("p",{staticClass:"title is-child"},[t._v("\n                            Professional Experience\n                        ")]),t._v(" "),t._l(t.allWork,(function(s){return e("article",{staticClass:"tile is-child box"},[e("p",{staticClass:"title is-5"},[t._v(t._s(s.frontmatter.Title))]),t._v(" "),e("p",{staticClass:"subtitle"},[t._v(t._s(s.frontmatter.Subtitle))]),t._v(" "),e("p",{staticClass:"is-size-6 has-text-weight-light is-7"},[t._v(t._s(s.frontmatter.Description))])])}))],2),t._v(" "),e("article",{staticClass:"tile is-parent is-vertical"},[e("p",{staticClass:"title is-child"},[t._v("\n                            Teaching Experience\n                        ")]),t._v(" "),t._l(t.allTeaching,(function(s){return e("article",{staticClass:"content box"},[e("p",{staticClass:"title is-5"},[t._v(t._s(s.frontmatter.Title))]),t._v(" "),e("p",{staticClass:"subtitle"},[t._v(t._s(s.frontmatter.Subtitle))])])}))],2)]),t._v(" "),e("div",{staticClass:"tile is-parent is-vertical"},[e("p",{staticClass:"title"},[t._v("\n                        Core Competencies\n                    ")]),t._v(" "),t._l(t.allCore,(function(s){return e("article",{staticClass:"content box"},[e("p",{staticClass:"title is-5"},[t._v(t._s(s.frontmatter.Title))]),t._v(" "),e("p",{staticClass:"is-size-6 has-text-weight-light is-7"},[t._v(t._s(s.frontmatter.Description))])])})),t._v(" "),e("p",{staticClass:"title"},[t._v("\n                        Skills + Tools\n                    ")]),t._v(" "),e("div",{staticClass:"tile is-vertical box"},[e("p",{staticClass:"title is-5"},[t._v("Adept")]),t._v(" "),e("ul",{attrs:{"is-6":""}},[e("Content",{attrs:{"slot-key":"adept"}})],1)]),t._v(" "),e("div",{staticClass:"tile is-vertical box"},[e("p",{staticClass:"title is-5"},[t._v("Intermediate")]),t._v(" "),e("ul",{attrs:{"is-6":""}},[e("Content",{attrs:{"slot-key":"intermediate"}})],1)]),t._v(" "),e("div",{staticClass:"tile is-vertical box"},[e("p",{staticClass:"title is-5"},[t._v("Familiar")]),t._v(" "),e("ul",{attrs:{"is-6":""}},[e("Content",{attrs:{"slot-key":"familiar"}})],1)]),t._v(" "),e("div",{staticClass:"tile is-vertical box"},[e("p",{staticClass:"title is-5"},[t._v("Actively Learning")]),t._v(" "),e("ul",{attrs:{"is-6":""}},[e("Content",{attrs:{"slot-key":"learning"}})],1)]),t._v(" "),e("p",{staticClass:"title"},[t._v("\n                        Education + Honors\n                    ")]),t._v(" "),t._l(t.allEdu,(function(s){return e("article",{staticClass:"content box"},[e("p",{staticClass:"title is-5"},[t._v(t._s(s.frontmatter.Title))]),t._v(" "),e("p",{staticClass:"subtitle"},[t._v(t._s(s.frontmatter.Subtitle))]),t._v(" "),e("p",{staticClass:"is-size-6 has-text-weight-light is-7"},[t._v(t._s(s.frontmatter.Description))])])}))],2)])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"section"},[s("a",{staticClass:"subtitle has-text-link",attrs:{href:"./resume.pdf"}},[this._v("Print/PDF")])])}],!1,null,null,null).exports,u={props:["data"]},v=(e(302),Object(a.a)(u,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-3-fullhd is-2-desktop is-1-tablet"}),this._v(" "),s("div",{staticClass:"column is-7-fullhd is-8-desktop"},[s("section",{staticClass:"section"},[s("p",{staticClass:"title"},[s("Content",{attrs:{"slot-key":"title"}})],1),this._v(" "),s("p",{staticClass:"subtitle"},[s("Content",{attrs:{"slot-key":"subtitle"}})],1)]),this._v(" "),s("section",{},[s("Content",{attrs:{"slot-key":"hero"}})],1),this._v(" "),s("section",{staticClass:"section"},[s("Content")],1)]),this._v(" "),s("div",{staticClass:"column is-3-fullhd is-2-desktop is-1-tablet"})])}),[],!1,null,"44789a94",null).exports),_={name:"ProjectTile",props:{frontmatter:Object,path:String},computed:{heroSource(){return null!=this.frontmatter.Hero?"./images/"+this.frontmatter.Hero:"https://designshack.net/wp-content/uploads/placeholder-image.png"}}},h={name:"ProjectGrid",components:{ProjectTile:Object(a.a)(_,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"column is-one-third progressive",staticStyle:{"justify-content":"center",overflow:"hidden","align-items":"center"}},[s("a",{attrs:{href:this.path}},[s("img",{staticClass:"preview lazy tileImage",attrs:{src:this.heroSource,alt:""}})])])}),[],!1,null,null,null).exports},computed:{allProjects(){return this.$site.pages.filter(t=>t.path.includes("/projects/")).sort((t,s)=>t.frontmatter.Order-s.frontmatter.Order)}}},p={name:"layout",components:{Nav:l,About:n,Resume:o,Project:v,ProjectGrid:Object(a.a)(h,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"section"},[e("div",{staticClass:"columns is-multiline"},t._l(t.allProjects,(function(s){return e("ProjectTile",t._b({},"ProjectTile",s,!1))})),1)])}),[],!1,null,null,null).exports},computed:{layout(){const t=this.$page.path;switch(!0){case t.includes("/about"):return"About";case t.includes("/resume"):return"Resume";case t.includes("/projects"):return"Project";default:return"ProjectGrid"}}}},m=(e(303),Object(a.a)(p,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"theme-container section"},[e("h1",{staticClass:"title name"},[t._v(t._s(t.$frontmatter.Title))]),t._v(" "),e("h2",{staticClass:"subtitle name"},[t._v(t._s(t.$frontmatter.Subtitle)+" ")]),t._v(" "),e("Nav"),t._v(" "),e("div",[e(t.layout,{tag:"component"})],1)],1)}),[],!1,null,null,null));s.default=m.exports}}]);