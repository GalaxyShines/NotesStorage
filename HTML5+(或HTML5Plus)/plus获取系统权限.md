# 1、官方文档介绍

请求权限

```html
void plus.android.requestPermissions(Array[String] permissions, AndroidSuccessCallback successCb, AndroidErrorCallback errorCB);
```



## 说明

向系统请求权限，Android系统6+版本（API等级23+），并且必须设置`targetSdkVersion>=23`，参考：https://ask.dcloud.net.cn/article/193。 如果权限属于危险权限并且用户没有授权则会弹出系统提示框由用户授权确认，如果已经授权或被用户拒绝则返回结果。 授权结果在`successCb`回调参数中可获取。

## 参数

### `permissions`

( Array[String] ) 可选 

申请的权限列表

权限列表参考Android官方列表https://developer.android.com/reference/android/Manifest.permission（需翻墙）。 注意：要申请的权限需在应用`manifest.json`的“模块权限配置”中勾选（保存后提交云端打包）。

### `successCb`

( [AndroidSuccessCallback](https://www.html5plus.org/doc/zh_cn/android.html#plus.android.AndroidSuccessCallback) ) 可选 

申请权限成功回调函数

返回申请权限的结果，可能被用户允许 回调函数的参数event包含以下属性：

- `granted` - Array[String]字符串数组，已获取权限列表；
- `deniedPresent` - Array[String]字符串数据，已拒绝（临时）的权限列表；
- `deniedAlways` - Array[String]字符串数据，永久拒绝的权限列表。

### `errorCB`

( [AndroidErrorCallback](https://www.html5plus.org/doc/zh_cn/android.html#plus.android.AndroidErrorCallback) ) 可选 

申请权限失败回调函数

通常传入参数错误时触发此回调。

## 返回值

void : 无

## 示例

```javascript
// 申请定位权限
function requestLocation(){
	plus.android.requestPermissions(['android.permission.ACCESS_FINE_LOCATION'], function(e){
		if(e.deniedAlways.length>0){	//权限被永久拒绝
			// 弹出提示框解释为何需要定位权限，引导用户打开设置页面开启
			console.log('Always Denied!!! '+e.deniedAlways.toString());
		}
		if(e.deniedPresent.length>0){	//权限被临时拒绝
			// 弹出提示框解释为何需要定位权限，可再次调用plus.android.requestPermissions申请权限
			console.log('Present Denied!!! '+e.deniedPresent.toString());
		}
		if(e.granted.length>0){	//权限被允许
		    //调用依赖获取定位权限的代码
			console.log('Granted!!! '+e.granted.toString());
		}
	}, function(e){
	    console.log('Request Permissions error:'+JSON.stringify(e));
	});
}
```

# 2、权限列表

**完整写法示例：android.permission.ACCEPT_HANDOVER**

| 常量     |                                                              |
| :------- | ------------------------------------------------------------ |
| `String` | `ACCEPT_HANDOVER`允许呼叫应用程序继续在另一个应用程序中发起的呼叫。 |
| `String` | `ACCESS_BACKGROUND_LOCATION`允许应用程序在后台访问位置。     |
| `String` | `ACCESS_BLOBS_ACROSS_USERS`允许应用程序跨用户访问数据块。    |
| `String` | `ACCESS_CHECKIN_PROPERTIES`允许对签入数据库中的“属性”表进行读/写访问，以更改已上传的值。 |
| `String` | `ACCESS_COARSE_LOCATION`允许应用程序访问大致位置。           |
| `String` | `ACCESS_FINE_LOCATION`允许应用程序访问精确位置。             |
| `String` | `ACCESS_HIDDEN_PROFILES`允许应用程序访问具有 `android.content.pm.UserProperties#PROFILE_API_VISIBILITY_HIDDEN`用户属性的配置文件，例如 |
| `String` | `ACCESS_LOCATION_EXTRA_COMMANDS`允许应用程序访问额外的位置提供商命令。 |
| `String` | `ACCESS_MEDIA_LOCATION`允许应用程序访问用户共享集合中保存的任何地理位置。 |
| `String` | `ACCESS_NETWORK_STATE`允许应用程序访问有关网络的信息。       |
| `String` | `ACCESS_NOTIFICATION_POLICY`为希望访问通知策略的应用程序标记权限。 |
| `String` | `ACCESS_WIFI_STATE`允许应用程序访问有关 Wi-Fi 网络的信息。   |
| `String` | `ACCOUNT_MANAGER`允许应用程序调用 AccountAuthenticators。    |
| `String` | `ACTIVITY_RECOGNITION`允许应用程序识别身体活动。             |
| `String` | `ADD_VOICEMAIL`允许应用程序将语音邮件添加到系统。            |
| `String` | `ANSWER_PHONE_CALLS`允许应用程序接听来电。                   |
| `String` | `BATTERY_STATS`允许应用程序收集电池统计信息保护级别：签名\|特权\|开发 |
| `String` | `BIND_ACCESSIBILITY_SERVICE`必须由 来要求`AccessibilityService`，以确保只有系统可以绑定到它。 |
| `String` | `BIND_APPWIDGET`允许应用程序告诉 AppWidget 服务哪个应用程序可以访问 AppWidget 的数据。 |
| `String` | `BIND_AUTOFILL_SERVICE`必须由 来要求`AutofillService`，以确保只有系统可以绑定到它。 |
| `String` | `BIND_CALL_REDIRECTION_SERVICE`必须由 来要求`CallRedirectionService`，以确保只有系统可以绑定到它。 |
| `String` | `BIND_CARRIER_MESSAGING_CLIENT_SERVICE`的子类`CarrierMessagingClientService`必须受此权限保护。 |
| `String` | `BIND_CARRIER_MESSAGING_SERVICE`*此常量在 API 级别 23 中已弃用。请`BIND_CARRIER_SERVICES`改用* |
| `String` | `BIND_CARRIER_SERVICES`允许绑定到运营商应用中的服务的系统进程将拥有此权限。 |
| `String` | `BIND_CHOOSER_TARGET_SERVICE`*此常量在 API 级别 30 中已弃用。如需发布直接共享目标，请按照 https://developer.android.com/training/sharing/receive.html#providing-direct-share-targets 中的说明进行操作。* |
| `String` | `BIND_COMPANION_DEVICE_SERVICE`必须由任何 `CompanionDeviceService`s 来要求，以确保只有该系统能够绑定到它。 |
| `String` | `BIND_CONDITION_PROVIDER_SERVICE`必须由 来要求`ConditionProviderService`，以确保只有系统可以绑定到它。 |
| `String` | `BIND_CONTROLS`允许SystemUI请求第三方控件。                  |
| `String` | `BIND_CREDENTIAL_PROVIDER_SERVICE`必须由 CredentialProviderService 要求确保只有系统可以绑定到它。 |
| `String` | `BIND_DEVICE_ADMIN`必须由设备管理接收器要求，以确保只有系统可以与其交互。 |
| `String` | `BIND_DREAM_SERVICE`必须由 来要求`DreamService`，以确保只有系统可以绑定到它。 |
| `String` | `BIND_INCALL_SERVICE`必须由 来要求`InCallService`，以确保只有系统可以绑定到它。 |
| `String` | `BIND_INPUT_METHOD`必须由 来要求`InputMethodService`，以确保只有系统可以绑定到它。 |
| `String` | `BIND_MIDI_DEVICE_SERVICE`必须由 来要求`MidiDeviceService`，以确保只有系统可以绑定到它。 |
| `String` | `BIND_NFC_SERVICE`必须由`HostApduService` 或要求，`OffHostApduService`以确保只有系统可以绑定到它。 |
| `String` | `BIND_NOTIFICATION_LISTENER_SERVICE`必须由 来要求`NotificationListenerService`，以确保只有系统可以绑定到它。 |
| `String` | `BIND_PRINT_SERVICE`必须由 来要求`PrintService`，以确保只有系统可以绑定到它。 |
| `String` | `BIND_QUICK_ACCESS_WALLET_SERVICE`必须由 来`QuickAccessWalletService` 确保只有系统可以绑定到它。 |
| `String` | `BIND_QUICK_SETTINGS_TILE`允许应用程序绑定到第三方快速设置图块。 |
| `String` | `BIND_REMOTEVIEWS`必须由 来要求`RemoteViewsService`，以确保只有系统可以绑定到它。 |
| `String` | `BIND_SCREENING_SERVICE`必须由 来要求`CallScreeningService`，以确保只有系统可以绑定到它。 |
| `String` | `BIND_TELECOM_CONNECTION_SERVICE`必须由 来要求`ConnectionService`，以确保只有系统可以绑定到它。 |
| `String` | `BIND_TEXT_SERVICE`必须由 TextService（例如 SpellCheckerService）要求，以确保只有系统可以绑定到它。 |
| `String` | `BIND_TV_INPUT`必须由 来`TvInputService` 确保只有系统可以绑定到它。 |
| `String` | `BIND_TV_INTERACTIVE_APP`必须由 来`TvInteractiveAppService` 确保只有系统可以绑定到它。 |
| `String` | `BIND_VISUAL_VOICEMAIL_SERVICE`必须由链接要求`VisualVoicemailService`，以确保只有系统可以绑定到它。 |
| `String` | `BIND_VOICE_INTERACTION`必须由 来要求`VoiceInteractionService`，以确保只有系统可以绑定到它。 |
| `String` | `BIND_VPN_SERVICE`必须由 来要求`VpnService`，以确保只有系统可以绑定到它。 |
| `String` | `BIND_VR_LISTENER_SERVICE`必须由 来要求`VrListenerService`，以确保只有系统可以绑定到它。 |
| `String` | `BIND_WALLPAPER`必须由 来要求`WallpaperService`，以确保只有系统可以绑定到它。 |
| `String` | `BLUETOOTH`允许应用程序连接到配对的蓝牙设备。                |
| `String` | `BLUETOOTH_ADMIN`允许应用程序发现并配对蓝牙设备。            |
| `String` | `BLUETOOTH_ADVERTISE`需要能够向附近的蓝牙设备进行广播。      |
| `String` | `BLUETOOTH_CONNECT`需要能够连接到配对的蓝牙设备。            |
| `String` | `BLUETOOTH_PRIVILEGED`允许应用程序无需用户交互即可配对蓝牙设备，以及允许或禁止电话簿访问或消息访问。 |
| `String` | `BLUETOOTH_SCAN`需要能够发现并配对附近的蓝牙设备。           |
| `String` | `BODY_SENSORS`允许应用程序访问用户用来测量身体内部情况（例如心率）的传感器数据。 |
| `String` | `BODY_SENSORS_BACKGROUND`允许应用程序访问用户用来测量身体内部情况（例如心率）的传感器数据。 |
| `String` | `BROADCAST_PACKAGE_REMOVED`允许应用程序广播应用程序包已被删除的通知。 |
| `String` | `BROADCAST_SMS`允许应用程序广播短信收据通知。                |
| `String` | `BROADCAST_STICKY`允许应用程序广播粘性意图。                 |
| `String` | `BROADCAST_WAP_PUSH`允许应用程序广播 WAP PUSH 回执通知。     |
| `String` | `CALL_COMPANION_APP`允许实现该 API 的应用 `InCallService`有资格作为调用配套应用启用。 |
| `String` | `CALL_PHONE`允许应用程序发起电话呼叫，而无需通过拨号器用户界面让用户确认呼叫。 |
| `String` | `CALL_PRIVILEGED`允许应用程序呼叫任何电话号码，包括紧急号码，而无需通过拨号器用户界面让用户确认正在拨打的电话。 |
| `String` | `CAMERA`需要能够访问相机设备。                               |
| `String` | `CAPTURE_AUDIO_OUTPUT`允许应用程序捕获音频输出。             |
| `String` | `CHANGE_COMPONENT_ENABLED_STATE`允许应用程序更改应用程序组件（除其自身之外）是否启用。 |
| `String` | `CHANGE_CONFIGURATION`允许应用程序修改当前配置，例如语言环境。 |
| `String` | `CHANGE_NETWORK_STATE`允许应用程序改变网络连接状态。         |
| `String` | `CHANGE_WIFI_MULTICAST_STATE`允许应用程序进入 Wi-Fi 多播模式。 |
| `String` | `CHANGE_WIFI_STATE`允许应用程序更改 Wi-Fi 连接状态。         |
| `String` | `CLEAR_APP_CACHE`允许应用程序清除设备上所有已安装应用程序的缓存。 |
| `String` | `CONFIGURE_WIFI_DISPLAY`允许应用程序配置并连接 Wifi 显示器   |
| `String` | `CONTROL_LOCATION_UPDATES`允许启用/禁用来自无线电的位置更新通知。 |
| `String` | `CREDENTIAL_MANAGER_QUERY_CANDIDATE_CREDENTIALS`允许浏览器调用一组查询 API 来获取有关在 CredentialManager.prepareGetCredential API 期间准备的凭证候选者的元数据。 |
| `String` | `CREDENTIAL_MANAGER_SET_ALLOWED_PROVIDERS`允许指定在凭证管理器获取流程中查询的候选凭证提供商，或者在凭证管理器创建流程中将其作为默认值。 |
| `String` | `CREDENTIAL_MANAGER_SET_ORIGIN`允许浏览器代表另一个 RP 调用凭证管理器 API。 |
| `String` | `DELETE_CACHE_FILES`删除应用程序缓存文件的旧权限不再使用，但它向我们发出信号，让我们悄悄地忽略调用，而不是引发异常。 |
| `String` | `DELETE_PACKAGES`允许应用程序删除包。                        |
| `String` | `DELIVER_COMPANION_MESSAGES`允许应用程序向系统发送伴随消息   |
| `String` | `DETECT_SCREEN_CAPTURE`允许应用程序在尝试对其窗口进行屏幕截图时收到通知。 |
| `String` | `DETECT_SCREEN_RECORDING`允许应用程序在录制时收到通知。      |
| `String` | `DIAGNOSTIC`允许应用程序对诊断资源进行读写。                 |
| `String` | `DISABLE_KEYGUARD`如果键盘锁不安全，则允许应用程序禁用键盘锁。 |
| `String` | `DUMP`允许应用程序从系统服务检索状态转储信息。               |
| `String` | `ENFORCE_UPDATE_OWNERSHIP`允许应用程序通过`PackageInstaller.SessionParams.setRequestUpdateOwnership(boolean)` 它来表明自己有意成为更新所有者。 |
| `String` | `EXECUTE_APP_ACTION`允许辅助应用程序在应用程序内部代表用户执行操作。 |
| `String` | `EXPAND_STATUS_BAR`允许应用程序展开或折叠状态栏。            |
| `String` | `FACTORY_TEST`作为制造商测试应用程序运行，以 root 用户身份运行。 |
| `String` | `FOREGROUND_SERVICE`允许常规应用程序使用`Service.startForeground`。 |
| `String` | `FOREGROUND_SERVICE_CAMERA`允许常规应用程序使用`Service.startForeground`“相机”类型。 |
| `String` | `FOREGROUND_SERVICE_CONNECTED_DEVICE`允许常规应用程序使用`Service.startForeground`“connectedDevice”类型。 |
| `String` | `FOREGROUND_SERVICE_DATA_SYNC`允许常规应用程序使用`Service.startForeground`“dataSync”类型。 |
| `String` | `FOREGROUND_SERVICE_HEALTH`允许常规应用程序使用`Service.startForeground`“健康”类型。 |
| `String` | `FOREGROUND_SERVICE_LOCATION`允许常规应用程序使用`Service.startForeground`“位置”类型。 |
| `String` | `FOREGROUND_SERVICE_MEDIA_PLAYBACK`允许常规应用程序使用`Service.startForeground`“mediaPlayback”类型。 |
| `String` | `FOREGROUND_SERVICE_MEDIA_PROCESSING`允许常规应用程序使用`Service.startForeground`“mediaProcessing”类型。 |
| `String` | `FOREGROUND_SERVICE_MEDIA_PROJECTION`允许常规应用程序使用`Service.startForeground`“mediaProjection”类型。 |
| `String` | `FOREGROUND_SERVICE_MICROPHONE`允许常规应用程序使用`Service.startForeground`“麦克风”类型。 |
| `String` | `FOREGROUND_SERVICE_PHONE_CALL`允许常规应用程序使用`Service.startForeground`“phoneCall”类型。 |
| `String` | `FOREGROUND_SERVICE_REMOTE_MESSAGING`允许常规应用程序使用`Service.startForeground`“remoteMessaging”类型。 |
| `String` | `FOREGROUND_SERVICE_SPECIAL_USE`允许常规应用程序使用`Service.startForeground`“specialUse”类型。 |
| `String` | `FOREGROUND_SERVICE_SYSTEM_EXEMPTED`允许常规应用程序使用`Service.startForeground`“systemExempted”类型。 |
| `String` | `GET_ACCOUNTS`允许访问账户服务中的账户列表。                 |
| `String` | `GET_ACCOUNTS_PRIVILEGED`允许访问账户服务中的账户列表。      |
| `String` | `GET_PACKAGE_SIZE`允许应用程序找出任何包使用的空间。         |
| `String` | `GET_TASKS`*此常量在 API 级别 21 中已被弃用。不再强制执行。* |
| `String` | `GLOBAL_SEARCH`此权限可用于内容提供商，以允许全局搜索系统访问其数据。 |
| `String` | `HIDE_OVERLAY_WINDOWS`允许应用阻止非系统覆盖窗口绘制在其上方 |
| `String` | `HIGH_SAMPLING_RATE_SENSORS`允许应用访问采样率大于 200 Hz 的传感器数据。 |
| `String` | `INSTALL_LOCATION_PROVIDER`允许应用程序将位置提供商安装到位置管理器中。 |
| `String` | `INSTALL_PACKAGES`允许应用程序安装程序包。                   |
| `String` | `INSTALL_SHORTCUT`允许应用程序在启动器中安装快捷方式。       |
| `String` | `INSTANT_APP_FOREGROUND_SERVICE`允许即时应用程序创建前台服务。 |
| `String` | `INTERACT_ACROSS_PROFILES`允许同一配置文件组中的配置文件之间进行交互。 |
| `String` | `INTERNET`允许应用程序打开网络套接字。                       |
| `String` | `KILL_BACKGROUND_PROCESSES`允许应用程序调用 `ActivityManager.killBackgroundProcesses(String)`。 |
| `String` | `LAUNCH_CAPTURE_CONTENT_ACTIVITY_FOR_NOTE`允许应用程序捕获屏幕内容，以便使用意图操作执行屏幕截图`Intent.ACTION_LAUNCH_CAPTURE_CONTENT_ACTIVITY_FOR_NOTE`。 |
| `String` | `LAUNCH_MULTI_PANE_SETTINGS_DEEP_LINK`应用程序需要此权限才能 在“设置”应用中`Settings.ACTION_SETTINGS_EMBED_DEEP_LINK_ACTIVITY`显示其 `Activity`嵌入内容。 |
| `String` | `LOADER_USAGE_STATS`允许数据加载器读取包的访问日志。         |
| `String` | `LOCATION_HARDWARE`允许应用程序使用硬件中的位置功能，例如地理围栏 API。 |
| `String` | `MANAGE_DEVICE_LOCK_STATE`允许融资设备自助服务终端应用对设备锁服务执行操作保护级别：内部\|角色仅供 FINANCED_DEVICE_KIOSK 角色使用。 |
| `String` | `MANAGE_DEVICE_POLICY_ACCESSIBILITY`允许应用程序管理与可访问性相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_ACCOUNT_MANAGEMENT`允许应用程序设置与帐户管理相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_ACROSS_USERS`允许应用程序在当前用户之外设置设备策略，这些策略是确保设备所有权所必需的，而无需访问用户数据。 |
| `String` | `MANAGE_DEVICE_POLICY_ACROSS_USERS_FULL`允许应用程序在当前用户之外设置设备策略。 |
| `String` | `MANAGE_DEVICE_POLICY_ACROSS_USERS_SECURITY_CRITICAL`允许应用程序在当前用户之外设置对于保护当前用户内的数据至关重要的设备策略。 |
| `String` | `MANAGE_DEVICE_POLICY_AIRPLANE_MODE`允许应用程序设置与飞行模式相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_APPS_CONTROL`允许应用程序管理有关修改应用程序的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_APP_RESTRICTIONS`允许应用程序管理应用程序限制。 |
| `String` | `MANAGE_DEVICE_POLICY_APP_USER_DATA`允许应用程序管理与应用程序用户数据相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_ASSIST_CONTENT`允许应用程序设置与向特权应用程序（例如助手应用程序）发送辅助内容相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_AUDIO_OUTPUT`允许应用程序设置与音频输出相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_AUTOFILL`允许应用程序设置与自动填充相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_BACKUP_SERVICE`允许应用程序管理备份服务策略。 |
| `String` | `MANAGE_DEVICE_POLICY_BLOCK_UNINSTALL`允许应用程序管理与阻止包卸载相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_BLUETOOTH`允许应用程序设置与蓝牙相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_BUGREPORT`允许应用程序在征得用户同意的情况下请求错误报告。 |
| `String` | `MANAGE_DEVICE_POLICY_CALLS`允许应用程序管理呼叫策略。       |
| `String` | `MANAGE_DEVICE_POLICY_CAMERA`允许应用程序设置与限制用户使用或启用和禁用相机的能力相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_CAMERA_TOGGLE`允许应用程序管理与相机切换相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_CERTIFICATES`允许应用程序设置与证书相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_COMMON_CRITERIA_MODE`允许应用程序管理与通用标准模式相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_CONTENT_PROTECTION`允许应用程序管理与内容保护相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_DEBUGGING_FEATURES`允许应用程序管理调试功能策略。 |
| `String` | `MANAGE_DEVICE_POLICY_DEFAULT_SMS`允许应用程序设置与默认短信应用程序相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_DEVICE_IDENTIFIERS`允许应用程序管理与设备标识符相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_DISPLAY`允许应用程序设置与显示相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_FACTORY_RESET`允许应用程序设置与恢复出厂设置相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_FUN`允许应用程序设置与娱乐相关的政策。 |
| `String` | `MANAGE_DEVICE_POLICY_INPUT_METHODS`允许应用程序设置与输入法相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_INSTALL_UNKNOWN_SOURCES`允许应用程序管理从未知来源安装的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_KEEP_UNINSTALLED_PACKAGES`允许应用程序设置与保留未安装软件包相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_KEYGUARD`允许应用程序管理与键盘锁相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_LOCALE`允许应用程序设置与语言环境相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_LOCATION`允许应用程序设置与位置相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_LOCK`允许应用程序使用适当的跨用户权限锁定配置文件或设备。 |
| `String` | `MANAGE_DEVICE_POLICY_LOCK_CREDENTIALS`允许应用程序设置与锁定凭证相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_LOCK_TASK`允许应用程序管理锁定任务策略。 |
| `String` | `MANAGE_DEVICE_POLICY_MANAGED_SUBSCRIPTIONS`允许应用程序设置与管理员下载的订阅相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_METERED_DATA`允许应用程序管理与计量数据相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_MICROPHONE`允许应用程序设置与限制用户使用或启用和禁用麦克风的能力相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_MICROPHONE_TOGGLE`允许应用程序管理与麦克风切换相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_MOBILE_NETWORK`允许应用程序设置与移动网络相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_MODIFY_USERS`允许应用程序管理阻止用户修改用户的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_MTE`允许应用程序管理与内存标记扩展 (MTE) 相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_NEARBY_COMMUNICATION`允许应用程序设置与附近通信相关的策略（例如 Beam 和附近流媒体）。 |
| `String` | `MANAGE_DEVICE_POLICY_NETWORK_LOGGING`允许应用程序设置与网络日志相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_ORGANIZATION_IDENTITY`允许应用程序管理管理组织的身份。 |
| `String` | `MANAGE_DEVICE_POLICY_OVERRIDE_APN`允许应用程序设置与覆盖 APN 相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_PACKAGE_STATE`允许应用程序设置与隐藏和暂停包相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_PHYSICAL_MEDIA`允许应用程序设置与物理媒体相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_PRINTING`允许应用程序设置与打印相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_PRIVATE_DNS`允许应用程序设置与私有 DNS 相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_PROFILES`允许应用程序设置与配置文件相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_PROFILE_INTERACTION`允许应用程序设置与配置文件交互相关的策略（例如，不允许跨配置文件复制和粘贴）。 |
| `String` | `MANAGE_DEVICE_POLICY_PROXY`允许应用程序设置独立于网络的全局 HTTP 代理。 |
| `String` | `MANAGE_DEVICE_POLICY_QUERY_SYSTEM_UPDATES`允许应用程序查询系统更新。 |
| `String` | `MANAGE_DEVICE_POLICY_RESET_PASSWORD`允许应用程序强制对当前用户设置新的设备解锁密码或托管配置文件质询。 |
| `String` | `MANAGE_DEVICE_POLICY_RESTRICT_PRIVATE_DNS`允许应用程序设置限制用户配置私有 DNS 相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_RUNTIME_PERMISSIONS`允许应用程序设置包的运行时权限的授予状态。 |
| `String` | `MANAGE_DEVICE_POLICY_RUN_IN_BACKGROUND`允许应用程序设置与在后台运行的用户相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_SAFE_BOOT`允许应用程序管理安全启动策略。 |
| `String` | `MANAGE_DEVICE_POLICY_SCREEN_CAPTURE`允许应用程序设置与屏幕捕获相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_SCREEN_CONTENT`允许应用程序设置与屏幕内容使用相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_SECURITY_LOGGING`允许应用程序设置与安全日志相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_SETTINGS`允许应用程序设置与设置相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_SMS`允许应用程序设置与短信相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_STATUS_BAR`允许应用程序设置与状态栏相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_SUPPORT_MESSAGE`允许应用程序在用户操作受到活动策略影响时设置支持消息。 |
| `String` | `MANAGE_DEVICE_POLICY_SUSPEND_PERSONAL_APPS`允许应用程序设置与暂停个人应用程序相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_SYSTEM_APPS`允许应用程序管理与系统应用相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_SYSTEM_DIALOGS`允许应用程序设置与系统对话框相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_SYSTEM_UPDATES`允许应用程序设置与系统更新相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_TIME`允许应用程序管理与时间相关的设备策略。 |
| `String` | `MANAGE_DEVICE_POLICY_USB_DATA_SIGNALLING`允许应用程序设置与 USB 数据信号相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_USB_FILE_TRANSFER`允许应用程序设置与 USB 文件传输相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_USERS`允许应用程序设置与用户相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_VPN`允许应用程序设置与 VPN 相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_WALLPAPER`允许应用程序设置与壁纸相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_WIFI`允许应用程序设置与 Wifi 相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_WINDOWS`允许应用程序设置与窗口相关的策略。 |
| `String` | `MANAGE_DEVICE_POLICY_WIPE_DATA`允许应用程序管理与擦除数据相关的策略。 |
| `String` | `MANAGE_DOCUMENTS`允许应用程序管理对文档的访问，通常作为文档选择器的一部分。 |
| `String` | `MANAGE_EXTERNAL_STORAGE`允许应用程序广泛访问范围存储中的外部存储。 |
| `String` | `MANAGE_MEDIA`允许应用程序无需用户确认即可修改和删除此设备或任何连接的存储设备上的媒体文件。 |
| `String` | `MANAGE_ONGOING_CALLS`允许查询正在进行的通话详细信息并管理正在进行的通话保护级别：签名\|appop |
| `String` | `MANAGE_OWN_CALLS`允许调用应用程序通过自管理 `ConnectionService`API 来管理自己的调用。 |
| `String` | `MANAGE_WIFI_INTERFACES`允许应用程序在无法满足 Wi-Fi 接口请求（除非拆除一个或多个其他接口）时收到通知，并提供是否批准或拒绝该请求的决定。 |
| `String` | `MANAGE_WIFI_NETWORK_SELECTION`此权限用于让 OEM 授予其受信任的应用程序访问特权 Wi-Fi API 子集的权限，以提高 Wi-Fi 性能。 |
| `String` | `MASTER_CLEAR`不适用于第三方应用程序。                       |
| `String` | `MEDIA_CONTENT_CONTROL`允许应用程序了解正在播放的内容并控制其播放。 |
| `String` | `MEDIA_ROUTING_CONTROL`允许应用程序控制媒体应用程序的路由。  |
| `String` | `MODIFY_AUDIO_SETTINGS`允许应用程序修改全局音频设置。        |
| `String` | `MODIFY_PHONE_STATE`允许修改电话状态-开机、MMI等。           |
| `String` | `MOUNT_FORMAT_FILESYSTEMS`允许格式化可移动存储的文件系统。   |
| `String` | `MOUNT_UNMOUNT_FILESYSTEMS`允许安装和卸载可移动存储的文件系统。 |
| `String` | `NEARBY_WIFI_DEVICES`需要能够通过 Wi-Fi 进行广告宣传并连接到附近的设备。 |
| `String` | `NFC`允许应用程序通过 NFC 执行 I/O 操作。                    |
| `String` | `NFC_PREFERRED_PAYMENT_INFO`允许应用程序接收 NFC 首选支付服务信息。 |
| `String` | `NFC_TRANSACTION_EVENT`允许应用程序接收 NFC 交易事件。       |
| `String` | `OVERRIDE_WIFI_CONFIG`允许应用程序修改任何 wifi 配置，即使是由另一个应用程序创建的。 |
| `String` | `PACKAGE_USAGE_STATS`允许应用程序收集组件使用情况统计信息声明权限意味着使用 API 的意图，并且设备用户可以通过设置应用程序授予权限。 |
| `String` | `PERSISTENT_ACTIVITY`*此常量在 API 级别 15 中已弃用。此功能将来会被删除；请不要使用。允许应用程序使其活动持久化。* |
| `String` | `POST_NOTIFICATIONS`允许应用发布通知防护等级：危险           |
| `String` | `PROCESS_OUTGOING_CALLS`*此常量在 API 级别 29 中已弃用。应用程序应使用`CallRedirectionService`它来代替`Intent.ACTION_NEW_OUTGOING_CALL`广播。* |
| `String` | `PROVIDE_OWN_AUTOFILL_SUGGESTIONS`允许应用程序使用自动填充框架显示其建议。 |
| `String` | `PROVIDE_REMOTE_CREDENTIALS`允许应用程序能够从远程设备存储和检索凭据。 |
| `String` | `QUERY_ALL_PACKAGES`允许查询设备上的任何常规应用程序，无论清单声明如何。 |
| `String` | `READ_ASSISTANT_APP_SEARCH_DATA`允许应用程序查询 AppSearch 中 ASSISTANT 角色可见的全局数据。 |
| `String` | `READ_BASIC_PHONE_STATE`允许以非危险权限只读访问手机状态，包括蜂窝网络类型、软件版本等信息。 |
| `String` | `READ_CALENDAR`允许应用程序读取用户的日历数据。              |
| `String` | `READ_CALL_LOG`允许应用程序读取用户的通话记录。              |
| `String` | `READ_CONTACTS`允许应用程序读取用户的联系人数据。            |
| `String` | `READ_DROPBOX_DATA`允许应用程序访问 Dropbox 中的数据。       |
| `String` | `READ_EXTERNAL_STORAGE`允许应用程序从外部存储读取。          |
| `String` | `READ_HOME_APP_SEARCH_DATA`允许应用程序查询 AppSearch 中 HOME 角色可见的全局数据。 |
| `String` | `READ_INPUT_STATE`*此常量在 API 级别 16 中已被弃用。使用此权限的 API 已被删除。* |
| `String` | `READ_LOGS`允许应用程序读取低级系统日志文件。                |
| `String` | `READ_MEDIA_AUDIO`允许应用程序从外部存储器读取音频文件。     |
| `String` | `READ_MEDIA_IMAGES`允许应用程序从外部存储读取图像文件。      |
| `String` | `READ_MEDIA_VIDEO`允许应用程序从外部存储读取视频文件。       |
| `String` | `READ_MEDIA_VISUAL_USER_SELECTED`允许应用程序从用户通过权限提示照片选择器选择的外部存储中读取图像或视频文件。 |
| `String` | `READ_NEARBY_STREAMING_POLICY`允许应用程序读取附近的流媒体策略。 |
| `String` | `READ_PHONE_NUMBERS`允许读取设备的电话号码。                 |
| `String` | `READ_PHONE_STATE`允许只读访问手机状态，包括当前蜂窝网络信息、任何正在进行的通话的状态以及`PhoneAccount`设备上注册的任何 s 的列表。 |
| `String` | `READ_PRECISE_PHONE_STATE`允许只读访问精确的电话状态。       |
| `String` | `READ_SMS`允许应用程序阅读短信。                             |
| `String` | `READ_SYNC_SETTINGS`允许应用程序读取同步设置。               |
| `String` | `READ_SYNC_STATS`允许应用程序读取同步统计信息。              |
| `String` | `READ_VOICEMAIL`允许应用程序读取系统中的语音邮件。           |
| `String` | `REBOOT`需要能够重新启动设备。                               |
| `String` | `RECEIVE_BOOT_COMPLETED`允许应用程序接收 `Intent.ACTION_BOOT_COMPLETED`系统启动完成后广播的消息。 |
| `String` | `RECEIVE_MMS`允许应用程序监控传入的 MMS 消息。               |
| `String` | `RECEIVE_SMS`允许应用程序接收短信。                          |
| `String` | `RECEIVE_WAP_PUSH`允许应用程序接收 WAP 推送消息。            |
| `String` | `RECORD_AUDIO`允许应用程序录制音频。                         |
| `String` | `REORDER_TASKS`允许应用程序更改任务的 Z 顺序。               |
| `String` | `REQUEST_COMPANION_PROFILE_APP_STREAMING`允许应用程序请求与能够流式传输 Android 应用程序的虚拟显示器 ( `AssociationRequest.DEVICE_PROFILE_APP_STREAMING`)相关联`CompanionDeviceManager`。 |
| `String` | `REQUEST_COMPANION_PROFILE_AUTOMOTIVE_PROJECTION``AssociationRequest.DEVICE_PROFILE_AUTOMOTIVE_PROJECTION`允许应用程序请求与具有汽车投影功能（ ）的车辆主机关联`CompanionDeviceManager`。 |
| `String` | `REQUEST_COMPANION_PROFILE_COMPUTER`允许应用程序请求与计算机关联，以便与其他设备共享功能和/或数据，例如通知、照片和媒体（`AssociationRequest.DEVICE_PROFILE_COMPUTER`）`CompanionDeviceManager`。 |
| `String` | `REQUEST_COMPANION_PROFILE_GLASSES``CompanionDeviceManager` 允许应用通过“眼镜” 请求与设备关联防护等级： 正常 |
| `String` | `REQUEST_COMPANION_PROFILE_NEARBY_DEVICE_STREAMING`允许应用程序通过 请求将内容从 Android 主机传输到附近的设备 ( `AssociationRequest.DEVICE_PROFILE_NEARBY_DEVICE_STREAMING`) `CompanionDeviceManager`。 |
| `String` | `REQUEST_COMPANION_PROFILE_WATCH``CompanionDeviceManager` 允许应用程序通过“手表” 请求与设备关联防护等级： 正常 |
| `String` | `REQUEST_COMPANION_RUN_IN_BACKGROUND`允许配套应用在后台运行。 |
| `String` | `REQUEST_COMPANION_SELF_MANAGED`允许应用程序创建“自我管理”关联。 |
| `String` | `REQUEST_COMPANION_START_FOREGROUND_SERVICES_FROM_BACKGROUND`允许配套应用从后台启动前台服务。 |
| `String` | `REQUEST_COMPANION_USE_DATA_IN_BACKGROUND`允许配套应用在后台使用数据。 |
| `String` | `REQUEST_DELETE_PACKAGES`允许应用程序请求删除包。            |
| `String` | `REQUEST_IGNORE_BATTERY_OPTIMIZATIONS`应用程序必须拥有才能使用的权限 `Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS`。 |
| `String` | `REQUEST_INSTALL_PACKAGES`允许应用程序请求安装程序包。       |
| `String` | `REQUEST_OBSERVE_COMPANION_DEVICE_PRESENCE`允许应用程序订阅与其关联配套设备的状态变化有关的通知 |
| `String` | `REQUEST_PASSWORD_COMPLEXITY`允许应用程序请求屏幕锁复杂性并提示用户将屏幕锁更新到特定的复杂性级别。 |
| `String` | `RESTART_PACKAGES`*此常量在 API 级别 15 中已被弃用。该`ActivityManager.restartPackage(String)` API 不再受支持。* |
| `String` | `RUN_USER_INITIATED_JOBS`允许应用程序使用用户启动的作业 API。 |
| `String` | `SCHEDULE_EXACT_ALARM`允许应用程序使用精确的警报 API。       |
| `String` | `SEND_RESPOND_VIA_MESSAGE`允许应用程序（电话）向其他应用程序发送请求以处理来电期间通过消息响应的操作。 |
| `String` | `SEND_SMS`允许应用程序发送短信。                             |
| `String` | `SET_ALARM`允许应用程序广播 Intent，为用户设置闹钟。         |
| `String` | `SET_ALWAYS_FINISH`允许应用程序控制活动在进入后台时是否立即完成。 |
| `String` | `SET_ANIMATION_SCALE`修改全局动画缩放因子。                  |
| `String` | `SET_BIOMETRIC_DIALOG_ADVANCED`允许应用程序在 BiometricDialog（SystemUI）上设置高级功能，包括徽标、徽标说明和带有更多选项按钮的内容视图。 |
| `String` | `SET_DEBUG_APP`配置应用程序以进行调试。                      |
| `String` | `SET_PREFERRED_APPLICATIONS`*此常量在 API 级别 15 中已被弃用。不再有用，请参阅 `PackageManager.addPackageToPreferred(String)` 详情。* |
| `String` | `SET_PROCESS_LIMIT`允许应用程序设置可运行的最大应用程序进程数（不需要）。 |
| `String` | `SET_TIME`允许应用程序直接设置系统时间。                     |
| `String` | `SET_TIME_ZONE`允许应用程序直接设置系统时区。                |
| `String` | `SET_WALLPAPER`允许应用程序设置壁纸。                        |
| `String` | `SET_WALLPAPER_HINTS`允许应用程序设置壁纸提示。              |
| `String` | `SIGNAL_PERSISTENT_PROCESSES`允许应用程序请求向所有持久进程发送信号。 |
| `String` | `SMS_FINANCIAL_TRANSACTIONS`*此常量在 API 级别 31 中已被弃用。使用此权限的 API 不再起作用。* |
| `String` | `START_FOREGROUND_SERVICES_FROM_BACKGROUND`允许应用程序随时从后台启动前台服务。 |
| `String` | `START_VIEW_APP_FEATURES`允许持有者以应用程序功能列表启动屏幕。 |
| `String` | `START_VIEW_PERMISSION_USAGE`允许持有者启动应用程序的权限使用屏幕。 |
| `String` | `STATUS_BAR`允许应用程序打开、关闭或禁用状态栏及其图标。     |
| `String` | `SUBSCRIBE_TO_KEYGUARD_LOCKED_STATE`允许应用程序订阅键盘锁锁定（即显示）状态。 |
| `String` | `SYSTEM_ALERT_WINDOW`允许应用使用类型创建窗口 `WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY`，显示在所有其他应用之上。 |
| `String` | `TRANSMIT_IR`如果可用，允许使用设备的红外发射器。            |
| `String` | `TURN_SCREEN_ON`允许应用程序打开屏幕，例如使用 `PowerManager.ACQUIRE_CAUSES_WAKEUP`。 |
| `String` | `UNINSTALL_SHORTCUT`**请勿在您的应用中使用此权限。**         |
| `String` | `UPDATE_DEVICE_STATS`允许应用程序更新设备统计信息。          |
| `String` | `UPDATE_PACKAGES_WITHOUT_USER_ACTION`允许应用程序通过该方式指示 `PackageInstaller.SessionParams.setRequireUserAction(int)` 应用程序更新不需要用户操作。 |
| `String` | `USE_BIOMETRIC`允许应用程序使用设备支持的生物识别模式。      |
| `String` | `USE_EXACT_ALARM`允许应用程序使用精确的闹钟，就像使用一样，`SCHEDULE_EXACT_ALARM`但无需向用户请求此权限。 |
| `String` | `USE_FINGERPRINT`*此常量在 API 级别 28 中已弃用。应用程序应`USE_BIOMETRIC`请求* |
| `String` | `USE_FULL_SCREEN_INTENT``Build.VERSION_CODES.Q`对于想要使用 的 应用程序而言是必需的`notification full screen intents`。 |
| `String` | `USE_ICC_AUTH_WITH_DEVICE_IDENTIFIER`允许读取设备标识符并使用基于 ICC 的身份验证，如 EAP-AKA。 |
| `String` | `USE_SIP`允许应用程序使用 SIP 服务。                         |
| `String` | `UWB_RANGING`需要能够测量使用超宽带的设备。                  |
| `String` | `VIBRATE`允许访问振动器。                                    |
| `String` | `WAKE_LOCK`允许使用 PowerManager WakeLocks 防止处理器进入睡眠状态或屏幕变暗。 |
| `String` | `WRITE_APN_SETTINGS`允许应用程序写入 apn 设置并读取现有 apn 设置的敏感字段，如用户和密码。 |
| `String` | `WRITE_CALENDAR`允许应用程序写入用户的日历数据。             |
| `String` | `WRITE_CALL_LOG`允许应用程序写入和读取用户的通话记录数据。   |
| `String` | `WRITE_CONTACTS`允许应用程序写入用户的联系人数据。           |
| `String` | `WRITE_EXTERNAL_STORAGE`允许应用程序写入外部存储。           |
| `String` | `WRITE_GSERVICES`允许应用程序修改Google服务地图。            |
| `String` | `WRITE_SECURE_SETTINGS`允许应用程序读取或写入安全系统设置。  |
| `String` | `WRITE_SETTINGS`允许应用程序读取或写入系统设置。             |
| `String` | `WRITE_SYNC_SETTINGS`允许应用程序写入同步设置。              |
| `String` | `WRITE_VOICEMAIL`允许应用程序修改和删除系统中现有的语音邮件。 |