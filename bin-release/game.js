window.onload=function(){"use strict";function a(){function a(a,b,c,h){var i=4;I(sb,Ib,Hb,2),sb.beginPath(),sb.moveTo(a(-i),b(-i)),sb.lineTo(a(ab+bb),b(-i)),sb.lineTo(a(ab+bb),b(ab)),sb.arcTo(a(ab+bb),b(ab+bb),a(ab),b(ab+bb),bb),sb.lineTo(a(-i),b(ab+bb)),sb.closePath(),sb.fill(),sb.stroke(),q(r(a(ab),b(ab),bb,Pb)),q(s(a(0),b(ab+bb),a(ab),b(ab+bb),Pb)),q(s(a(ab+bb),b(0),a(ab+bb),b(ab),Pb));var j=a==x?f:g;sb.font="64px sans-serif",sb.textAlign="center",sb.textBaseline="middle",I(sb,Lb[c][1]),sb.fillText(Y(j),a(ab+bb+130)-2,b(50)-3),I(sb,Lb[h][1]),j=b==x?d:e,sb.fillText(Y(j),a(50)-2,b(ab+bb+130)-3),sb.font="16px sans-serif",sb.textAlign="center",sb.textBaseline="middle",I(sb,Lb[c][1]),sb.fillText($b[c],a(ab+bb+30),b(12)),I(sb,Lb[h][1]),sb.fillText($b[h],a(16),b(ab+bb+12))}var b=G(nb,nb),c=H(b);J(c,0,0,nb,nb,Eb),J(c,0,0,nb-1,nb-1,Fb),J(c,0,0,nb-2,nb-2,Db),J(sb,0,0,lb,lb,b),sb.globalAlpha=.1,J(sb,0,lb-ab-2,lb,ab,Lb[Vb][1]),J(sb,lb-ab-2,0,ab,lb,Lb[Wb][1]),J(sb,0,0,lb,ab,Lb[Xb][1]),J(sb,0,0,ab,lb,Lb[Yb][1]),sb.globalAlpha=1,sb.globalCompositeOperation="source-over",I(sb,Db,Gb,2),M(sb,0,0,lb,lb),M(sb,lb,0,0,lb),L(sb,mb,mb,8,Z,Z);var d=8679,e=8681,f=8678,g=8680;a(x,x,2,3),a(x,y,0,3),a(y,x,2,1),a(y,y,0,1);var h=qb,i=h/2;Cb.save(),Cb.translate(4,4),I(Cb,"#aef","#5af",2),Cb.beginPath(),Cb.moveTo(i,0),Cb.quadraticCurveTo(h,-3,h,i),Cb.quadraticCurveTo(h,h+1,i,h-2),Cb.quadraticCurveTo(2,h,0,i),Cb.quadraticCurveTo(-3,-1,i,0),Cb.fill(),Cb.stroke(),I(Cb,$,"#fff",2),M(Cb,8,4,4,20),M(Cb,16,2,8,26,0,1),M(Cb,36,14,18,36,0,1),M(Cb,38,18,26,36,0,2),I(Cb,$,"#58f",2),M(Cb,i-4,10,i-4,18),M(Cb,i+4,10,i+4,18),Cb.translate(h+8,0),I(Cb,"#fa0","#f00",2),Cb.beginPath(),Cb.moveTo(i,-4),Cb.lineTo(i+6,14),Cb.lineTo(h-4,8),Cb.quadraticCurveTo(h,h+3,i,h-2),Cb.quadraticCurveTo(2,h,4,8),Cb.lineTo(i-6,14),Cb.lineTo(i,-4),Cb.fill(),Cb.stroke(),M(Cb,i-3,26,i-8,20),M(Cb,i+3,26,i+8,20),Cb.translate(h+8,0),I(Cb,"#fd7","#d72",2),Cb.beginPath(),Cb.moveTo(i,0),Cb.quadraticCurveTo(h,10,h-8,h-8),Cb.quadraticCurveTo(h,h+1,i+2,h-6),Cb.quadraticCurveTo(14,h-12,2,h-4),Cb.quadraticCurveTo(-2,h-10,4,i),Cb.quadraticCurveTo(0,0,i,0),Cb.fill(),Cb.stroke(),I(Cb,"#d72"),L(Cb,10,7,1,Z),L(Cb,24,9,1,Z),L(Cb,7,20,1,Z),L(Cb,20,14,1,Z),L(Cb,8,30,1,Z),L(Cb,28,32,1,Z),I(Cb,"#000","#d72",1);for(var j=0;2>j;j++){var k;0===j?(Cb.globalCompositeOperation="destination-out",k=Z):(Cb.globalCompositeOperation="source-over",k=$),Cb.scale(1,1.5),L(Cb,13,14,4,k,Z),Cb.scale(1,2/3),Cb.scale(1,1.5),L(Cb,26,14,4,k,Z),Cb.scale(1,2/3)}Cb.translate(h+8,0),Cb.lineCap="round",I(Cb,0,"#fff",2),L(Cb,i,i,i-4,$,Z),I(0,0,1),Cb.beginPath(),Cb.arc(i,i,i-8,3.2,4.4),Cb.stroke(),L(Cb,i-4,i+4,4,$,Z),L(Cb,i+4,i+4,4,$,Z),Cb.restore()}function b(){Ac=0,ic=0,hc=Date.now(),xc=0,vc=!1,gc=sc,oc=0,ac=[],bc=[],a(),n()}function c(){if(!vc&&!Ac)if(Pc.right||Oc.space)wc>xc&&xc++;else if(xc>0){var a=.1+.9*xc/wc,b=Gc+Hc*a;Ic=b*U.cos(zc),Jc=b*U.sin(zc),Kc=Ec+Fc*a,vc=!0,nc="start",aa.play("boost")}for(var c=0;c<ec.length;c++){var d,e=ec[c],f=!e.mirror;d=1==e.elt?f?Oc.up||Oc.right:Oc.down||Oc.left:f?Oc.up||Oc.left:Oc.down||Oc.right;var g=e.ux,h=e.uy;e.cpt=e.cpt||0;var i=9;if(e.max=!1,d?e.cpt<i?e.cpt++:e.max=!0:e.cpt>0&&e.cpt--,e.prevX2=e.x2,e.prevY2=e.y2,e.movingUp=d&&!e.max,e.moving=0!==e.cpt,e.cpt>0){var j=e.amax*(e.cpt/i);e.mirror&&(j*=-1);var k=U.cos(j),l=U.sin(j);g=e.ux*k-e.uy*l,h=e.ux*l+e.uy*k}e._ux=g,e._uy=h,e.x2=e.x+g,e.y2=e.y+h}Pc.left&&dc.elt!=Zb&&0===Kc&&oc>0&&(Nc.x=Pc.x-dc.x,Nc.y=Pc.y-dc.y,B(Nc,Gc+.5*Hc),dc.v.x=Nc.x,dc.v.y=Nc.y,Kc=10,Ic=dc.v.x,Jc=dc.v.y,nc="click",Pc.left=!1,aa.play("boost")),oc>0&&oc--}function d(){var a,b,c;for(b=fc.length,a=0;b>a;a++)c=fc[a],c.a+=c.da,c.x=mb+U.cos(c.a)*c.d,c.y=mb+U.sin(c.a)*c.d}function e(){var a,b,c,d,e;for(b=bc.length,a=0;b>a;a++){if(c=bc[a],c.elt!=dc.elt&&dc.elt!=Zb){var f=A(dc.x-c.x,dc.y-c.y);200>f&&(c.elt==_b[dc.elt]?(c.tx=c.hx,c.ty=c.hy):(c.tx=dc.x,c.ty=dc.y))}if(d=c.tx-c.x,e=c.ty-c.y,25>d*d+e*e){var g=X()*V*2;c.tx=mb+U.cos(g)*kb,c.ty=mb+U.sin(g)*kb}else{var h=A(d,e);c.x+=d*Dc/h,c.y+=e*Dc/h}}}function f(){var a,b,c,d;if(vc){var e=0,f=0,g=Cc,h=Bc;v=mb-dc.x,w=mb-dc.y;var i=db/2,j=A(v,w);i>j&&(v/=j,w/=j,g*=.2+.8*j/i,h*=.5+.5*j/i);var k=dc.x-mb,l=dc.y-mb;for(l>k?l>-k?f=g:e=-g:l>-k?e=g:f=-g,dc.v.x+=e,dc.v.y+=f,Kc>0&&(Kc--,dc.v.x+=Ic,dc.v.y+=Jc),dc.v.x*dc.v.x+dc.v.y*dc.v.y>h*h&&B(dc.v,h),dc.x+=dc.v.x,dc.y+=dc.v.y,dc.x=U.round(dc.x),dc.y=U.round(dc.y),dc.collide=!1,d=ac.length,b=d+bc.length,a=0;b>a;a++)if(c=d>a?ac[a]:bc[a-d],c!=dc){c.collide=!1;var m,n=Nc;if(c.shape==Mb){if(C(dc,c)){if(c.kind==Tb&&(_b[dc.elt]!=c.elt||c.dead||(c.dead=!0,oc=Lc,ic++,aa.play("eat")),c.dead))continue;if(c.collide=!0,n.x=dc.x-c.x,n.y=dc.y-c.y,m=A(n.x,n.y),c.kind==Qb&&dc.elt!=Zb&&(oc+=50,oc>Lc&&(oc=Lc),aa.play("bumper")),c.kind==Tb&&c.elt!=dc.elt){if(mc=tc,dc.elt=Zb,cc.n<cc.length){cc.n++;var o=cc[cc.n-1];o.m=c,o.dx=n.x*(pc-rc)/m,o.dy=n.y*(pc-rc)/m,jc=tc,kc=-1}aa.play("hurt")}n.l=c.r+dc.r-m,n.x=n.x/m,n.y=n.y/m}}else if(c.shape==Nb){var p=c.kind==Sb&&c.movingUp;if(!p&&D(dc,c,n)){c.collide=!0,E(Mc,c.x,c.y,c.x2,c.y2);var q=F(Mc,dc.x,dc.y)!==F(Mc,dc.prevX,dc.prevY);0>=q?m=dc.r-n.l:(m=dc.r+n.l,n.x*=-1,n.y*=-1),n.x/=n.l,n.y/=n.l,n.l=m}if(p){var r,s,t=D(dc,c,n),u=1==c.elt||3==c.elt;if(t||(E(Mc,c.x,c.y,c.prevX2,c.prevY2),r=F(Mc,dc.prevX,dc.prevY,u),E(Mc,c.x,c.y,c.x2,c.y2),s=F(Mc,dc.x,dc.y,u)),t||r!==s){var v=dc.x-c.x,w=dc.y-c.y,x=v*c._ux+w*c._uy;if((t||x>0)&&(t||v*v+w*w<c.l*c.l)){c.collide=!0;var y=(A(v,w),x/c.l);n.x=c.x+y*c._ux/c.l,n.y=c.y+y*c._uy/c.l,n.x=dc.x-n.x,n.y=dc.y-n.y,n.l=A(n.x,n.y),n.x/=n.l,n.y/=n.l;var z=c._uy/c.l,G=-c._ux/c.l;(c.mirror&&(0===c.elt||3==c.elt)||!c.mirror&&(1==c.elt||2==c.elt))&&(z*=-1,G*=-1);var H=z*n.x+G*n.y;0>H&&(n.x*=-1,n.y*=-1),n.l=n.l+dc.r,dc.x+=n.x*n.l,dc.y+=n.y*n.l,dc.collide=!0;var I=y/c.l;I=.1+.9*(.3*I+.7*I*I);var J=Ec+I*Fc>>0,K=Gc+Hc*I,L=n.x*K,M=n.y*K;Kc&&nc==Sb?(Kc=J,Ic=.2*L+Ic,Jc=.2*M+Jc):(aa.play("pad"),Kc=J,Ic=L,Jc=M),nc=Sb,oc=Lc,Ic*=.8+.4*X(),Jc*=.8+.4*X(),dc.elt=c.elt;continue}}}}if(c.collide){Kc=0,dc.collide=!0,c.colCpt=20,dc.x+=n.x*n.l,dc.y+=n.y*n.l;var N=A(dc.v.x,dc.v.y),O=dc.v.x/N,P=dc.v.y/N,Q=-n.y,R=n.x,S=Q*O+R*P;0>S&&(Q=-Q,R=-R);var T=O*n.x+P*n.y;0>T&&(T=-T);var V=U.sin(U.acos(T));0>V&&(V=-V);var W=.2;c.kind==Qb?W=1.1:c.kind==Tb&&(W=1.1),n.x*=T*W*N,n.y*=T*W*N,Q*=V*N,R*=V*N,dc.v.x=n.x+Q,dc.v.y=n.y+R}}dc.prevX=dc.x,dc.prevY=dc.y}}function g(){for(var a,b=(qc+rc)*(qc+rc),c=2*b,d=(qc-pc)*(qc-pc),e=bc.length,f=0;f<cc.n;f++){a=cc[f];var g=a.x-dc.x,h=a.y-dc.y,i=g*g+h*h;if(b>i)aa.play("ring"),a.m=null,cc[f]=cc[cc.n-1],cc[cc.n-1]=a,f--,cc.n--,jc=tc,kc=1,0===cc.n&&(uc=!0);else if(c>i&&(a.x=a.x-.3*g,a.y=a.y-.3*h),a.m)a.m.dead?a.m=null:(a.x=a.m.x+a.dx,a.y=a.m.y+a.dy);else for(var j=0;e>j;j++){var k=bc[j];g=a.x-k.x,h=a.y-k.y,i=g*g+h*h,d>i&&(a.m=k,a.dx=g,a.dy=h)}}}function h(){d(),e(),f(),g()}function i(){ib=gb,jb=hb;var a=dc.x,b=dc.y,c=a-mb,d=b-mb,e=c,f=d;0>e&&(e*=-1),0>f&&(f*=-1);var g=_/2+bb;if(g>e&&g>f){var h=e-g,i=f-g,j=h*h+i*i;if(g*g>j){var k=W(j);h=h*g/k,i=i*g/k,a=h+g,b=i+g,0>c&&(a=-a),0>d&&(b=-b),a=mb+a,b=mb+b}}else f>e?a=mb:b=mb;a=z(a,dc.x-.3*db,dc.x+.3*db),b=z(b,dc.y-.3*eb,dc.y+.3*eb),a=z(a-db/2,0,lb-db),b=z(b-eb/2,0,lb-eb),vc?(gb+=.1*(a-gb),hb+=.1*(b-hb)):(gb=a,hb=b)}function j(){var a=vc;N(ub),N(yb);var b,c;a?(K(ub,vb,0,0),wb.clearRect(0,0,db,eb),wb.save(),wb.globalAlpha=.9,K(wb,tb,-gb+ib,-hb+jb),wb.restore(),N(ub),I(wb,Lb[dc.elt][1]),Kc>0?L(wb,dc.prevX-gb,dc.prevY-hb,6,Z):L(wb,dc.x-gb,dc.y-hb,2,Z)):N(wb),cc.cpt++;var d=170+34*U.cos(cc.cpt/20)>>0;d=d.toString(16),I(yb,null,"#"+d+d+"00",2);var e,f,g=2*V,h=gb-rc,i=gb+db+rc,j=hb-rc,k=hb+db+rc;for(b=0;b<cc.n;b++){var l=cc[b];e=l.x,f=l.y,e>h&&i>e&&f>j&&k>f&&(yb.beginPath(),yb.arc(e-gb,f-hb,rc,0,g),yb.stroke())}var m=qb+2*pb;for(b=0,c=bc.length;c>b;b++){var n=bc[b],p=1;n.dead?(n.cpt-=10,n.cpt<=0?o(n):p=n.cpt/50):n.cpt<50&&(n.cpt++,p=n.cpt/50),n.colCpt>0&&n.colCpt--;var q=_b[dc.elt]==n.elt,r=dc.elt==n.elt;I(yb,r?Ib:q?Lb[n.elt][0]:Kb,r?n.colCpt>0?Jb:Hb:Kb,2),yb.globalAlpha=p*(r?.5:q?.2:.4),L(yb,n.x-gb,n.y-hb,n.r,Z),n.elt==Yb&&(yb.globalAlpha=1,yb.globalCompositeOperation="destination-out",L(yb,n.x-gb,n.y-hb,17,Z),yb.globalCompositeOperation="source-over"),yb.globalAlpha=p,q||L(yb,n.x-gb,n.y-hb,n.r,$,Z),yb.globalAlpha=p*(r?.4:q?.7:1),s=0,t=0,q&&(s=3*(U.random()-.5),t=3*(U.random()-.5)),r&&(yb.globalAlpha=.4*p),yb.drawImage(Bb,n.elt*m,0,m,m,n.x-m/2-gb+s,n.y-m/2-hb+t,m,m)}yb.globalAlpha=1;var s,t;for(b=0,c=ac.length;c>b;b++){var u,v=ac[b],w=v.x-gb,x=v.y-hb;v!=dc&&(v.shape==Mb&&v.kind==Qb?(v.colCpt>0?(v.colCpt--,u=Jb):u=Hb,I(yb,"#000",u,2),L(yb,w,x,v.r,Z,Z)):v.shape==Nb&&v.kind!=Pb&&(u=Hb,v.kind==Sb&&(u=Lb[v.elt][1]),I(yb,0,u,2),M(yb,v.x-gb,v.y-hb,v.x2-gb,v.y2-hb)))}if(!Ac){var y;vc?(y=U.atan2(dc.v.y,dc.v.x),yc=0):(y=dc.sa,yc+=.05),dc.cpt=++dc.cpt%20;var A=dc.cpt;if(A>10&&(A=20-A),vc||(A=2+8*(xc/wc),y+=U.cos(yc)*V/3,zc=y),A*=.3*V/10,s=0,t=0,xc>0&&!vc){var B=4*z(xc/wc,0,1);s=B*X(),t=B*X()}dc.elt!=Zb&&oc>0&&(yb.save(),yb.translate(dc.x-gb+s,dc.y-hb+t),yb.rotate(y),I(yb,"#fff","#000",1),yb.beginPath(),yb.arc(-10,0,20,0,2.2),yb.lineTo(0,0),yb.arc(-10,0,20,-0,-2.2,!0),yb.lineTo(0,0),yb.closePath(),yb.fill(),yb.stroke(),yb.globalCompositeOperation="destination-out",L(yb,0,0,qc,"#fff"),yb.restore()),mc>0?I(yb,Lb[dc.elt][0],Kb,3):I(yb,Lb[dc.elt][0],Lb[dc.elt][1],2),0===A?L(yb,dc.x-gb+s,dc.y-hb+t,qc,Z,Z):O(yb,dc.x-gb+s,dc.y-hb+t,dc.r,y,A,Z,Z)}K(ub,rb,-gb,-hb),a&&K(ub,vb,0,0),K(ub,xb,0,0)}function k(){var a=!1;dc.x+qc<0?(a=!0,dc.x=50,dc.y=mb,dc.sa=0):dc.x-qc>lb?(a=!0,dc.x=lb-50,dc.y=mb,dc.sa=-V):dc.y+qc<0?(a=!0,dc.y=50,dc.x=mb,dc.sa=V/2):dc.y-qc>lb&&(a=!0,dc.y=lb-50,dc.x=mb,dc.sa=-V/2),a&&(vc=!1,xc=0,dc.elt=Zb,dc.v.x=0,dc.v.y=0,lc=tc,Ac=wc,gc--,0===gc&&(uc=!0)),Ac>0&&Ac--}function l(){N(Ab);var a,b=9,c=14;for(a=0;gc>a;a++)I(Ab,Lb[Zb][0],"red"),O(Ab,50+ob/2+a*(b+c),ob/2,b,0,.3,!0);if(mc>0&&mc--,vc&&!uc){var d=20,e=102,f=(db-e)/2,g=(ob-d)/2;I(Ab,Fb),J(Ab,f,g,e,d),mc&&(I(Ab,"#f00"),Ab.globalAlpha=mc/wc,J(Ab,f-2,g-2,e+4,d+4),Ab.globalAlpha=1),oc>0&&dc.elt!=Zb&&(I(Ab,"#fff"),e=(e-2)*(oc/Lc)>>0,f=(db-e)/2+1,J(Ab,f,g,e,d),I(Ab,0,Fb,2),Ab.save(),Ab.translate(db/2,g+10),Ab.rotate(-V/2),Ab.beginPath(),Ab.arc(-10,0,18,-0,-1.4,!0),Ab.lineTo(0,0),Ab.closePath(),Ab.stroke(),Ab.beginPath(),Ab.arc(-10,0,18,0,1.4),Ab.lineTo(0,0),Ab.closePath(),Ab.stroke(),Ab.restore())}I(Ab,0,"#cc0",3),L(Ab,db-20,ob/2,8,!1,!0);var h=(Date.now()-hc)/1e3>>0,i=h/60>>0,j=h%60;10>j&&(j="0"+j),h=i+":"+j,I(Ab,"#fff"),Ab.font="18px sans-serif",Ab.textAlign="left",Ab.textBaseline="middle",Ab.fillText(h,10,ob/2);var k;(!vc||uc)&&(Ab.textAlign="center",k=uc?"Game over":Ac?"Out...":50>xc?"Hold right mouse button":"Release to launch !",Ab.fillText(k,db/2,ob/2));var l=cc.length-cc.n,m=l+" / "+cc.length;if(jc>0&&(jc--,kc>0?(I(Ab,"#0f0"),m=Y(8593)+" "+m):(I(Ab,"#f00"),m=Y(8595)+" "+m)),Ab.textAlign="right",Ab.fillText(m,db-38,ob/2),lc>0&&lc--,uc){var n=gc>0,o=[],p=0,q=1e4,r=100,s=200,t=1e3,u=0;if(o[p++]=n?{t:"YOU WIN :)",s:32,c:"#0f4"}:{t:"YOU LOSE :(",s:32,c:"#f04"},o[p++]={s:24},n?(u+=q,o[p++]={t1:"Finished game:",t2:q,s:18,c:"#ccc"},u+=t*gc,o[p++]={t1:"Extra balls:",t2:gc+" x "+t,s:18,c:"#ccc"}):(u+=r*l,o[p++]={t1:"Rings:",t2:l+" x "+r,s:18,c:"#ccc"}),u+=ic*s,o[p++]={t1:"Eaten monsters:",t2:ic+" x "+s,s:18,c:"#ccc"},h=(Date.now()-hc)/1e3>>0,h=20*(300-h)*l/cc.length>>0,0>h&&(h=0),u+=h,o[p++]={t1:"Time bonus:",t2:h,s:18,c:"#ccc"},o[p++]={t1:"Score:",t2:u,s:24,c:"#fff"},localStorage){var v=parseInt(localStorage.getItem("pacBallScoreMax"));(!v||u>v)&&localStorage.setItem("pacBallScoreMax",u),v&&(u>v?(o[p++]={s:24},o[p++]={t:"New Record !",s:24,c:"#fff"}):o[p++]={t1:"( Record:",t2:v+" )",s:18,c:"#ccc"})}for(o[p++]={s:48},o[p++]={t:"Press SPACE to restart",s:24,c:"#fff"},o[p++]={s:48},c=10,b=2*c,a=0;p>a;a++)b+=o[a].s+4;o.c="#fff";var w=_/2-10,x=b;for(ub.save(),ub.translate((db-w)/2>>0,(eb-x)/2>>0),I(ub,"#000","#fff"),ub.fillRect(0,0,w,x),ub.strokeRect(0,0,w,x),ub.textBaseline="top",a=0;p>a;a++)k=o[a],ub.font=k.s+"px sans-serif",ub.fillStyle=k.c,k.t?(ub.textAlign="center",ub.fillText(k.t,w/2,c)):k.t1&&(ub.textAlign="right",ub.fillText(k.t1,w/2-4,c),ub.textAlign="left",ub.fillText(k.t2,w/2+4,c)),ub.translate(0,k.s+c);ub.restore()}}function m(){window.stb&&stb(),uc?Oc.space&&(uc=!1,b(),Oc.space=!1):(c(),h(),k(),i(),j(),l()),window.ste&&ste(),requestAnimationFrame(m)}function n(){dc=q(r(mb,lb-50,qc,Ob)),dc.v={x:0,y:0},dc.cpt=0,dc.elt=Zb,dc.sa=-V/2,u(s(0,220,150,100,Rb)),fc=[];var a,b,c,d=4;for(b=0;d>b;b++){var e=pc-4,f=2*e+(cb-2*e)*b/d,g=2*X()*V;a=r(0,0,e,Qb),fc.push(q(a));var h=(.2+.2*X())*(X()>.5?-1:1);a.da=h/f,a.a=g,a.d=f}for(b=1;d>b;b++)for(c=0;b>c;c++)a=w(fc[b]),a.a+=2*V*(c+1)/(b+1),fc.push(q(a));u(s(150,100,300,30,Sb)),ec=ac.slice(-8);var i=ec[0],j=A(i.x-i.x2,i.y-i.y2),k=2*-U.acos((i.x2-i.x)/j);for(b=0;b<ec.length;b++)i=ec[b],i.l=j,i.ux=i.x2-i.x,i.uy=i.y2-i.y,i.amax=k,(1==i.elt||2==i.elt)&&(i.amax*=-1);cc=[],cc.n=0,cc.cpt=0;var l,m,n=6,t=11,v=U.random()*V;for(b=1;n>=b;b++)for(c=1;t>=c;c++)m=2*V*(c/t)+.1*b+v,l=p(Mb,Ub),l.r=rc,cc[cc.n]=l,cc.n++,l.x=mb+U.cos(m)*b*kb/n,l.y=mb+U.sin(m)*b*kb/n;for(b=0;4>b;b++){var x=p(Mb,Tb);bc.push(x),x.elt=b,x.r=pc,x.sy=0===b||1==b?ab:lb-ab,x.sx=0===b||3==b?ab:lb-ab,x.hx=mb+.5*_*(1==b?1:3==b?-1:0),x.hy=mb+.5*_*(0===b?1:2==b?-1:0),o(x)}}function o(a){a.tx=a.hx,a.ty=a.hy,a.x=a.sx,a.y=a.sy,a.cpt=0,a.dead=!1,a.da=0,a.a=0,a.d=1}function p(a,b,c,d){return{x:c||0,y:d||0,shape:a,kind:b}}function q(a){return ac.push(a),a}function r(a,b,c,d){var e=p(Mb,d,a,b);return e.r=c,e}function s(a,b,c,d,e){var f=p(Nb,e,a,b);return f.x2=c,f.y2=d,f}function t(a){for(var b=0;4>b;b++){var c=w(a);v(c,"x","y",b),c.shape==Nb&&v(c,"x2","y2",b),q(c),c.elt=b}}function u(a){t(a),a.x=_-a.x,a.shape==Nb&&(a.x2=_-a.x2),a.mirror=!0,t(a)}function v(a,b,c,d){var e=a[b],f=a[c];if(0===d||2==d)e+=ab+bb,0===d&&(f=lb-f);else{var g=f;f=ab+bb+e,e=g,1==d&&(e=lb-e)}a[b]=e,a[c]=f}function w(a){return JSON.parse(JSON.stringify(a))}function x(a){return a}function y(a){return lb-a}function z(a,b,c){return b>a?b:a>c?c:a}function A(a,b){return W(a*a+b*b)}function B(a,b){b=(b||1)/A(a.x,a.y),a.x*=b,a.y*=b}function C(a,b){var c=a.x-b.x,d=a.y-b.y,e=a.r+b.r;return e*e>c*c+d*d}function D(a,b,c){var d=a.x,e=a.y,f=a.r,g=b.x,h=b.y,i=b.x2,j=b.y2,k=i-g,l=j-h,m=U.sqrt(k*k+l*l),n=(i-g)/m,o=(j-h)/m,p=n*(d-g)+o*(e-h),q=p*n+g,r=p*o+h;if((i>g&&q>=g&&i>=q||g>i&&q>=i&&g>=q||g==i&&q==g)&&(j>h&&r>=h&&j>=r||h>j&&r>=j&&h>=r||h==j&&r==h)){var s=r-e,t=q-d,u=W(t*t+s*s);if(f>=u)return c.ex=q,c.ey=r,c.x=-t,c.y=-s,c.l=u,!0}return!1}function E(a,b,c,d,e){b==d?(a.vert=!0,a.x=b):(a.vert=!1,a.m=(c-e)/(b-d),a.p=c-a.m*b)}function F(a,b,c,d){return a.vert?b<a.x:d?b>(c-a.p)/a.m:c>a.m*b+a.p}function G(a,b){var c=S.createElement("canvas");return c.width=a,c.height=b,c}function H(a){return a.getContext("2d")}function I(a,b,c,d){b&&(a.fillStyle=b),c&&(a.strokeStyle=c),d&&(a.lineWidth=d)}function J(a,b,c,d,e,f){f&&(f.width&&(f=a.createPattern(f,"repeat")),I(a,f)),a.fillRect(b,c,d,e)}function K(a,b,c,d){a.drawImage(b,c,d)}function L(a,b,c,d,e,f){a.beginPath(),a.arc(b,c,d,0,2*V,!1),e&&a.fill(),f&&a.stroke()}function M(a,b,c,d,e){a.beginPath(),a.moveTo(b,c),a.lineTo(d,e),a.stroke()}function N(a){a.clearRect(0,0,db,eb)}function O(a,b,c,d,e,f,g,h){a.beginPath(),a.arc(b,c,d,e+f,e-f),a.lineTo(b,c),a.closePath(),g&&a.fill(),h&&a.stroke()}function P(a,b){b||(b=window.e);var c=b.keyCode;b.charCode&&!c&&(c=b.charCode),Oc[Qc[c]]=a}function Q(a,b){var c,d;"which"in b?(c=3==b.which,d=2==b.which):"button"in b&&(c=2==b.button,d=1==b.button),c?Pc.right=a:d?Pc.middle=a:Pc.left=a,S.onmousemove(b)}var R=window,S=R.document,T=S.body,U=R.Math,V=U.PI,W=U.sqrt,X=U.random,Y=String.fromCharCode,Z=!0,$=!1,_=700,ab=220,bb=200,cb=bb+_/2;cb=A(cb,cb)-bb>>0;var db,eb,fb,gb,hb,ib,jb,kb=(_/2+A(_/2,_/2))/2,lb=_+2*ab+2*bb,mb=lb/2,nb=20,ob=50,pb=4,qb=40,rb=G(lb,lb),sb=H(rb),tb=G(),ub=H(tb),vb=G(),wb=H(vb),xb=G(),yb=H(xb),zb=G(),Ab=H(zb),Bb=G(4*(qb+2*pb),qb+2*pb),Cb=H(Bb);window.onresize=function(){db=z(R.innerWidth,_,lb),eb=z(R.innerHeight-ob,_,lb),fb=U.min(db,eb),zb.width=xb.width=vb.width=tb.width=db-=db%2,xb.height=vb.height=tb.height=eb-=eb%2,zb.height=ob},T.onresize(),T.appendChild(zb),T.appendChild(tb);var Db="#111",Eb="#222",Fb="#333",Gb="#444",Hb="#08e",Ib="#000",Jb="#8f8",Kb="#f02",Lb=[["#aef","#5af"],["#fa0","#f53"],["#a64","#864","#fd7"],["rgba(255,255,255,0.5","#fff","#fff"],["#ff6","#555"]],Mb="c",Nb="l",Ob="b",Pb="bg",Qb="bp",Rb="o",Sb="p",Tb="m",Ub="ring",Vb=0,Wb=1,Xb=2,Yb=3,Zb=4,$b=["Water","Fire","Earth","Air"],_b={};_b[Vb]=Wb,_b[Wb]=Vb,_b[Xb]=Yb,_b[Yb]=Xb;var ac,bc,cc,dc,ec,fc,gc,hc,ic,jc,kc,lc,mc,nc,oc,pc=38,qc=16,rc=8,sc=5,tc=50,uc=!1,vc=!1,wc=100,xc=0,yc=0,zc=0,Ac=0,Bc=10,Cc=.2,Dc=1,Ec=1,Fc=12,Gc=.2*Bc,Hc=.8*Bc,Ic=0,Jc=0,Kc=0,Lc=150,Mc={},Nc={},Oc={},Pc={};b(),m();var Qc={37:"left",65:"left",81:"left",38:"up",90:"up",87:"up",83:"down",40:"down",39:"right",68:"right",32:"space",27:"esc",13:"Enter"};S.onkeyup=function(a){P(!1,a),27==a.keyCode&&(window._stopped?(window._stopped=!1,window.requestAnimationFrame=window._raf):(window._stopped=!0,window._raf=window.requestAnimationFrame,window.requestAnimationFrame=function(){})),13==a.keyCode&&window._stopped&&m()},S.onkeydown=function(a){P(!0,a)},S.onmousedown=function(a){Q(!0,a)},S.onmouseup=function(a){Q(!1,a)},S.onmousemove=function(a){Pc.x=a.clientX+gb,Pc.y=a.clientY+hb-ob},S.oncontextmenu=function(){return!1}};