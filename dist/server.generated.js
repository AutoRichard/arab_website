module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst config = {\n    env: \"development\" || false,\n    port: process.env.PORT || 8080,\n    jwtSecret: process.env.JWT_SECRET || \"your_secret_key\",\n    mongoUri: process.env.MONGODB_URI || process.env.MONGODB_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGODB_PORT || '27017') + '/project'\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./config.js?");

/***/ }),

/***/ "./server/app.js":
/*!***********************!*\
  !*** ./server/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _routes_user_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/user.route */ \"./server/routes/user.route.js\");\n/* harmony import */ var _routes_auth_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/auth.route */ \"./server/routes/auth.route.js\");\n/* harmony import */ var _routes_blog_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/blog.route */ \"./server/routes/blog.route.js\");\n/* harmony import */ var _routes_forum_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/forum.route */ \"./server/routes/forum.route.js\");\n/* harmony import */ var _routes_video_route__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/video.route */ \"./server/routes/video.route.js\");\n/* harmony import */ var _routes_transcription_route__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/transcription.route */ \"./server/routes/transcription.route.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({ extended: true }));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());\n\napp.use('/', _routes_user_route__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\napp.use('/', _routes_auth_route__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\napp.use('/', _routes_blog_route__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.use('/', _routes_forum_route__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\napp.use('/', _routes_video_route__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\napp.use('/', _routes_transcription_route__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\n/*app.get('/', (req, res) => {\r\n  console.log(1);\r\n});*/\n\napp.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({ \"error\": err.name + \": \" + err.message });\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./server/app.js?");

/***/ }),

