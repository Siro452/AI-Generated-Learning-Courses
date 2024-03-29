"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.receivedData = void 0;
var zod_1 = require("zod");
var trpc_1 = require("../trpc");
var db_1 = require("../../db");
// Modification of Data imports
exports.receivedData = trpc_1.t.router({
    // returnedData: t.procedure
    //   .input(
    //     z.object({
    //       clientData: z.string(),
    //     })
    //   )
    //   .query(async ({ input }) => {
    //     // const prismatest = prismatestRouter
    //     const result = await prisma.uploadedDocument.findMany({});
    //     return `${input.clientData}`;
    //   }),
    // post: t.procedure
    //   .input(
    //     z.object({
    //       clientData: z.string(),
    //     })
    //   )
    //   .mutation(async ({ input }) => {
    //     const result = await prisma.uploadedDocument.create({
    //       data: {
    //         name: input.,
    //         message: "adding data",
    //       },
    //     });
    //     return result;
    //   }),
    // .mutation(async ({ input }) => {
    //   const result = await prisma.uploadedDocument
    //     .createMany({
    //       data: input.userUpload.map((document) => ({
    //         fileName: document.fileName,
    //         fileContent: document.fileContent,
    //       })),
    //     })
    //     .then((uploadedDocuments) =>
    //       uploadedDocuments.map((uploadedDocument: any) => toCourse(uploadedDocument))
    //     )
    // )
    //   return result;
    // }
    mutateData: trpc_1.t.procedure
        .input(zod_1.z.object({
        userid: zod_1.z.string(),
        userUpload: zod_1.z.array(zod_1.z.object({
            fileName: zod_1.z.string(),
            fileContent: zod_1.z.string()
        }))
    }))
        .mutation(function (_a) {
        var input = _a.input;
        return __awaiter(void 0, void 0, void 0, function () {
            var Course;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, db_1.prisma.uploadedDocument.createMany({
                            data: input.userUpload.map(function (document) { return ({
                                userid: input.userid,
                                fileName: document.fileName,
                                fileContent: document.fileContent
                            }); })
                        })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, db_1.prisma.course.create({
                                data: {
                                    userid: input.userid
                                }
                            })
                            //   data: {
                            //     userid: input.userid,
                            //     create: [courseNodename: input.userUpload.map(
                            //       (course: { fileName: string; fileContent: string }) => ({
                            //         CourseNode: {
                            //           title: course.fileName,
                            //           description: course.fileContent,
                            //         },
                            //       })
                            //     ),
                            //     ]
                            //   },
                            // });
                        ];
                    case 2:
                        Course = _b.sent();
                        //   data: {
                        //     userid: input.userid,
                        //     create: [courseNodename: input.userUpload.map(
                        //       (course: { fileName: string; fileContent: string }) => ({
                        //         CourseNode: {
                        //           title: course.fileName,
                        //           description: course.fileContent,
                        //         },
                        //       })
                        //     ),
                        //     ]
                        //   },
                        // });
                        return [2 /*return*/, Course];
                }
            });
        });
    })
});
// adding another api endpoint that returns what's already in the database.
