import styled, { css } from 'styled-components';
import { NotificationsNone, Apps, Search, Star } from 'styled-icons/material';
import { Briefcase } from 'styled-icons/fa-solid';

export const LogoutButton = styled.button`
  font-size: 14px;
  border-radius: 8px;
  margin-top: 5px;
  padding: 10px;
  /* box-shadow: 0px 0px 8px 0px #aaaaaa; */
  &:hover {
    cursor: pointer;
  }
`;

export const NavBarContainer = styled.div`
  width: 64px;
  background-color: #ffffff;
  object-fit: contain;
  display: flex;
  flex-direction: column;
  padding: 22px;
  /* height: 100vh; */
  min-height: 100vh;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.09);
  /* border-right: 2px solid rgba(0, 0, 0, 0.05); */
`;

export const AppContainer = styled.div`
  background-color: #fdfdfd;
  display: flex;
`;

const iconCSS = css`
  width: 20px;
  height: 20px;
  color: #3ebcb3;
`;

export const MarginTop = styled.div`
  margin-top: 98px;
`;
export const BagIcon = styled(Briefcase)`
  ${iconCSS}
`;

export const SearchIcon = styled(Search)`
  ${iconCSS}
`;
export const HomeIcon = styled(Apps)`
  ${iconCSS}
`;

export const NavBarIconContainer = styled.div`
  height: 56px;
  cursor: pointer;
`;

export const AppHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 65px;
  padding: 12px 0px;
  top: 0px;
  width: calc(100% - 65px);
  height: 64px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.09);
  background-color: #ffffff;
`;

export const ClientLogo = styled.div`
  margin-left: 100px;
`;

export const RightItemsContainer = styled.div`
  margin-right: 165px;
  display: flex;
`;

export const ClientInitals = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b3e77f;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  border-radius: 50%;
`;
export const BellIconContainer = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  /* padding: 4px 0px; */
`;

export const NotificationIcon = styled(NotificationsNone)`
  margin: 4px 0px;
  width: 32px;
  height: 32px;
  position: absolute;
  color: rgba(0, 0, 0, 0.5);
  /* background-color: green; */
  z-index: 0;
`;

export const NotificationCountContainer = styled.div`
  position: relative;
  top: 2px;
  right: 2px;
  float: right;
  width: 20px;
  height: 20px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.3px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #f25c69;
  border-radius: 50%;
`;

export const ContentContainer = styled.div`
  width: 100%;
  margin: 104px 165px 0px 101px;
`;

export const ContentTitle = styled.div`
  width: 285px;
  height: 48px;
  font-family: Roboto;
  font-size: 36px;
  color: #1d2330;
`;

export const JobViewContainer = styled.div`
  width: 100%;
  height: 88px;
  margin: 24px 0px;
  border-radius: 3px;
  border: solid 1px rgba(29, 35, 48, 0.08);
  background-color: #ffffff;
  padding: 20px 36px 20px 0px;
  display: flex;
  align-items: center;
`;

const getJobStatusColor = (props) => {
  switch (props.jobStatus) {
    case 'revision':
      return '#5ecaf0';
    case 'completed':
      return '#3ebcb3';
    case 'deadline_missed':
      return '#f25c69';
    case 'editorial_review':
      return '#f5a853';
    default:
      return '#5ecaf0';
  }
};

export const JobViewSideLine = styled.div`
  width: 2px;
  height: 84px;
  border: solid 4px ${getJobStatusColor};
`;

export const JobTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 34px;
  width: 35%;
  margin-right: 30px;
`;
export const JobPayColumn = styled.div`
  width: 10%;
  margin-right: 30px;
`;
export const JobPay = styled.div`
  height: 20px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.22;
  letter-spacing: normal;
  color: #1d2330;
`;

export const JobStatusColumn = styled.div`
  width: 20%;
  margin-right: 30px;
`;
export const JobStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  border-radius: 14px;
  background-color: ${getJobStatusColor};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.57;
  color: #ffffff;
`;

export const JobRatingColumn = styled.div`
  width: 15%;
  margin-right: 30px;
`;

export const JobRating = styled.div`
  display: flex;
`;
export const RatingIcon = styled(Star)`
  width: 16px;
  height: 16px;
  object-fit: contain;
  fill: #ffdd6a;
  margin-right: 2px;
`;

export const JobActionColumn = styled.div``;

const getActionBackgroundColor = (props) => {
  switch (props.action.toLowerCase()) {
    case 'revise':
      return '#3ebcb3';
    default:
      return '#ffffff';
  }
};

const getActionTextColor = (props) => {
  switch (props.action.toLowerCase()) {
    case 'revise':
      return '#ffffff';
    default:
      return '#3ebcb3';
  }
};

export const JobActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 124px;
  height: 36px;
  border-radius: 4px;
  text-transform: capitalize;
  border: solid 1px #3ebcb3;
  background-color: ${getActionBackgroundColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.31;
  color: ${getActionTextColor};
  cursor: pointer;
`;

export const JobTitle = styled.span`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  max-width: 380px;
  height: 20px;
  font-size: 16px;
  color: #000000;
`;

export const JobTagsContainer = styled.div`
  display: flex;
  margin-top: 8px;
  height: 20px;
  font-size: 14px;
  line-height: 1.57;
  color: #1d2330;
`;
export const JobTag = styled.div``;

export const TagDivder = styled.div`
  width: 1px;
  height: 10px;
  background-color: #1d2330;
  margin: auto 10px;
`;

export const TagContainer = styled.div`
  display: flex;
`;
