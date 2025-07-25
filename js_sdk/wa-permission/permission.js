/**
 * 本模块封装了Android、iOS的应用权限判断、打开应用权限设置界面、以及位置系统服务是否开启
 */
import glbFunc from '@/utils/globalFunc'

var isIos
// #ifndef H5
isIos = (plus.os.name == 'iOS')
// #endif

// 判断推送权限是否开启
function judgeIosPermissionPush() {
    var result = false
    var UIApplication = plus.ios.import('UIApplication')
    var app = UIApplication.sharedApplication()
    var enabledTypes = 0
    if (app.currentUserNotificationSettings) {
        var settings = app.currentUserNotificationSettings()
        enabledTypes = settings.plusGetAttribute('types')
        if (enabledTypes == 0) {
        } else {
            result = true
        }
        plus.ios.deleteObject(settings)
    } else {
        enabledTypes = app.enabledRemoteNotificationTypes()
        if (enabledTypes == 0) {
        } else {
            result = true
        }
    }
    plus.ios.deleteObject(app)
    plus.ios.deleteObject(UIApplication)
    return result
}

// 判断定位权限是否开启
function judgeIosPermissionLocation() {
    var result = false
    var cllocationManger = plus.ios.import('CLLocationManager')
    var status = cllocationManger.authorizationStatus()
    result = (status != 2)
    // 以下代码判断了手机设备的定位是否关闭，推荐另行使用方法 checkSystemEnableLocation
    /* var enable = cllocationManger.locationServicesEnabled();
    var status = cllocationManger.authorizationStatus();
  
    if (enable && status != 2) {
        result = true;
        console.log("手机定位服务已开启且已授予定位权限");
    } else {
        console.log("手机系统的定位没有打开或未给予定位权限");
    } */
    plus.ios.deleteObject(cllocationManger)
    return result
}

// 判断麦克风权限是否开启
function judgeIosPermissionRecord() {
    var result = false
    var avaudiosession = plus.ios.import('AVAudioSession')
    var avaudio = avaudiosession.sharedInstance()
    var permissionStatus = avaudio.recordPermission()
    if (permissionStatus == 1684369017 || permissionStatus == 1970168948) {
    } else {
        result = true
    }
    plus.ios.deleteObject(avaudiosession)
    return result
}

// 判断相机权限是否开启
function judgeIosPermissionCamera() {
    var result = false
    var AVCaptureDevice = plus.ios.import('AVCaptureDevice')
    var authStatus = AVCaptureDevice.authorizationStatusForMediaType('vide')
    if (authStatus == 3) {
        result = true
    } else {
    }
    plus.ios.deleteObject(AVCaptureDevice)
    return result
}

// 判断相册权限是否开启
function judgeIosPermissionPhotoLibrary() {
    var result = false
    var PHPhotoLibrary = plus.ios.import('PHPhotoLibrary')
    var authStatus = PHPhotoLibrary.authorizationStatus()
    if (authStatus == 3) {
        result = true
    } else {
    }
    plus.ios.deleteObject(PHPhotoLibrary)
    return result
}

// 判断通讯录权限是否开启
function judgeIosPermissionContact() {
    var result = false
    var CNContactStore = plus.ios.import('CNContactStore')
    var cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0)
    if (cnAuthStatus == 3) {
        result = true
    } else {
    }
    plus.ios.deleteObject(CNContactStore)
    return result
}

// 判断日历权限是否开启
function judgeIosPermissionCalendar() {
    var result = false
    var EKEventStore = plus.ios.import('EKEventStore')
    var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0)
    if (ekAuthStatus == 3) {
        result = true
    } else {
    }
    plus.ios.deleteObject(EKEventStore)
    return result
}

// 判断备忘录权限是否开启
function judgeIosPermissionMemo() {
    var result = false
    var EKEventStore = plus.ios.import('EKEventStore')
    var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1)
    if (ekAuthStatus == 3) {
        result = true
    } else {
    }
    plus.ios.deleteObject(EKEventStore)
    return result
}