/***/ "./server/controllers/assets/profile_image.png":
/*!*****************************************************!*\
  !*** ./server/controllers/assets/profile_image.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"6635b03b26d02dcb8f5a5e92f80b63c6.png\";\n\n//# sourceURL=webpack:///./server/controllers/assets/profile_image.png?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config */ \"./config.js\");\n\n\n\n\n\nconst signin = (req, res) => {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n    \"email\": req.body.email\n  }, (err, user) => {\n\n    if (err || !user) return res.status('401').json({\n      error: \"User not found\"\n    });\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status('401').send({\n        error: \"Email and password don't match.\"\n      });\n    }\n\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({\n      _id: user._id\n    }, _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret);\n\n    res.cookie(\"t\", token, {\n      expire: new Date() + 9999\n    });\n\n    return res.json({\n      token,\n      user: { _id: user._id, name: user.name, email: user.email, acccountType: user.accountType }\n    });\n  });\n};\n\nconst signout = (req, res) => {\n  res.clearCookie(\"t\");\n  return res.status('200').json({\n    message: \"signed out\"\n  });\n};\n\nconst requireSignin = express_jwt__WEBPACK_IMPORTED_MODULE_2___default()({\n  secret: _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret,\n  userProperty: 'auth'\n});\n\nconst hasAuthorization = (req, res, next) => {\n  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n  if (!authorized) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n  next();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  signin,\n  signout,\n  requireSignin,\n  hasAuthorization\n});\n\n//# sourceURL=webpack:///./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/blog.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/blog.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* harmony import */ var _models_blog_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/blog.model */ \"./server/models/blog.model.js\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//save {title, text, photo, author, --comment-- & -createDate-} \nconst create = (req, res, next) => {\n\n    let form = new formidable__WEBPACK_IMPORTED_MODULE_3___default.a.IncomingForm();\n    form.keepExtensions = true;\n    form.parse(req, (err, fields, files) => {\n        if (err) {\n            return res.status(400).json({\n                error: \"Photo could not be uploaded\"\n            });\n        }\n        var blogModel = new _models_blog_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"](fields);\n        if (files.photo) {\n            blogModel.photo.data = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(files.photo.path);\n            blogModel.photo.contentType = files.photo.type;\n        }\n\n        blogModel.save(function (err) {\n            if (err) {\n                return res.status(400).json({\n                    error: 'Blog Creation Failed'\n                });\n            } else {\n                return res.status(200).json({\n                    message: 'BLog Created'\n                });\n            }\n        });\n    });\n};\n\n//return {photo}\nconst photo = (req, res) => {\n    res.set(\"Content-Type\", req.details.photo.contentType);\n    return res.send(req.details.photo.data);\n};\n\n//return {title text author and _id}\nconst list = (req, res) => {\n\n    _models_blog_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find((err, blog) => {\n        if (err) {\n            return res.status(400).json({\n                error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n            });\n        }\n        res.json(blog);\n    }).select('title text author');\n};\n\n//return from blog table {:blogId}\nconst blogByID = (req, res, next, id) => {\n    _models_blog_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(id).populate('comments.replyComment.postedBy', '_id name').populate('comments.postedBy', '_id name').exec((err, blog) => {\n        if (err || !blog) return res.status('400').json({\n            error: \"BLog not found\"\n        });\n        req.details = blog;\n        next();\n    });\n};\n\n//update {title, text, photo, author, --comment-- & -createDate-}\nconst update = (req, res, next) => {\n    let form = new formidable__WEBPACK_IMPORTED_MODULE_3___default.a.IncomingForm();\n    form.keepExtensions = true;\n\n    form.parse(req, (err, fields, files) => {\n        if (err) {\n            res.status(400).json({\n                error: \"Photo could not be uploaded\"\n            });\n        }\n        var blog = req.details;\n        blog = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.extend(blog, fields);\n        blog.updated = Date.now();\n        if (files.photo) {\n            blog.photo.data = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(files.photo.path);\n            blog.photo.contentType = files.photo.type;\n        }\n\n        blog.save((err, result) => {\n            if (err) {\n                return res.status(400).json({\n                    error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n                });\n            }\n            res.json(blog);\n        });\n    });\n};\n\n//return single blog \nconst read = (req, res) => {\n    req.details.photo = undefined;\n    return res.json(req.details);\n};\n\n//delete blog\nconst remove = (req, res, next) => {\n    let blog = req.details;\n    blog.remove((err, deletedBlog) => {\n        if (err) {\n            return res.status(400).json({\n                error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n            });\n        }\n        res.json(deletedBlog);\n    });\n};\n\n//update {comment, userId, blogId}\nconst _postComment = (req, res) => {\n\n    let comment = {};\n    comment.text = req.body.comment;\n    comment.postedBy = req.body.userId;\n\n    _models_blog_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndUpdate(req.body.blogId, { $push: { comments: comment } }, { new: true }).populate('comments.postedBy', '_id name').select('title text author comments createDate').exec((err, result) => {\n        if (err) {\n            return res.status(400).json({\n                error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n            });\n        }\n        res.json(result);\n    });\n};\n\n//delete {commentId and blogId}\nconst _deleteComment = (req, res) => {\n    let commentId = req.body.commentId;\n\n    _models_blog_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndUpdate(req.body.blogId, { $pull: { comments: { _id: commentId } } }, { new: true }).exec((err, result) => {\n        if (err) {\n            return res.status(400).json({\n                error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n            });\n        }\n        res.json(result);\n    });\n};\n\n//reply {commentId, comment, userId}\nconst _replyComment = (req, res) => {\n    let comment = {};\n    comment.text = req.body.comment;\n    comment.postedBy = req.body.userId;\n\n    _models_blog_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOneAndUpdate({ \"comments._id\": req.body.commentId }, { $push: { \"comments.$.replyComment\": comment } }, { safe: true, upsert: true, new: true }).populate('comments.replyComment.postedBy', '_id name').populate('comments.postedBy', '_id name').select('title text author comments createDate').exec((err, result) => {\n        if (err) {\n            return res.status(400).json({\n                error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n            });\n        }\n        res.json(result);\n    });\n};\n\n//delete {replyId}\nconst _replyDeleteComment = (req, res) => {\n    let replycommentId = req.body.replyId;\n\n    _models_blog_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOneAndUpdate({ \"comments.replyComment._id\": replycommentId }, { $pull: { \"comments.$.replyComment\": { _id: replycommentId } } }, { safe: true, upsert: true, new: true }).exec((err, result) => {\n        if (err) {\n            return res.status(400).json({\n                error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n            });\n        }\n        res.json(result);\n    });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    create, list, photo, blogByID, update, read, remove, _postComment, _deleteComment, _replyComment, _replyDeleteComment\n});\n\n//# sourceURL=webpack:///./server/controllers/blog.controller.js?");

/***/ }),

