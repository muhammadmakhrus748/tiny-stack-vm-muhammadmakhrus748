let f=require("fs"),R=(p,q)=>{
let s=[],c=[],m=[],o=[],pc=0,n=0,i=0,a,b;
while(1){
if(n++>=1e6)return[o,10];if(pc>>>0>=p.length)return[o,9];
let k=p[pc],L=k==1?1:k==2?4:k>47&&k<52?2:0,x=pc+1+L,g=k>47&&k<52?p.readInt16LE(x-2):0;
if(!(0xf0003001f00077fff00ffn>>BigInt(k)&1n))return[o,5];
if(L&&pc+L>=p.length)return[o,9];
let u=k==7?3:k==5||k==6||k==65||k>15&&k<35&&k!=23&&k!=27?2:k<3||k==48||k>50&&k<53||k==82?0:1,v=k==4||k==5?2:k==6||k==7?3:k>0&&k<3||k>15&&k<35||k==64||k==82?1:0;
if(s.length<u)return[o,2];if(s.length-u+v>256)return[o,3];
pc=x;
if(k>15&&k<35&&k!=23&&k!=27){b=s.pop();a=s.pop();if(k>18&&k<23&&!b)return[o,4];s.push(k==16?a+b|0:k==17?a-b|0:k==18?Math.imul(a,b):k==19?a/b|0:k==20?a%b|0:k==21?(a>>>0)/(b>>>0)|0:k==22?(a>>>0)%(b>>>0)|0:k==24?a&b:k==25?a|b:k==26?a^b:k==28?a<<(b&31):k==29?a>>(b&31):k==30?a>>>(b&31)|0:k==32?a==b?1:0:k==33?a<b?1:0:a>>>0<b>>>0?1:0)}
else switch(k){
case 0:return[o,0];case 1:s.push(p.readInt8(x-1));break;
case 2:s.push(p.readInt32LE(x-4));break;
case 3:s.pop();break;case 4:s.push(s.at(-1));break;
case 5:s.push(s.pop(),s.pop());break;
case 6:s.push(s.at(-2));break;
case 7:s.push(s.splice(-3,1)[0]);break;
case 23:s.push(-s.pop()|0);break;case 27:s.push(~s.pop());break;
case 48:pc=x+g;break;case 49:a=s.pop();if(!a)pc=x+g;break;case 50:a=s.pop();if(a)pc=x+g;break;
case 51:if(c.length>63)return[o,7];c.push(x);pc=p[x-2]|p[x-1]<<8;break;
case 52:if(!c.length)return[o,8];pc=c.pop();break;
case 64:a=s.pop();if(a>>>0>255)return[o,6];s.push(m[a]|0);break;
case 65:b=s.pop();a=s.pop();if(b>>>0>255)return[o,6];m[b]=a;break;
case 80:a=s.pop();b=a+"";if(o.length+b.length>65536)return[o,11];for(let j of b)o.push(j.charCodeAt());break;
case 81:a=s.pop();if(o.length>=65536)return[o,11];o.push(a&255);break;case 82:s.push(i<q.length?q[i++]:-1);break;case 83:return[o,s.pop()&255];
}
}
};
let e=process.env,I=e.MAKEFUN_INPUT_DIR||"/input",O=e.MAKEFUN_OUTPUT_DIR||"/output";
for(let d of f.readdirSync(I).sort()){
let p=f.readFileSync(I+"/"+d+"/program.bin"),q=f.readFileSync(I+"/"+d+"/input.bin"),r=R(p,q);
f.mkdirSync(O+"/"+d,{recursive:!0});f.writeFileSync(O+"/"+d+"/stdout.bin",Buffer.from(r[0]));f.writeFileSync(O+"/"+d+"/exit.txt",r[1]+"");
}
