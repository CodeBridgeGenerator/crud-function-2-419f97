import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import NoMatch from './NoMatch';

import LoginPage from '../components/LoginPage/LoginPage';
import SignUpPage from '../components/LoginPage/SignUpPage';
import Account from '../components/Account/Account';
import Dashboard from '../components/Dashboard/Dashboard';
import WhatToDoPage from '../components/WhatTodo';

import UsersPage from "../components/UsersPage/UsersPage";
import SingleUsersPage from "../components/UsersPage/SingleUsersPage";
import UserProjectLayoutPage from "../components/UsersPage/UserProjectLayoutPage";
import UserProfilesPage from "../components/UserProfilesPage/UserProfilesPage";
import SingleUserProfilesPage from "../components/UserProfilesPage/SingleUserProfilesPage";
import UserProfileProjectLayoutPage from "../components/UserProfilesPage/UserProfileProjectLayoutPage";
import PositionRoleDepartmentPage from "../components/PositionRoleDepartmentPage/PositionRoleDepartmentPage";
import SinglePositionRoleDepartmentPage from "../components/PositionRoleDepartmentPage/SinglePositionRoleDepartmentPage";
import PositionRoleDepartmentProjectLayoutPage from "../components/PositionRoleDepartmentPage/PositionRoleDepartmentProjectLayoutPage";
import InvitationsPage from "../components/InvitationsPage/InvitationsPage";
import SingleInvitationsPage from "../components/InvitationsPage/SingleInvitationsPage";
import InvitationProjectLayoutPage from "../components/InvitationsPage/InvitationProjectLayoutPage";
import RolesPage from "../components/RolesPage/RolesPage";
import SingleRolesPage from "../components/RolesPage/SingleRolesPage";
import RoleProjectLayoutPage from "../components/RolesPage/RoleProjectLayoutPage";
import RefPositionsPage from "../components/RefPositionsPage/RefPositionsPage";
import SingleRefPositionsPage from "../components/RefPositionsPage/SingleRefPositionsPage";
import RefPositionProjectLayoutPage from "../components/RefPositionsPage/RefPositionProjectLayoutPage";
import ServicePermissionsPage from "../components/ServicePermissionsPage/ServicePermissionsPage";
import SingleServicePermissionsPage from "../components/ServicePermissionsPage/SingleServicePermissionsPage";
import ServicePermissionProjectLayoutPage from "../components/ServicePermissionsPage/ServicePermissionProjectLayoutPage";
import FieldPermissionsPage from "../components/FieldPermissionsPage/FieldPermissionsPage";
import SingleFieldPermissionsPage from "../components/FieldPermissionsPage/SingleFieldPermissionsPage";
import FieldPermissionProjectLayoutPage from "../components/FieldPermissionsPage/FieldPermissionProjectLayoutPage";
import ServiceMetaPage from "../components/ServiceMetaPage/ServiceMetaPage";
import SingleServiceMetaPage from "../components/ServiceMetaPage/SingleServiceMetaPage";
import ServiceMetaProjectLayoutPage from "../components/ServiceMetaPage/ServiceMetaProjectLayoutPage";
import FieldMetaPage from "../components/FieldMetaPage/FieldMetaPage";
import SingleFieldMetaPage from "../components/FieldMetaPage/SingleFieldMetaPage";
import FieldMetaProjectLayoutPage from "../components/FieldMetaPage/FieldMetaProjectLayoutPage";
import MobileNumbersPage from "../components/MobileNumbersPage/MobileNumbersPage";
import SingleMobileNumbersPage from "../components/MobileNumbersPage/SingleMobileNumbersPage";
import MobileNumberProjectLayoutPage from "../components/MobileNumbersPage/MobileNumberProjectLayoutPage";
import MobileDevicesPage from "../components/MobileDevicesPage/MobileDevicesPage";
import SingleMobileDevicesPage from "../components/MobileDevicesPage/SingleMobileDevicesPage";
import MobileDeviceProjectLayoutPage from "../components/MobileDevicesPage/MobileDeviceProjectLayoutPage";
import PreferencesPage from "../components/PreferencesPage/PreferencesPage";
import SinglePreferencesPage from "../components/PreferencesPage/SinglePreferencesPage";
import PreferenceProjectLayoutPage from "../components/PreferencesPage/PreferenceProjectLayoutPage";
import IpLoginAccessPage from "../components/IpLoginAccessPage/IpLoginAccessPage";
import SingleIpLoginAccessPage from "../components/IpLoginAccessPage/SingleIpLoginAccessPage";
import IpLoginAccessProjectLayoutPage from "../components/IpLoginAccessPage/IpLoginAccessProjectLayoutPage";
import ProfileStatusPage from "../components/ProfileStatusPage/ProfileStatusPage";
import SingleProfileStatusPage from "../components/ProfileStatusPage/SingleProfileStatusPage";
import ProfileStatusProjectLayoutPage from "../components/ProfileStatusPage/ProfileStatusProjectLayoutPage";
import EmailLogPage from "../components/EmailLogPage/EmailLogPage";
import SingleEmailLogPage from "../components/EmailLogPage/SingleEmailLogPage";
import EmailLogProjectLayoutPage from "../components/EmailLogPage/EmailLogProjectLayoutPage";
import AddressesPage from "../components/AddressesPage/AddressesPage";
import SingleAddressesPage from "../components/AddressesPage/SingleAddressesPage";
import AddressProjectLayoutPage from "../components/AddressesPage/AddressProjectLayoutPage";
import CompaniesPage from "../components/CompaniesPage/CompaniesPage";
import SingleCompaniesPage from "../components/CompaniesPage/SingleCompaniesPage";
import CompanyProjectLayoutPage from "../components/CompaniesPage/CompanyProjectLayoutPage";
import UserCompaniesPage from "../components/UserCompaniesPage/UserCompaniesPage";
import SingleUserCompaniesPage from "../components/UserCompaniesPage/SingleUserCompaniesPage";
import UserCompanyProjectLayoutPage from "../components/UserCompaniesPage/UserCompanyProjectLayoutPage";
import BranchesPage from "../components/BranchesPage/BranchesPage";
import SingleBranchesPage from "../components/BranchesPage/SingleBranchesPage";
import BranchProjectLayoutPage from "../components/BranchesPage/BranchProjectLayoutPage";
import DepartmentsPage from "../components/DepartmentsPage/DepartmentsPage";
import SingleDepartmentsPage from "../components/DepartmentsPage/SingleDepartmentsPage";
import DepartmentProjectLayoutPage from "../components/DepartmentsPage/DepartmentProjectLayoutPage";
import SectionsPage from "../components/SectionsPage/SectionsPage";
import SingleSectionsPage from "../components/SectionsPage/SingleSectionsPage";
import SectionProjectLayoutPage from "../components/SectionsPage/SectionProjectLayoutPage";
import TeamsPage from "../components/TeamsPage/TeamsPage";
import SingleTeamsPage from "../components/TeamsPage/SingleTeamsPage";
import TeamProjectLayoutPage from "../components/TeamsPage/TeamProjectLayoutPage";
import PhonesPage from "../components/PhonesPage/PhonesPage";
import SinglePhonesPage from "../components/PhonesPage/SinglePhonesPage";
import PhoneProjectLayoutPage from "../components/PhonesPage/PhoneProjectLayoutPage";
import RecentActivitiesPage from "../components/RecentActivitiesPage/RecentActivitiesPage";
import SingleRecentActivitiesPage from "../components/RecentActivitiesPage/SingleRecentActivitiesPage";
// ~cb-add-import~