/***/ "./server/controllers/forum.controller.js":
/*!************************************************!*\
  !*** ./server/controllers/forum.controller.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_forum_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/forum.model */ \"./server/models/forum.model.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n/*\r\nfunction paginate(pageNumber, nPerPage){\r\n    db.forum.find().skip((pageNumber-1)*nPerPage).limit(nPerPage)\r\n}\r\n*/\n\n//creat: title, text, category, postedBy(userId), --comment-- \nconst create = (req, res, next) => {\n\n    let form = new formidable__WEBPACK_IMPORTED_MODULE_2___default.a.IncomingForm();\n    form.keepExtensions = true;\n\n    form.parse(req, (err, fields, files) => {\n        if (err) {\n            return res.status(400).json({\n                error: \"Photo could not be uploaded\"\n            });\n        }\n\n        let forumModel = new _models_forum_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"](fields);\n        if (files.photo) {\n            forumModel.photo.data = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(files.photo.path);\n            forumModel.photo.contentType = files.photo.type;\n        }\n\n        forumModel.save(function (err) {\n            if (err) {\n                return res.status(500).json({\n                    error: 'Forum Creation Failed'\n                });\n            } else {\n                return res.status(200).json({\n                    message: 'Forum Created'\n                });\n            }\n        });\n    });\n};\n\n//list all forum\nconst list = (req, res) => {\n\n    _models_forum_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find((err, forum) => {\n        if (err) {\n            return res.status(400).json({\n                error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n            });\n        }\n        res.json(forum);\n    }).populate('postedBy', '_id name').select('title text postedBy category');\n};\n\n//return specific forum\nconst forumByID = (req, res, next, id) => {\n    _models_forum_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findById(id).populate('comments.replyComment.postedBy', '_id name').populate('comments.postedBy', '_id name').populate('postedBy', '_id name').exec((err, forum) => {\n        if (err || !forum) return res.status('400').json({\n            error: \"Forum not found\"\n        });\n        req.details = forum;\n        next();\n    });\n};\n\n//update: title, text, category, postedBy(userId)\nconst update = (req, res, next) => {\n    let form = new formidable__WEBPACK_IMPORTED_MODULE_2___default.a.IncomingForm();\n    form.keepExtensions = true;\n\n    form.parse(req, (err, fields, files) => {\n        if (err) {\n            return res.status(400).json({\n                error: \"Photo could not be uploaded\"\n            });\n        }\n\n        let forum = req.details;\n        forum = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.extend(forum, fields);\n        forum.updated = Date.now();\n\n        if (files.photo) {\n            forum.photo.data = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(files.photo.path);\n            forum.photo.contentType = files.photo.type;\n        }\n\n        forum.save((err, result) => {\n            if (err) {\n                return res.status(400).json({\n                    error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n                });\n            }\n            res.json(forum);\n        });\n    });\n};\n\nconst photo = (req, res) => {\n    res.set(\"Content-Type\", req.details.photo.contentType);\n    return res.send(req.details.photo.data);\n};\n\n//return specific forum\nconst read = (req, res) => {\n    return res.json(req.details);\n};\n\n//extension from blogId\nconst remove = (req, res, next) => {\n    let forum = req.details;\n    forum.remove((err, deletedForum) => {\n        if (err) {\n            return res.status(400).json({\n                error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n            });\n        }\n        res.json(deletedForum);\n    });\n};\n\n//list all category\nconst listCategory = (req, res) => {\n    _models_forum_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].distinct('category', {}, (err, forum) => {\n        if (err) {\n            return res.status(400).json({\n                error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n            });\n        }\n        res.json(forum);\n    });\n};\n\n//forum by category {category}\nconst listForumByCategory = (req, res) => {\n    _models_forum_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find({ \"category\": req.body.category }).populate('postedBy', '_id name').populate('comments.postedBy', '_id name').populate('comments.replyComment.postedBy', '_id name').exec((err, result) => {\n        if (err) {\n            return res.status(400).json({\n                error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n            });\n        }\n        res.json(result);\n    });\n};\n\n//forum by  user {userId}\nconst listForumByUser = (req, res) => {\n    _models_forum_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find({ \"postedBy\": req.body.userId }).populate('postedBy', '_id name').populate('comments.postedBy', '_id name').populate('comments.replyComment.postedBy', '_id name').exec((err, result) => {\n        if (err) {\n            return res.status(400).json({\n                error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n            });\n        }\n        res.json(result);\n    });\n};\n\n//comment, userId, forumId\nconst _postMessage = (req, res) => {\n\n    let comment = {};\n    comment.text = req.body.comment;\n    comment.postedBy = req.body.userId;\n\n    _models_forum_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findByIdAndUpdate(req.body.forumId, { $push: { comments: comment } }, { new: true }).populate('comments.postedBy', '_id name').populate('postedBy', '_id name').exec((err, result) => {\n        if (err) {\n            return res.status(400).json({\n                error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n            });\n        }\n        res.json(result);\n    });\n};\n\n//commentId and forumgId\nconst _deleteMessage = (req, res) => {\n    let commentId = req.body.commentId;\n\n    _models_forum_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findByIdAndUpdate(req.body.forumId, { $pull: { comments: { _id: commentId } } }, { new: true }).exec((err, result) => {\n        if (err) {\n            return res.status(400).json({\n                error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n            });\n        }\n        res.json(result);\n    });\n};\n\n//commentId, userId, comment\nconst _replyMessage = (req, res) => {\n    let comment = {};\n    comment.text = req.body.comment;\n    comment.postedBy = req.body.userId;\n\n    _models_forum_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOneAndUpdate({ \"comments._id\": req.body.commentId }, { $push: { \"comments.$.replyComment\": comment } }, { safe: true, upsert: true, new: true }).populate('comments.replyComment.postedBy', '_id name').populate('comments.postedBy', '_id name').populate('postedBy', '_id name').exec((err, result) => {\n        if (err) {\n            return res.status(400).json({\n                error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n            });\n        }\n        res.json(result);\n    });\n};\n\n//replycommentId\nconst _replyDeleteMessage = (req, res) => {\n    let replycommentId = req.body.replyId;\n\n    _models_forum_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOneAndUpdate({ \"comments.replyComment._id\": replycommentId }, { $pull: { \"comments.$.replyComment\": { _id: replycommentId } } }, { safe: true, upsert: true, new: true }).exec((err, result) => {\n        if (err) {\n            return res.status(400).json({\n                error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n            });\n        }\n        res.json(result);\n    });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    create, list, photo, forumByID, update, read, remove, _postMessage, _deleteMessage, _replyMessage, _replyDeleteMessage, listCategory, listForumByCategory, listForumByUser\n});\n\n//# sourceURL=webpack:///./server/controllers/forum.controller.js?");