// 跳转到**应用**的权限页面
function gotoAppPermissionSetting() {
    if (isIos) {
        var UIApplication = plus.ios.import('UIApplication')
        var application2 = UIApplication.sharedApplication()
        var NSURL2 = plus.ios.import('NSURL')
        // var setting2 = NSURL2.URLWithString("prefs:root=LOCATION_SERVICES");
        var setting2 = NSURL2.URLWithString('app-settings:')
        application2.openURL(setting2)

        plus.ios.deleteObject(setting2)
        plus.ios.deleteObject(NSURL2)
        plus.ios.deleteObject(application2)
    } else {
        var Intent = plus.android.importClass('android.content.Intent')
        var Settings = plus.android.importClass('android.provider.Settings')
        var Uri = plus.android.importClass('android.net.Uri')
        var mainActivity = plus.android.runtimeMainActivity()
        var intent = new Intent()
        intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS)
        var uri = Uri.fromParts('package', mainActivity.getPackageName(), null)
        intent.setData(uri)
        mainActivity.startActivity(intent)
    }
}

// 检查系统的设备服务是否开启
// var checkSystemEnableLocation = async function () {
function checkSystemEnableLocation() {
    if (isIos) {
        var result = false
        var cllocationManger = plus.ios.import('CLLocationManager')
        var result = cllocationManger.locationServicesEnabled()
        plus.ios.deleteObject(cllocationManger)
        return result
    } else {
        var context = plus.android.importClass('android.content.Context')
        var locationManager = plus.android.importClass('android.location.LocationManager')
        var main = plus.android.runtimeMainActivity()
        var mainSvr = main.getSystemService(context.LOCATION_SERVICE)
        var result = mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER)
        return result
    }
}

const glbPermission = () => {
    //跳转设置界面
    const gotoAppPermissionSetting = () => {
        //#ifdef APP-PLUS
        if (isIos) {
            var UIApplication = plus.ios.import('UIApplication')
            var application2 = UIApplication.sharedApplication()
            var NSURL2 = plus.ios.import('NSURL')
            // var setting2 = NSURL2.URLWithString("prefs:root=LOCATION_SERVICES");
            var setting2 = NSURL2.URLWithString('app-settings:')
            application2.openURL(setting2)

            plus.ios.deleteObject(setting2)
            plus.ios.deleteObject(NSURL2)
            plus.ios.deleteObject(application2)
        } else {
            // console.log(plus.device.vendor);
            var Intent = plus.android.importClass('android.content.Intent')
            var Settings = plus.android.importClass('android.provider.Settings')
            var Uri = plus.android.importClass('android.net.Uri')
            var mainActivity = plus.android.runtimeMainActivity()
            var intent = new Intent()
            intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS)
            var uri = Uri.fromParts('package', mainActivity.getPackageName(), null)
            intent.setData(uri)
            mainActivity.startActivity(intent)
        }
        // #endif
    }
    // Android权限查询
    const requestAndroidPermission = (permissionID) => {
        return new Promise((resolve, reject) => {
            plus.android.requestPermissions(
                [permissionID], // 理论上支持多个权限同时查询，但实际上本函数封装只处理了一个权限的情况。有需要的可自行扩展封装
                function (resultObj) {
                    var result = 0
                    for (var i = 0; i < resultObj.granted.length; i++) {
                        var grantedPermission = resultObj.granted[i]
                        result = 1
                    }
                    for (var i = 0; i < resultObj.deniedPresent.length; i++) {
                        var deniedPresentPermission = resultObj.deniedPresent[i]
                        result = 0

                    }
                    for (var i = 0; i < resultObj.deniedAlways.length; i++) {
                        var deniedAlwaysPermission = resultObj.deniedAlways[i]
                        result = -1
                    }
                    resolve(result)
                    // 若所需权限被拒绝,则打开APP设置界面,可以在APP设置界面打开相应权限
                    // if (result != 1) {
                    // gotoAppPermissionSetting()
                    // }
                },
                function (error) {
                    resolve({
                        code: error.code,
                        message: error.message
                    })
                }
            )
        })
    }
    // 使用一个方法，根据参数判断权限
    const judgeIosPermission = (permissionID) => {
        if (permissionID == 'location') {
            return judgeIosPermissionLocation()
        } else if (permissionID == 'camera') {
            return judgeIosPermissionCamera()
        } else if (permissionID == 'photoLibrary') {
            return judgeIosPermissionPhotoLibrary()
        } else if (permissionID == 'record') {
            return judgeIosPermissionRecord()
        } else if (permissionID == 'push') {
            return judgeIosPermissionPush()
        } else if (permissionID == 'contact') {
            return judgeIosPermissionContact()
        } else if (permissionID == 'calendar') {
            return judgeIosPermissionCalendar()
        } else if (permissionID == 'memo') {
            return judgeIosPermissionMemo()
        }
        return false
    }
        return {requestAndroidPermission, judgeIosPermission, gotoAppPermissionSetting}
    }
    export default glbPermission