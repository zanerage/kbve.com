import{g as T,h as B,w as W,b as u,_ as i,y as C,K as M,d as R,e as P,f as j}from"./Menu.1dfd0068.js";import{r as U}from"./index.0d03162d.js";import{j as _}from"./jsx-runtime.44949ced.js";function N(a){return T("MuiTypography",a)}B("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const $=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],w=a=>{const{align:t,gutterBottom:r,noWrap:n,paragraph:e,variant:o,classes:p}=a,s={root:["root",o,a.align!=="inherit"&&`align${u(t)}`,r&&"gutterBottom",n&&"noWrap",e&&"paragraph"]};return j(s,N,p)},L=W("span",{name:"MuiTypography",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:r}=a;return[t.root,r.variant&&t[r.variant],r.align!=="inherit"&&t[`align${u(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:a,ownerState:t})=>i({margin:0},t.variant&&a.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},A=a=>z[a]||a,D=U.exports.forwardRef(function(t,r){const n=C({props:t,name:"MuiTypography"}),e=A(n.color),o=M(i({},n,{color:e})),{align:p="inherit",className:s,component:h,gutterBottom:d=!1,noWrap:f=!1,paragraph:l=!1,variant:g="body1",variantMapping:c=y}=o,x=R(o,$),m=i({},o,{align:p,color:e,className:s,component:h,gutterBottom:d,noWrap:f,paragraph:l,variant:g,variantMapping:c}),v=h||(l?"p":c[g]||y[g])||"span",b=w(m);return _.exports.jsx(L,i({as:v,ref:r,ownerState:m,className:P(b.root,s)},x))}),V=D;export{V as T};
