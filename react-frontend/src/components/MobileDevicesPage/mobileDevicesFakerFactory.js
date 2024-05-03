
import { faker } from "@faker-js/faker";
export default (count,RefIds,userIdIds,positionIdIds,roleIdIds,departmentIdIds,mobilenumberidIds,useridIds,companyIdIds,currentMobileNumberIdIds,currentRoleIdIds,currentCompanyIdIds,currentBranchIdIds,currentDepartmentIdIds,fromUserIdIds,toffIds,ccffIds,bccIds,morphidIds,companIdIds,branchIdIds,userIdsIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
mobilenumberid: mobilenumberidIds[i % mobilenumberidIds.length],

        };
        data = [...data, fake];
    }
    return data;
};
