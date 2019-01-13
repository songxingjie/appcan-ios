//
//  UUSangforEasyAppVpnHelper.h
//  emmlib
//
//  Created by heyonly on 2017/11/23.
//  Copyright © 2017年 uusafe. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "AuthHelper.h"
#import "sslvpnnb.h"
#import "sdkheader.h"


typedef NS_OPTIONS(NSUInteger,SangforVpnState ) {
    SangforVpnStateInit = 1 << 0,
    SangforVpnStateInitFailed = 1 << 1,
    SangforVpnStateInitting = 1 << 2,
    SangforVpnStateInitOK = 1 << 3,
    SangforVpnStateAuthing  = 1 << 4,
    SangforVpnStateAuthSuccess = 1 << 5,
    SangforVpnStateAuthFailed = 1 << 6,
    SangforVpnStateLogout = 1 << 7,
    SangforVpnStateQuit = 1 << 8
};

typedef NS_OPTIONS(NSUInteger, AuthType) {
    AUTH_TYPE_CERTIFICATE = 0,
    AUTH_TYPE_PASSWORD = 1,
    AUTH_TYPE_SMS = 2,
    AUTH_TYPE_HARDID = 4,
    AUTH_TYPE_USBKEY = 5,
    AUTH_TYPE_RADIUS = 6,
    AUTH_TYPE_TOKEN = 7,
    AUTH_TYPE_AUTHOR = 10,
    AUTH_TYPE_TWF = 16,
    AUTH_TYPE_NONE = 17
};

@protocol UUSangforEasyAppVpnHelperDelegate <NSObject>
@required
- (void)onCallBack:(const VPN_RESULT_NO)vpnErrno authType:(const int)authType;
@optional

- (void)onReloginCallback:(const int)status result:(const int)result;

@end


@interface SangforEasyAppVpnHelper : NSObject
@property (nonatomic, strong) NSString *vpnIp;
@property (nonatomic, assign) short port;
@property (nonatomic, strong) NSString *userName;
@property (nonatomic, strong) NSString *password;
@property (nonatomic, strong) NSString *certPath;
@property (nonatomic, strong) NSString *certPassword;
@property (nonatomic, assign) SangforVpnState state;
@property (nonatomic, strong) id<UUSangforEasyAppVpnHelperDelegate> delegate;
+ (instancetype)sharedInstance;
- (void)registerSangforVPN;
+ (instancetype)sharedInstanceWithVpnIp:(NSString *)vpnIp port:(NSInteger)port;
- (void)setUserName:(NSString *)userName password:(NSString *)password;
- (void)setVpnIp:(NSString *)vpnIp port:(short)port;
- (BOOL)isInit;
/**
 @method called when start vpn by user name and passord
 
 @param username username
 @param password password
 */
- (int)loginByUsername:(NSString *)username password:(NSString *)password;
//SangforVpn begin
/**
 @method called when login vpn by cert
 
 @param filename cert file name
 @param password cert password
 */
- (int)loginByCert:(NSString *)filename password:(NSString *)password;

/**
 @method called when login vpn by SMS
 
 @param smsCode smsCode: sms code received from server
 */
- (int)loginBySms:(NSString *)smsCode;

/**
 @method
 @abstract get the phoneNumber
 
 @return phoneNumber or empty string
 */
- (NSString *)smsPhoneNumber;

/**
 @method
 @abstract get SMS verification code countdown
 
 @return sms code countdown or empty string
 */
- (NSString *)smsCountDown;

/**
 @method called when login vpn by hard id
 */
- (int)loginByHardIDAuth;

/**
 @method get hard signature code
 
 @return hardID or nil
 */
- (NSString *)queryHardID;

/**
 @method token auth
 
 @param token  token
 */

- (int)loginByToken:(NSString *)token;

/**
 @method
 @abstract radius challenge auth
 
 @param radiusAnswer radius answer
 */
- (int)loginByRadius:(NSString *)radiusAnswer;

/**
 @method
 @abstract sessionId auth type
 
 @param sessionId when a user login successfully,the server will generate a id.
 */
- (int)loginBySessionId:(NSString *)sessionId;

/**
 @method
 @abstract get the session id
 
 @return session id
 */
- (NSString *)sessionId;

/**
 @method set the dns server IP,must call before init.
 
 @param server dns IP eg: 8.8.8.8 string
 */
+ (void)setDnsServer:(NSString *)server;

/**
 @method query vpn status
 
 @return vpn status code
 */
- (VPN_STATUS)queryVpnStatus;

/**
 @method logout vpn
 
 @return success to return 0,else return -1
 */
- (int)logoutSangforVpn;

/**
 @method quit the vpn
 
 @return success return 0,else return -1
 */
- (int)quit;

/**
 @method get the vpn error information
 
 @return err string
 */
- (NSString *)getVpnErrorString;
/**
 @method
 @abstract turn off the autologin default is No.
 
 @prama: yes to turn off autologin else turn on.
 */
- (void)autoLoginOff:(BOOL)aKey;
/**
 @method
 @abstract get the sdk version
 
 @return sdk version.
 */
- (NSString *)getSdkVersion;

- (int)login:(AuthType)type;
//SangforVpn end
@end
