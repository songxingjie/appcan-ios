//
//  UULoginHelper.h
//  uusandboxCore
//
//  Created by gaopengcheng on 2018/8/31.
//  Copyright © 2018年 gaopengcheng. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface UULoginHelper : NSObject
@property (nonatomic, weak) id delegate;    //弃用

/**
 * @zpi
 * @description:
 * 单例模式
 * @return 实例对象
 * */
+ (UULoginHelper *)sharedInstance;

/**
 * @zpi
 * @description:
 * 用户登录，一般用于服务端用户注册/激活/登录，获取用户应用策略
 * @param userName 用户名
 * */
- (void)loginByUserName:(NSString *)userName;

/**
 * @zpi
 * @description:
 * 用户登录，一般用于服务端用户注册/激活/登录，获取用户应用策略
 * @param dict 用户信息 { @"user-name":用户名, @"user-pwd":密码 }
 * @param block 登录成功回调
 * */
- (void)loginByUserInfo:(NSDictionary *)dict withBlock:(void(^)(NSDictionary *dic, NSError *error)) block;

/**
 * @zpi
 * @description:
 * 用户登录，一般用于服务端用户注册/激活/登录，获取用户应用策略，以及重置服务器地址
 * @param userName 用户名
 * @param serverUrl 新服务器地址（传入形式例如：https://127.0.0.1:9070）
 * @param block 登录成功回调
 * */
- (void)loginByUserName:(NSString *)userName serverUrl:(NSString *)serverUrl withBlock:(void(^)(NSDictionary *dic, NSError *error)) block;

/**
 * @zpi
 * @description:
 * 是否已处于登录状态
 * @return false 未登录
 * @return true 已登录
 * */
- (BOOL)isLogin;

/**
 * @zpi
 * @description:
 * 注销，退出登录；策略恢复到默认，擦除用户相关数据
 * @return true 登出
 * */
- (BOOL)loginOut;

/**
 * @zpi
 * @description:
 * 获取定制的内容
 * @return 字典类型数据
 * */
- (NSDictionary *)getPasteboardContent NS_DEPRECATED_IOS(1_0, 1_1, "Please use getUserInfo instead");

/**
 * @zpi
 * @description:
 * 获取单点登录的用户信息 （与sandboxApi.frame配合使用）
 * @return 字典类型数据
 * */
- (NSDictionary *)getUserInfo;
@end
