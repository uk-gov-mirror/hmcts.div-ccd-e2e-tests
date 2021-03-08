const { createCaseInCcd, updateCaseInCcd } = require('../helpers/utils');
const {states, events } = require('../common/constants');
const assert = require('assert');
const testconfig = require('./config');

Feature('E2E Baseline tests for core functionality');


Scenario.only('AC 1 should allow petitioner to create an adultery case, claims costs and pay with credit card', async function (I) {
  await I.amOnHomePage();
  await I.login(testconfig.TestEnvProfUser, testconfig.TestEnvProfPassword);
  await I.languagePreferenceSelection();
  await I.stateThatMarriageHasBrokenDown();
  await I.haveAnAddressForPartner();
  await I.haveMarriageCertificate();
  await I.continueSettlingFinances();
  await I.dontNeedHelpWithFees();
  await I.amDivorcingMyWife();
  await I.gotMarriedTwoYearsAgo();
  await I.gotMarriedInTheUk();
  await I.stateBothPartiesAreMainlyInEnglandAndWales();
  await I.amConfidentSelectionIsRight();
  await I.dontNeedMyAddressKeptPrivate();
  await I.enterBothPartiesNames();
  await I.enterNamesDisplayedOnTheMarriageCertificate();
  await I.haveNotChangedMyNameSinceIGotMarried();
  await I.agreeToEmailNotifications();
  await I.canNotEnterUkPostcode();
  await I.enterHomeAddressManually();
  await I.wantMyPaperDeliverToThisAddress();
  await I.stateThatWeLiveAtTheSameAddress();
  await I.wantTheirPapersSentToThisAddress();
  await I.selectAdulteryForTheReasonForDivorce();
  await I.doNotWantToNameThePersonMyPartnerCommittedAdulteryWith();
  await I.doNotKnowWhenTheAdulteryTookPlace();
  await I.enterMyAccountOfTheAdultery();
  await I.stateInformationHasCameFromPartner();
  await I.haveNoOtherCourtCasesRelatedToMarriagePropertyOrChildren();
  await I.applyForFinancialOrderForMyself();
  await I.continueToApplyForAFinancialOrder();
  await I.applyToClaimDivorceCosts();
  await I.continueWithoutUploadingDocuments();
  // await I.doNotWantToAnswerAdditionalQuestions();
  await I.checkMyAnswers();
}).retry(testconfig.TestRetryScenarios);