const MyRouter = () => {
    return (
        <Routes>
            <Route path="" exact element={<Dashboard />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/signup" exact element={<SignUpPage />} />

            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
                <Route path="/account" exact element={<Account />} />
                    <Route path="/users" exact element={<UsersPage />} />
                    <Route path="/users/:singleUsersId" exact element={<UserProjectLayoutPage />} />
                    <Route path="/users/:singleUsersId/single" exact element={<SingleUsersPage />} />
                    <Route path="/userProfiles" exact element={<UserProfilesPage />} />
                    <Route path="/positionRoleDepartment" exact element={<PositionRoleDepartmentPage />} />
                    <Route path="/invitations" exact element={<InvitationsPage />} />
                    <Route path="/invitations/:singleInvitationsId" exact element={<InvitationProjectLayoutPage />} />
                    <Route path="/invitations/:singleInvitationsId/single" exact element={<SingleInvitationsPage />} />
                    <Route path="/roles" exact element={<RolesPage />} />
                    <Route path="/roles/:singleRolesId" exact element={<RoleProjectLayoutPage />} />
                    <Route path="/roles/:singleRolesId/single" exact element={<SingleRolesPage />} />
                    <Route path="/refPositions" exact element={<RefPositionsPage />} />
                    <Route path="/servicePermissions" exact element={<ServicePermissionsPage />} />
                    <Route path="/fieldPermissions" exact element={<FieldPermissionsPage />} />
                    <Route path="/serviceMeta" exact element={<ServiceMetaPage />} />
                    <Route path="/serviceMeta/:singleServiceMetaId" exact element={<ServiceMetaProjectLayoutPage />} />
                    <Route path="/serviceMeta/:singleServiceMetaId/single" exact element={<SingleServiceMetaPage />} />
                    <Route path="/fieldMeta" exact element={<FieldMetaPage />} />
                    <Route path="/fieldMeta/:singleFieldMetaId" exact element={<FieldMetaProjectLayoutPage />} />
                    <Route path="/fieldMeta/:singleFieldMetaId/single" exact element={<SingleFieldMetaPage />} />
                    <Route path="/mobileNumbers" exact element={<MobileNumbersPage />} />
                    <Route path="/mobileDevices" exact element={<MobileDevicesPage />} />
                    <Route path="/preferences" exact element={<PreferencesPage />} />
                    <Route path="/ipLoginAccess" exact element={<IpLoginAccessPage />} />
                    <Route path="/profileStatus" exact element={<ProfileStatusPage />} />
                    <Route path="/profileStatus/:singleProfileStatusId" exact element={<ProfileStatusProjectLayoutPage />} />
                    <Route path="/profileStatus/:singleProfileStatusId/single" exact element={<SingleProfileStatusPage />} />
                    <Route path="/emailLog" exact element={<EmailLogPage />} />
                    <Route path="/addresses" exact element={<AddressesPage />} />
                    <Route path="/companies" exact element={<CompaniesPage />} />
                    <Route path="/companies/:singleCompaniesId" exact element={<CompanyProjectLayoutPage />} />
                    <Route path="/companies/:singleCompaniesId/single" exact element={<SingleCompaniesPage />} />
                    <Route path="/userCompanies" exact element={<UserCompaniesPage />} />
                    <Route path="/branches" exact element={<BranchesPage />} />
                    <Route path="/departments" exact element={<DepartmentsPage />} />
                    <Route path="/sections" exact element={<SectionsPage />} />
                    <Route path="/teams" exact element={<TeamsPage />} />
                    <Route path="/phones" exact element={<PhonesPage />} />
                    <Route path="/phones/:singlePhonesId" exact element={<PhoneProjectLayoutPage />} />
                    <Route path="/phones/:singlePhonesId/single" exact element={<SinglePhonesPage />} />
                    <Route path="/recentActivities" exact element={<RecentActivitiesPage />} />
                    <Route path="/recentActivities/:singleRecentActivitiesId" exact element={<SingleRecentActivitiesPage />} />
                {/* ~cb-add-protected-route~ */}
            </Route>
            {/* ~cb-add-route~ */}

            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
};

export default MyRouter;
