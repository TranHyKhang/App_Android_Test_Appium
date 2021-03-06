exports.config = {
    logLevel: 'info',
    framwork: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    maxInstances: 1,
    runner: 'local',
    port: 4723,
    path: '/wd/hub',
    host: '127.0.0.1',
    sync: true,
    specs: [
        //Login & Sign up
        // './src/test_scripts/account/TC_001_Login.js',
        // './src/test_scripts/account/TC_002_Login.js',
        // './src/test_scripts/account/TC_003_Login.js',
        // './src/test_scripts/account/TC_004_Login.js',
        // './src/test_scripts/account/TC_005_Login.js',
        // './src/test_scripts/account/TC_006_Login.js',
        // './src/test_scripts/account/TC_007_SignUp.js',
        // './src/test_scripts/account/TC_008_SignUp.js',
        // './src/test_scripts/account/TC_009_SignUp.js',
        // './src/test_scripts/account/TC_010_SignUp.js',
        // './src/test_scripts/account/TC_011_SignUp.js',
        // './src/test_scripts/account/TC_012_SignUp.js',
        // './src/test_scripts/account/TC_013_SignUp.js',
        // './src/test_scripts/account/TC_014_SignUp.js',
        // './src/test_scripts/account/TC_015_SignUp.js',
        // './src/test_scripts/account/TC_016_SignUp.js',
        // './src/test_scripts/account/TC_017_SignUp.js',

        //Bottom tab
        // './src/test_scripts/BottomTab/TC_001_BottomTab.js',
        // './src/test_scripts/BottomTab/TC_002_BottomTab.js',
        // './src/test_scripts/BottomTab/TC_003_BottomTab.js',
        // './src/test_scripts/BottomTab/TC_004_BottomTab.js',
        // './src/test_scripts/BottomTab/TC_005_BottomTab.js',

        //HomeScreen
        // './src/test_scripts/HomeScreen/TC_001_HomeScreen.js',
        // './src/test_scripts/HomeScreen/TC_002_HomeScreen.js',
        // './src/test_scripts/HomeScreen/TC_003_HomeScreen.js',
        // './src/test_scripts/HomeScreen/TC_004_HomeScreen.js',
        // './src/test_scripts/HomeScreen/TC_005_HomeScreen.js',
        // './src/test_scripts/HomeScreen/TC_006_HomeScreen.js',
        // './src/test_scripts/HomeScreen/TC_007_HomeScreen.js',
        // './src/test_scripts/HomeScreen/TC_008_HomeScreen.js',

        //Detail Tour Screen
        // './src/test_scripts/DetailTour/TC_001_DetailTour.js',
        // './src/test_scripts/DetailTour/TC_002_DetailTour.js',
        // './src/test_scripts/DetailTour/TC_003_DetailTour.js',
        // './src/test_scripts/DetailTour/TC_004_DetailTour.js',
        // './src/test_scripts/DetailTour/TC_005_DetailTour.js',
        // './src/test_scripts/DetailTour/TC_006_DetailTour.js',
        // './src/test_scripts/DetailTour/TC_007_DetailTour.js',
        // './src/test_scripts/DetailTour/TC_008_DetailTour.js',
        // './src/test_scripts/DetailTour/TC_009_DetailTour.js',
        // './src/test_scripts/DetailTour/TC_010_DetailTour.js',
        // './src/test_scripts/DetailTour/TC_011_DetailTour.js',
        // './src/test_scripts/DetailTour/TC_012_DetailTour.js',

        //OrderScreen
        // './src/test_scripts/OrderScreen/TC_001_OrderScreen.js',
        // './src/test_scripts/OrderScreen/TC_002_OrderScreen.js',
        // './src/test_scripts/OrderScreen/TC_003_OrderScreen.js',
        // './src/test_scripts/OrderScreen/TC_004_OrderScreen.js',
        // './src/test_scripts/OrderScreen/TC_005_OrderScreen.js',
        // './src/test_scripts/OrderScreen/TC_006_OrderScreen.js',
        // './src/test_scripts/OrderScreen/TC_007_OrderScreen.js', //P
        // './src/test_scripts/OrderScreen/TC_008_OrderScreen.js', //P
        // './src/test_scripts/OrderScreen/TC_009_OrderScreen.js', //P
        // './src/test_scripts/OrderScreen/TC_010_OrderScreen.js', //P
        // './src/test_scripts/OrderScreen/TC_011_OrderScreen.js', //P
        // './src/test_scripts/OrderScreen/TC_012_OrderScreen.js', //P
        // './src/test_scripts/OrderScreen/TC_013_OrderScreen.js', //P
        // './src/test_scripts/OrderScreen/TC_014_OrderScreen.js', //P
        // './src/test_scripts/OrderScreen/TC_015_OrderScreen.js', //P
        // './src/test_scripts/OrderScreen/TC_016_OrderScreen.js', //p
        // './src/test_scripts/OrderScreen/TC_017_OrderScreen.js', //P
        // './src/test_scripts/OrderScreen/TC_018_OrderScreen.js', //P 60
        // './src/test_scripts/OrderScreen/TC_019_OrderScreen.js', //P

        //VoucherScreen
        // './src/test_scripts/VoucherScreen/TC_001_VoucherScreen.js', //P
        // './src/test_scripts/VoucherScreen/TC_002_VoucherScreen.js',
        // './src/test_scripts/VoucherScreen/TC_003_VoucherScreen.js',

        //TourScreen
        // './src/test_scripts/TourScreen/TC_001_TourScreen.js',
        // './src/test_scripts/TourScreen/TC_002_TourScreen.js',

        //NewsScreen
        // './src/test_scripts/NewsScreen/TC_001_NewsScreen.js',
        // './src/test_scripts/NewsScreen/TC_002_NewsScreen.js',

        //ProfileScreen
        // './src/test_scripts/ProfileScreen/TC_001_ProfileScreen.js',
        // './src/test_scripts/ProfileScreen/TC_002_ProfileScreen.js',
        // './src/test_scripts/ProfileScreen/TC_003_ProfileScreen.js',
        // './src/test_scripts/ProfileScreen/TC_004_ProfileScreen.js',
        // './src/test_scripts/ProfileScreen/TC_005_ProfileScreen.js',
        // './src/test_scripts/ProfileScreen/TC_006_ProfileScreen.js',
        // './src/test_scripts/ProfileScreen/TC_007_ProfileScreen.js',

        //EditProfileScreen
        // './src/test_scripts/EditProfileScreen/TC_001_EditProfileScreen.js',
        // './src/test_scripts/EditProfileScreen/TC_002_EditProfileScreen.js',
        // './src/test_scripts/EditProfileScreen/TC_003_EditProfileScreen.js',
        // './src/test_scripts/EditProfileScreen/TC_004_EditProfileScreen.js',
        // './src/test_scripts/EditProfileScreen/TC_005_EditProfileScreen.js',
        // './src/test_scripts/EditProfileScreen/TC_006_EditProfileScreen.js',
        // './src/test_scripts/EditProfileScreen/TC_007_EditProfileScreen.js',
        // './src/test_scripts/EditProfileScreen/TC_008_EditProfileScreen.js',

        //LovedScreen
        // './src/test_scripts/LovedScreen/TC_001_LovedScreen.js',
        // './src/test_scripts/LovedScreen/TC_002_LovedScreen.js',
        // './src/test_scripts/LovedScreen/TC_003_LovedScreen.js',
        // './src/test_scripts/LovedScreen/TC_004_LovedScreen.js',

        //HistoryScreen
        // './src/test_scripts/HistoryScreen/TC_001_HistoryScreen.js',
        // './src/test_scripts/HistoryScreen/TC_002_HistoryScreen.js', // 90
        // './src/test_scripts/HistoryScreen/TC_003_HistoryScreen.js',
        // './src/test_scripts/HistoryScreen/TC_004_HistoryScreen.js',
        // './src/test_scripts/HistoryScreen/TC_005_HistoryScreen.js',

        //LanguageScreen
        // './src/test_scripts/LanguageScreen/TC_001_LanguageScreen.js',
        // './src/test_scripts/LanguageScreen/TC_002_LanguageScreen.js',
        // './src/test_scripts/LanguageScreen/TC_003_LanguageScreen.js',
        // './src/test_scripts/LanguageScreen/TC_004_LanguageScreen.js',

        //RulesScreen
        // './src/test_scripts/RulesScreen/TC_001_RulesScreen.js',
        // './src/test_scripts/RulesScreen/TC_002_RulesScreen.js',

        //ContactScreen
        // './src/test_scripts/ContactScreen/TC_001_ContactScreen.js',
        // './src/test_scripts/ContactScreen/TC_002_ContactScreen.js',


    ],
    capabilities: [
        {
            platformName: "Android",
            platformVersion: "11",
            deviceName: "sdk_gphone_x86",
            appPackage: "com.example.apptourdulich",
            appActivity: "com.example.apptourdulich.SignLoginActivity",
            udid: "emulator-5554"
        }
    ]
}