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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const channel_service_1 = require("./channel.service");
const channel_schema_1 = require("./channel.schema");
let ChannelResolver = class ChannelResolver {
    constructor(channelService) {
        this.channelService = channelService;
    }
    findAll() {
        return this.channelService.findAll();
    }
    findOne(id) {
        return this.channelService.findOne(id);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [channel_schema_1.Channel], { name: 'channels' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChannelResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => channel_schema_1.Channel, { name: 'channel' }),
    __param(0, (0, graphql_1.Args)('_id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChannelResolver.prototype, "findOne", null);
ChannelResolver = __decorate([
    (0, graphql_1.Resolver)(() => channel_schema_1.Channel),
    __metadata("design:paramtypes", [channel_service_1.ChannelService])
], ChannelResolver);
exports.ChannelResolver = ChannelResolver;
//# sourceMappingURL=channel.resolver.js.map