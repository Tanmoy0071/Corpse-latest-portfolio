'use client';
import { useNav } from '@/context/NavContext';
import HomePage from '@/components/pages/HomePage';
import CompetePage from '@/components/pages/CompetePage';
import RosterPage from '@/components/pages/RosterPage';
import AboutPage from '@/components/pages/AboutPage';
import PrivacyPage from '@/components/pages/PrivacyPage';
import TermsPage from '@/components/pages/TermsPage';
import FairPlayPage from '@/components/pages/FairPlayPage';
import ContactPage from '@/components/pages/ContactPage';
import AccountManagementPage from '@/components/pages/AccountManagementPage';
import AccountSuspensionPage from '@/components/pages/AccountSuspensionPage';
import ArenaTermsPage from '@/components/pages/ArenaTermsPage';
import GuildPolicyPage from '@/components/pages/GuildPolicyPage';
import IpCopyrightPage from '@/components/pages/IpCopyrightPage';
import KycPolicyPage from '@/components/pages/KycPolicyPage';
import SignoutPolicyPage from '@/components/pages/SignoutPolicyPage';
import TransactionPolicyPage from '@/components/pages/TransactionPolicyPage';

export default function Page() {
  const { currentPage } = useNav();

  return (
    <>
      {currentPage === 'home'                && <HomePage />}
      {currentPage === 'compete'             && <CompetePage />}
      {currentPage === 'roster'              && <RosterPage />}
      {currentPage === 'about'               && <AboutPage />}
      {currentPage === 'privacy'             && <PrivacyPage />}
      {currentPage === 'terms'               && <TermsPage />}
      {currentPage === 'fairplay'            && <FairPlayPage />}
      {currentPage === 'contact'             && <ContactPage />}
      {currentPage === 'account-management'  && <AccountManagementPage />}
      {currentPage === 'account-suspension'  && <AccountSuspensionPage />}
      {currentPage === 'arena-terms'         && <ArenaTermsPage />}
      {currentPage === 'guild-policy'        && <GuildPolicyPage />}
      {currentPage === 'ip-copyright'        && <IpCopyrightPage />}
      {currentPage === 'kyc-policy'          && <KycPolicyPage />}
      {currentPage === 'signout-policy'      && <SignoutPolicyPage />}
      {currentPage === 'transaction-policy'  && <TransactionPolicyPage />}
    </>
  );
}
