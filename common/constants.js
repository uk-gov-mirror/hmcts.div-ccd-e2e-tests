const reasonsForDivorce = {
    ADULTERY: 'Adultery',
    BEHAVIOUR: 'Behaviour',
    DESERTION: 'Desertion',
    SEPFIVEYRS: 'separation-5-years',
    SEPTWOYRS: 'separation-2-years'
}

const signOut = 'Sign out';

const states = {
    SUBMITTTED: 'Submitted',
    ISSUED: 'Issued',
    AOS_AWAITING: 'AosAwaiting',
    AOS_STARTED: 'AosStarted',
    AWAITING_ANSWER: 'AosSubmittedAwaitingAnswer',
    AWAITING_DN: 'AwaitingDecreeNisi',
    AWAITING_LA: 'AwaitingLegalAdvisorReferral',
    AWAITING_CONSIDERATION: 'AwaitingConsideration',
    AWAITING_PRONOUNCEMENT: 'AwaitingPronouncement',
    AWAITING_DA: 'AwaitingDecreeAbsolute',
    DIVORCE_GRANTED: 'DivorceGranted'
}

module.exports = {
    reasonsForDivorce,
    states,
    signOut
};