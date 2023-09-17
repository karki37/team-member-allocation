import TeamMemberCard from "./TeamMembersCard";
const TeamMembers = ({ employees, handleEmployeeCardClick, selectedTeam }) => {
  return employees.map((employee) => (
    <teamMemberCard
      handleEmployeeCardClick={handleEmployeeCardClick}
      selectedTeam={selectedTeam}
    />
  ));
};
export default TeamMembers;