/***/ }),

/***/ "./server/controllers/transcription.controller.js":
/*!********************************************************!*\
  !*** ./server/controllers/transcription.controller.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* harmony import */ var _models_transcription_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/transcription.model */ \"./server/models/transcription.model.js\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//save {videoId, startTime, endTime, type, transcript, meaning}\nconst create = (req, res, next) => {\n    let form = new formidable__WEBPACK_IMPORTED_MODULE_3___default.a.IncomingForm();\n    form.keepExtensions = true;\n\n    form.parse(req, (err, fields, files) => {\n        if (err) {\n            return res.status(400).json({\n                error: \"Transcription Creation Failed\"\n            });\n        }\n\n        var transcriptModel = new _models_transcription_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"](fields);\n\n        transcriptModel.save(function (err) {\n            if (err) {\n                return res.status(400).json({\n                    error: \"Transcription Creation Failed\"\n                });\n            } else {\n                return res.status(200).json({\n                    message: \"Transcription Created\"\n                });\n            }\n        });\n    });\n};\n\n//return list {videoId, startTime, endTime, type, transcript, meaning}\nconst list = (req, res) => {\n    _models_transcription_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find((err, transcript) => {\n        if (err) {\n            return res.status(400).json({\n                error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n            });\n        }\n        res.json(transcript);\n    }).populate('videoId', '_id videoTitle');\n};\n\n//return transcript by {transcriptId}\nconst transcriptByID = (req, res, next, id) => {\n    _models_transcription_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(id).exec((err, transcript) => {\n        if (err || !transcript) {\n            return res.status(400).json({\n                error: \"Transcript not found\"\n            });\n        }\n\n        req.details = transcript;\n\n        next();\n    });\n};\n\n//return single transcript\nconst read = (req, res, next) => {\n    return res.json(req.details);\n};\n\n//update {videoId, startTime, endTime, type, transcript, meaning}\nconst update = (req, res, next) => {\n    let form = new formidable__WEBPACK_IMPORTED_MODULE_3___default.a.IncomingForm();\n    form.keepExtensions = true;\n\n    form.parse(req, (err, fields, files) => {\n        if (err) {\n            return res.status(400).json({\n                error: \"Transcript could not be uploaded\"\n            });\n        }\n\n        var transcript = req.details;\n        transcript = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.extend(transcript, fields);\n        transcript.updated = Date.now();\n\n        transcript.save((err, result) => {\n            if (err) {\n                return res.status(400).json({\n                    error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n                });\n            }\n            res.json(result);\n        });\n    });\n};\n\n//removve {transcript}\nconst remove = (req, res, next) => {\n    let video = req.details;\n    video.remove((err, deletedTranscript) => {\n        if (err) {\n            return res.status(400).json({\n                error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n            });\n        }\n        res.json(deletedTranscript);\n    });\n};\n\nconst transcriptByVideoId = (req, res) => {\n\n    let videoId = req.body.videoId;\n    let type = req.body.type;\n\n    _models_transcription_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({ \"videoId\": videoId, \"type\": type }).populate('videoId', '_id videoTitle').exec((err, transcript) => {\n        if (err || !transcript) {\n            return res.status(400).json({\n                error: \"Transcript not found\"\n            });\n        }\n        res.json(transcript);\n    });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    create, list, transcriptByID, read, update, remove, transcriptByVideoId\n});\n\n//# sourceURL=webpack:///./server/controllers/transcription.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_profile_image_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/profile_image.png */ \"./server/controllers/assets/profile_image.png\");\n/* harmony import */ var _assets_profile_image_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_profile_image_png__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst create = (req, res, next) => {\n\n  let form = new formidable__WEBPACK_IMPORTED_MODULE_3___default.a.IncomingForm();\n  form.keepExtensions = true;\n  form.parse(req, (err, fields, files) => {\n    if (err) {\n      return res.status(400).json({\n        error: \"Photo could not be uploaded\"\n      });\n    }\n    var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](fields);\n    if (files.photo) {\n      user.photo.data = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(files.photo.path);\n      user.photo.contentType = files.photo.type;\n    }\n\n    user.save(function (err) {\n      if (err) {\n        return res.status(400).json({\n          error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n        });\n      } else {\n        return res.status(200).json({\n          message: \"Successfully signed up!\"\n        });\n      }\n    });\n  });\n};\n\nconst userByID = (req, res, next, id) => {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id).exec((err, user) => {\n    if (err || !user) return res.status('400').json({\n      error: \"User not found\"\n    });\n    req.profile = user;\n    next();\n  });\n};\n\nconst read = (req, res) => {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  req.profile.photo = undefined;\n  return res.json(req.profile);\n};\n\nconst list = (req, res) => {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find((err, users) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n    res.json(users);\n  }).select('name email updated created');\n};\n\nconst photo = (req, res, next) => {\n  if (req.profile.photo.data) {\n    res.set(\"Content-Type\", req.profile.photo.contentType);\n    return res.send(req.profile.photo.data);\n  }\n\n  next();\n};\n\nconst defaultPhoto = (req, res) => {\n  return res.sendFile(process.cwd() + _assets_profile_image_png__WEBPACK_IMPORTED_MODULE_5___default.a);\n};\n\nconst update = (req, res, next) => {\n  let form = new formidable__WEBPACK_IMPORTED_MODULE_3___default.a.IncomingForm();\n  form.keepExtensions = true;\n\n  form.parse(req, (err, fields, files) => {\n\n    if (err) {\n      return res.status(400).json({\n        error: \"Photo could not be uploaded\"\n      });\n    }\n\n    var user = req.profile;\n    user = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.extend(user, fields);\n    user.updated = Date.now();\n\n    if (files.photo) {\n      user.photo.data = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(files.photo.path);\n      user.photo.contentType = files.photo.type;\n    }\n\n    user.save((err, result) => {\n      if (err) {\n        return res.status(400).json({\n          error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n        });\n      }\n      user.hashed_password = undefined;\n      user.salt = undefined;\n      res.json(user);\n    });\n  });\n};\n\nconst remove = (req, res, next) => {\n  let user = req.profile;\n  user.remove((err, deletedUser) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n    deletedUser.hashed_password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  create,\n  userByID,\n  read,\n  list,\n  remove,\n  update,\n  photo,\n  defaultPhoto\n});\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/controllers/video.controller.js":
/*!************************************************!*\
  !*** ./server/controllers/video.controller.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* harmony import */ var _models_video_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/video.model */ \"./server/models/video.model.js\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//save {videoId, thumbnail, dialect, rating, videolTitle, level}\nconst create = (req, res, next) => {\n\n    let form = new formidable__WEBPACK_IMPORTED_MODULE_3___default.a.IncomingForm();\n    form.keepExtensions = true;\n\n    form.parse(req, (err, fields, files) => {\n\n        if (err) {\n            return res.status(400).json({\n                error: \"Photo could not be uploaded\"\n            });\n        }\n\n        var videoModel = new _models_video_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"](fields);\n        if (files.thumbnail) {\n            videoModel.thumbnail.data = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(files.thumbnail.path);\n            videoModel.thumbnail.contentType = files.thumbnail.type;\n        }\n\n        videoModel.save(function (err) {\n            if (err) {\n                return res.status(400).json({\n                    error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n                });\n            } else {\n                return res.status(200).json({\n                    message: \"Video created\"\n                });\n            }\n        });\n    });\n};\n\n//return {videoId, dialect, rating, videolTitle, level}\nconst list = (req, res) => {\n    _models_video_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find((err, video) => {\n        if (err) {\n            return res.status(400).json({\n                error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n            });\n        }\n        res.json(video);\n    }).select('youtubeId dialect rating videoTitle level');\n};\n\n//return from video table {:videoId}\nconst videoByID = (req, res, next, id) => {\n    _models_video_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(id).exec((err, video) => {\n        if (err || !video) {\n            return res.status('400').json({\n                error: \"Video not found\"\n            });\n        }\n        req.details = video;\n        next();\n    });\n};\n\n//return {thumbnail}\nconst thumbnail = (req, res) => {\n    res.set(\"Content-Type\", req.details.thumbnail.contentType);\n    return res.send(req.details.thumbnail.data);\n};\n\n//save {videoId, thumbnail, dialect, rating, videolTitle, level}\nconst update = (req, res, next) => {\n    let form = new formidable__WEBPACK_IMPORTED_MODULE_3___default.a.IncomingForm();\n    form.keepExtensions = true;\n\n    form.parse(req, (err, fields, files) => {\n        if (err) {\n            return res.status(400).json({\n                error: \"Photo could not be uploaded\"\n            });\n        }\n\n        var video = req.details;\n        video = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.extend(video, fields);\n        video.updated = Date.now();\n\n        if (files.thumbnail) {\n            video.thumbnail.data = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(files.thumbnail.path);\n            video.thumbnail.contentType = files.thumbnail.type;\n        }\n\n        video.save((err, result) => {\n            if (err) {\n                return res.status(400).json({\n                    error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n                });\n            }\n            res.json(video);\n        });\n    });\n};\n\n//return single video\nconst read = (req, res) => {\n    req.details.thumbnail = undefined;\n    return res.json(req.details);\n};\n\n//delete video\nconst remove = (req, res, next) => {\n    let video = req.details;\n    video.remove((err, deletedVideo) => {\n        if (err) {\n            return res.status(400).json({\n                error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n            });\n        }\n        res.json(deletedVideo);\n    });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    create, list, videoByID, thumbnail, update, read, remove\n});\n\n//# sourceURL=webpack:///./server/controllers/video.controller.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n/**\r\n * Get unique error field name\r\n */\n\nconst getUniqueErrorMessage = err => {\n    let output;\n    try {\n        let fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n    } catch (ex) {\n        output = 'Unique field already exists';\n    }\n\n    return output;\n};\n\n/**\r\n * Get the error message from error object\r\n */\nconst getErrorMessage = err => {\n    let message = '';\n\n    if (err.code) {\n        switch (err.code) {\n            case 11000:\n            case 11001:\n                message = getUniqueErrorMessage(err);\n                break;\n            default:\n                message = 'Something went wrong';\n        }\n    } else {\n        for (let errName in err.errors) {\n            if (err.errors[errName].message) message = err.errors[errName].message;\n        }\n    }\n\n    return message;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ getErrorMessage });\n\n//# sourceURL=webpack:///./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/blog.model.js":
/*!*************************************!*\
  !*** ./server/models/blog.model.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst BlogSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n    title: {\n        type: String,\n        required: 'Title is required'\n    },\n    text: {\n        type: String,\n        required: 'Article is required'\n    },\n    photo: {\n        data: Buffer,\n        contentType: String\n    },\n    author: {\n        type: String,\n        required: 'Author is required',\n        default: \"anonymous\"\n    },\n    comments: [{\n        text: String,\n        created: { type: Date, default: Date.now },\n        postedBy: { type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId, ref: 'User' },\n        replyComment: [{\n            text: String,\n            created: { type: Date, default: Date.now },\n            postedBy: { type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId, ref: 'User' }\n        }]\n    }],\n    createDate: {\n        type: Date,\n        default: Date.now\n    }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Blog', BlogSchema));\n\n//# sourceURL=webpack:///./server/models/blog.model.js?");

/***/ }),

/***/ "./server/models/forum.model.js":
/*!**************************************!*\
  !*** ./server/models/forum.model.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst ForumSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n    title: {\n        type: String,\n        required: 'Title is required'\n    },\n    text: {\n        type: String,\n        required: 'Article is required'\n    },\n    comments: [{\n        text: String,\n        created: { type: Date, default: Date.now },\n        postedBy: { type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId, ref: 'User' },\n        replyComment: [{\n            text: String,\n            created: { type: Date, default: Date.now },\n            postedBy: { type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId, ref: 'User' }\n        }]\n    }],\n    createDate: {\n        type: Date,\n        default: Date.now\n    },\n    category: {\n        type: String,\n        required: 'Category is required'\n    },\n    photo: {\n        data: Buffer,\n        contentType: String\n    },\n    postedBy: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId, ref: 'User'\n    }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Forum', ForumSchema));\n\n//# sourceURL=webpack:///./server/models/forum.model.js?");

/***/ }),

/***/ "./server/models/transcription.model.js":
/*!**********************************************!*\
  !*** ./server/models/transcription.model.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst transcriptSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n    startTime: {\n        type: Number,\n        default: 0\n    },\n    endTime: {\n        type: Number,\n        defauult: 0\n    },\n    type: {\n        type: String,\n        required: 'Type is required'\n    },\n    transcript: {\n        type: String,\n        required: 'Transcript is required'\n    },\n    meaning: {\n        type: String,\n        required: 'Meaning is required'\n    },\n    videoId: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId, ref: 'Video'\n    }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Transcript', transcriptSchema));\n\n//# sourceURL=webpack:///./server/models/transcription.model.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  first_name: {\n    type: String,\n    trim: true,\n    required: 'First Name is required'\n  },\n  last_name: {\n    type: String,\n    trim: true,\n    required: 'Last Name is required'\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: 'Email already exists',\n    match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n    required: 'Email is required'\n  },\n  hashed_password: {\n    type: String,\n    required: \"Password is required\"\n  },\n  salt: String,\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  photo: {\n    data: Buffer,\n    contentType: String\n  },\n  accountType: {\n    type: String,\n    required: \"Account is required\"\n  }\n});\n\nUserSchema.virtual('password').set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\n\nUserSchema.path('hashed_password').validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate('password', 'Password must be at least 6 characters.');\n  }\n  if (this.isNew && !this._password) {\n    this.invalidate('password', 'Password is required');\n  }\n}, null);\n\nUserSchema.methods = {\n  authenticate: function (plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function (password) {\n    if (!password) return '';\n    try {\n      return crypto__WEBPACK_IMPORTED_MODULE_1___default.a.createHmac('sha1', this.salt).update(password).digest('hex');\n    } catch (err) {\n      return '';\n    }\n  },\n  makeSalt: function () {\n    return Math.round(new Date().valueOf() * Math.random()) + '';\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', UserSchema));\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/models/video.model.js":
/*!**************************************!*\
  !*** ./server/models/video.model.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst videoSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n    youtubeId: {\n        type: String,\n        required: 'Youtube Video Id is required'\n    },\n    thumbnail: {\n        data: Buffer,\n        contentType: String\n    },\n    dialect: {\n        type: String,\n        required: 'Dialect is required'\n    },\n    rating: {\n        type: Number,\n        default: 0\n    },\n    videoTitle: {\n        type: String,\n        required: 'Video Title is required'\n    },\n    level: {\n        type: String,\n        required: 'Level is required'\n    }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Video', videoSchema));\n\n//# sourceURL=webpack:///./server/models/video.model.js?");

/***/ }),

/***/ "./server/routes/auth.route.js":
/*!*************************************!*\
  !*** ./server/routes/auth.route.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nrouter.route('/auth/signin').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signin);\nrouter.route('/auth/signout').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signout);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/auth.route.js?");

/***/ }),

/***/ "./server/routes/blog.route.js":
/*!*************************************!*\
  !*** ./server/routes/blog.route.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* harmony import */ var _controllers_blog_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/blog.controller */ \"./server/controllers/blog.controller.js\");\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n//craete and list blog \nrouter.route('/api/blog').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_blog_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].list).post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_blog_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create);\n\n//single blog, update, and delete\nrouter.route('/api/blog/:blogId').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_blog_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].read).put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_blog_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].update).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_blog_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove);\n\n//comment to a single blog and delete\nrouter.route('/api/comment').put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_blog_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._postComment).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_blog_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._deleteComment);\n\n//reply to comment on single blog and delete\nrouter.route('/api/replycomment').put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_blog_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._replyComment).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_blog_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._replyDeleteComment);\n\n//find specific blog photo\nrouter.route('/api/blogPhoto/:blogId').get(_controllers_blog_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].photo);\n\n//find specific blog\nrouter.param('blogId', _controllers_blog_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].blogByID);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/blog.route.js?");

