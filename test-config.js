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