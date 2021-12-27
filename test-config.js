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