/***/ }),

/***/ "./server/routes/forum.route.js":
/*!**************************************!*\
  !*** ./server/routes/forum.route.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* harmony import */ var _controllers_forum_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/forum.controller */ \"./server/controllers/forum.controller.js\");\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n//create new forum and list all\nrouter.route('/api/forum').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_forum_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].list).post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_forum_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create);\n\n//read specific forum, update and delete\nrouter.route('/api/forum/:forumId').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_forum_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].read).put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_forum_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].update).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_forum_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove);\n\n//comment and delete comment\nrouter.route('/api/message').put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_forum_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._postMessage).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_forum_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._deleteMessage);\n\n//reply to a specific comment and delete reply\nrouter.route('/api/replymessage').put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_forum_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._replyMessage).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_forum_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._replyDeleteMessage);\n\n//return all category\nrouter.route('/api/categories').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_forum_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].listCategory);\n\n//return based on category\nrouter.route('/api/category').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_forum_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].listForumByCategory);\n\nrouter.route('/api/userForum').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_forum_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].listForumByUser);\n\nrouter.route('/api/forumPhoto/:forumId').get(_controllers_forum_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].photo);\n\n//fetch specific forum\nrouter.param('forumId', _controllers_forum_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forumByID);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/forum.route.js?");

/***/ }),

