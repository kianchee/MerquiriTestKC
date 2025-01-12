export const Images = {
    home: require('../../images/Home.png') as any,
    note: require('../../images/Note.png') as any,
    summary: require('../../images/Summary.png') as any,
    setting: require('../../images/Setting.png') as any,
    back: require('../../images/Back.png') as any,
    summaryNotFocus: require('../../images/SummaryNotFocus.png') as any,
    homeNotFocus: require('../../images/HomeNotFocus.png') as any,
    lifeIcon: require('../../images/Life.png') as any,
    recentIcon: require('../../images/Recent.png') as any,
    healthIcon: require('../../images/Health.png') as any,
    redArrowIcon: require('../../images/Arrow.png') as any,
    workIcon: require('../../images/Work.png') as any,
    aboutUsIcon: require('../../images/AboutUs.png') as any,
    privacyPolicyIcon: require('../../images/PrivacyPolicy.png') as any,
    userAgreementIcon: require('../../images/UserAgreement.png') as any,
    onlineCustomerIcon: require('../../images/OnlineCustomer.png') as any,
    summaryRobotIcon: require('../../images/SummaryRobot.png') as any,
    lifeSummaryIcon: require('../../images/LifeSummary.png') as any,
    healthSummaryIcon: require('../../images/HealthSummary.png') as any,
    workSummaryIcon: require('../../images/WorkSummary.png') as any,
  } as const;
  type Images = typeof Images;
  export default Images;