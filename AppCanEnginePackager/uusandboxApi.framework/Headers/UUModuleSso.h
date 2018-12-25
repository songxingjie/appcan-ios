//
//  UUModuleSso.h
//  uusandboxApi
//
//  Created by gaopengcheng on 2018/10/29.
//  Copyright © 2018年 gaopengcheng. All rights reserved.
//

#import <Foundation/Foundation.h>

#define kLogin_userName             @"user-name"
#define kLogin_password             @"user-pwd"
#define kLogin_adDomian             @"mail-domain"
#define kLogin_address              @"mail-addr"

NS_ASSUME_NONNULL_BEGIN

@interface UUModuleSso : NSObject

/**
 设置用户信息

 @param domian 域账户
 @param password 密码
 @param adDomian AD域
 @param address 邮箱账户
 
 return 是否设置成功
 */
+ (BOOL)setUserName:(NSString *)domian password:(NSString *)password adDomain:(NSString *)adDomian mailAddress:(NSString *)address;


/**
 获取用户信息

 @return 字典格式，包含用户信息（字典key值 当前类提供宏定义）
 {
    @"user-name":域账户,
    @"user-pwd":域账户密码,
    @"mail-domain":AD域（邮件登录）,
    @"mail-addr":邮件地址
 }

 */
+ (NSDictionary *)getUserInfo;


/**
 清空已记录的用户信息
 */
+ (void)clearUserInfo;
@end

NS_ASSUME_NONNULL_END