/***/ "./server/routes/transcription.route.js":
/*!**********************************************!*\
  !*** ./server/routes/transcription.route.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* harmony import */ var _controllers_transcription_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/transcription.controller */ \"./server/controllers/transcription.controller.js\");\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nrouter.route('/api/transcript').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_transcription_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].list).post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_transcription_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create);\n\nrouter.route('/api/video/transcript').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_transcription_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].transcriptByVideoId);\n\nrouter.route('/api/transcript/:transcriptId').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_transcription_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].read).put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_transcription_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].update).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_transcription_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove);\n\nrouter.param('transcriptId', _controllers_transcription_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].transcriptByID);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/transcription.route.js?");

/***/ }),

/***/ "./server/routes/user.route.js":
/*!*************************************!*\
  !*** ./server/routes/user.route.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nrouter.route('/api/users').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list).post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\n\nrouter.route('/api/users/:userId').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].read).put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\n\nrouter.route('/api/usersPhoto/:userId').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].photo, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].defaultPhoto);\n\nrouter.param('userId', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userByID);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/user.route.js?");

/***/ }),

/***/ "./server/routes/video.route.js":
/*!**************************************!*\
  !*** ./server/routes/video.route.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* harmony import */ var _controllers_video_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/video.controller */ \"./server/controllers/video.controller.js\");\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nrouter.route('/api/video').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_video_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].list).post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_video_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create);\n\nrouter.route('/api/video/:videoId').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_video_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].read).put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_video_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].update).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requireSignin, _controllers_video_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove);\n\nrouter.route('/api/videoThumbnail/:videoId').get(_controllers_video_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].thumbnail);\n\nrouter.param('videoId', _controllers_video_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].videoByID);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/video.route.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./server/app.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.Promise = global.Promise;\nconst uri = \"mongodb+srv://richard01:seun08167739200@richard01-xsh4r.mongodb.net/test?retryWrites=true&w=majority\";\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect(uri);\n//mongoose.connect(config.mongoUri)\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connection.on('error', () => {\n    throw new Error(`unable to connect to database: ${uri}`);\n});\n\n_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, err => {\n    if (err) {\n        console.log(err);\n    }\n    console.info('Server started on porst:', _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Javascript\\backend\\server\\server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formidable\");\n\n//# sourceURL=webpack:///external_%22formidable%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ });