module.exports=function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=14)}([function(e,t){e.exports=require("mongoose")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("formidable")},function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("cookie-parser")},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("helmet")},function(e,t){e.exports=require("crypto")},function(e,t,r){e.exports=r.p+"6635b03b26d02dcb8f5a5e92f80b63c6.png"},function(e,t){e.exports=require("jsonwebtoken")},function(e,t){e.exports=require("express-jwt")},function(e,t,r){e.exports=r(15)},function(e,t,r){"use strict";r.r(t);var o={env:"production",port:process.env.PORT||8080,jwtSecret:process.env.JWT_SECRET||"your_secret_key",mongoUri:process.env.MONGODB_URI||process.env.MONGODB_HOST||"mongodb://"+(process.env.IP||"localhost")+":"+(process.env.MONGODB_PORT||"27017")+"/project"},n=r(1),s=r.n(n),a=r(5),i=r.n(a),u=r(6),d=r.n(u),p=r(7),c=r.n(p),l=r(8),m=r.n(l),f=r(9),y=r.n(f),h=r(0),g=r.n(h),j=r(10),S=r.n(j);const b=new g.a.Schema({name:{type:String,trim:!0,required:"Name is required"},first_name:{type:String,trim:!0,required:"First Name is required"},last_name:{type:String,trim:!0,required:"Last Name is required"},email:{type:String,trim:!0,unique:"Email already exists",match:[/.+\@.+\..+/,"Please fill a valid email address"],required:"Email is required"},hashed_password:{type:String,required:"Password is required"},salt:String,updated:Date,created:{type:Date,default:Date.now},photo:{data:Buffer,contentType:String},accountType:{type:String,required:"Account is required"}});b.virtual("password").set((function(e){this._password=e,this.salt=this.makeSalt(),this.hashed_password=this.encryptPassword(e)})).get((function(){return this._password})),b.path("hashed_password").validate((function(e){this._password&&this._password.length<6&&this.invalidate("password","Password must be at least 6 characters."),this.isNew&&!this._password&&this.invalidate("password","Password is required")}),null),b.methods={authenticate:function(e){return this.encryptPassword(e)===this.hashed_password},encryptPassword:function(e){if(!e)return"";try{return S.a.createHmac("sha1",this.salt).update(e).digest("hex")}catch(e){return""}},makeSalt:function(){return Math.round((new Date).valueOf()*Math.random())+""}};var w=g.a.model("User",b),q=r(3),x=r.n(q);var _=e=>{let t="";if(e.code)switch(e.code){case 11e3:case 11001:t=(e=>{let t;try{let r=e.message.substring(e.message.lastIndexOf(".$")+2,e.message.lastIndexOf("_1"));t=r.charAt(0).toUpperCase()+r.slice(1)+" already exists"}catch(e){t="Unique field already exists"}return t})(e);break;default:t="Something went wrong"}else for(let r in e.errors)e.errors[r].message&&(t=e.errors[r].message);return t},v=r(2),I=r.n(v),B=r(4),O=r.n(B),D=r(11),P=r.n(D);var C=(e,t,r)=>{let o=new I.a.IncomingForm;o.keepExtensions=!0,o.parse(e,(e,r,o)=>{if(e)return t.status(400).json({error:"Photo could not be uploaded"});var n=new w(r);o.photo&&(n.photo.data=O.a.readFileSync(o.photo.path),n.photo.contentType=o.photo.type),n.save((function(e){return e?t.status(400).json({error:_(e)}):t.status(200).json({message:"Successfully signed up!"})}))})},T=(e,t,r,o)=>{w.findById(o).exec((o,n)=>{if(o||!n)return t.status("400").json({error:"User not found"});e.profile=n,r()})},U=(e,t)=>(e.profile.hashed_password=void 0,e.profile.salt=void 0,t.json(e.profile)),A=(e,t)=>{w.find((e,r)=>{if(e)return t.status(400).json({error:_(e)});t.json(r)}).select("name email updated created")},F=(e,t,r)=>{e.profile.remove((e,r)=>{if(e)return t.status(400).json({error:_(e)});r.hashed_password=void 0,r.salt=void 0,t.json(r)})},k=(e,t,r)=>{let o=new I.a.IncomingForm;o.keepExtensions=!0,o.parse(e,(r,o,n)=>{if(r)return t.status(400).json({error:"Photo could not be uploaded"});var s=e.profile;(s=x.a.extend(s,o)).updated=Date.now(),n.photo&&(s.photo.data=O.a.readFileSync(n.photo.path),s.photo.contentType=n.photo.type),s.save((e,r)=>{if(e)return t.status(400).json({error:_(e)});s.hashed_password=void 0,s.salt=void 0,t.json(s)})})},$=(e,t,r)=>{if(e.profile.photo.data)return t.set("Content-Type",e.profile.photo.contentType),t.send(e.profile.photo.data);r()},E=(e,t)=>t.sendFile(process.cwd()+P.a),M=r(12),R=r.n(M),N=r(13);var z={signin:(e,t)=>{w.findOne({email:e.body.email},(r,n)=>{if(r||!n)return t.status("401").json({error:"User not found"});if(!n.authenticate(e.body.password))return t.status("401").send({error:"Email and password don't match."});const s=R.a.sign({_id:n._id},o.jwtSecret);return t.cookie("t",s,{expire:new Date+9999}),t.json({token:s,user:{_id:n._id,name:n.name,email:n.email}})})},signout:(e,t)=>(t.clearCookie("t"),t.status("200").json({message:"signed out"})),requireSignin:r.n(N)()({secret:o.jwtSecret,userProperty:"auth"}),hasAuthorization:(e,t,r)=>{if(!(e.profile&&e.auth&&e.profile._id==e.auth._id))return t.status("403").json({error:"User is not authorized"});r()}};const G=s.a.Router();G.route("/api/users").get(A).post(C),G.route("/api/users/:userId").get(z.requireSignin,U).put(z.requireSignin,z.hasAuthorization,k).delete(z.requireSignin,z.hasAuthorization,F),G.route("/api/usersPhoto/:userId").get(z.requireSignin,$,E),G.param("userId",T);var H=G;const L=s.a.Router();L.route("/auth/signin").post(z.signin),L.route("/auth/signout").get(z.signout);var W=L;const J=new g.a.Schema({title:{type:String,required:"Title is required"},text:{type:String,required:"Article is required"},photo:{data:Buffer,contentType:String},author:{type:String,required:"Author is required",default:"anonymous"},comments:[{text:String,created:{type:Date,default:Date.now},postedBy:{type:g.a.Schema.ObjectId,ref:"User"},replyComment:[{text:String,created:{type:Date,default:Date.now},postedBy:{type:g.a.Schema.ObjectId,ref:"User"}}]}],createDate:{type:Date,default:Date.now}});var X=g.a.model("Blog",J);var K=(e,t,r)=>{let o=new I.a.IncomingForm;o.keepExtensions=!0,o.parse(e,(e,r,o)=>{if(e)return t.status(400).json({error:"Photo could not be uploaded"});var n=new X(r);o.photo&&(n.photo.data=O.a.readFileSync(o.photo.path),n.photo.contentType=o.photo.type),n.save((function(e){return e?t.status(400).json({error:"Blog Creation Failed"}):t.status(200).json({message:"BLog Created"})}))})},Q=(e,t)=>{X.find((e,r)=>{if(e)return t.status(400).json({error:_(e)});t.json(r)}).select("title text author")},V=(e,t)=>(t.set("Content-Type",e.details.photo.contentType),t.send(e.details.photo.data)),Y=(e,t,r,o)=>{X.findById(o).exec((o,n)=>{if(o||!n)return t.status("400").json({error:"BLog not found"});e.details=n,r()})},Z=(e,t,r)=>{let o=new I.a.IncomingForm;o.keepExtensions=!0,o.parse(e,(r,o,n)=>{r&&t.status(400).json({error:"Photo could not be uploaded"});var s=e.details;(s=x.a.extend(s,o)).updated=Date.now(),n.photo&&(s.photo.data=O.a.readFileSync(n.photo.path),s.photo.contentType=n.photo.type),s.save((e,r)=>{if(e)return t.status(400).json({error:_(e)});t.json(s)})})},ee=(e,t)=>t.json(e.details),te=(e,t,r)=>{e.details.remove((e,r)=>{if(e)return t.status(400).json({error:_(e)});t.json(r)})},re=(e,t)=>{let r={};r.text=e.body.comment,r.postedBy=e.body.userId,X.findByIdAndUpdate(e.body.blogId,{$push:{comments:r}},{new:!0}).populate("comments.postedBy","_id name").select("title text author comments createDate").exec((e,r)=>{if(e)return t.status(400).json({error:_(e)});t.json(r)})},oe=(e,t)=>{let r=e.body.commentId;X.findByIdAndUpdate(e.body.blogId,{$pull:{comments:{_id:r}}},{new:!0}).exec((e,r)=>{if(e)return t.status(400).json({error:_(e)});t.json(r)})},ne=(e,t)=>{let r={};r.text=e.body.comment,r.postedBy=e.body.userId,X.findOneAndUpdate({"comments._id":e.body.commentId},{$push:{"comments.$.replyComment":r}},{safe:!0,upsert:!0,new:!0}).populate("comments.replyComment.postedBy","_id name").populate("comments.postedBy","_id name").select("title text author comments createDate").exec((e,r)=>{if(e)return t.status(400).json({error:_(e)});t.json(r)})},se=(e,t)=>{let r=e.body.replyId;X.findOneAndUpdate({"comments.replyComment._id":r},{$pull:{"comments.$.replyComment":{_id:r}}},{safe:!0,upsert:!0,new:!0}).exec((e,r)=>{if(e)return t.status(400).json({error:_(e)});t.json(r)})};const ae=s.a.Router();ae.route("/api/blog").get(z.requireSignin,Q).post(z.requireSignin,K),ae.route("/api/blog/:blogId").get(z.requireSignin,ee).put(z.requireSignin,Z).delete(z.requireSignin,te),ae.route("/api/comment").put(z.requireSignin,re).delete(z.requireSignin,oe),ae.route("/api/replycomment").put(z.requireSignin,ne).delete(z.requireSignin,se),ae.route("/api/blogPhoto/:blogId").get(V),ae.param("blogId",Y);var ie=ae;const ue=new g.a.Schema({title:{type:String,required:"Title is required"},text:{type:String,required:"Article is required"},comments:[{text:String,created:{type:Date,default:Date.now},postedBy:{type:g.a.Schema.ObjectId,ref:"User"},replyComment:[{text:String,created:{type:Date,default:Date.now},postedBy:{type:g.a.Schema.ObjectId,ref:"User"}}]}],createDate:{type:Date,default:Date.now},category:{type:String,required:"Category is required"},photo:{data:Buffer,contentType:String},postedBy:{type:g.a.Schema.ObjectId,ref:"User"}});var de=g.a.model("Forum",ue);var pe=(e,t,r)=>{let o=new I.a.IncomingForm;o.keepExtensions=!0,o.parse(e,(e,r,o)=>{if(e)return t.status(400).json({error:"Photo could not be uploaded"});let n=new de(r);o.photo&&(n.photo.data=fs.readFileSync(o.photo.path),n.photo.contentType=o.photo.type),n.save((function(e){return e?t.status(500).json({error:"Forum Creation Failed"}):t.status(200).json({message:"Forum Created"})}))})},ce=(e,t)=>{de.find((e,r)=>{if(e)return t.status(400).json({error:_(e)});t.json(r)}).populate("postedBy","_id name").select("title text postedBy category")},le=(e,t)=>{t.set("Content-Type","req.details.photo.contentType"),t.send(t.details.photo.data)},me=(e,t,r,o)=>{de.findById(o).populate("postedBy","_id name").exec((o,n)=>{if(o||!n)return t.status("400").json({error:"Forum not found"});e.details=n,r()})},fe=(e,t,r)=>{let o=new I.a.IncomingForm;o.keepExtensions=!0,o.parse(e,(r,o,n)=>{if(r)return t.status(400).json({error:"Photo could not be uploaded"});let s=e.details;(s=x.a.extend(s,o)).updated=Date.now(),n.photo&&(s.photo.data=fs.readFileSync(n.photo.path),s.photo.contentType=n.photo.type),s.save((e,r)=>{if(e)return t.status(400).json({error:_(e)});t.json(s)})})},ye=(e,t)=>t.json(e.details),he=(e,t,r)=>{e.details.remove((e,r)=>{if(e)return t.status(400).json({error:_(e)});t.json(r)})},ge=(e,t)=>{let r={};r.text=e.body.comment,r.postedBy=e.body.userId,de.findByIdAndUpdate(e.body.forumId,{$push:{comments:r}},{new:!0}).populate("comments.postedBy","_id name").populate("postedBy","_id name").exec((e,r)=>{if(e)return t.status(400).json({error:_(e)});t.json(r)})},je=(e,t)=>{let r=e.body.commentId;de.findByIdAndUpdate(e.body.forumId,{$pull:{comments:{_id:r}}},{new:!0}).exec((e,r)=>{if(e)return t.status(400).json({error:_(e)});t.json(r)})},Se=(e,t)=>{let r={};r.text=e.body.comment,r.postedBy=e.body.userId,de.findOneAndUpdate({"comments._id":e.body.commentId},{$push:{"comments.$.replyComment":r}},{safe:!0,upsert:!0,new:!0}).populate("comments.replyComment.postedBy","_id name").populate("comments.postedBy","_id name").populate("postedBy","_id name").exec((e,r)=>{if(e)return t.status(400).json({error:_(e)});t.json(r)})},be=(e,t)=>{let r=e.body.replyId;de.findOneAndUpdate({"comments.replyComment._id":r},{$pull:{"comments.$.replyComment":{_id:r}}},{safe:!0,upsert:!0,new:!0}).exec((e,r)=>{if(e)return t.status(400).json({error:_(e)});t.json(r)})},we=(e,t)=>{de.distinct("category",{},(e,r)=>{if(e)return t.status(400).json({error:_(e)});t.json(r)})},qe=(e,t)=>{de.find({category:e.body.category}).populate("postedBy","_id name").populate("comments.postedBy","_id name").populate("comments.replyComment.postedBy","_id name").exec((e,r)=>{if(e)return t.status(400).json({error:_(e)});t.json(r)})},xe=(e,t)=>{de.find({postedBy:e.body.userId}).populate("postedBy","_id name").populate("comments.postedBy","_id name").populate("comments.replyComment.postedBy","_id name").exec((e,r)=>{if(e)return t.status(400).json({error:_(e)});t.json(r)})};const _e=s.a.Router();_e.route("/api/forum").get(z.requireSignin,ce).post(pe),_e.route("/api/forum/:forumId").get(z.requireSignin,ye).put(z.requireSignin,fe).delete(z.requireSignin,he),_e.route("/api/message").put(z.requireSignin,ge).delete(z.requireSignin,je),_e.route("/api/replymessage").put(z.requireSignin,Se).delete(z.requireSignin,be),_e.route("/api/categories").get(z.requireSignin,we),_e.route("/api/category").post(z.requireSignin,qe),_e.route("/api/userForum").post(z.requireSignin,xe),_e.route("/api/forumPhoto/:blogId").get(z.requireSignin,le),_e.param("forumId",me);var ve=_e;const Ie=s()();Ie.use((function(e,t,r){t.header("Access-Control-Allow-Origin","*"),t.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept"),r()})),Ie.use(i.a.json()),Ie.use(i.a.urlencoded({extended:!0})),Ie.use(d()()),Ie.use(c()()),Ie.use(y()()),Ie.use(m()()),Ie.use("/",H),Ie.use("/",W),Ie.use("/",ie),Ie.use("/",ve),Ie.get("/",(e,t)=>{console.log(1)}),Ie.use((e,t,r,o)=>{"UnauthorizedError"===e.name&&r.status(401).json({error:e.name+": "+e.message})});var Be=Ie;g.a.Promise=global.Promise;const Oe="mongodb+srv://richard01:seun08167739200@richard01-xsh4r.mongodb.net/test?retryWrites=true&w=majority";g.a.connect(Oe),g.a.connection.on("error",()=>{throw new Error(`unable to connect to database: ${Oe}`)}),Be.listen(o.port,e=>{e&&console.log(e),console.info("Server started on porst:",o.port)})}]);