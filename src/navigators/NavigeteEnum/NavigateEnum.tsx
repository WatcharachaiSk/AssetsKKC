import AccountStack from "../Stack/AccountStack/AccountStack";

export enum AppScreens {
    LoginPage = 'LoginPage',
    DetailfromList = 'DetailfromList',
    DetailAfterScan = 'DetailAfterScan',
    ListPage = 'ListPage',
    CategoryPage = 'CategoryPage',
    Scanner = 'Scanner',
    MainStack = 'MainStack',
    NavBottomTab = 'NavBottomTab',
    LoginStack = 'LoginStack',
    CategoryStack = 'CategoryStack',
    BottomTabStack = 'BottomTabStack',
    DetailfromListStack = 'DetailfromListStack',
    ListPageStack = 'ListPageStack',
    AccountStack = 'AccountStack',
    AppStack = 'AppStack',
    ScannerStack = 'ScannerStack',

    NavStack = 'NavStack',
    NavStacknotToken = 'NavStacknotToken',
    Navigation = "Navigation",
    AccountUser = 'AccountUser'

}

export type StackList = {
    MainStack: undefined;
    LoginPage: undefined;
    DetailfromList: undefined;
    DetailAfterScan: undefined;
    ListPage: undefined;
    CategoryPage: undefined;
    Scanner: undefined;
    ListPageStack: undefined;

    NavBottomTab: undefined;
    LoginStack: undefined;
    CategoryStack: undefined;
    BottomTabStack: undefined;
    DetailfromListStack: undefined;
    AccountStack: undefined;
    AppStack: undefined;
    ScannerStack: undefined;
    NavStack: undefined;
    AccountUser: undefined;
}