"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let User = class User {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], User.prototype, "_id", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    (0, graphql_1.Field)(() => String, { description: 'user name' }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    (0, graphql_1.Field)(() => String, { description: 'user avatar url' }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
User = __decorate([
    (0, mongoose_2.Schema)(),
    (0, graphql_1.ObjectType)()
], User);
exports.User = User;
exports.UserSchema = mongoose_2.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.schema.js.map