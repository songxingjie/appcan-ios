//
//  UUSandboxSso.h
//  uusandboxApi
//
//  Created by gaopengcheng on 2018/8/31.
//  Copyright © 2018年 gaopengcheng. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface UUSandboxSso : NSObject

/**
 * @zpi
 * @description:
 * 用户登录，一般用于服务端用户注册/激活/登录，获取用户应用策略
 * @param userName 用户名
 * @return false 失败
 * @return true 成功
 * */
+ (BOOL)login:(NSString *)userName;

/**
 * @zpi
 * @description:
 * 用户登录，一般用于服务端用户注册/激活/登录，获取用户应用策略
 * @param userInfo  用户信息 { @"user-name":用户名, @"user-pwd":密码 }
 * @param myBlock block回调，携带登录返回信息 登录异常信息
 * @return false 失败
 * @return true 成功
 * */
+ (BOOL)login:(NSDictionary *)userInfo withBlock:(void(^)(NSDictionary *infoDic, NSError *error)) myBlock;

/**
 * @zpi
 * @description:
 * 用户登录，一般用于服务端用户注册/激活/登录，获取用户应用策略，以及重置服务器地址
 * @param userName 用户名
 * @param serverUrl 新服务器地址,可以传nil（传入形式例如：https://127.0.0.1:9070）
 * @param myBlock block回调，携带登录返回信息 登录异常信息
 * */
+ (void)login:(NSString *)userName serverUrl:(NSString *)serverUrl withBlock:(void(^)(NSDictionary *infoDic, NSError *error)) myBlock;

/**
 * @zpi
 * @description:
 * 是否已处于登录状态
 * @return false 未登录
 * @return true 已登录
 * */
+ (BOOL)isLogin;

/**
 * @zpi
 * @description:
 * 注销，退出登录；策略恢复到默认，擦除用户相关数据
 * @return false 失败
 * @return true 成功
 * */
+ (BOOL)loginOut;
@end
